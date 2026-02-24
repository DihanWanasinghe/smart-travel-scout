export interface MatchReason {
    icon: string;
    title: string;
    description: string;
}

export interface Destination {
    id: string;
    title: string;
    country: string;
    price: number;
    rating: number;
    reviews: string;
    imageUrl: string;
    imageAlt: string;
    matchReasons: MatchReason[];
    avatars: string[];
    additionalFriends: number;
}
