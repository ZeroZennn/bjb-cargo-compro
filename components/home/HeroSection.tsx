import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-bjb-900 text-white h-[600px] flex items-center">
      {/* Background Image Overlay (Nanti ganti url gambar) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" 
        style={{backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop")'}} 
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-bjb-900 via-bjb-900/80 to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <span className="text-bjb-100 font-semibold tracking-wider uppercase text-sm">PT. Betari Jaya Bersama</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Solusi Logistik Terpadu & Terpercaya
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Melayani International Freight, Customs Clearance, hingga Door to Door Service dengan legalitas resmi dan pengalaman 15+ tahun.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-bjb-500 hover:bg-bjb-600 text-white px-8 py-3 rounded-md font-semibold transition flex items-center justify-center gap-2">
              Minta Penawaran <ArrowRight size={20}/>
            </Link>
            <Link href="/about" className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-semibold transition text-center">
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}