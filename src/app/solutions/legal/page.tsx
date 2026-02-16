"use client";

import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import { Scale, ShieldCheck, FileText, Gavel, FolderLock, FileCheck, Landmark } from 'lucide-react';
import Link from 'next/link';

export default function LegalSolution() {
    return (
        <div className="bg-white selection:bg-[#1a365d] selection:text-white">
            <MarketingNavbar />

            <main className="pt-32">
                {/* Hero Section */}
                <section className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-[#1a365d] text-[10px] font-extrabold uppercase tracking-widest">
                                <Scale className="w-4 h-4" />
                                Legal Tech Integrity
                            </div>
                            <h1 className="text-6xl font-extrabold text-[#1a365d] tracking-tighter leading-[1.05]">
                                Immutable Legal <br />
                                <span className="text-blue-700">Digital Custody.</span>
                            </h1>
                            <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-xl">
                                FIRMA provides a tamper-proof protocol for court documents, legal notices, and case files, ensuring absolute authenticity for the judiciary and legal professionals.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/request-access" className="bg-[#1a365d] text-white px-8 py-4 rounded-2xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#2c5282] transition-all shadow-xl shadow-blue-900/20">
                                    Request Access
                                </Link>
                            </div>
                        </div>
                        <div className="relative aspect-video bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest">
                                <img
                                    src="/Legal Solution Image.jpg"
                                    alt="Legal Solution"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                {/* <img
                                src="/Healthcare Solution Image.jpg"
                                alt="Healthcare Solution"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            /> */}
                                {/* [ Legal Solution Image ] */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="bg-gray-50 py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20 space-y-4">
                            <h2 className="text-4xl font-extrabold text-[#1a365d] uppercase tracking-tighter">Judicial Verifiability</h2>
                            <p className="text-gray-500 font-medium">Tamper-proof infrastructure for modern legal systems.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'Court E-Filing', desc: 'Securely issue and verify court orders and filings with cryptographic timestamps.', icon: Gavel },
                                { title: 'Chain of Custody', desc: 'Immutable tracking of document access and modifications for evidentiary integrity.', icon: FolderLock },
                                { title: 'Notary Services', desc: 'Digital notarization of official documents with blockchain-backed authenticity.', icon: FileCheck },
                            ].map((service, i) => (
                                <div key={i} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1a365d] group-hover:text-white transition-all">
                                        <service.icon className="w-8 h-8 text-[#1a365d] group-hover:text-white" />
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
                        <div className="relative aspect-square bg-gray-50 rounded-[64px] overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest">
                                <img
                                    src="/Courthouse Image.jpg"
                                    alt="Courthouse"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                {/* [ Courthouse Image ] */}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-5xl font-extrabold text-[#1a365d] tracking-tighter">Certainty in Every Motion.</h2>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium">
                                FIRMA’s legal protocol ensures that every subpoena, summons, and judgment is verifiable instantly by the public and legal entities, reducing fraud in the judicial process.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Secure Inter-Law Firm Communication',
                                    'Authentic Public Notices & Gazettes',
                                    'Permissioned Document Access Control',
                                    'Blockchain-Based Legal Timestamps'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-[#1a365d] font-bold">
                                        <div className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center text-white">
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
