"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShoppingBag, ShieldCheck, Zap, Factory } from 'lucide-react'

const allCollections = [
  {
    title: "School Uniforms",
    count: "45 Products",
    img: "/images/school-cat.webp",
    href: "/categories/school-uniforms",
    tags: ["Cotton Rich", "Durable", "UAE Schools"]
  },
  {
    title: "Hospitality Wear",
    count: "60 Products",
    img: "/images/hospitality-cat.webp",
    href: "/categories/hospitality-wear",
    tags: ["Chef Coats", "Aprons", "Linens"]
  },
  {
    title: "Industrial Safety",
    count: "85 Products",
    img: "/images/industrial-safety.webp",
    href: "/categories/industrial-safety",
    tags: ["High-Vis", "FR Rated", "SIRA"]
  },
  {
    title: "Medical Scrubs",
    count: "30 Products",
    img: "/images/medical-scrubs.webp",
    href: "/categories/medical-scrubs",
    tags: ["Antibacterial", "Flex-Stretch"]
  },
  {
    title: "Corporate Gifts",
    count: "120 Products",
    img: "/images/gifts-cat.webp",
    href: "/categories/corporate-gifts",
    tags: ["Branded", "Hampers", "Tech"]
  },
  {
    title: "Custom Embroidery",
    count: "Service",
    img: "/images/embroidery-cat.webp",
    href: "/categories/custom-embroidery",
    tags: ["Logo Digitizing", "Bulk"]
  }
];

export default function CategoriesPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pb-24">
      
      {/* 1. LIGHT HERO SECTION WITH LOW OPACITY BG */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-white border-b border-slate-100">
        {/* Low Opacity Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.1]">
          <Image 
            src="/images/product-background.png" 
            alt="Background Pattern" 
            fill 
            className="object-cover grayscale"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[#1A1A1A]">
              <Factory size={24} />
            </div>
          </div>
          <span className="text-[#F2A93B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Factory Direct Catalog
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1A1A] uppercase italic tracking-tighter leading-none">
            Our Full <span className="text-[#F2A93B]">Collections</span>
          </h1>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto font-bold text-xs md:text-sm leading-relaxed uppercase tracking-widest">
            Premium manufacturing and specialized supply chain solutions <br className="hidden md:block" /> for the Middle Eastern professional landscape.
          </p>
        </div>
      </section>

      {/* 2. COLLECTIONS GRID */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCollections.map((col, i) => (
            <Link 
              key={i} 
              href={col.href} 
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#F2A93B]/30 transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-50">
                <Image 
                  src={col.img} 
                  alt={col.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  unoptimized 
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm border border-slate-100">
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#1A1A1A]">{col.count}</p>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                {/* Tags preserved as requested */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {col.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-bold uppercase tracking-widest bg-slate-50 text-slate-400 px-2 py-1 rounded border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-black uppercase italic mb-6 group-hover:text-[#F2A93B] transition-colors leading-tight text-[#1A1A1A]">
                  {col.title}
                </h3>

                <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-50">
                  <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1E4DFF]">
                    View Catalog <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-[#F2A93B] group-hover:text-white transition-all">
                    <ShoppingBag size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* TRUST FEATURE BAR - Updated with low roundness */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 p-10 rounded-xl text-[#1A1A1A] flex flex-col justify-center shadow-sm">
                <ShieldCheck size={40} className="mb-6 text-[#F2A93B]" />
                <h2 className="text-2xl font-black uppercase italic leading-none mb-3">ISO Quality Standards</h2>
                <p className="font-bold uppercase tracking-tight text-[10px] text-slate-500">Rigorous 12-point inspection protocols on all factory outputs.</p>
            </div>
            <div className="bg-white border border-slate-200 p-10 rounded-xl text-[#1A1A1A] flex flex-col justify-center shadow-sm">
                <Zap size={40} className="mb-6 text-[#1E4DFF]" />
                <h2 className="text-2xl font-black uppercase italic leading-none mb-3">Logistics Efficiency</h2>
                <p className="font-bold uppercase tracking-tight text-[10px] text-slate-500">Strategic wholesale distribution across all 7 Emirates.</p>
            </div>
        </section>
      </main>
    </div>
  )
}