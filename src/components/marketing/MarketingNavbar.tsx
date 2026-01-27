"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, ChevronDown, Zap, ShieldCheck, Cpu, Building2, Landmark, Globe, FileText, Users, CreditCard, LifeBuoy, BookOpen, Newspaper } from 'lucide-react';

export default function MarketingNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = {
        Products: [
            { title: 'Digital Lettering', desc: 'Secure correspondence system for official gov letters.', icon: FileText, href: '#' },
            { title: 'Public Ledger', desc: 'Immutable document verification on permissioned blockchain.', icon: ShieldCheck, href: '#' },
            { title: 'Identity System', desc: 'PKI and LDAP integrated institutional identities.', icon: Users, href: '#' },
            { title: 'Enterprise Hub', desc: 'Centralized management for SOEs and large entities.', icon: Cpu, href: '#' },
        ],
        Solutions: [
            { title: 'Government & Public Sector', desc: 'Digitize your entire ministry workflow.', icon: Landmark, href: '#' },
            { title: 'SOEs & Regulatory', desc: 'Secure communication with government agencies.', icon: Building2, href: '#' },
            { title: 'National Infrastructure', desc: 'Digital Public Infrastructure (DPI) at scale.', icon: Globe, href: '#' },
            { title: 'Smart Approvals', desc: 'Automated hierarchical clearance systems.', icon: Zap, href: '#' },
        ],
        Resources: [
            { title: 'Documentation', desc: 'Integration guides and developer tools.', icon: BookOpen, href: '#' },
            { title: 'National Case Studies', desc: 'How FIRMA transformed digital governance.', icon: Newspaper, href: '#' },
            { title: 'Institutional Support', desc: 'Dedicated 24/7 support for public entities.', icon: LifeBuoy, href: '#' },
            { title: 'Press & Media', desc: 'Latest updates from the FIRMA team.', icon: Globe, href: '#' },
        ]
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-7'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="p-2.5 bg-[#1a365d] rounded-xl transition-all group-hover:scale-110 shadow-lg shadow-blue-900/20">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-2xl font-extrabold tracking-tighter text-[#1a365d]`}>FIRMA</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-2">
                    {/* Products Dropdown */}
                    <div className="relative group" onMouseEnter={() => setActiveDropdown('products')} onMouseLeave={() => setActiveDropdown(null)}>
                        <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-extrabold uppercase tracking-widest transition-all rounded-full ${isScrolled ? 'text-gray-600 hover:bg-gray-100 hover:text-[#1a365d]' : 'text-[#1a365d] hover:bg-white/10 hover:text-white'}`}>
                            Products
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[32px] border border-gray-100 p-8 grid grid-cols-2 gap-6 transition-all duration-300 origin-top ${activeDropdown === 'products' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible'}`}>
                            {sections.Products.map((item) => (
                                <Link key={item.title} href={item.href} className="group/item flex gap-4 p-4 rounded-2xl hover:bg-[#1a365d]/5 transition-all">
                                    <div className="w-12 h-12 bg-[#1a365d]/5 rounded-xl flex items-center justify-center shrink-0 group-hover/item:bg-[#1a365d] group-hover/item:text-white transition-all">
                                        <item.icon className="w-6 h-6 text-[#1a365d] group-hover/item:text-white" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-extrabold text-[#1a365d] text-sm uppercase tracking-wide">{item.title}</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Solutions Dropdown */}
                    <div className="relative group" onMouseEnter={() => setActiveDropdown('solutions')} onMouseLeave={() => setActiveDropdown(null)}>
                        <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-extrabold uppercase tracking-widest transition-all rounded-full ${isScrolled ? 'text-gray-600 hover:bg-gray-100 hover:text-[#1a365d]' : 'text-[#1a365d] hover:bg-white/10 hover:text-white'}`}>
                            Solutions
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[32px] border border-gray-100 p-8 grid grid-cols-2 gap-6 transition-all duration-300 origin-top ${activeDropdown === 'solutions' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible'}`}>
                            {sections.Solutions.map((item) => (
                                <Link key={item.title} href={item.href} className="group/item flex gap-4 p-4 rounded-2xl hover:bg-[#1a365d]/5 transition-all">
                                    <div className="w-12 h-12 bg-[#1a365d]/5 rounded-xl flex items-center justify-center shrink-0 group-hover/item:bg-[#1a365d] group-hover/item:text-white transition-all">
                                        <item.icon className="w-6 h-6 text-[#1a365d] group-hover/item:text-white" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-extrabold text-[#1a365d] text-sm uppercase tracking-wide">{item.title}</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Simple Links */}
                    <Link href="#" className={`px-4 py-2 text-sm font-extrabold uppercase tracking-widest transition-all rounded-full ${isScrolled ? 'text-gray-600 hover:bg-gray-100 hover:text-[#1a365d]' : 'text-[#1a365d] hover:bg-white/10 hover:text-white'}`}>
                        Enterprise
                    </Link>
                    <Link href="#" className={`px-4 py-2 text-sm font-extrabold uppercase tracking-widest transition-all rounded-full ${isScrolled ? 'text-gray-600 hover:bg-gray-100 hover:text-[#1a365d]' : 'text-[#1a365d] hover:bg-white/10 hover:text-white'}`}>
                        Plans & Pricing
                    </Link>
                </div>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link href={`${frontendUrl}/login`} className={`text-sm font-extrabold uppercase tracking-widest transition-colors ${isScrolled ? 'text-[#1a365d]' : 'text-[#1a365d] hover:text-[#2c5282]'}`}>Log In</Link>
                    <Link href="/register-choice" className="bg-[#1a365d] text-white px-8 py-3.5 rounded-2xl text-[11px] font-extrabold uppercase tracking-[2px] hover:bg-[#2c5282] transition-all shadow-xl shadow-blue-900/20 active:scale-95">Get Started</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden p-2 text-[#1a365d]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
                    <div className="p-8 space-y-6">
                        <Link href="#" className="block text-lg font-extrabold text-[#1a365d] uppercase tracking-widest">Products</Link>
                        <Link href="#" className="block text-lg font-extrabold text-[#1a365d] uppercase tracking-widest">Solutions</Link>
                        <Link href="#" className="block text-lg font-extrabold text-[#1a365d] uppercase tracking-widest">Enterprise</Link>
                        <hr className="border-gray-100" />
                        <div className="flex flex-col gap-4">
                            <Link href={`${frontendUrl}/login`} className="text-center font-extrabold text-[#1a365d] uppercase tracking-widest py-4 bg-gray-50 rounded-2xl">Log In</Link>
                            <Link href="/register-choice" className="bg-[#1a365d] text-white text-center py-5 rounded-[24px] font-extrabold uppercase tracking-[2px]">Get Started</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
