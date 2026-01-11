import Navbar from "@/components/layout/Navbar";
import ServiceHero from "@/components/services/ServiceHero";
import DomesticCoverage from "@/components/services/domestic/DomesticCoverage";
import DoorToDoorFeature from "@/components/services/domestic/DoorToDoorFeature";
import WarehousingSection from "@/components/services/domestic/WarehousingSection";
import { Phone } from "lucide-react";

export default function DomesticPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Hero Section - Gambar Truk Logistik / Gudang */}
      <ServiceHero 
        title="Domestic & Logistics Distribution"
        subtitle="Solusi distribusi logistik antar pulau, pergudangan, dan layanan Door to Door ke seluruh wilayah Indonesia dengan jaringan terpercaya."
        imageSrc="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070&auto=format&fit=crop" 
      />

      {/* 2. Coverage & Network */}
      <DomesticCoverage />

      {/* 3. Door to Door Feature */}
      <DoorToDoorFeature />

      {/* 4. Warehousing & Project Cargo */}
      <WarehousingSection />

      {/* 5. Simple CTA */}
      <div className="bg-white border-t border-gray-100 py-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Butuh Kirim Barang ke Luar Pulau?</h3>
        <a 
            href="https://wa.me/628123456789"
            className="inline-flex items-center gap-2 bg-bjb-700 text-white px-8 py-3 rounded-full font-bold hover:bg-bjb-800 transition"
        >
            <Phone size={20} />
            Cek Ongkir Domestik
        </a>
      </div>

      {/* Footer Placeholder */}
      <footer className="bg-gray-900 text-white py-8 text-center text-sm">
        <p>&copy; 2024 PT. Betari Jaya Bersama. All Rights Reserved.</p>
      </footer>
    </main>
  );
}