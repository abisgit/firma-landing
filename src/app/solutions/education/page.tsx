"use client";

import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import { GraduationCap, ShieldCheck, FileStack, BookOpen, Award, CheckCircle, GraduationCap as GradIcon } from 'lucide-react';
import Link from 'next/link';

export default function EducationSolution() {
    return (
        <div className="bg-white selection:bg-[#1a365d] selection:text-white">
            <MarketingNavbar />

            <main className="pt-32">
                {/* Hero Section */}
                <section className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-[10px] font-extrabold uppercase tracking-widest">
                                <GraduationCap className="w-4 h-4" />
                                Future-Proof Education
                            </div>
                            <h1 className="text-6xl font-extrabold text-[#1a365d] tracking-tighter leading-[1.05]">
                                Verified Academic <br />
                                <span className="text-blue-500">Records & Credentials.</span>
                            </h1>
                            <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-xl">
                                Eliminate credential fraud with FIRMA’s digital certificate and academic record verification system optimized for schools and universities.
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
                                    src="/Education Solution Image.jpg"
                                    alt="Healthcare Solution"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="bg-gray-50 py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20 space-y-4">
                            <h2 className="text-4xl font-extrabold text-[#1a365d] uppercase tracking-tighter">Academic Integrity</h2>
                            <p className="text-gray-500 font-medium">Empowering educational institutions with secure digital ecosystems.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'Digital Certificates', desc: 'Issue tamper-proof diplomas and certifications anchored to the blockchain.', icon: Award },
                                { title: 'Transcript Verification', desc: 'Secure, instant verification of student transcripts for employers and universities.', icon: FileStack },
                                { title: 'Academic Record Hub', desc: 'Centralized, encrypted management of lifelong student academic achievements.', icon: GradIcon },
                            ].map((service, i) => (
                                <div key={i} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-[#1a365d] mb-4 uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Academic Verification Section */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-square bg-gray-50 rounded-[64px] overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest">
                                <img
                                    src="/Academic Protocol Image.jpg"
                                    alt="Healthcare Solution"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-5xl font-extrabold text-[#1a365d] tracking-tighter">Combatting Fraud. Enhancing Trust.</h2>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium">
                                FIRMA eliminates the delays and risks associated with traditional academic verification processes, providing a self-sovereign credential layer.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'QR-Code Verification via FIRMA Portal',
                                    'Secure School-to-University Data Transfers',
                                    'Institutional Identity for Faculty',
                                    'Life-long Sovereign Academic Identity'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-[#1a365d] font-bold">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                            <CheckCircle className="w-3.5 h-3.5" />
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
