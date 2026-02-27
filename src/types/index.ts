export interface MatchReason {
    icon: string;
    title: string;
    description: string;
}

/**
 * Centralized Type Definitions
 * 
 * Why centralize?
 * To ensure the backend AI payload structurally matches what the React components (like DestinationCard) expect.
 * This prevents drift where the AI might return `match_reason` while the UI expects `reason`.
 */

export interface Destination {
    id: number;
    title: string;
    location: string;
    price: number;
    tags: string[];
}

export interface SearchResult extends Destination {
    imageUrl: string;
    reason: string;
    matchedTags: string[];
}
