import Navbar from "@/components/layout/Navbar";
import ServiceHero from "@/components/services/ServiceHero";
import SeaFreightSection from "@/components/services/freight/SeaFreightSection";
import AirFreightSection from "@/components/services/freight/AirFreightSection";
import GlobalNetwork from "@/components/services/freight/GlobalNetwork";

export default function InternationalFreightPage() {
  return (
    <main className="min-h-screen bg-white">

      
      {/* 1. Hero Section - Gambar Kapal Kargo di Lautan */}
      <ServiceHero 
        title="International Sea & Air Freight"
        subtitle="Melayani pengiriman ekspor dan impr ke seluruh dunia dengan koneksi luas, tarif kompetitif, dan pilihan moda transportasi yang fleksibel."
        imageSrc="https://images.unsplash.com/photo-1494412574643-35d32468817e?q=80&w=2070&auto=format&fit=crop" 
      />

      {/* 2. Sea Freight Section (Layanan Laut) */}
      <SeaFreightSection />

      {/* 3. Air Freight Section (Layanan Udara) */}
      <AirFreightSection />

      {/* 4. Global Network (Peta Jaringan) */}
      <GlobalNetwork />o

      {/* Footer Placeholder */}
      <footer className="bg-gray-900 text-white py-8 text-center text-sm mt-12">
        <p>&copy; 2024 PT. Betari Jaya Bersama. All Rights Reserved.</p>
      </footer>
    </main>
  );
}