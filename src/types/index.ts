export interface MatchReason {
    icon: string;
    title: string;
    description: string;
}

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
