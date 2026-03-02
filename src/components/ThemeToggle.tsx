"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full border border-[var(--border-base)] bg-[var(--background-secondary)] opacity-20" />
        );
    }

    return (
        <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-[var(--border-base)] bg-[var(--background)] hover:bg-[var(--background-secondary)] shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <motion.div
                    initial={false}
                    animate={{
                        rotate: theme === "dark" ? 0 : 90,
                        scale: theme === "dark" ? 1 : 0,
                        opacity: theme === "dark" ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                    className="absolute inset-0"
                >
                    <Moon className="w-5 h-5 text-accent" />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{
                        rotate: theme === "dark" ? -90 : 0,
                        scale: theme === "dark" ? 0 : 1,
                        opacity: theme === "dark" ? 0 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                    className="absolute inset-0"
                >
                    <Sun className="w-5 h-5 text-accent" />
                </motion.div>
            </div>
        </motion.button>
    );
}
