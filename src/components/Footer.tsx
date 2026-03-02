import Link from "next/link";

const footerLinks = [
    {
        title: "Product",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "About", href: "/about" },
            { name: "Pricing", href: "/pricing" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "/about" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Privacy Policy", href: "/privacy" },
        ],
    },
    {
        title: "Community",
        links: [
            { name: "LinkedIn", href: "https://www.linkedin.com/in/beimnetworku" },
            { name: "Instagram", href: "https://www.instagram.com/beimnnet/" },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className="bg-[var(--background-secondary)] border-t border-border-base py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <img
                                    src="/showcase/logo.svg"
                                    alt="Tibebcraft Logo"
                                    className="w-7 h-7 object-contain"
                                />
                            </div>
                            <span className="font-semibold text-2xl tracking-tight text-[var(--foreground)]">Tibebcraft</span>
                        </Link>
                        <p className="text-[var(--secondary-text)] text-sm leading-relaxed max-w-xs">
                            Tibebcraft is for everyone. Fast, powerful, and completely free.
                        </p>
                    </div>

                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-medium text-sm mb-6 uppercase tracking-wider text-[var(--foreground)]">
                                {section.title === "Product" ? "Free" : section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link, lIndex) => (
                                    <li key={lIndex}>
                                        <Link href={link.href} className="text-[var(--secondary-text)] text-sm hover:text-[var(--foreground)] transition-colors ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-border-base flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-secondary-text text-xs">
                        © Tibebcraft. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-secondary-text text-xs hover:text-white">Privacy</Link>
                        <Link href="/terms" className="text-secondary-text text-xs hover:text-white">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
