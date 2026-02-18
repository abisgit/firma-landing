"use client";

import Link from 'next/link';
import { PlayCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function MarketingHero({
    title = "Sovereign Agreement Management.",
    description = "Empowering government institutions with cryptographically secure digital lettering, hierarchical approvals, and immutable verification."
}: { title?: string, description?: string }) {
    const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://dashboard.firmasafe.com';

    return (
        <section className="relative pt-40 pb-24 overflow-hidden min-h-[90vh] flex items-center bg-white">
            <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a365d]/5 border border-[#1a365d]/10 text-[#1a365d] text-[10px] font-black uppercase tracking-[3px]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        National Security Protocol
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1a365d] leading-[1.1] tracking-tight">
                        {title}
                    </h1>

                    <p className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-xl font-medium">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <Link href="/request-access" className="bg-[#1a365d] text-white px-10 py-5 rounded-[24px] text-xs font-black uppercase tracking-[3px] hover:bg-[#2c5282] transition-all shadow-2xl shadow-blue-900/40 flex items-center gap-3 group">
                            Start Access Request
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <button className="flex items-center gap-4 px-10 py-5 rounded-[24px] text-xs font-black uppercase tracking-[3px] text-[#1a365d] hover:bg-[#1a365d]/5 transition-all border-2 border-[#1a365d]/10">
                            <PlayCircle className="w-5 h-5" />
                            Technical Overview
                        </button>
                    </div>

                    <div className="pt-12 flex items-center gap-10 opacity-20 grayscale">
                        <span className="font-black text-xl tracking-tighter">MINISTRY_OF_FINANCE</span>
                        <span className="font-black text-xl tracking-tighter">GOV_TECH_LABS</span>
                        <span className="font-black text-xl tracking-tighter">FEDERAL_LEDGER</span>
                    </div>
                </div>

                <div className="relative animate-in zoom-in fade-in duration-1000 delay-300">
                    <div className="relative z-10 rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(26,54,93,0.3)] border-8 border-white group">
                        <img
                            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200"
                            alt="Government Digital Infrastructure"
                            className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-[#1a365d]/20 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] to-transparent opacity-60" />

                        {/* Floating elements */}
                        <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-2xl p-8 rounded-[40px] border border-white/20 shadow-2xl space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/50">
                                    <ShieldCheck className="w-7 h-7 text-white" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest leading-none">Security Verified</p>
                                    <p className="text-lg font-black text-white leading-none uppercase tracking-tight font-mono">Status: SECURED</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background decorations */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-[120px] -z-10 group-hover:bg-blue-200 transition-colors" />
                </div>
            </div>
        </section>
    );
}
