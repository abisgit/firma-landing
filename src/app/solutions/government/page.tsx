"use client";

import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import { Landmark, ShieldCheck, FileText, ArrowRight, Zap, Globe, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function GovernmentSolution() {
    return (
        <div className="bg-white selection:bg-[#1a365d] selection:text-white">
            <MarketingNavbar />

            <main className="pt-32">
                {/* Hero Section */}
                <section className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a365d]/5 rounded-full text-[#1a365d] text-[10px] font-extrabold uppercase tracking-widest text-primary">
                                <Landmark className="w-4 h-4" />
                                Public Sector Excellence
                            </div>
                            <h1 className="text-6xl font-extrabold text-[#1a365d] tracking-tighter leading-[1.05]">
                                Digital Governance <br />
                                <span className="text-blue-600">at Sovereign Scale.</span>
                            </h1>
                            <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-xl">
                                FIRMA empowers ministries, agencies, and regional administrations with a secure, verifiable, and unified digital lettering protocol.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/request-access" className="bg-[#1a365d] text-white px-8 py-4 rounded-2xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#2c5282] transition-all shadow-xl shadow-blue-900/20">
                                    Iniate Program
                                </Link>
                            </div>
                        </div>
                        <div className="relative aspect-video bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl">
                            {/* Placeholder for government image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest">
                                <img
                                    src="/Government & Public Sector Image.jpg"
                                    alt="Healthcare Solution"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                {/* [ Government & Public Sector Image ] */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="bg-gray-50 py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20 space-y-4">
                            <h2 className="text-4xl font-extrabold text-[#1a365d] uppercase tracking-tighter">Institutional Capabilities</h2>
                            <p className="text-gray-500 font-medium">Built for the complexity of national administration.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'Ministerial Workflows', desc: 'End-to-end digitization of internal and external ministerial correspondence.', icon: FileText },
                                { title: 'Blockchain Verification', desc: 'Every official document is anchored to a permissioned ledger for immutable proof.', icon: ShieldCheck },
                                { title: 'Hierarchical Approval', desc: 'Customizable clearance chains reflecting your institutional structure.', icon: Zap },
                            ].map((service, i) => (
                                <div key={i} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="w-16 h-16 bg-[#1a365d]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1a365d] group-hover:text-white transition-all">
                                        <service.icon className="w-8 h-8 text-[#1a365d] group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-[#1a365d] mb-4 uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Infrastructure Section */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-square bg-gray-50 rounded-[64px] overflow-hidden">
                            {/* Placeholder for infrastructure image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest">
                                <img
                                    src="/Digital Infrastructure Image.jpg"
                                    alt="Healthcare Solution"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                {/* [ Digital Infrastructure Image ] */}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-5xl font-extrabold text-[#1a365d] tracking-tighter">Unified Digital Public Infrastructure.</h2>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium">
                                FIRMA acts as a central nervous system for institutional communication, ensuring that every agency speaks the same digital language—securely.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Inter-Ministerial Interoperability',
                                    'Regional Administration Handshakes',
                                    'National Archiving Standards',
                                    'High-Security PKI Integration'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-[#1a365d] font-bold">
                                        <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                                            <ShieldCheck className="w-3.5 h-3.5" />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <MarketingFooter />
        </div>
    );
}
