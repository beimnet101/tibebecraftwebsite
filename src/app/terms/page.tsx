import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#0B0E14] text-white">
            <Navbar />
            <div className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-medium mb-12">Terms of Service</h1>
                <div className="space-y-6 text-secondary-text leading-relaxed">
                    <p>Last updated: March 2026</p>
                    <p>By using Tibebcraft, you agree to these terms. Tibebcraft is provided "as is" without any warranties.</p>
                    <p>We reserve the right to modify or terminate the service for any reason, without notice at any time.</p>
                    <p>Your use of the service is at your sole risk.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
