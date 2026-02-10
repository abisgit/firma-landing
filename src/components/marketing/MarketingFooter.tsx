"use client";

import Link from 'next/link';
import { Shield, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function MarketingFooter() {
    const footerSections = [
        {
            title: 'Solutions',
            links: [
                { name: 'Public Sector', href: '#' },
                { name: 'Enterprise Hub', href: '#' },
                { name: 'Security & PKI', href: '#' },
                { name: 'Verifiable Ledger', href: '#' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Documentation', href: '#' },
                { name: 'National Case Studies', href: '#' },
                { name: 'Compliance Guide', href: '#' },
                { name: 'Trust Center', href: '#' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { name: 'About FIRMA', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Ethics Policy', href: '#' },
            ],
        },
    ];

    return (
        <footer className="bg-[#1a365d] pt-32 pb-12 text-white border-t border-white/5">
            <div className="container mx-auto px-10" suppressHydrationWarning>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-20 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-10">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="p-2.5 bg-white rounded-xl transition-all group-hover:scale-110 shadow-lg shadow-white/10">
                                <Shield className="w-6 h-6 text-[#1a365d]" />
                            </div>
                            <span className="text-3xl font-black tracking-tighter text-white">FIRMA</span>
                        </Link>
                        <p className="text-white/40 max-w-sm text-lg leading-relaxed font-medium">
                            The intelligent government agreement and lettering platform. Engineered for sovereignty, transparency, and public trust.
                        </p>
                        <div className="flex items-center gap-5">
                            <Link href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1"><Facebook className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title} className="space-y-8" suppressHydrationWarning>
                            <h4 className="text-sm font-black uppercase tracking-[3px] text-white/30">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-white/60 hover:text-emerald-400 transition-colors font-bold tracking-tight text-sm">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-black uppercase tracking-[2px] text-white/20" suppressHydrationWarning>
                    <p>© 2026 FIRMA NATIONAL PROTOCOL. ALL RIGHTS RESERVED.</p>
                    <div className="flex flex-wrap items-center gap-8" suppressHydrationWarning>
                        <Link href="#" className="hover:text-white transition-colors">Digital Governance Law</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sovereignty Compliance</Link>
                        <Link href="#" className="hover:text-white transition-colors">Transparency Registry</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
