import Navbar from "@/components/layout/Navbar";
import ServiceHero from "@/components/services/ServiceHero";
import UndernameSection from "@/components/services/customs/UndernameSection";
import ClearanceDetail from "@/components/services/customs/ClearanceDetail";
import BoronganList from "@/components/services/customs/BoronganList";
import { Phone } from "lucide-react";

export default function CustomsLegalPage() {
  return (
    <main className="min-h-screen bg-white">

      
      {/* 1. Hero Section */}
      <ServiceHero 
        title="Customs Clearance & Legal Solutions"
        subtitle="Solusi perizinan impor, sewa undername, dan pengurusan pabean resmi tanpa rasa khawatir. Kami memastikan barang Anda keluar dari pelabuhan dengan aman."
        imageSrc="https://images.unsplash.com/photo-1565514020176-db76fa566089?q=80&w=2070&auto=format&fit=crop" 
        // ^ Foto tumpukan kontainer/port inspection
      />

      {/* 2. Undername Section */}
      <UndernameSection />

      {/* 3. Clearance Process & Technical */}
      <ClearanceDetail />

      {/* 4. Lartas & Borongan List */}
      <BoronganList />

      {/* 5. CTA Khusus Halaman Ini */}
      <section className="bg-bjb-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Jangan Biarkan Barang Anda Tertahan di Pelabuhan
          </h2>
          <p className="text-bjb-100 mb-8 text-lg">
            Konsultasikan HS Code dan kebutuhan perizinan Anda kepada tim ahli kami sebelum melakukan pengiriman. Gratis Konsultasi!
          </p>
          <a 
            href="https://wa.me/628123456789?text=Halo%20BJB%20Cargo,%20saya%20mau%20konsultasi%20soal%20Customs/Undername"
            className="inline-flex items-center gap-2 bg-bjb-500 text-white px-8 py-4 rounded-full font-bold hover:bg-bjb-600 transition shadow-lg shadow-bjb-500/30"
          >
            <Phone size={20} />
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer Placeholder (Nanti pakai komponen Footer beneran) */}
      <footer className="bg-gray-900 text-white py-8 text-center text-sm">
        <p>&copy; 2024 PT. Betari Jaya Bersama. All Rights Reserved.</p>
      </footer>
    </main>
  );
}