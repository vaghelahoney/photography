"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 md:py-6 py-4 px-4 md:px-12 flex justify-between items-center h-20">
            {/* Background Layer */}
            <div
                className={cn(
                    "absolute inset-0 transition-all duration-300 -z-10",
                    scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
                )}
            />

            <div className="text-2xl font-bold tracking-widest uppercase z-50 relative">
                Lumina
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 z-50 relative">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium tracking-wide hover:text-gray-400 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-50 relative"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, height: '100vh', width: '100vw' }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-light tracking-widest hover:text-gray-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
