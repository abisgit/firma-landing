"use client";

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingHero from '@/components/marketing/MarketingHero';
import MarketingFeatures from '@/components/marketing/MarketingFeatures';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import { Check, ArrowRight, Zap, Shield, Sparkles, Building2, Landmark, User, Search } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';

  useEffect(() => {
    api.get('/marketing')
      .then(res => setContent(res.data))
      .catch(err => console.error('Failed to fetch content', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white">
      <MarketingNavbar />

      {/* Hero Section */}
      <MarketingHero
        title="Official Government Letters. Digitized. Verifiable. Trusted."
        description="A secure digital lettering and approval platform designed for public institutions and inter-agency collaboration."
      />

      {/* Verification & Quick Entry Section */}
      <div className="bg-[#1a365d] py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Public Verification</h3>
            <p className="text-white/60 text-sm">Instantly verify the authenticity of any document issued via FIRMA.</p>
            <Link href="/verify" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
              Verify a Document
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Public Institutions</h3>
            <p className="text-white/60 text-sm">Secure workflows for Ministries, Agencies, and Regional administrations.</p>
            <Link href="/request-access" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
              Start as an Institution
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Enterprises & SOEs</h3>
            <p className="text-white/60 text-sm">State-owned enterprises and regulated entities interacting with gov.</p>
            <Link href="/request-access" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
              Register Organization
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Who is this for? */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl font-black text-[#1a365d] uppercase tracking-tighter">Who Is This For?</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">FIRMA is built for the highest levels of security and public trust.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Gov Path */}
            <div className="group space-y-6 text-center lg:text-left p-8 rounded-3xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-[#1a365d]/5 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                <Landmark className="w-8 h-8 text-[#1a365d]" />
              </div>
              <h3 className="text-2xl font-black text-[#1a365d]">Government & Public Sector</h3>
              <p className="text-gray-500 text-sm">Secure workflows for Ministries, Agencies, and Regional administrations.</p>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Ministries & Agencies
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Sovereign Infrastructure
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 text-emerald-500" />
                  National Archive Integration
                </li>
              </ul>
              <Link href="/request-access" className="inline-flex py-3 px-8 bg-[#1a365d] text-white rounded-full font-bold shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all w-full lg:w-auto justify-center">
                Request Institutional Demo
              </Link>
            </div>

            {/* Enterprise Path */}
            <div className="group space-y-6 text-center lg:text-left p-8 rounded-3xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-[#1a365d]/5 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-[#1a365d]" />
              </div>
              <h3 className="text-2xl font-black text-[#1a365d]">Institutions & Enterprises</h3>
              <p className="text-gray-500 text-sm">State-owned enterprises and regulated entities interacting with government.</p>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 text-emerald-500" />
                  State-owned Enterprises
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Regulated Entities
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Partners & Vendors
                </li>
              </ul>
              <Link href="/request-access" className="inline-flex py-3 px-8 bg-[#1a365d] text-white rounded-full font-bold shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all w-full lg:w-auto justify-center">
                Register Organization
              </Link>
            </div>

            {/* Personal Path */}
            <div className="group space-y-6 text-center lg:text-left p-8 rounded-3xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-[#1a365d]/5 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                <User className="w-8 h-8 text-[#1a365d]" />
              </div>
              <h3 className="text-2xl font-black text-[#1a365d]">Individual Users</h3>
              <p className="text-gray-500 text-sm">Limited access for citizens and individuals to receive and verify documents.</p>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Verify Official Documents
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Receive Digital Letters
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Identity Verification
                </li>
              </ul>
              <Link href={`${frontendUrl}/register`} className="inline-flex py-3 px-8 border-2 border-[#1a365d] text-[#1a365d] rounded-full font-bold hover:bg-[#1a365d] hover:text-white transition-all w-full lg:w-auto justify-center">
                Create Personal Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Tiers Section (As described) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-black text-[#1a365d] uppercase tracking-tighter">Institutional Subscriptions</h2>
            <p className="text-xl text-gray-500">Tiered licensing designed for government procurement and budgeting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-gray-100 rounded-3xl space-y-6 shadow-sm">
              <h4 className="text-lg font-bold text-gray-400 uppercase tracking-widest">Tier 1</h4>
              <h3 className="text-3xl font-black text-[#1a365d]">Pilot / Starter</h3>
              <p className="text-sm font-bold text-blue-600">$25,000 – $50,000 / year</p>
              <p className="text-xs text-gray-500 italic">One ministry, agency, or regional office</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Core Lettering System</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Up to 300 Users</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> PKI / LDAP integration</li>
              </ul>
              <Link href="/request-access" className="block w-full text-center py-3 bg-[#1a365d] text-white rounded-xl font-bold">Request Access</Link>
            </div>

            <div className="p-10 bg-[#1a365d] text-white rounded-3xl space-y-6 shadow-2xl scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-accent/20 text-[10px] font-black uppercase tracking-widest">Recommended</div>
              <h4 className="text-lg font-bold opacity-50 uppercase tracking-widest text-white">Tier 2</h4>
              <h3 className="text-3xl font-black">Consortium</h3>
              <p className="text-sm font-bold text-emerald-400">$75,000 – $150,000 / year</p>
              <p className="text-xs opacity-70 italic">Multiple ministries or regional administrations</p>
              <ul className="space-y-3 text-sm opacity-80">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Inter-agency Workflows</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Permissioned Blockchain Network</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> SLA & Uptime Guarantees</li>
              </ul>
              <Link href="/request-access" className="block w-full text-center py-4 bg-white text-[#1a365d] rounded-xl font-black">Start Pilot Program</Link>
            </div>

            <div className="p-8 bg-white border border-gray-100 rounded-3xl space-y-6 shadow-sm">
              <h4 className="text-lg font-bold text-gray-400 uppercase tracking-widest">Tier 3</h4>
              <h3 className="text-3xl font-black text-[#1a365d]">National</h3>
              <p className="text-sm font-bold text-blue-600">$300,000 – $700,000 / year</p>
              <p className="text-xs text-gray-500 italic">Federal government rollout</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Unlimited Agencies</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Dedicated Infrastructure</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Sovereign Cloud Deployment</li>
              </ul>
              <Link href="/request-access" className="block w-full text-center py-3 bg-[#1a365d] text-white rounded-xl font-bold">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
