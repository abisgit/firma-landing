"use client";

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingHero from '@/components/marketing/MarketingHero';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import { Check, ArrowRight, Sparkles, Building2, Landmark, Search, ShieldCheck, FileText, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [content, setContent] = useState<any>(null);
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [verifyRef, setVerifyRef] = useState('');
  const router = useRouter();

  const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://dashboard.firmasafe.com';

  useEffect(() => {
    // Fetch generic marketing content
    api.get('/marketing')
      .then(res => setContent(res.data))
      .catch(err => console.error('Failed to fetch content', err));

    // Fetch public organizations for trust banner
    api.get('/organizations/public')
      .then(res => setOrganizations(res.data))
      .catch(err => console.error('Failed to fetch orgs', err))
      .finally(() => setLoading(false));
  }, []);

  const handleQuickVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyRef.trim()) {
      router.push(`/verify?ref=${encodeURIComponent(verifyRef.toUpperCase())}`);
    }
  };

  return (
    <div className="bg-white selection:bg-[#1a365d] selection:text-white" suppressHydrationWarning>
      <MarketingNavbar />

      {/* Hero Section */}
      <MarketingHero
        title="Digitized. Verifiable. Trusted."
        description="A next-generation digital lettering protocol designed for secure institutional communication and high-trust inter-agency collaboration."
      />

      {/* Verification & Quick Entry Section */}
      <div className="bg-[#1a365d] py-16 -mt-12 relative z-10 mx-6 lg:mx-20 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(26,54,93,0.5)]">
        <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="group space-y-5">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all font-bold">
              <Search className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight">Public Verification</h3>
            <p className="text-white/60 text-sm leading-relaxed">Instantly verify the authenticity of any document issued via FIRMA using its unique reference number.</p>
            <Link href="/verify" className="inline-flex items-center gap-2 text-white font-extrabold text-xs uppercase tracking-widest hover:gap-4 transition-all">
              Verify a Document
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="group space-y-5 border-l border-white/5 pl-0 md:pl-12">
            <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-all">
              <Landmark className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight">Public Institutions</h3>
            <p className="text-white/60 text-sm leading-relaxed">Secure workflows for Ministries, Agencies, and Regional administrations with hierarchical clearance.</p>
            <Link href="/request-access" className="inline-flex items-center gap-2 text-emerald-400 font-extrabold text-xs uppercase tracking-widest hover:gap-4 transition-all">
              Start as an Institution
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="group space-y-5 border-l border-white/5 pl-0 md:pl-12">
            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all">
              <Building2 className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight">Enterprises & SOEs</h3>
            <p className="text-white/60 text-sm leading-relaxed">State-owned enterprises and regulated entities interacting securely with government agencies.</p>
            <Link href="/request-access" className="inline-flex items-center gap-2 text-blue-400 font-extrabold text-xs uppercase tracking-widest hover:gap-4 transition-all">
              Register Organization
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Banner - Infinite Scroll */}
      <div className="py-24 overflow-hidden border-y border-gray-100 bg-white relative">
        <div className="container mx-auto px-10 text-center mb-12">
          <p className="text-[10px] font-extrabold uppercase tracking-[4px] text-gray-300">Institutional Partners & Trusted Entities</p>
        </div>

        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-x-12">
            {(organizations.length > 0 ? organizations : [
              { name: 'Ministry of Finance', code: 'MOF' },
              { name: 'Global Revenue Authority', code: 'GRA' },
              { name: 'National Digital Agency', code: 'NDA' },
              { name: 'Official Gazette Bureau', code: 'OGB' },
              { name: 'Regional Administrations', code: 'RA' }
            ]).map((org, i) => (
              <div key={org.code + i} className="flex items-center gap-x-12">
                <span className="font-extrabold text-2xl tracking-tighter text-gray-300 hover:text-[#1a365d] transition-colors cursor-default uppercase">
                  {org.name}
                </span>
                <div className="w-2 h-2 bg-gray-100 rounded-full" />
              </div>
            ))}
          </div>

          <div className="absolute top-0 right-0 animate-marquee2 whitespace-nowrap flex items-center gap-x-12 ml-12">
            {(organizations.length > 0 ? organizations : [
              { name: 'Ministry of Finance', code: 'MOF' },
              { name: 'Global Revenue Authority', code: 'GRA' },
              { name: 'National Digital Agency', code: 'NDA' },
              { name: 'Official Gazette Bureau', code: 'OGB' },
              { name: 'Regional Administrations', code: 'RA' }
            ]).map((org, i) => (
              <div key={org.code + '-m2-' + i} className="flex items-center gap-x-12">
                <span className="font-extrabold text-2xl tracking-tighter text-gray-300 hover:text-[#1a365d] transition-colors cursor-default uppercase">
                  {org.name}
                </span>
                <div className="w-2 h-2 bg-gray-100 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .animate-marquee {
            display: inline-flex;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee2 {
            display: inline-flex;
            animation: marquee2 40s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee2 {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0%); }
          }
        `}</style>
      </div>

      {/* Feature Highlight Section */}
      <section className="py-40 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a365d]/5 rounded-full text-[#1a365d] text-[10px] font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              Sovereign Infrastructure
            </div>
            <h2 className="text-5xl font-extrabold text-[#1a365d] tracking-tight leading-[1.1]">
              Immutable Ledger for <br />
              <span className="text-blue-600">Institutional Trust.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg font-medium">
              Every official letter issued through FIRMA is assigned a unique cryptographic hash and recorded on a permissioned ledger, ensuring total tamper-protection.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-2">
                <p className="text-4xl font-extrabold text-[#1a365d]">1.7M+</p>
                <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Secured Docs</p>
              </div>
              <div className="space-y-2 border-l border-gray-200 pl-10">
                <p className="text-4xl font-extrabold text-emerald-500">100%</p>
                <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Verified Origin</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-[64px] rotate-3 -z-10 scale-95 opacity-5"></div>
            <div className="bg-white p-12 rounded-[64px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)] border border-gray-100 space-y-10 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest leading-none mb-1.5">System Integrity</p>
                    <p className="font-extrabold text-[#1a365d] text-sm uppercase leading-none">Ledger: VALIDATED</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Real-time</div>
              </div>

              <div className="space-y-4">
                <form onSubmit={handleQuickVerify} className="relative group/form">
                  <input
                    type="text"
                    value={verifyRef}
                    onChange={(e) => setVerifyRef(e.target.value)}
                    placeholder="Ref: MOF/2026/0001"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-3xl px-8 py-6 text-[#1a365d] placeholder:text-gray-300 focus:outline-none focus:border-[#1a365d]/20 transition-all font-mono uppercase text-sm shadow-inner"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1a365d] text-white rounded-2xl flex items-center justify-center hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-blue-900/40">
                    <Search className="w-5 h-5" />
                  </button>
                  <p className="absolute -bottom-6 left-6 text-[10px] font-extrabold text-[#1a365d]/40 uppercase tracking-widest">Type a reference number above to verify</p>
                </form>

                <div className="pt-8">
                  <div className="p-6 bg-[#1a365d] rounded-[32px] shadow-2xl shadow-blue-900/40 flex items-center justify-between border-t border-white/10 group-hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest leading-none mb-1.5">Verified Example</p>
                        <p className="text-white font-extrabold text-sm tracking-tight">MOF/2026/0001</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Tiers Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-24">
            <h2 className="text-5xl font-extrabold text-[#1a365d] uppercase tracking-tighter leading-none">Institutional Tiers</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto tracking-tight">Scalable licensing designed for secure government procurement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group p-10 bg-gray-50 border border-gray-100 rounded-[48px] space-y-8 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-[3px]">Tier 01</h4>
              <div className="space-y-2">
                <h3 className="text-3xl font-extrabold text-[#1a365d] uppercase tracking-tighter">Pilot / Starter</h3>
                <p className="text-sm font-bold text-blue-600">$25k – $50k / year</p>
              </div>
              <p className="text-[10px] bg-[#1a365d]/5 text-[#1a365d] px-3 py-1 rounded-full inline-block font-extrabold uppercase">One Ministry / Agency</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-gray-500 font-bold tracking-tight"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Digital Lettering Core</li>
                <li className="flex items-center gap-3 text-sm text-gray-500 font-bold tracking-tight"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> 300 Institutional Users</li>
                <li className="flex items-center gap-3 text-sm text-gray-500 font-bold tracking-tight"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> PKI / LDAP Integration</li>
              </ul>
              <Link href="/request-access" className="block w-full text-center py-5 bg-[#1a365d] text-white rounded-[24px] text-xs font-extrabold uppercase tracking-widest hover:bg-[#2c5282] transition-colors shadow-lg">Request Access</Link>
            </div>

            <div className="group p-10 bg-[#1a365d] text-white rounded-[48px] space-y-8 shadow-[0_30px_60px_-15px_rgba(26,54,93,0.3)] scale-105 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-6 bg-white/10 text-[10px] font-extrabold uppercase tracking-widest rounded-bl-3xl">Recommended</div>
              <div className="space-y-8">
                <h4 className="text-xs font-extrabold opacity-30 uppercase tracking-[3px]">Tier 02</h4>
                <div className="space-y-2">
                  <h3 className="text-4xl font-extrabold uppercase tracking-tighter">Consortium</h3>
                  <p className="text-sm font-bold text-emerald-400 font-mono">$75k – $150k / year</p>
                </div>
                <p className="text-[10px] bg-white/10 text-white px-3 py-1 rounded-full inline-block font-extrabold uppercase">Multiple Administrations</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-bold tracking-tight"><div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> Inter-agency Workflows</li>
                  <li className="flex items-center gap-3 text-sm font-bold tracking-tight"><div className="w-2 h-2 bg-emerald-400 rounded-full" /> Permissioned Blockchain</li>
                  <li className="flex items-center gap-3 text-sm font-bold tracking-tight"><div className="w-2 h-2 bg-emerald-400 rounded-full" /> High-Availability SLA</li>
                </ul>
              </div>
              <Link href="/request-access" className="block w-full text-center py-6 bg-white text-[#1a365d] rounded-[32px] text-xs font-extrabold uppercase tracking-[3px] shadow-2xl hover:scale-[1.02] transition-transform">Initiate Program</Link>
            </div>

            <div className="group p-10 bg-gray-50 border border-gray-100 rounded-[48px] space-y-8 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-[3px]">Tier 03</h4>
              <div className="space-y-2">
                <h3 className="text-3xl font-extrabold text-[#1a365d] uppercase tracking-tighter">National</h3>
                <p className="text-sm font-bold text-blue-600">$300k – $700k / year</p>
              </div>
              <p className="text-[10px] bg-[#1a365d]/5 text-[#1a365d] px-3 py-1 rounded-full inline-block font-extrabold uppercase">Nationwide Infrastructure</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-gray-500 font-bold tracking-tight"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Unlimited Institutions</li>
                <li className="flex items-center gap-3 text-sm text-gray-500 font-bold tracking-tight"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Dedicated Deployment</li>
                <li className="flex items-center gap-3 text-sm text-gray-500 font-bold tracking-tight"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Sovereign Cloud Archiving</li>
              </ul>
              <Link href="/request-access" className="block w-full text-center py-5 bg-[#1a365d] text-white rounded-[24px] text-xs font-extrabold uppercase tracking-widest hover:bg-[#2c5282] transition-colors shadow-lg">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
