"use client"; // Wajib ada karena kita pakai useState

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Globe, ShieldCheck, Truck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk Mobile Menu Utama
  const [isServiceOpen, setIsServiceOpen] = useState(false); // State untuk Dropdown di Mobile

  // Data Menu Dropdown agar mudah dikelola
  const serviceLinks = [
    {
      name: "International Freight",
      href: "/services/international-freight",
      desc: "Sea & Air Export-Import",
      icon: Globe,
    },
    {
      name: "Customs & Legal",
      href: "/services/customs-legal",
      desc: "Undername, Clearance & PIB",
      icon: ShieldCheck,
    },
    {
      name: "Domestic & Distribution",
      href: "/services/domestic",
      desc: "Door to Door & Warehousing",
      icon: Truck,
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* --- LOGO --- */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/" className="font-bold text-2xl text-bjb-900 flex flex-col leading-none">
              <span>BJB<span className="text-bjb-500">CARGO</span></span>
              <span className="text-[10px] text-gray-500 font-medium tracking-widest mt-1">LOGISTICS PARTNER</span>
            </Link>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-bjb-700 font-medium transition">
              Home
            </Link>
            
            <Link href="/about" className="text-gray-600 hover:text-bjb-700 font-medium transition">
              About Us
            </Link>

            {/* Dropdown Wrapper */}
            <div className="relative group h-20 flex items-center">
              <button className="flex items-center text-gray-600 group-hover:text-bjb-700 font-medium transition focus:outline-none">
                Services
                <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Content */}
              <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg border border-gray-100 overflow-hidden 
                invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="py-2">
                  {serviceLinks.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      className="flex items-start px-4 py-3 hover:bg-bjb-50 transition group/item"
                    >
                      <item.icon className="mt-1 w-5 h-5 text-bjb-500 group-hover/item:text-bjb-700" />
                      <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="text-gray-600 hover:text-bjb-700 font-medium transition">
              Contact
            </Link>
          </div>

          {/* --- CTA BUTTON (Desktop) --- */}
          <div className="hidden md:flex">
             <Link 
               href="/contact" 
               className="bg-bjb-700 text-white px-6 py-2.5 rounded-full hover:bg-bjb-800 transition shadow-lg shadow-bjb-700/20 flex items-center gap-2 font-medium text-sm"
             >
                <Phone size={16} />
                Hubungi Kami
             </Link>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-bjb-800 p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-bjb-700 hover:bg-bjb-50 rounded-md border-b border-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-bjb-700 hover:bg-bjb-50 rounded-md border-b border-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Dropdown (Accordion Style) */}
            <div>
              <button 
                onClick={() => setIsServiceOpen(!isServiceOpen)}
                className="w-full flex justify-between items-center px-3 py-4 text-base font-medium text-gray-700 hover:text-bjb-700 hover:bg-bjb-50 rounded-md border-b border-gray-50 focus:outline-none"
              >
                Services
                <ChevronDown size={18} className={`transition-transform duration-300 ${isServiceOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Sub-menu Mobile */}
              <div className={`${isServiceOpen ? 'block' : 'hidden'} bg-gray-50 px-4 py-2 space-y-2`}>
                {serviceLinks.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-gray-600 hover:text-bjb-700 hover:bg-white rounded-md transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={18} className="text-bjb-500"/>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/contact" 
              className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-bjb-700 hover:bg-bjb-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-6">
              <Link href="/contact" className="w-full bg-bjb-700 text-white px-4 py-3 rounded-md flex justify-center items-center gap-2 font-bold">
                <Phone size={18} />
                Hubungi Kami Sekarang
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}