"use client"
import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requirement: 'School Uniforms',
    details: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Success state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', requirement: 'School Uniforms', details: '' });
      } else {
        alert("Message failed to send. Please reach out via WhatsApp.");
      }
    } catch (error) {
      alert("Error connecting to server. Please check your internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen text-[#1A1A1A]">
      <main className="max-w-7xl mx-auto p-4 md:p-6 pb-24">
        <div className="mt-12 mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Get a <span className="text-[#F2A93B]">Bulk Quote</span>
          </h1>
          <p className="text-slate-500 font-medium mt-4">Typical response time: Under 2 hours during business hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* CONTACT INFO CARDS */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="bg-blue-50 text-[#1E4DFF] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="font-black uppercase text-xs tracking-widest mb-2">Our Office</h3>
              <p className="text-sm text-slate-500 font-bold leading-relaxed">Perfect Tech FZC LLC<br/>SPC Free Zone<br/>Sharjah, UAE</p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <a href="tel:+971543787897" className="flex items-center gap-4 p-6 hover:bg-slate-50 transition-colors border-b border-slate-50 group">
                <div className="bg-orange-50 text-[#F2A93B] w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-black uppercase text-[10px] tracking-widest text-slate-400">Direct Call</h3>
                  <p className="text-sm text-slate-700 font-bold">+971 54 378 78 97</p>
                </div>
              </a>
              <a href="https://wa.me/971509305342" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 hover:bg-slate-50 transition-colors group">
                <div className="bg-green-50 text-[#25D366] w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-black uppercase text-[10px] tracking-widest text-slate-400">WhatsApp</h3>
                  <p className="text-sm text-slate-700 font-bold">+971 50 930 53 42</p>
                </div>
              </a>
            </div>

            <div className="bg-[#F2A93B] p-8 rounded-3xl text-white shadow-xl">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="font-black uppercase text-xs tracking-widest mb-2">Operating Hours</h3>
              <p className="text-sm font-bold opacity-90">Mon - Sat: 8:30 AM - 6:00 PM</p>
              <p className="text-[10px] mt-4 font-black uppercase tracking-widest text-white/70">Sunday: Closed</p>
            </div>
          </div>

          {/* QUOTATION FORM / SUCCESS MESSAGE */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col justify-center min-h-[400px]">
            {isSubmitted ? (
              <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="bg-green-50 text-[#25D366] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={40} />
                </div>
                <div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Request Submitted!</h2>
                  <p className="text-slate-500 font-medium max-w-sm mx-auto">
                    Thank you for reaching out. Your request has been sent to our sales team. We will get back to you within 2 hours.
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[10px] font-black uppercase tracking-widest text-[#F2A93B] hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full border-b-2 border-slate-100 focus:border-[#F2A93B] outline-none py-3 text-sm font-bold transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Work Email</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border-b-2 border-slate-100 focus:border-[#F2A93B] outline-none py-3 text-sm font-bold transition-colors" placeholder="email@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Company Name</label>
                    <input type="text" name="company" required value={formData.company} onChange={handleChange} className="w-full border-b-2 border-slate-100 focus:border-[#F2A93B] outline-none py-3 text-sm font-bold transition-colors" placeholder="Business LLC" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Requirement</label>
                    <select name="requirement" value={formData.requirement} onChange={handleChange} className="w-full border-b-2 border-slate-100 focus:border-[#F2A93B] outline-none py-3 text-sm font-bold bg-transparent">
                      <option>School Uniforms</option>
                      <option>Hospitality Wear</option>
                      <option>Industrial Safety</option>
                      <option>Medical Scrubs</option>
                      <option>Corporate Gifts</option>
                      <option>Other / General</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Quantity & Details</label>
                  <textarea name="details" required rows={4} value={formData.details} onChange={handleChange} className="w-full border-b-2 border-slate-100 focus:border-[#F2A93B] outline-none py-3 text-sm font-bold transition-colors resize-none" placeholder="E.g. 200 Sets of PE kits..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#1A1A1A] hover:bg-[#F2A93B] text-white font-black py-5 px-12 rounded-2xl text-xs uppercase tracking-[0.2em] transition-all w-full md:w-fit shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Quote Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}