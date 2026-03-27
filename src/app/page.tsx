"use client"
import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Briefcase, 
  Layers, 
  HardHat, 
  ArrowRight,
  ArrowUpRight,
  Building2, 
  Plane, 
  FlameKindling, 
  Stethoscope, 
  UtensilsCrossed, 
  GraduationCap,
  ShoppingBag
} from 'lucide-react'

export default function HomePage() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])
  const [isVisible, setIsVisible] = useState(false)

  const sideCategories = [
    { name: "School Uniforms", slug: "school-uniforms" },
    { name: "Hospitality Wear", slug: "hospitality-wear" },
    { name: "Industrial Safety", slug: "industrial-safety" },
    { name: "Medical Scrubs", slug: "medical-scrubs" },
    { name: "Corporate Gifts", slug: "corporate-gifts" },
    { name: "Custom Embroidery", slug: "custom-embroidery" }
  ];
  
  const newArrivals = [
    { name: "Premium Oxford Blazer", tag: "Hospitality", img: "/new-arrival-1.png" },
    { name: "High-Vis FR Coverall", tag: "Industrial", img: "/new-arrival-2.png" },
    { name: "Eco-Cotton Polo", tag: "Corporate", img: "/new-arrival-3.png" },
    { name: "Antibacterial Scrub Set", tag: "Medical", img: "/new-arrival-4.png" },
  ];

  const safetyCategories = [
    { title: "Head Protection", desc: "Certified Hard Hats, Bump Caps & Faceshields.", img: "/images/safety/helmet.webp", products: 25 },
    { title: "Hand Protection", desc: "Cut-Resistant, Chemical, & General Handling Gloves.", img: "/images/safety/gloves.webp", products: 40 },
    { title: "Footwear & Boots", desc: "Composite Toe & Steel Toe ISO Safety Boots.", img: "/images/safety/boots.webp", products: 32 },
    { title: "Respiratory Gear", desc: "N95, Half-Face & Full-Face Industrial Masks.", img: "/images/safety/respirator.webp", products: 18 },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setIsVisible(true)
      else setIsVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="bg-[#fcfcfc] min-h-screen text-[#1A1A1A]">
      <main className="max-w-7xl mx-auto p-4 md:p-6 pb-24">
        
        {/* HERO SECTION */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 mt-4">
          <aside className="hidden md:block w-64 bg-white rounded-xl shadow-sm border border-slate-100 p-5 h-fit">
            <h3 className="font-bold mb-4 uppercase text-xs tracking-widest border-b pb-2">Categories</h3>
            <ul className="space-y-4">
              {sideCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    href={`/categories/${cat.slug}`}
                    className="flex justify-between items-center text-slate-600 hover:text-[#F2A93B] cursor-pointer group transition-colors"
                  >
                    <span className="text-sm font-semibold">{cat.name}</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex-1 bg-[#1E4DFF] rounded-2xl relative overflow-hidden shadow-xl border-b-4 border-[#F2A93B] h-[450px] flex items-center">
             <div className="relative z-20 pl-10 md:pl-16 w-full max-w-lg">
                <span className="text-[#F2A93B] font-bold uppercase tracking-widest text-xs mb-4 block">FZC LLC Registered</span>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-white italic">UAE's Leading B2B <br/> Uniform Supplier</h1>
                
                <div className="flex gap-4">
                  <Link href="/contact">
                    <button className="bg-[#F2A93B] text-white font-black py-4 px-10 rounded-lg shadow-lg uppercase text-sm tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all">
                      Wholesale Price Inquiries
                    </button>
                  </Link>
                </div>
             </div>
             <div className="absolute right-0 top-0 h-full w-[55%] z-10 overflow-hidden" ref={emblaRef}>
                <div className="flex h-full">
                  {["/images/safety-gear.png", "/images/chef-coat.png", "/images/safety-worker.png", "/images/bedding-linen.png", "/images/hospitality-worker.png","/images/medical-scrub.png"].map((src, i) => (
                    <div key={i} className="flex-[0_0_100%] h-full relative flex items-end justify-center">
                      <Image 
                        src={src} 
                        alt="Uniforms" 
                        fill 
                        className="object-contain object-bottom" 
                        // Performance fixes:
                        priority={i === 0} // Only first image is priority
                        fetchPriority={i === 0 ? "high" : "low"}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E4DFF] via-transparent to-transparent z-20" />
             </div>
          </div>
        </div>

        {/* TRUST BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { icon: <ShieldCheck size={28}/>, title: "Quality Certified", desc: "ISO Standards" },
            { icon: <Truck size={28}/>, title: "UAE-Wide Delivery", desc: "7 Emirates" },
            { icon: <Clock size={28}/>, title: "Fast Lead Times", desc: "Local Production" },
            { icon: <Briefcase size={28}/>, title: "Credit Accounts", desc: "For Corporates" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 border border-slate-100">
              <div className="text-[#F2A93B]">{item.icon}</div>
              <div>
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CORE COLLECTIONS */}
        <section className="mb-24 px-4 md:px-0">
          <div className="flex flex-col mb-10">
            <span className="text-[#F2A93B] font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Direct Factory Supply</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic leading-tight">Our Core <span className="text-[#F2A93B]">Collections</span></h2>
            <p className="text-slate-500 font-medium mt-2 uppercase text-[10px] tracking-widest">Premium manufacturing for UAE's leading sectors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Professional Uniforms", sub: "Schools • Corporate • Medical", img: "/images/uniform-display.png", href: "/categories/school-uniforms" },
              { title: "Industrial Safety Gear", sub: "SIRA Approved • FR Rated", img: "/images/safety-display.png", href: "/categories/industrial-safety" },
              { title: "Hospitality & Linen", sub: "Towels • Bedding • Slippers", img: "/images/hospitality-display.png", href: "/categories/hospitality-wear" }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
                </div>
                <div className="absolute top-0 left-0 w-full p-10 z-20">
                  <h3 className="text-3xl font-black uppercase leading-[0.9] text-white group-hover:text-[#F2A93B] transition-colors drop-shadow-md">
                    {item.title.split(' ')[0]} <br/> 
                    <span className="text-2xl opacity-90">{item.title.split(' ').slice(1).join(' ')}</span>
                  </h3>
                  <div className="h-1 w-12 bg-[#F2A93B] mt-4 group-hover:w-20 transition-all duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-10 z-20 flex flex-col gap-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">{item.sub}</p>
                  <span className="w-full text-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-black py-4 px-8 rounded-2xl text-[10px] uppercase tracking-widest group-hover:bg-[#F2A93B] group-hover:border-[#F2A93B] group-hover:text-white transition-all shadow-xl">View Range</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* NEW ARRIVALS */}
        <section className="mb-24">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[#F2A93B] font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Season 2026</span>
              <h2 className="text-3xl font-black uppercase italic">New <span className="text-[#F2A93B]">Arrivals</span></h2>
            </div>
            <Link href="/categories" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-[#F2A93B] pb-1 hover:text-[#F2A93B] transition-colors">
              View All Collections
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((item, i) => (
              <div key={i} className="group relative">
                <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-sm mb-4">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <Link href="/contact">
                      <button className="bg-white text-[#1A1A1A] font-black py-3 px-6 rounded-xl uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-[#F2A93B] hover:text-white transition-all shadow-xl">
                        Inquire Now <ShoppingBag size={14} />
                      </button>
                    </Link>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#1A1A1A]">{item.tag}</p>
                  </div>
                </div>
                <div className="px-2 flex justify-between items-start">
                  <div>
                    <h3 className="font-black text-xs uppercase tracking-wider text-slate-800">{item.name}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-1">Available for Bulk Order</p>
                  </div>
                  <div className="text-[#F2A93B]"><ArrowUpRight size={18} /></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FABRIC TECHNOLOGY */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-100 p-8 rounded-3xl shadow-sm overflow-hidden">
          <div>
            <div className="bg-orange-50 w-fit p-3 rounded-2xl text-[#F2A93B] mb-6"><Layers size={32} /></div>
            <h2 className="text-3xl font-black mb-4 uppercase leading-none italic">Superior Fabric <br /><span className="text-[#F2A93B]">Technology</span></h2>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed text-sm uppercase tracking-tight">We source 240+ GSM treated fabrics from top mills, designed specifically for the Middle Eastern climate.</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 font-black text-[10px] uppercase tracking-widest">
              {["Anti-Pilling", "Color Fast", "Sweat Absorbent", "Shrink Resistant"].map(feat => (
                <div key={feat} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F2A93B] rounded-full" /> {feat}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 md:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-inner bg-slate-50 border border-slate-100 group">
            <Image 
                src="/fabric-texture.webp" 
                alt="Premium Fabric Texture" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/20 to-transparent" />
          </div>
        </section>

        {/* SAFETY ESSENTIALS */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#1A1A1A] text-[#F2A93B] p-3 rounded-xl"><HardHat size={28}/></div>
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">ISO-Certified <span className="text-[#F2A93B]">Safety Equipment</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyCategories.map((cat, i) => (
              <div key={i} className="group bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-lg hover:border-[#F2A93B] transition-all cursor-pointer">
                <div>
                   <div className="aspect-[16/10] bg-[#F5F7FF] rounded-2xl mb-5 overflow-hidden relative">
                     <Image 
                        src={cat.img} 
                        alt={cat.title} 
                        fill 
                        className="object-contain object-bottom transition-transform group-hover:scale-105" 
                        sizes="(max-width: 640px) 100vw, 25vw"
                     />
                   </div>
                   <h3 className="text-lg font-black mb-2 uppercase text-[#1A1A1A]">{cat.title}</h3>
                   <p className="text-xs font-medium text-slate-500 mb-6 leading-relaxed">{cat.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="text-[#F2A93B] text-[10px] font-bold uppercase">{cat.products} Products</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CORPORATE GIFTING */}
        <section className="mb-24">
          <div className="mb-10">
            <span className="text-[#F2A93B] text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">Specialty Curations</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter leading-tight italic">Corporate Gifting & <span className="text-[#F2A93B]">Hampers</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Exec Select Hamper", sub: "Curated Gift Hamper", moq: "10 Hampers", img: "/images/gifts/exec-hamper.webp", desc: "Premium wooden crate with office essentials and treats." },
              { title: "Office Occasion Hamper", sub: "Team Appreciation", moq: "10 Hampers", img: "/images/gifts/team-hamper.webp", desc: "Branded wireless gear and artisanal snacks." },
              { title: "Festive Gifts", sub: "Seasonal Celebrations", moq: "10 Hampers", img: "/images/gifts/festive-hamper.webp", desc: "Sophisticated themed hampers with branded keepsakes." }
            ].map((gift, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <Image 
                    src={gift.img} 
                    alt={gift.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black uppercase mb-1 group-hover:text-[#F2A93B] transition-colors">{gift.title}</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{gift.sub}</p>
                  <p className="text-xs text-slate-500 font-medium mb-6">{gift.desc}</p>
                  <p className="text-[#1E4DFF] font-black text-xs uppercase mb-4 tracking-tighter">MOQ: {gift.moq}</p>
                  <Link href="/categories/corporate-gifts" className="block">
                    <button className="w-full py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] font-black text-[10px] uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white rounded-full transition-all">Explore Gifts</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="mb-24 py-16 bg-[#F8FAFC] rounded-[3rem] px-8 md:px-12">
          <h2 className="text-3xl font-black uppercase mb-12 italic">Industries We <span className="text-[#F2A93B]">Serve</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Oil & Gas", icon: <FlameKindling size={32} /> },
              { name: "Construction", icon: <Building2 size={32} /> },
              { name: "Aviation", icon: <Plane size={32} /> },
              { name: "Healthcare", icon: <Stethoscope size={32} /> },
              { name: "Hospitality", icon: <UtensilsCrossed size={32} /> },
              { name: "Education", icon: <GraduationCap size={32} /> },
            ].map((ind, i) => (
              <div key={i} className="flex gap-6 group p-2">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#F2A93B] group-hover:bg-[#F2A93B] group-hover:text-white transition-all duration-300 flex-shrink-0">{ind.icon}</div>
                <div>
                  <h3 className="font-extrabold text-lg uppercase mb-2 group-hover:text-[#1E4DFF]">{ind.name}</h3>
                  <p className="text-xs text-slate-500">Specialized manufacturing adapted to industry standards.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 text-center">
            <span className="text-[#F2A93B] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Insider Access</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 italic">Wholesale <span className="text-[#F2A93B]">Priority</span></h2>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto bg-white p-2 rounded-2xl shadow-sm">
              <input type="email" placeholder="Work email" className="flex-1 px-6 py-4 text-sm font-bold outline-none" required />
              <button type="submit" className="bg-[#F2A93B] text-white font-black py-4 px-10 rounded-xl text-xs uppercase tracking-widest">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      {/* WHATSAPP */}
      <a href="https://wa.me/971509305342" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 bg-[#25D366] text-white py-3 px-6 rounded-full shadow-2xl z-50 flex items-center gap-3 font-black uppercase text-xs tracking-widest border-4 border-white hover:scale-105 transition-all group">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="group-hover:rotate-12 transition-transform"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.632 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        WhatsApp Inquiry
      </a>

      {/* BACK TO TOP BUTTON */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 bg-[#1A1A1A] text-[#F2A93B] w-12 h-12 rounded-xl shadow-2xl flex items-center justify-center hover:bg-[#F2A93B] hover:text-white transition-all z-50 animate-bounce"
        >
          <ArrowRight className="-rotate-90" size={20} />
        </button>
      )}
    </div>
  )
}
