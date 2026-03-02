import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-accent selection:text-white">
            <Navbar />
            <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
                <h1 className="text-6xl font-medium mb-8 text-[var(--foreground)]">Blog</h1>
                <p className="text-[var(--secondary-text)] text-xl max-w-2xl mx-auto mb-16">
                    Latest updates and stories from the Tibebcraft team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group p-8 rounded-3xl border border-[var(--border-base)] bg-[var(--background-secondary)] hover:border-accent/30 transition-all">
                            <div className="h-48 bg-black/40 rounded-2xl mb-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-accent/5 blur-xl group-hover:bg-accent/10 transition-all" />
                            </div>
                            <div className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Update</div>
                            <h3 className="text-2xl font-medium mb-3 group-hover:text-accent transition-colors">Tibebcraft v0.1 Launch</h3>
                            <p className="text-[var(--secondary-text)] leading-relaxed">Introducing the first version of Tibebcraft, the AI-first IDE built for elite velocity.</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
