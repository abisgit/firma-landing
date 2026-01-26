"use client";

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingHero from '@/components/marketing/MarketingHero';
import MarketingFeatures from '@/components/marketing/MarketingFeatures';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import { Check, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
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

  const plans = [
    {
      name: 'Personal',
      price: '$10',
      desc: 'Ideal for individuals needing to sign and send documents.',
      features: ['5 documents per month', 'Mobile application access', 'Standard templates', 'Audit trails'],
      color: 'bg-muted/50',
      btn: 'outline'
    },
    {
      name: 'Professional',
      price: '$25',
      desc: 'Powerful features for small teams and professionals.',
      features: ['Unlimited documents', 'Custom branding', 'Shared templates', 'Advanced fields', 'SMS authentication'],
      color: 'bg-primary text-white shadow-2xl shadow-primary/30 scale-105',
      btn: 'primary',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'Advanced security and compliance for large organizations.',
      features: ['SSO/SAML integration', 'Advanced API access', 'Organization management', 'Dedicated priority support', 'Volume discounts'],
      color: 'bg-muted/50',
      btn: 'outline'
    }
  ];

  return (
    <div className="bg-white">
      <MarketingNavbar />

      <MarketingHero
        title={content?.heroTitle}
        description={content?.heroDesc}
      />

      {/* Trusted By / Social Proof */}
      <div className="bg-muted py-12 border-y border-border">
        <div className="container mx-auto px-6 flex flex-col items-center gap-8">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">The market leader trusted by global organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <span className="text-2xl font-black text-primary italic">AIRBUS</span>
            <span className="text-2xl font-black text-primary italic">SAMSUNG</span>
            <span className="text-2xl font-black text-primary italic">TOYOTA</span>
            <span className="text-2xl font-black text-primary italic">ADRIENNE</span>
            <span className="text-2xl font-black text-primary italic">SIEMENS</span>
          </div>
        </div>
      </div>

      <MarketingFeatures />

      {/* Plans & Pricing Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-primary uppercase tracking-tighter">Plans & Pricing</h2>
            <p className="text-xl text-muted-foreground">Flexible solutions designed to grow with your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan) => (
              <div key={plan.name} className={`p-8 rounded-3xl border border-border relative flex flex-col h-full ${plan.color}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-black uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl font-black">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-sm font-bold opacity-60">/per month</span>}
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed pt-2">{plan.desc}</p>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f: string) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-medium">
                      <div className={`mt-0.5 shrink-0 p-0.5 rounded-full ${plan.btn === 'primary' ? 'bg-white/20' : 'bg-primary/10'}`}>
                        <Check className={`w-3 h-3 ${plan.btn === 'primary' ? 'text-white' : 'text-primary'}`} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={`${frontendUrl}/register`} className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 text-center ${plan.btn === 'primary'
                    ? 'bg-white text-primary hover:bg-muted font-black'
                    : 'border-2 border-primary text-primary hover:bg-primary/5'
                  }`}>
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/20 blur-[100px] -z-10 animate-pulse" />

        <div className="container mx-auto px-6 text-center space-y-8">
          <div className="inline-flex p-3 bg-white/10 rounded-2xl mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter max-w-4xl mx-auto">
            Ready to accelerate your <span className="text-accent underline decoration-4 underline-offset-8">workflow</span>?
          </h2>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Join over 1.7 million customers who trust FIRMA to secure their intelligent agreements and digital correspondence.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link href={`${frontendUrl}/register`} className="bg-white text-primary px-10 py-5 rounded-full text-xl font-black hover:bg-muted transition-all shadow-2xl flex items-center gap-2 group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
