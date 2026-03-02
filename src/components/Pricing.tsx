"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const freeFeatures = [
    "Unlimited AI Completions",
    "Full IDE with Live Preview",
    "AI Builder (Prompt to App)",
    "GitHub Sync (Import/Export)"
];

export const Pricing = () => {
    return (
        <section className="py-24 bg-[var(--background)] px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight text-[var(--foreground)] leading-tight">
                        Tibebcraft is for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent">everyone.</span>
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-md mx-auto p-12 rounded-[2.5rem] border border-accent/20 bg-[var(--background-secondary)] backdrop-blur-xl shadow-2xl shadow-accent/5"
                >
                    <div className="mb-10 text-center">
                        <div className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Standard Plan</div>
                        <div className="text-7xl font-semibold text-[var(--foreground)] mb-2">Free</div>
                    </div>

                    <div className="space-y-5 mb-12 text-left">
                        {freeFeatures.map((feature, fIndex) => (
                            <div key={fIndex} className="flex gap-4 items-center group">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                                    <Check className="w-4 h-4 text-accent group-hover:text-white" />
                                </div>
                                <span className="text-[var(--secondary-text)] transition-colors duration-300 group-hover:text-[var(--foreground)]">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="https://tibebcraft.vercel.app/"
                        target="_blank"
                        className="w-full py-5 bg-[var(--foreground)] text-[var(--background)] rounded-2xl font-bold text-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-black/5 flex items-center justify-center"
                    >
                        Start Coding Now
                    </Link>

                </motion.div>
            </div>
        </section>
    );
};
