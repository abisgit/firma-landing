"use client";

import { useState } from 'react';
import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import api from '@/lib/api';
import { Send, Building2, Landmark, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';

export default function RequestAccessPage() {
    const [formData, setFormData] = useState({
        orgName: '',
        orgType: 'MINISTRY',
        orgCode: '',
        contactPerson: '',
        officialEmail: '',
        phone: '',
        identitySystem: 'None',
        intendedUse: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await api.post('/tenants/request', formData);
            setSuccess(true);
        } catch (err: any) {
            const msg = err.response?.data?.error?.message || err.response?.data?.message || 'Submission failed. Please check your data and try again.';
            setError(msg);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-white">
                <MarketingNavbar />
                <div className="pt-40 pb-20 container mx-auto px-6 flex flex-col items-center text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center animate-bounce">
                        <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h1 className="text-4xl font-black text-[#1a365d]">Request Submitted!</h1>
                    <p className="text-xl text-gray-500 max-w-2xl">
                        Thank you for your institutional onboarding request. Our compliance team will verify your organization and contact the provided person within 24-48 hours.
                    </p>
                    <Link href="/" className="px-8 py-3 bg-[#1a365d] text-white rounded-full font-bold">Back to Homepage</Link>
                </div>
                <MarketingFooter />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <MarketingNavbar />

            <section className="pt-40 pb-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-4 mb-12 text-center">
                        <h1 className="text-5xl font-black text-[#1a365d] tracking-tighter uppercase">Institutional Access</h1>
                        <p className="text-xl text-gray-500">Official onboarding through controlled verification. Dedicated to public authorities and regulated enterprises.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-2xl space-y-8 border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Organization Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.orgName}
                                    onChange={e => setFormData({ ...formData, orgName: e.target.value })}
                                    placeholder="e.g. Ministry of Finance"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1a365d] outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Organization Code / ID</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.orgCode}
                                    onChange={e => setFormData({ ...formData, orgCode: e.target.value })}
                                    placeholder="e.g. MOF-ET"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1a365d] outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Organization Type</label>
                                <select
                                    required
                                    value={formData.orgType}
                                    onChange={e => setFormData({ ...formData, orgType: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1a365d] outline-none font-bold"
                                >
                                    <option value="MINISTRY">Ministry</option>
                                    <option value="AGENCY">Agency</option>
                                    <option value="SOE">State-Owned Enterprise</option>
                                    <option value="ENTERPRISE">Regulated Enterprise</option>
                                    <option value="REGION">Regional Administration</option>
                                    <option value="EDUCATION">Education</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Contact Person</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.contactPerson}
                                    onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                                    placeholder="Legal representative name"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1a365d] outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Official Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.officialEmail}
                                    onChange={e => setFormData({ ...formData, officialEmail: e.target.value })}
                                    placeholder="name@gov.et"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1a365d] outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Phone Number</label>
                                <input
                                    type="text"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+251 ..."
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1a365d] outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Existing Identity System</label>
                                <select
                                    required
                                    value={formData.identitySystem}
                                    onChange={e => setFormData({ ...formData, identitySystem: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1a365d] outline-none font-bold"
                                >
                                    <option value="None">None (In-app ID)</option>
                                    <option value="LDAP">Active Directory / LDAP</option>
                                    <option value="PKI">Government PKI / Smart Cards</option>
                                    <option value="SSO">External SSO</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Intended Use Case</label>
                            <textarea
                                rows={4}
                                value={formData.intendedUse}
                                onChange={e => setFormData({ ...formData, intendedUse: e.target.value })}
                                placeholder="Briefly describe the workflows you plan to digitize..."
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1a365d] outline-none resize-none"
                            />
                        </div>

                        <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl flex gap-4">
                            <Info className="w-6 h-6 text-amber-600 shrink-0" />
                            <p className="text-sm text-amber-800 leading-relaxed font-medium">
                                This form does not grant immediate access. Our team will verify your credentials and institutional authority before issuing a tenant. Only authorized government and regulated entities are permitted to host issuers.
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-5 bg-[#1a365d] text-white rounded-2xl font-black shadow-xl shadow-blue-900/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                        >
                            <Send className="w-5 h-5" />
                            {loading ? 'Submitting Request...' : 'SUBMIT ONBOARDING REQUEST'}
                        </button>

                        {error && (
                            <p className="text-center text-red-500 font-bold text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                                {error}
                            </p>
                        )}
                    </form>
                </div>
            </section>

            <MarketingFooter />
        </div>
    );
}
