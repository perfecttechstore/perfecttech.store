"use client"
import React from 'react'
import { Scale, Truck, CheckCircle2, AlertCircle } from 'lucide-react'

function TermsPage() {
  const terms = [
    {
      title: "Wholesale Orders",
      icon: <Scale size={20} className="text-[#F2A93B]" />,
      content: "All orders are subject to Minimum Order Quantities (MOQ). Prices quoted are excluding VAT unless otherwise stated."
    },
    {
      title: "Delivery & Logistics",
      icon: <Truck size={20} className="text-[#F2A93B]" />,
      content: "Free delivery applies to bulk orders across the 7 Emirates. Lead times are estimates based on production capacity."
    },
    {
      title: "Quality Assurance",
      icon: <CheckCircle2 size={20} className="text-[#F2A93B]" />,
      content: "Goods are produced to UAE industrial standards. Triple-point inspection is performed for every garment produced."
    }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[#F2A93B] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Legal Documentation</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 italic">
            Terms of <span className="text-[#F2A93B]">Service</span>
          </h1>
        </div>

        <div className="grid gap-8">
          {terms.map((term, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                {term.icon}
                <h2 className="font-black text-sm uppercase tracking-wider">{term.title}</h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{term.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// THIS IS THE LINE MISSING IN YOUR SCREENSHOT ERROR
export default TermsPage;