"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-4 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <img
                        src="https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=800&auto=format&fit=crop"
                        alt="Photographer"
                        className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover shadow-2xl"
                    />
                    {/* Decorative frame */}
                    <div className="absolute -inset-4 border border-white/10 rounded-2xl -z-10 translate-x-4 translate-y-4" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                    <h2 className="text-2xl md:text-4xl font-bold mb-6">Behind the Lens</h2>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                        I am a visual storyteller driven by the desire to capture the raw emotions and fleeting moments that define our lives. With over a decade of experience, I've learned that the best photos aren't just seen—they're felt.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        My approach balances technical precision with artistic intuition, ensuring every shot tells a unique narrative. Whether it's the quiet intimate moments of a wedding or the chaotic beauty of an urban landscape, I'm there to document it all.
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/10 flex gap-8">
                        <div>
                            <span className="block text-3xl font-bold text-white">10+</span>
                            <span className="text-sm text-gray-400 uppercase tracking-wider">Years Exp</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-white">500+</span>
                            <span className="text-sm text-gray-400 uppercase tracking-wider">Projects</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
