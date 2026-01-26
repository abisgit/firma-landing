"use client";

import { useState, useEffect } from 'react';
import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import api from '@/lib/api';
import { Search, ShieldCheck, XCircle, FileText, Calendar, User, Building2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function VerificationPage() {
    const searchParams = useSearchParams();
    const initialRef = searchParams.get('ref') || '';

    const [ref, setRef] = useState(initialRef);
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (initialRef) {
            performVerification(initialRef);
        }
    }, [initialRef]);

    const performVerification = async (searchRef: string) => {
        setLoading(true);
        setError('');
        setResult(null);

        try {
            const res = await api.get(`/letters/verify/${searchRef}`);
            setResult(res.data);
        } catch (err: any) {
            setError(err.response?.status === 404 ? 'Document not found. Please check the reference number and try again.' : 'An error occurred during verification.');
        } finally {
            setLoading(false);
        }
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        performVerification(ref);
    };

    return (
        <div className="min-h-screen bg-white">
            <MarketingNavbar />

            <section className="pt-40 pb-24 bg-gray-50 flex flex-col items-center">
                <div className="container mx-auto px-6 max-w-2xl space-y-8 text-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-[#1a365d] uppercase tracking-tighter">Public Document Verification</h1>
                        <p className="text-gray-500">Enter a document reference number to verify its origin, integrity, and current status.</p>
                    </div>

                    <form onSubmit={handleVerify} className="relative group">
                        <input
                            type="text"
                            required
                            value={ref}
                            onChange={e => setRef(e.target.value)}
                            placeholder="e.g. MOF/2026/0001"
                            className="w-full pl-12 pr-4 py-5 bg-white border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#1a365d]/10 focus:border-[#1a365d] outline-none transition-all shadow-xl group-hover:shadow-2xl font-mono text-lg uppercase"
                        />
                        <Search className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1a365d] transition-colors" />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 bg-[#1a365d] text-white rounded-xl font-bold hover:scale-105 active:scale-95 transition-all"
                        >
                            {loading ? 'Verifying...' : 'VERIFY'}
                        </button>
                    </form>

                    {error && (
                        <div className="p-6 bg-red-50 border border-red-100 rounded-3xl flex items-center gap-4 text-left">
                            <XCircle className="w-8 h-8 text-red-500 shrink-0" />
                            <p className="text-red-800 font-medium text-sm">{error}</p>
                        </div>
                    )}

                    {result && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[40px] text-left space-y-6 shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                                        <ShieldCheck className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-emerald-900 uppercase">Document Verified</h3>
                                        <p className="text-emerald-700 text-sm font-medium">Authenticity confirmed by FIRMA Ledger</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/50 p-6 rounded-3xl border border-emerald-100/50">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-800/40">
                                            <Building2 className="w-3 h-3" /> Origin Organization
                                        </div>
                                        <p className="font-bold text-emerald-900 text-sm">{result.senderOrg?.name || 'N/A'}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-800/40">
                                            <FileText className="w-3 h-3" /> Subject
                                        </div>
                                        <p className="font-bold text-emerald-900 text-sm">{result.subject}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-800/40">
                                            <Calendar className="w-3 h-3" /> Issue Date
                                        </div>
                                        <p className="font-bold text-emerald-900 text-sm">{new Date(result.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-800/40">
                                            <User className="w-3 h-3" /> Signed By
                                        </div>
                                        <p className="font-bold text-emerald-900 text-sm">{result.createdBy?.fullName}</p>
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-center">
                                    <div className="px-4 py-1.5 bg-emerald-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                                        Tamperproof Status: SECURED
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <MarketingFooter />
        </div>
    );
}
