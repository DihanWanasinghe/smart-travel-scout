export interface DestinationImage {
    id: number;
    imageUrl: string;
}

// The Image URLs are seperated from the inventory to keep it seperate from the assessment data 
// even thought the content in here can be combined with the content in inventory.tsx

export const destinationImages: DestinationImage[] = [
    {
        // Nuwara Eliya (Tea Plantations)
        id: 1,
        imageUrl: "/Destinations/nuwara-eliya.jpg"
    },
    {
        // Galle Fort (Colonial Coast / Lighthouse)
        id: 2,
        imageUrl: "/Destinations/galle-fort.jpg"
    },
    {
        // Yala (Leopard / Wildlife)
        id: 3,
        imageUrl: "/Destinations/yala.jpg"
    },
    {
        // Arugam Bay (Surfing / Beach)
        id: 4,
        imageUrl: "/Destinations/arugum-bay.jpg"
    },
    {
        // Sigiriya (Lion Rock / Fortress)
        id: 5,
        imageUrl: "/Destinations/sigiriya.jpg"
    }
];
