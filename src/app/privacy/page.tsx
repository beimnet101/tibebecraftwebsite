import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-accent selection:text-white">
            <Navbar />
            <div className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-medium mb-12 text-[var(--foreground)]">Privacy Policy</h1>
                <div className="space-y-6 text-[var(--secondary-text)] leading-relaxed">
                    <p>Last updated: March 2026</p>
                    <p>Your privacy is important to us. It is Tibebcraft's policy to respect your privacy regarding any information we may collect from you across our website.</p>
                    <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
                    <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                    <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
