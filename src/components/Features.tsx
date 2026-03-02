"use client";

import { motion } from "framer-motion";
import { Zap, Code, Terminal, Sparkles, Layout, Cpu } from "lucide-react";

const features = [
    {
        title: "Build Anything using AI",
        description: "Build entire applications from a single natural language prompt. Watch Tibebcraft create for you in real-time.",
        icon: Sparkles,
        color: "from-blue-500/20 to-purple-500/20",
        borderColor: "group-hover:border-blue-500/50",
        shadowColor: "shadow-blue-500/10",
        video: "/showcase/promptimplementaion.mov"
    },
    {
        title: "AI Autocompletion",
        description: "Intelligent AI suggestions that predict your next lines and suggest smart fixes. Built for extreme developer velocity.",
        icon: Zap,
        color: "from-purple-500/20 to-pink-500/20",
        borderColor: "group-hover:border-purple-500/50",
        shadowColor: "shadow-purple-500/10",
        video: "/showcase/autocompletionvid.mov"
    },
    {
        title: "Online IDE with Preview",
        description: "Code and see results instantly with our integrated live preview. A professional-grade editor right in your browser.",
        icon: Layout,
        color: "from-emerald-500/20 to-teal-500/20",
        borderColor: "group-hover:border-emerald-500/50",
        shadowColor: "shadow-emerald-500/10",
        video: "/showcase/Screen Recording 2026-03-02 at 6.50.17 PM.mov"
    },
    {
        title: "GitHub Sync",
        description: "Import and export projects from and to GitHub with a single click. Seamless integration with your existing workflow.",
        icon: Code,
        color: "from-orange-500/20 to-red-500/20",
        borderColor: "group-hover:border-orange-500/50",
        shadowColor: "shadow-orange-500/10",
        image: "/showcase/command-edit.png"
    },
];

export const Features = () => {
    return (
        <section className="py-40 bg-[#0B0E14] px-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">The Future of Coding</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tibebcraft</span> flow.
                    </h2>
                    <p className="text-secondary-text text-xl max-w-2xl mx-auto leading-relaxed">
                        Not just an editor, but a complete AI-first platform designed to amplify your creative potential.
                    </p>
                </div>

                <div className="space-y-40">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24 group`}
                        >
                            {/* Media Side */}
                            <div className="w-full lg:w-3/5 relative">
                                <div className={`absolute -inset-4 bg-gradient-to-br ${feature.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-[2.5rem]`} />
                                <div className={`relative rounded-[2.5rem] border border-border-base bg-[#161B22]/50 p-2 overflow-hidden transition-all duration-700 ${feature.borderColor} ${feature.shadowColor} group-hover:shadow-2xl`}>
                                    <div className="rounded-[1.8rem] overflow-hidden aspect-video bg-black/40">
                                        {feature.video ? (
                                            <video
                                                ref={(el) => { if (el) el.playbackRate = 2.0; }}
                                                src={feature.video}
                                                autoPlay loop muted playsInline
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                            />
                                        ) : (
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                            />
                                        )}
                                    </div>

                                    {/* Floating Elements for "Non-Square" feel */}
                                    <div className="absolute top-8 right-8 w-24 h-24 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0 group-hover:rotate-12">
                                        <feature.icon className="w-10 h-10 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-2/5 flex flex-col items-start">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 border border-white/5 shadow-inner`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-secondary-text text-lg leading-relaxed mb-10">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
