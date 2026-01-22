"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 md:px-12 flex justify-center items-center min-h-[70vh] relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/50 pointer-events-none" />

            <div className="w-full max-w-2xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-5xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-400">Let's create something beautiful together.</p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative group">
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-0 top-3 text-gray-400 cursor-text transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white"
                            >
                                Name
                            </label>
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-3 text-gray-400 cursor-text transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white"
                            >
                                Email
                            </label>
                        </div>
                    </div>

                    <div className="relative group">
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer resize-none"
                            placeholder=" "
                            required
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-3 text-gray-400 cursor-text transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white"
                        >
                            Message
                        </label>
                    </div>

                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium tracking-wide rounded-full overflow-hidden transition-transform active:scale-95 hover:bg-gray-200"
                        >
                            <span className="mr-2">Send Message</span>
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
