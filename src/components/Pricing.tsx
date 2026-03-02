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
        <section className="py-24 bg-[#0B0E14] px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight text-white leading-tight">
                        Tibebcraft is for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">everyone.</span>
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-md mx-auto p-12 rounded-[2.5rem] border border-blue-500/30 bg-[#161B22]/50 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
                >
                    <div className="mb-10 text-center">
                        <div className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">Standard Plan</div>
                        <div className="text-7xl font-semibold text-white mb-2">Free</div>
                    </div>

                    <div className="space-y-5 mb-12 text-left">
                        {freeFeatures.map((feature, fIndex) => (
                            <div key={fIndex} className="flex gap-4 items-center group">
                                <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors duration-300">
                                    <Check className="w-4 h-4 text-blue-400 group-hover:text-white" />
                                </div>
                                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="https://tibebcraft.vercel.app/"
                        target="_blank"
                        className="w-full py-5 bg-white text-black rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-white/5 flex items-center justify-center"
                    >
                        Start Coding Now
                    </Link>

                </motion.div>
            </div>
        </section>
    );
};
