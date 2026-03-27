"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const categories = [
    { name: "School Uniforms", slug: "school-uniforms" },
    { name: "Hospitality Wear", slug: "hospitality-wear" },
    { name: "Industrial Safety", slug: "industrial-safety" },
    { name: "Medical Scrubs", slug: "medical-scrubs" },
    { name: "Corporate Gifts", slug: "corporate-gifts" },
    { name: "Custom Embroidery", slug: "custom-embroidery" },
  ];

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* BRAND SECTION */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/ logo.png" 
                alt="Perfect Tech" 
                width={150} 
                height={45} 
                className="object-contain" 
                unoptimized 
              />
            </Link>
            <p className="text-slate-500 text-[11px] font-medium leading-relaxed tracking-tight">
              UAE's premier FZC LLC registered E-Commerce platform for industrial safety, school uniforms, and corporate Gifting Solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-[#F2A93B] transition-colors"><Instagram size={18}/></Link>
              <Link href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-[#F2A93B] transition-colors"><Linkedin size={18}/></Link>
              <Link href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-[#F2A93B] transition-colors"><Facebook size={18}/></Link>
            </div>
          </div>

          {/* B2B CATEGORIES */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] mb-8">B2B Categories</h4>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    href={`/categories/${cat.slug}`} 
                    className="text-slate-500 text-[11px] font-bold uppercase tracking-widest hover:text-[#F2A93B] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY SECTION */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] mb-8">Company</h4>
            <ul className="space-y-4">
               <li><Link href="/" className="text-slate-500 text-[11px] font-bold uppercase tracking-widest hover:text-[#F2A93B] transition-colors">Home</Link></li>
              <li><Link href="/categories" className="text-slate-500 text-[11px] font-bold uppercase tracking-widest hover:text-[#F2A93B] transition-colors">Collection</Link></li>
              <li><Link href="/about" className="text-slate-500 text-[11px] font-bold uppercase tracking-widest hover:text-[#F2A93B] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-500 text-[11px] font-bold uppercase tracking-widest hover:text-[#F2A93B] transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-500 text-[11px] font-bold uppercase tracking-widest hover:text-[#F2A93B] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-500 text-[11px] font-bold uppercase tracking-widest hover:text-[#F2A93B] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] mb-8">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F2A93B] shrink-0" />
                <span className="text-slate-500 text-[11px] font-bold tracking-tight">Sharjah Publishing City Free Zone, <br/> Sharjah, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#F2A93B] shrink-0" />
                <a href="tel:+971543787897" className="text-slate-500 text-[11px] font-bold uppercase tracking-widest hover:text-[#F2A93B]">+971 543787897</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#F2A93B] shrink-0" />
                <a href="mailto:sales@perfecttech.store" className="text-slate-500 text-[11px] font-bold lowercase tracking-widest hover:text-[#F2A93B]">sales@perfecttech.store</a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR WITH CLEAN TEXT CREDIT */}
        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              © 2026 Perfect Tech FZC LLC. All Rights Reserved.
            </p>
            <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest italic">
              Quality Manufacturing & Wholesale · Sharjah, UAE
            </p>
          </div>

          {/* SIMPLE TEXT AGENCY CREDIT */}
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
             <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
               Developed by
             </span>
             <Link 
               href="https://www.gro-wize.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[10px] font-black uppercase tracking-tighter text-[#1A1A1A] hover:text-[#F2A93B] transition-colors border-l border-slate-200 pl-3"
             >
               Growize Digital
             </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}