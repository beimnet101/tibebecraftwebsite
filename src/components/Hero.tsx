"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6 bg-clip-text text-white">
                        The AI Code Editor
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text max-w-2xl mx-auto mb-10 leading-relaxed">
                        Built to make you 10x more productive, Tibebcraft is the best way to code with AI.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="https://tibebcraft.vercel.app/"
                            target="_blank"
                            className="bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:bg-white/90 transition-all flex items-center gap-2 group shadow-xl shadow-white/10"
                        >
                            Try Tibebcraft Online <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative max-w-6xl mx-auto mt-20"
                >
                    <div className="bg-[#0B0E14] rounded-3xl overflow-hidden shadow-2xl border border-border-base aspect-video flex flex-col relative group">
                        {/* 
              PRIMARY LANDING MEDIA:
              To use your 'landing.png' or 'landing.mov', ensure it is in the 'public' folder.
            */}
                        <div className="absolute inset-0 z-0">
                            {/* Using your 'landingpage.png' */}
                            <img
                                src="/showcase/landingpage.png"
                                alt="Tibebcraft Landing"
                                className="w-full h-full object-cover z-10 relative"
                            />

                            {/* Optional: Add a video overlay if you want to use a recording instead later */}
                            {/* <video src="/showcase/Screen Recording 2026-03-02 at 7.01.37 PM.mov" autoPlay loop muted playsInline className="w-full h-full object-cover z-10 relative" /> */}
                        </div>

                        {/* Mockup Overlay for a polished look */}
                        <div className="relative z-20 flex items-center gap-4 px-6 py-4 border-b border-white/5 bg-black/40 backdrop-blur-md">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="text-xs text-gray-400 font-mono">tibebcraft.com</div>
                        </div>
                    </div>

                    {/* Intense glow effect */}
                    <div className="absolute -inset-10 bg-blue-500/10 blur-3xl -z-10 opacity-30" />
                </motion.div>
            </div>
        </section>
    );
};
