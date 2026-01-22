"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { categories, photos, Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

    const filteredPhotos = selectedCategory === "All"
        ? photos
        : photos.filter(photo => photo.category === selectedCategory);

    const openLightbox = (photo: Photo) => setSelectedPhoto(photo);
    const closeLightbox = () => setSelectedPhoto(null);

    const navigatePhoto = (direction: "prev" | "next") => {
        if (!selectedPhoto) return;
        const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
        const nextIndex = direction === "next"
            ? (currentIndex + 1) % filteredPhotos.length
            : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        setSelectedPhoto(filteredPhotos[nextIndex]);
    };

    return (
        <section id="gallery" className="py-20 px-6 md:px-12 bg-[#0a0a0a]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Works</h2>
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
                    {filteredPhotos.map((photo) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={photo.id}
                            className="relative group break-inside-avoid cursor-pointer overflow-hidden rounded-lg bg-gray-900"
                            onClick={() => openLightbox(photo)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col p-4">
                                <h3 className="text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {photo.title}
                                </h3>
                                <p className="text-gray-300 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {photo.category}
                                </p>
                                <div className="mt-4 p-2 bg-white/10 rounded-full backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                    <ZoomIn size={20} className="text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigatePhoto("prev"); }}
                            className="absolute left-4 md:left-10 text-white/50 hover:text-white hover:scale-110 transition-all hidden md:block"
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigatePhoto("next"); }}
                            className="absolute right-4 md:right-10 text-white/50 hover:text-white hover:scale-110 transition-all hidden md:block"
                        >
                            <ChevronRight size={48} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            key={selectedPhoto.id}
                            className="max-w-5xl max-h-[85vh] relative"
                        >
                            <img
                                src={selectedPhoto.src}
                                alt={selectedPhoto.title}
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <h3 className="text-2xl font-bold">{selectedPhoto.title}</h3>
                                <p className="text-gray-300">{selectedPhoto.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
