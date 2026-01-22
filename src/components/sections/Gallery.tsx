"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react";
import { categories, photos, GalleryItem } from "@/data/photos";
import { cn } from "@/lib/utils";

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    const filteredPhotos = selectedCategory === "All"
        ? photos
        : photos.filter(item => item.category === selectedCategory);

    const openLightbox = (item: GalleryItem) => setSelectedItem(item);
    const closeLightbox = () => setSelectedItem(null);

    const navigateGallery = (direction: "prev" | "next") => {
        if (!selectedItem) return;
        const currentIndex = filteredPhotos.findIndex(p => p.id === selectedItem.id);
        const nextIndex = direction === "next"
            ? (currentIndex + 1) % filteredPhotos.length
            : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        setSelectedItem(filteredPhotos[nextIndex]);
    };

    return (
        <section id="gallery" className="py-20 px-4 md:px-12 bg-[#0a0a0a]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-2xl md:text-5xl font-bold mb-4">Selected Works</h2>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm tracking-wider uppercase transition-all border border-transparent",
                                selectedCategory === category
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Masonry Grid */}
            <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                <AnimatePresence>
                    {filteredPhotos.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={item.id}
                            className="relative group break-inside-avoid cursor-pointer overflow-hidden rounded-lg bg-gray-900"
                            onClick={() => openLightbox(item)}
                        >
                            <div className="relative">
                                {/* For videos, show the poster as the main image in the grid */}
                                <img
                                    src={item.type === 'video' ? item.poster : item.src}
                                    alt={item.title}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Play Icon Overlay for Videos */}
                                {item.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30 transition-transform duration-300 group-hover:scale-110">
                                            <Play className="text-white fill-white" size={32} />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col p-4 z-20">
                                <h3 className="text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.category}
                                </p>
                                <div className="mt-4 p-2 bg-white/10 rounded-full backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                    {item.type === 'video' ?
                                        <Play size={20} className="text-white fill-white" /> :
                                        <ZoomIn size={20} className="text-white" />
                                    }
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigateGallery("prev"); }}
                            className="absolute left-2 md:left-10 text-white/50 hover:text-white hover:scale-110 transition-all z-50 p-2 bg-black/20 rounded-full md:bg-transparent"
                        >
                            <ChevronLeft size={32} className="md:w-12 md:h-12" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigateGallery("next"); }}
                            className="absolute right-2 md:right-10 text-white/50 hover:text-white hover:scale-110 transition-all z-50 p-2 bg-black/20 rounded-full md:bg-transparent"
                        >
                            <ChevronRight size={32} className="md:w-12 md:h-12" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            key={selectedItem.id}
                            className="max-w-7xl w-full max-h-[90vh] relative flex items-center justify-center pointer-events-none"
                        >
                            <div className="relative pointer-events-auto shadow-2xl rounded-sm overflow-hidden bg-black">
                                {selectedItem.type === 'video' ? (
                                    <video
                                        src={selectedItem.src}
                                        controls
                                        autoPlay
                                        playsInline
                                        poster={selectedItem.poster}
                                        className="max-w-full max-h-[85vh] w-auto h-auto"
                                    />
                                ) : (
                                    <img
                                        src={selectedItem.src}
                                        alt={selectedItem.title}
                                        className="max-w-full max-h-[85vh] object-contain"
                                    />
                                )}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white pointer-events-none">
                                    <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                                    <p className="text-gray-300">{selectedItem.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
