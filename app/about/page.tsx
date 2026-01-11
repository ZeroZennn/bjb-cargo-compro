import ServiceHero from "@/components/services/ServiceHero";
import CompanyStory from "@/components/about/CompanyStory";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <ServiceHero 
        title="Tentang BJB Cargo"
        subtitle="Mengenal lebih dekat mitra logistik terpercaya Anda. Profesionalisme, Integritas, dan Komitmen untuk kelancaran bisnis Anda."
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
        // Foto: Meeting room / Corporate handshake
      />

      {/* 2. Story & Legalitas */}
      <CompanyStory />

      {/* 3. Visi Misi (Background Hijau Gelap) */}
      <VisionMission />

      {/* 4. Core Values */}
      <CoreValues />

      {/* 5. Simple CTA Bar */}
      <div className="bg-gray-50 py-16 text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Siap Bekerjasama dengan Tim Ahli Kami?
        </h3>
        <a 
            href="/contact" 
            className="inline-block bg-bjb-600 text-white font-bold px-8 py-3 rounded-full hover:bg-bjb-700 transition shadow-lg shadow-bjb-600/20"
        >
            Hubungi Kami Sekarang
        </a>
      </div>

    </main>
  );
}