"use client";

import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import { User, Landmark, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RegisterChoicePage() {
    const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';

    return (
        <div className="min-h-screen bg-white">
            <MarketingNavbar />

            <div className="pt-40 pb-24 container mx-auto px-6 max-w-5xl">
                <div className="text-center space-y-4 mb-16">
                    <h1 className="text-5xl font-black text-[#1a365d] uppercase tracking-tighter">Choose Your Path</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">FIRMA provides different access levels depending on your authority or individual needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Path 1: Institutional */}
                    <div className="group p-10 bg-[#1a365d] text-white rounded-[40px] space-y-8 shadow-2xl hover:scale-[1.02] transition-all">
                        <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center">
                            <Landmark className="w-8 h-8 text-white" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black tracking-tight">Institutional Onboarding</h2>
                            <p className="text-white/60 text-lg leading-relaxed">
                                For Ministries, Agencies, or Regulated Enterprises that need to issue, sign, and manage official digital correspondence at scale.
                            </p>
                        </div>
                        <ul className="space-y-3 text-sm opacity-80">
                            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Legal Issuer Authority</li>
                            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Multi-user Workflows</li>
                            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Dedicated Verification Nodes</li>
                        </ul>
                        <Link href="/request-access" className="block w-full py-4 bg-white text-[#1a365d] text-center rounded-2xl font-black flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
                            REGISTER AS AN INSTITUTION <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Path 2: Personal */}
                    <div className="group p-10 bg-white border-2 border-gray-100 rounded-[40px] space-y-8 hover:border-[#1a365d]/20 transition-all shadow-sm hover:shadow-xl">
                        <div className="w-16 h-16 bg-[#1a365d]/5 rounded-3xl flex items-center justify-center">
                            <User className="w-8 h-8 text-[#1a365d]" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-[#1a365d] tracking-tight">Personal & Public</h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                For citizens, external experts, or applicants who need to receive documents, apply for services, and verify official requests.
                            </p>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure Application Inbox</li>
                            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Document Receipt Tracking</li>
                            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Free Public Verification</li>
                        </ul>
                        <Link href={`${frontendUrl}/register`} className="block w-full py-4 bg-[#1a365d] text-white text-center rounded-2xl font-black flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
                            CONTINUE TO PERSONAL ACCESS <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            <MarketingFooter />
        </div>
    );
}
