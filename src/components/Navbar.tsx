"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, ShoppingBag, Phone, ArrowRight, X } from 'lucide-react'

// Category index for searching
const searchIndex = [
  { title: "School Uniforms", slug: "school-uniforms" },
  { title: "Hospitality Wear", slug: "hospitality-wear" },
  { title: "Industrial Safety", slug: "industrial-safety" },
  { title: "Medical Scrubs", slug: "medical-scrubs" },
  { title: "Corporate Gifts", slug: "corporate-gifts" },
  { title: "Custom Embroidery", slug: "custom-embroidery" },
];

export default function Navbar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<{title: string, slug: string}[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)

  // Handle outside clicks to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Filter logic
  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchIndex.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  const handleSelect = (slug: string) => {
    router.push(`/categories/${slug}`)
    setQuery('')
    setIsOpen(false)
  }

  return (
    <nav className="border-b sticky top-0 bg-white z-[100] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-8">
        
        {/* LOGO */}
        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/ logo.png" 
            alt="Perfect Tech" 
            width={160} 
            height={50} 
            className="object-contain" 
            priority 
            unoptimized 
          />
        </Link>

        {/* SEARCH BAR - TEXT COLOR UPDATED */}
        <div className="hidden lg:flex flex-1 max-w-md relative" ref={searchRef}>
          <div className="flex w-full">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query.length > 0 && setIsOpen(true)}
                className="w-full border-2 border-[#F2A93B] rounded-l-md px-4 py-2 focus:outline-none text-sm font-bold pr-10 text-black placeholder:text-slate-400" 
              />
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-red-500"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <button className="bg-[#F2A93B] text-white px-5 py-2 rounded-r-md hover:opacity-90 transition-opacity">
              <Search size={20} />
            </button>
          </div>

          {/* SEARCH RESULTS DROPDOWN */}
          {isOpen && results.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border-2 border-slate-100 rounded-b-xl shadow-2xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-1">
              {results.map((item) => (
                <button
                  key={item.slug}
                  onClick={() => handleSelect(item.slug)}
                  className="w-full text-left px-5 py-3 hover:bg-slate-50 flex items-center justify-between group"
                >
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-600 group-hover:text-[#F2A93B] transition-colors">
                    {item.title}
                  </span>
                  <ArrowRight size={14} className="text-slate-300 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* NAVIGATION MENU - UPDATED */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[11px] font-black uppercase tracking-widest text-slate-700 hover:text-[#F2A93B] transition-colors">
            Home
          </Link>
          
          <Link href="/categories" className="text-[11px] font-black uppercase tracking-widest text-slate-700 hover:text-[#F2A93B] transition-colors">
            Collections
          </Link>

          <Link href="/about" className="text-[11px] font-black uppercase tracking-widest text-slate-700 hover:text-[#F2A93B] transition-colors">
            About Us
          </Link>

          <Link href="/contact" className="text-[11px] font-black uppercase tracking-widest text-slate-700 hover:text-[#F2A93B] transition-colors">
            Contact
          </Link>
        </div>

        {/* ACTION ICONS */}
        <div className="flex items-center gap-6">
          <Link href="/contact" className="flex flex-col items-center text-[#F2A93B] hover:opacity-80 transition-opacity">
            <ShoppingBag size={22} />
            <span className="text-[10px] font-black uppercase mt-1">Quotes</span>
          </Link>

          <a 
            href="tel:+971543787897" 
            className="hidden md:flex items-center gap-2 border-2 border-[#F2A93B] text-[#F2A93B] px-5 py-2 rounded-full hover:bg-[#F2A93B] hover:text-white transition-all group"
          >
            <Phone size={16} />
            <span className="font-black text-sm uppercase tracking-tight">Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  )
}