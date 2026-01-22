export const categories = ["All", "Wedding", "Nature", "Urban", "Portrait", "Films"];

export type GalleryItem = {
    id: string;
    src: string;
    category: string;
    title: string;
    height: number; // Aspect ratio height (relative) or actual pixel height
    type: "image" | "video";
    poster?: string; // For video thumbnail
};

export const photos: GalleryItem[] = [
    {
        id: "1",
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
        category: "Wedding",
        title: "Eternal Vows",
        height: 400,
        type: "image",
    },
    {
        id: "2",
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
        category: "Nature",
        title: "Misty Mountains",
        height: 300,
        type: "image",
    },
    {
        id: "3",
        src: "https://images.unsplash.com/photo-1449824913929-22cb19c40066?q=80&w=800&auto=format&fit=crop",
        category: "Urban",
        title: "City Lights",
        height: 500,
        type: "image",
    },
    {
        id: "4",
        src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
        category: "Portrait",
        title: "Soulful Gaze",
        height: 450,
        type: "image",
    },
    {
        id: "5",
        src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
        category: "Wedding",
        title: "First Dance",
        height: 350,
        type: "image",
    },
    {
        id: "6",
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop",
        category: "Nature",
        title: "Green Valley",
        height: 300,
        type: "image",
    },
    {
        id: "7",
        src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop",
        category: "Urban",
        title: "New York Streets",
        height: 550,
        type: "image",
    },
    {
        id: "8",
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        category: "Portrait",
        title: "Elegance",
        height: 400,
        type: "image",
    },
    {
        id: "9",
        src: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=800&auto=format&fit=crop",
        category: "Nature",
        title: "Autumn Leaves",
        height: 350,
        type: "image",
    },
    {
        id: "10",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        category: "Films",
        title: "Cinematic Journey",
        height: 400,
        type: "video",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "11",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        category: "Films",
        title: "Urban Rhythms",
        height: 400,
        type: "video",
        poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "12",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        category: "Films",
        title: "Into the Wild",
        height: 400,
        type: "video",
        poster: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=800&auto=format&fit=crop"
    }
];
