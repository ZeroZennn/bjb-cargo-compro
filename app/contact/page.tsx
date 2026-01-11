import Navbar from "@/components/layout/Navbar"; // Opsional jika sudah di layout global, hapus baris ini
import ServiceHero from "@/components/services/ServiceHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar sudah otomatis ada dari layout.tsx global, 
          tapi kalau di layout global Anda matikan navbarnya, pasang di sini.
          Jika di layout global Navbar aktif, hapus baris <Navbar /> di bawah ini. */}
      {/* <Navbar /> */}

      {/* 1. Hero Section */}
      <ServiceHero 
        title="Hubungi Kami"
        subtitle="Tim kami siap membantu kebutuhan logistik Anda. Dapatkan penawaran harga terbaik dan konsultasi gratis sekarang."
        imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop" 
      />

      {/* 2. Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Kiri: Info & Map */}
          <ContactInfo />

          {/* Kanan: Form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>

    </main>
  );
}