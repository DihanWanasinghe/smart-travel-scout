import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import { inventory } from "@/data/inventory";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const ResponseSchema = z.object({
    matches: z.array(
        z.object({
            id: z.number(),
            reason: z.string()
        })
    )
});

export async function POST(req: Request) {
    const body = await req.json();
    const { query } = body;

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    const prompt = `
You are a travel matching assistant.

You MUST ONLY return items from the provided inventory.
DO NOT invent new destinations.
DO NOT suggest anything outside the list.

Return ONLY valid JSON in this format:
{
  "matches": [
    { "id": number, "reason": string }
  ]
}

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
        const finalResults = safeMatches.map(match => {
            const item = inventory.find(i => i.id === match.id);

            return {
                ...item,
                reason: match.reason
            };
        });

        return NextResponse.json({ results: finalResults });
    } catch (error) {
        console.error("Search error:", error);
        return NextResponse.json({ error: "Invalid AI response" },
            { status: 500 });
    }
}