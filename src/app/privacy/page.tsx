"use client"
import React from 'react'
import Link from 'next/link'
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react'

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Data Collection",
      icon: <Eye size={20} className="text-[#F2A93B]" />,
      content: "We collect information you provide directly to us through our lead generation forms, including company name, contact person, email, and mobile number to facilitate wholesale inquiries."
    },
    {
      title: "Usage of Information",
      icon: <FileText size={20} className="text-[#F2A93B]" />,
      content: "Your data is used solely to process catalog requests, provide quotations, and communicate regarding orders. We do not sell or share your business data with third-party marketing agencies."
    },
    {
      title: "Data Security",
      icon: <Lock size={20} className="text-[#F2A93B]" />,
      content: "Perfect Tech FZC LLC implements industrial-standard encryption and security protocols to protect your corporate information from unauthorized access or disclosure."
    }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[#F2A93B] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Legal Documentation</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6 italic">
            Privacy <span className="text-[#F2A93B]">Policy</span>
          </h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Last Updated: March 2026</p>
        </div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                {section.icon}
                <h2 className="font-black text-sm uppercase tracking-wider">{section.title}</h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="text-[10px] font-black uppercase tracking-widest text-[#F2A93B] hover:underline">
            Questions? Contact our legal team
          </Link>
        </div>
      </div>
    </div>
  )
}