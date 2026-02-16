"use client";

import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import { Stethoscope, ShieldCheck, FileText, Heart, Activity, ClipboardList, Database } from 'lucide-react';
import Link from 'next/link';

export default function HealthcareSolution() {
    return (
        <div className="bg-white selection:bg-[#1a365d] selection:text-white">
            <MarketingNavbar />

            <main className="pt-32">
                {/* Hero Section */}
                <section className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-600 text-[10px] font-extrabold uppercase tracking-widest">
                                <Stethoscope className="w-4 h-4" />
                                Secure Healthcare Systems
                            </div>
                            <h1 className="text-6xl font-extrabold text-[#1a365d] tracking-tighter leading-[1.05]">
                                Connected Health <br />
                                <span className="text-emerald-500">Secured by FIRMA.</span>
                            </h1>
                            <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-xl">
                                Facilitating secure patient record exchange and verifiable communication between hospitals, pharmacies, and regulatory bodies.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/request-access" className="bg-[#1a365d] text-white px-8 py-4 rounded-2xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#2c5282] transition-all shadow-xl shadow-blue-900/20">
                                    Request Access
                                </Link>
                            </div>
                        </div>
                        <div className="relative aspect-video bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src="/Healthcare Solution Image.jpg"
                                alt="Healthcare Solution"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="bg-gray-50 py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20 space-y-4">
                            <h2 className="text-4xl font-extrabold text-[#1a365d] uppercase tracking-tighter">Healthcare Integrity</h2>
                            <p className="text-gray-500 font-medium">Protecting sensitive medical records with cryptographic certainty.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'Verifiable Referrals', desc: 'Secure, tamper-proof patient referral letters between primary and specialist care.', icon: ClipboardList },
                                { title: 'Regulatory Compliance', desc: 'Automated digital reporting to health ministries and insurance providers.', icon: Activity },
                                { title: 'Identity Verification', desc: 'Secure verification of medical practitioner licenses and institutional roles.', icon: Database },
                            ].map((service, i) => (
                                <div key={i} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                        <service.icon className="w-8 h-8 text-emerald-600 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-[#1a365d] mb-4 uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-square bg-gray-50 rounded-[64px] overflow-hidden order-last lg:order-first">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest">
                                <img
                                    src="/Medical Data Security Image.jpg"
                                    alt="Healthcare Solution"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-5xl font-extrabold text-[#1a365d] tracking-tighter text-secondary">Zero-Trust Medical Communication.</h2>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium">
                                In healthcare, data integrity is a matter of life and death. FIRMA provides the layer of trust needed for a fully digital health ecosystem.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Encrypted Inter-Hospital Messaging',
                                    'Pharmacy Prescription Verification',
                                    'Medical Certificate Authenticity',
                                    'Blockchain Audit Trails'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-[#1a365d] font-bold">
                                        <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                                            <Heart className="w-3.5 h-3.5" />
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
