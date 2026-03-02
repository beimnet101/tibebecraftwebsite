import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-accent selection:text-white">
            <Navbar />
            <div className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
                <h1 className="text-6xl font-medium mb-12 text-[var(--foreground)]">Building the future of software construction.</h1>
                <div className="space-y-8 text-xl text-[var(--secondary-text)] leading-relaxed">
                    <p>
                        Tibebcraft is an AI-first code editor, built to make you 10x more productive.
                        We believe that the future of coding lies in the seamless collaboration between human creativity and artificial intelligence.
                    </p>
                    <p>
                        Our mission is to build tools that amplify your creative potential, allowing you to focus on the "what" while we help you with the "how".
                    </p>
                    <p>
                        Tibebcraft is currently in its early stages, and we're excited to have you join us on this journey.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
