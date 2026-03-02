"use client";

import { motion } from "framer-motion";

const logos = [
    { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "OpenAI", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Linear", url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Linear_Logo_v2.svg" },
    { name: "Datadog", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Datadog_logo.svg" },
    { name: "NVIDIA", url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
    { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "Adobe", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_logo.svg" },
];

export const LogoCloud = () => {
    return (
        <section className="py-20 bg-[var(--background-secondary)] border-y border-border-base/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-secondary-text text-sm font-medium tracking-[0.2em] uppercase mb-12 opacity-80">
                    Trusted every day by teams that build world-class software
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 lg:gap-x-20">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 0.5, y: 0 }}
                            whileHover={{ opacity: 1, scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="h-8 md:h-10 grayscale invert brightness-0 transition-all cursor-pointer"
                        >
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="h-full w-auto object-contain opacity-80"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
