import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-white selection:text-black bg-[var(--background)]">
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
