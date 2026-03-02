"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border-base)] py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <img
                            src="/showcase/logo.svg"
                            alt="Tibebcraft Logo"
                            className="w-7 h-7 object-contain"
                        />
                    </div>
                    <span className="font-semibold text-2xl tracking-tight text-[var(--foreground)] group-hover:text-accent transition-colors duration-300">Tibebcraft</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/blog" className="text-sm font-medium text-[var(--secondary-text)] hover:text-[var(--foreground)] transition-colors">Blog</Link>
                    <Link href="/pricing" className="text-sm font-medium text-[var(--secondary-text)] hover:text-[var(--foreground)] transition-colors">Pricing</Link>
                    <Link href="/about" className="text-sm font-medium text-[var(--secondary-text)] hover:text-[var(--foreground)] transition-colors">About</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="https://tibebcraft.vercel.app/"
                        target="_blank"
                        className="bg-[var(--foreground)] text-[var(--background)] px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all shadow-lg shadow-black/5"
                    >
                        Try Online
                    </Link>
                </div>
            </div>
        </motion.header>
    );
};
