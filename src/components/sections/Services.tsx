"use client";

import { motion } from "framer-motion";
import { Camera, Users, Building, Video } from "lucide-react";

const services = [
    {
        icon: Users,
        title: "Portrait & Lifestyle",
        description: "Capturing the essence of personality in every frame. Perfect for individuals, couples, and branding.",
        price: "From $300"
    },
    {
        icon: Camera,
        title: "Weddings & Events",
        description: "Documenting your special day with a cinematic touch. Unobtrusive coverage of every emotional moment.",
        price: "From $1,500"
    },
    {
        icon: Building,
        title: "Commercial & Editorial",
        description: "High-end imagery for brands, products, and visual campaigns that demand attention.",
        price: "Custom Quote"
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-4 md:px-12 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-5xl font-bold mb-4">Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tailored photography packages designed to meet your specific needs with uncompromising quality.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-neutral-900/50 border border-white/5 p-8 rounded-xl hover:bg-neutral-800/50 transition-colors group cursor-default"
                        >
                            <div className="mb-6 inline-block p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                                <service.icon size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                            <div className="text-lg font-medium text-white/90 border-t border-white/10 pt-4">
                                {service.price}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
