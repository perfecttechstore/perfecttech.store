"use client"
import React from 'react'
import Image from 'next/image'
import { ShieldCheck, Factory, Globe2, Users2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen text-[#1A1A1A]">
      <main className="max-w-7xl mx-auto p-4 md:p-6 pb-24">
        
        {/* HERO SECTION */}
        <section className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#F2A93B] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Established Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
              Reliable <span className="text-[#F2A93B]">Manufacturing</span> <br/> for the UAE.
            </h1>
            <p className="text-slate-500 font-medium leading-relaxed mb-8 text-lg">
              Perfect Tech FZC LLC is a premier E-commerce platform for premier industrial and textile supplier based in the UAE. 
              We specialize in large-scale wholesale supplier, bridging the gap between 
              international quality standards and local delivery speeds.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-black text-2xl text-[#1E4DFF]">10+</h4>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Sectors Served</p>
              </div>
              <div>
                <h4 className="font-black text-2xl text-[#1E4DFF]">500k+</h4>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Units Delivered</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200">
            <Image 
              src="/images/about-hero.jpg" 
              alt="Our Facility" 
              fill 
              className="object-cover"
              unoptimized 
            />
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {[
            { icon: <ShieldCheck size={32}/>, title: "Compliance", desc: "Full SIRA & ISO standard adherence across all safety gear." },
            { icon: <Factory size={32}/>, title: "Direct Source", desc: "Cutting out the middleman to offer competitive B2B pricing." },
            { icon: <Globe2 size={32}/>, title: "UAE Roots", desc: "Proudly registered FZC LLC operating from the heart of Sharjah." },
            { icon: <Users2 size={32}/>, title: "Tailored", desc: "Custom embroidery and bespoke sizing for every client." },
          ].map((val, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="text-[#F2A93B] mb-6">{val.icon}</div>
              <h3 className="font-black uppercase text-sm mb-3 tracking-tight">{val.title}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </section>

        {/* MISSION STATEMENT */}
        <section className="bg-[#1A1A1A] text-white rounded-[3rem] p-12 md:p-24 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            Our Mission is <span className="text-[#F2A93B]">Seamless Supply</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
            To empower UAE's workforce and students with durable, high-performance apparel and 
            safety equipment that stands up to the demands of the Middle Eastern climate. 
            Quality isn't just a goal—it's our standard.
          </p>
        </section>
      </main>
    </div>
  )
}