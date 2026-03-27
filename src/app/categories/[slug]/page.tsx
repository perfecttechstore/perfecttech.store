"use client"
import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  Image as ImageIcon, 
  Send,
  Phone
} from 'lucide-react'

const categoryData: Record<string, any> = {
  "school-uniforms": {
    title: "School Uniforms",
    desc: "Supplying UAE's leading educational institutions with durable, color-fast uniforms designed for active student life.",
    features: ["Anti-Pilling Fabric", "Reinforced Stitching", "Breathable Cotton", "Custom Embroidery"],
    moq: "100 Sets",
    leadTime: "14-21 Days",
    hero: "/images/heroes/school-hero.webp",
    gallery: ["/images/gallery/school-1.webp", "/images/gallery/school-2.webp", "/images/gallery/school-3.webp", "/images/gallery/school-4.webp"]
  },
  "hospitality-wear": {
    title: "Hospitality Wear",
    desc: "Premium front-of-house uniforms and durable chef-wear for the UAE's luxury hotel sector.",
    features: ["Stain Resistant", "Industrial Washable", "Bespoke Tailoring", "High-Density Twill"],
    moq: "50 Pcs",
    leadTime: "10-15 Days",
    hero: "/images/heroes/hospitality-hero.webp",
    gallery: ["/images/gallery/hospitality-1.webp", "/images/gallery/hospitality-2.webp", "/images/gallery/hospitality-3.webp", "/images/gallery/hospitality-4.webp"]
  },
  "industrial-safety": {
    title: "Industrial Safety",
    desc: "SIRA-compliant high-visibility gear and FR-rated coveralls for construction and oil & gas workforces.",
    features: ["SIRA Approved", "Flame Retardant", "Reflective 3M Tape", "Reinforced Knees"],
    moq: "200 Pcs",
    leadTime: "7-10 Days",
    hero: "/images/heroes/safety-hero.webp",
    gallery: ["/images/gallery/safety-1.webp", "/images/gallery/safety-2.webp", "/images/gallery/safety-3.webp", "/images/gallery/safety-4.webp"]
  },
  "medical-scrubs": {
    title: "Medical Scrubs",
    desc: "Anti-bacterial and high-comfort medical apparel for clinics and hospitals across the Emirates.",
    features: ["Anti-Microbial", "Four-Way Stretch", "Chemical Resistant", "Multiple Pockets"],
    moq: "50 Sets",
    leadTime: "10-14 Days",
    hero: "/images/heroes/medical-hero.webp",
    gallery: ["/images/gallery/medical-1.webp", "/images/gallery/medical-2.webp", "/images/gallery/medical-3.webp", "/images/gallery/medical-4.webp"]
  },
  "corporate-gifts": {
    title: "Corporate Gifts",
    desc: "Custom-branded executive gift sets and hampers designed to strengthen B2B relationships.",
    features: ["Premium Packaging", "Laser Engraving", "Tech Essentials", "Luxury Leatherware"],
    moq: "25 Units",
    leadTime: "5-7 Days",
    hero: "/images/heroes/gifts-hero.webp",
    gallery: ["/images/gallery/gifts-1.webp", "/images/gallery/gifts-2.webp", "/images/gallery/gifts-3.webp", "/images/gallery/gifts-4.webp"]
  },
  "custom-embroidery": {
    title: "Custom Embroidery",
    desc: "High-precision digital embroidery and screen printing for all corporate and industrial textiles.",
    features: ["High Thread Count", "Pantone Matching", "Bulk Processing", "3D Puff Options"],
    moq: "30 Pcs",
    leadTime: "3-5 Days",
    hero: "/images/heroes/embroidery-hero.webp",
    gallery: ["/images/gallery/embroidery-1.webp", "/images/gallery/embroidery-2.webp", "/images/gallery/embroidery-3.webp", "/images/gallery/embroidery-4.webp"]
  }
};

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug.toLowerCase().replace(/%20/g, '-').replace(/\s+/g, '-');
  const data = categoryData[slug];

  if (!data) notFound();

  return (
    <div className="bg-[#fcfcfc] min-h-screen text-[#1A1A1A] scroll-smooth">
      <main className="max-w-7xl mx-auto p-4 md:p-6 pb-24 pt-20">
        
        {/* HERO SECTION */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[3.5rem] p-8 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5F7FF] -skew-x-12 translate-x-20 z-0 hidden lg:block" />
          <div className="relative z-10">
            <span className="text-[#F2A93B] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Perfect Tech Solutions</span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              {data.title} <br/> <span className="text-[#F2A93B]">Production</span>
            </h1>
            <p className="text-slate-500 font-medium leading-relaxed mb-10 max-w-md">{data.desc}</p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 text-center">
                <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Min. Order</p>
                <p className="text-sm font-black text-[#1E4DFF]">{data.moq}</p>
              </div>
              <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 text-center">
                <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Production Lead</p>
                <p className="text-sm font-black text-[#1E4DFF]">{data.leadTime}</p>
              </div>
            </div>

            <Link href="#catalog-request">
              <button className="bg-[#1A1A1A] text-white font-black py-4 px-10 rounded-xl uppercase text-xs tracking-widest hover:bg-[#F2A93B] transition-all flex items-center gap-3">
                Request Catalog <ArrowRight size={16}/>
              </button>
            </Link>
          </div>
          
          <div className="relative z-10 h-[350px] lg:h-[500px] flex items-center justify-center">
             <Image src={data.hero} alt={data.title} fill className="object-contain drop-shadow-2xl" priority unoptimized />
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="flex items-center gap-6 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="bg-blue-50 p-4 rounded-xl"><Package className="text-[#1E4DFF]" size={24} /></div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-wider">Bulk Logistics</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Size-labeling Included</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="bg-orange-50 p-4 rounded-xl"><Truck className="text-[#F2A93B]" size={24} /></div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-wider">7 Emirates</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Free Delivery Service</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="bg-slate-50 p-4 rounded-xl"><ShieldCheck className="text-[#1A1A1A]" size={24} /></div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-wider">QC Standards</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Triple-point inspection</p>
            </div>
          </div>
        </section>

        {/* GALLERY SHOWCASE */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <ImageIcon className="text-[#F2A93B]" size={24} />
            <h2 className="text-2xl font-black uppercase tracking-tight italic">Product <span className="text-[#F2A93B]">Showcase</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 relative h-[300px] md:h-[600px] rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-100 group shadow-lg">
              <Image src={data.gallery[0]} alt="Showcase Main" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
            </div>
            {data.gallery.slice(1, 4).map((img: string, i: number) => (
              <div key={i} className="relative h-[142px] md:h-[288px] rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-100 group">
                <Image src={img} alt={`Detail ${i}`} fill className="object-cover" unoptimized />
              </div>
            ))}
            
            {/* CTA ANCHOR BOX */}
            <Link 
              href="#catalog-request" 
              className="relative h-[142px] md:h-[288px] rounded-[2.5rem] bg-[#1A1A1A] flex flex-col items-center justify-center text-center p-4 border-b-4 border-[#F2A93B] group hover:bg-[#F2A93B] transition-all duration-500"
            >
              <p className="text-white group-hover:text-[#1A1A1A] font-black text-xl uppercase leading-none transition-colors">Catalog 2026</p>
              <p className="text-[#F2A93B] group-hover:text-white text-[10px] mt-2 font-black uppercase tracking-[0.2em] transition-colors">Request Below</p>
              <ArrowRight className="text-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </Link>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {data.features.map((feat: string, i: number) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-[#F2A93B] transition-all group">
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-[#F2A93B]/10 scale-150 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <CheckCircle2 className="text-[#F2A93B] relative z-10" size={32} />
              </div>
              <h4 className="font-black text-sm uppercase mb-3 tracking-wider leading-tight">{feat}</h4>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase tracking-tight">
                High-performance technical fabric suitable for intensive UAE workspace use.
              </p>
            </div>
          ))}
        </section>

        {/* LEAD GENERATION FORM - ID added for Anchor scrolling */}
        <section id="catalog-request" className="bg-[#1E4DFF] rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-500/20 mb-12 scroll-mt-24">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                  Get The <span className="text-[#F2A93B]">Wholesale</span> <br/>Catalog & Pricing
                </h2>
                <p className="text-blue-100 font-medium text-sm md:text-base leading-relaxed mb-8 max-w-md">
                  Enter your business details below. Our team will send the 2026 {data.title} collection catalog within 24 hours.
                </p>
                <div className="flex gap-4 items-center">
                    <div className="h-1 w-12 bg-[#F2A93B]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Perfect Tech FZC LLC</span>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] text-[#1A1A1A]">
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="COMPANY NAME" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-[10px] font-black uppercase tracking-widest outline-none focus:border-[#F2A93B] transition-all" />
                        <input type="email" placeholder="WORK EMAIL" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-[10px] font-black uppercase tracking-widest outline-none focus:border-[#F2A93B] transition-all" />
                    </div>
                    {/* NEW MOBILE NUMBER FIELD */}
                    <div className="relative">
                        <input type="tel" placeholder="MOBILE NUMBER (E.G. +971...)" className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-xl text-[10px] font-black uppercase tracking-widest outline-none focus:border-[#F2A93B] transition-all" />
                        <Phone size={14} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                    
                    <select className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-[10px] font-black uppercase tracking-widest outline-none focus:border-[#F2A93B] transition-all appearance-none">
                        <option>ESTIMATED QUANTITY</option>
                        <option>50 - 200 UNITS</option>
                        <option>200 - 1000 UNITS</option>
                        <option>1000+ UNITS</option>
                    </select>
                    <textarea placeholder="TELL US ABOUT YOUR REQUIREMENT" rows={3} className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-[10px] font-black uppercase tracking-widest outline-none focus:border-[#F2A93B] transition-all resize-none"></textarea>
                    
                    <button className="w-full bg-[#1A1A1A] text-white font-black p-5 rounded-xl uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#F2A93B] transition-all shadow-lg">
                        Send Request <Send size={16} />
                    </button>
                </form>
              </div>
           </div>
        </section>

      </main>
    </div>
  )
}