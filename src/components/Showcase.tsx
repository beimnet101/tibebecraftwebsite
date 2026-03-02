"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageSquare, Layout, Code, Terminal } from "lucide-react";

const slides = [
    {
        type: "dashboard",
        title: "Project Dashboard",
        description: "Manage your AI-powered projects with ease.",
    },
    {
        type: "composer",
        title: "AI Composer",
        description: "Build entire features from a single natural language prompt.",
    },
    {
        type: "editor",
        title: "Online IDE with Preview",
        description: "Code, debug, and ship with integrated live preview. Built for modern web apps.",
    }
];

export const Showcase = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-[var(--background)] px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl font-medium mb-6 text-[var(--foreground)] tracking-tight">Experience Tibebcraft</h2>
                        <div className="space-y-6">
                            {slides.map((slide, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSlide(index)}
                                    className={`text-left p-6 rounded-2xl border transition-all duration-300 w-full ${activeSlide === index
                                        ? "bg-[var(--background-secondary)] border-accent/50 shadow-lg"
                                        : "bg-transparent border-transparent hover:border-border-base"
                                        }`}
                                >
                                    <h3 className={`text-lg font-medium mb-2 ${activeSlide === index ? "text-[var(--foreground)]" : "text-[var(--secondary-text)]"}`}>
                                        {slide.title}
                                    </h3>
                                    <p className="text-[var(--secondary-text)] text-sm leading-relaxed">
                                        {slide.description}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-2/3 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-[var(--background)] rounded-3xl border border-border-base shadow-2xl overflow-hidden aspect-[4/3] flex flex-col"
                            >
                                {/* Mockup UI based on user's screenshots */}
                                <div className="flex items-center gap-4 px-6 py-4 border-b border-border-base bg-[var(--background-secondary)]">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                    </div>
                                    <div className="text-xs text-[var(--secondary-text)] font-mono truncate">
                                        {slides[activeSlide].type === "editor" ? "tibebcraft — Online IDE with Preview" : "tibebcraft — Dashboard"}
                                    </div>
                                </div>

                                <div className="flex-1 bg-[var(--background)] relative flex items-center justify-center overflow-hidden">
                                    {/* 
                                      TIYP: To use your actual videos or screenshots:
                                      1. Place them in /public/showcase/
                                      2. Replace the content inside the activeSlide blocks with <video> or <img> tags.
                                    */}
                                    {activeSlide === 0 && (
                                        <div className="w-full h-full relative">
                                            <img src="/showcase/landingpage2.png" alt="Dashboard" className="w-full h-full object-cover" />
                                        </div>
                                    )}

                                    {activeSlide === 1 && (
                                        <div className="w-full h-full relative bg-black">
                                            <video
                                                ref={(el) => {
                                                    if (el) el.playbackRate = 2.0;
                                                }}
                                                src="/showcase/feature-prompt.mov"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    )}

                                    {activeSlide === 2 && (
                                        <div className="w-full h-full relative bg-black">
                                            <video
                                                ref={(el) => { if (el) el.playbackRate = 2.0; }}
                                                src="/showcase/feature-editor.mov"
                                                autoPlay loop muted playsInline
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Glow effect for each slide */}
                                {activeSlide === 1 && (
                                    <div className="absolute inset-0 bg-accent/5 blur-3xl -z-10" />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
