export const categories = ["All", "Wedding", "Nature", "Urban", "Portrait"];

export type Photo = {
    id: string;
    src: string;
    category: string;
    title: string;
    height: number; // Aspect ratio height (relative) or actual pixel height
};

export const photos: Photo[] = [
    {
        id: "1",
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
        category: "Wedding",
        title: "Eternal Vows",
        height: 400,
    },
    {
        id: "2",
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
        category: "Nature",
        title: "Misty Mountains",
        height: 300,
    },
    {
        id: "3",
        src: "https://images.unsplash.com/photo-1449824913929-22cb19c40066?q=80&w=800&auto=format&fit=crop",
        category: "Urban",
        title: "City Lights",
        height: 500,
    },
    {
        id: "4",
        src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
        category: "Portrait",
        title: "Soulful Gaze",
        height: 450,
    },
    {
        id: "5",
        src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800&auto=format&fit=crop",
        category: "Wedding",
        title: "First Dance",
        height: 350,
    },
    {
        id: "6",
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop",
        category: "Nature",
        title: "Green Valley",
        height: 300,
    },
    {
        id: "7",
        src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop",
        category: "Urban",
        title: "New York Streets",
        height: 550,
    },
    {
        id: "8",
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        category: "Portrait",
        title: "Elegance",
        height: 400,
    },
    {
        id: "9",
        src: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=800&auto=format&fit=crop",
        category: "Nature",
        title: "Autumn Leaves",
        height: 350,
    },
];
