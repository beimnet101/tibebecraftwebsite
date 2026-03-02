import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#0B0E14] text-white selection:bg-white selection:text-black">
            <Navbar />
            <div className="pt-20">
                <Pricing />
            </div>
            <Footer />
        </main>
    );
}
