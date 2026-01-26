"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';

export default function MarketingNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // In a real separate project, these would point to the frontend app URL
    const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Products', href: '#', hasDropdown: true },
        { name: 'Solutions', href: '#', hasDropdown: true },
        { name: 'Resources', href: '#', hasDropdown: true },
        { name: 'Enterprise', href: '#', hasDropdown: false },
        { name: 'Plans & Pricing', href: '#', hasDropdown: false },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-[#1a365d] rounded-lg transition-transform group-hover:scale-110">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-2xl font-black tracking-tighter text-[#1a365d]`}>FIRMA</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-600 hover:text-[#1a365d]' : 'text-[#1a365d] hover:text-[#2c5282]'}`}>
                                {link.name}
                                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                            </button>
                            {link.hasDropdown && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform group-hover:translate-y-0 translate-y-2">
                                    <div className="p-2">
                                        <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1a365d] rounded-lg">Overview</Link>
                                        <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1a365d] rounded-lg">Features</Link>
                                        <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1a365d] rounded-lg">Security</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href={`${frontendUrl}/login`} className="text-sm font-bold text-[#1a365d] hover:text-[#2c5282]">Log In</Link>
                    <Link href={`${frontendUrl}/register`} className="bg-[#1a365d] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#2c5282] transition-all shadow-lg shadow-blue-900/20 active:scale-95">Get Started</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden p-2 text-[#1a365d]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
                    <div className="p-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link key={link.name} href="#" className="block text-lg font-bold text-gray-600 hover:text-[#1a365d]">{link.name}</Link>
                        ))}
                        <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                            <Link href={`${frontendUrl}/login`} className="text-center font-bold text-[#1a365d]">Log In</Link>
                            <Link href={`${frontendUrl}/register`} className="bg-[#1a365d] text-white text-center py-3 rounded-xl font-bold">Get Started</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
