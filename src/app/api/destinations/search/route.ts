import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import { inventory } from "@/data/inventory";
import { destinationImages } from "@/data/destinationImages";
import { SearchResult } from "@/types";
import { rateLimit } from "@/lib/rate-limit";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const ResponseSchema = z.object({
    matches: z.array(
        z.object({
            id: z.number(),
            reason: z.string(),
            matchedTags: z.array(z.string())
        })
    )
});


// Initialize the rate limiter with 5 requests per minute
const limiter = rateLimit({
    limit: 5,
    windowMs: 60 * 1000,
});

export async function POST(req: Request) {
    // 1. Rate Limiting Check
    try {
        await limiter(req);
    } catch (error) {
        return NextResponse.json(
            { error: "Too many requests, please try again later." },
            { status: 429 }
        );
    }

    // 2. Parse Body and Generate
    const body = await req.json();
    const { query } = body;

    const model = genAI.getGenerativeModel({
        model: "gemini-3-flash-preview", // This points to the latest stable 2.0 Flash model
    });
    const prompt = `
You are a travel matching assistant.

You MUST ONLY return items from the provided inventory.
DO NOT invent new destinations.
DO NOT suggest anything outside the list.

CRITICAL INSTRUCTION:
If the user's request specifies a location, city, country, or core intent that fundamentally does not exist in the inventory (for example, asking for "Florence" when only Sri Lankan destinations are available), you MUST return an empty array [] for "matches". 
Do NOT return partial matches just because a single word (like "history") aligns with a tag, if the location or primary subject of the request is completely different.

Return ONLY valid JSON in this format:
{
  "matches": [
    { "id": number, "reason": string, "matchedTags": [string] }
  ]
}

For matchedTags, ONLY include the exact tags from the corresponding inventory item's "tags" array that explicitly match the user's request.

User request:
${query}

Inventory:
${JSON.stringify(inventory)} `;

    try {
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        const cleaned = responseText
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();
        const parsed = ResponseSchema.parse(JSON.parse(cleaned));
        const validIds = inventory.map(item => item.id);

        const safeMatches = parsed.matches.filter(match =>
            validIds.includes(match.id)
        );
        const finalResults: SearchResult[] = safeMatches.map(match => {
            const item = inventory.find(i => i.id === match.id)!;
            const imageItem = destinationImages.find(img => img.id === match.id);

            return {
                ...item,
                imageUrl: imageItem ? imageItem.imageUrl : "",
                reason: match.reason,
                matchedTags: match.matchedTags
            };
        });

        console.log(finalResults);

        return NextResponse.json({ results: finalResults });
    } catch (error) {
        console.error("Search error:", error);
        return NextResponse.json({ error: "Invalid AI response" },
            { status: 500 });
    }
}