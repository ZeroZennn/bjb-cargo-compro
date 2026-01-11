import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import ServiceSummary from '@/components/home/ServiceSummary';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Setiap section dikelola di file terpisah */}
      <HeroSection />
      
      <ServiceSummary />
      
      <WhyChooseUs />

      {/* Footer bisa ditambahkan disini atau di layout.tsx */}
      <footer className="bg-bjb-900 text-white py-12 text-center">
         <p>&copy; 2024 PT. Betari Jaya Bersama. All Rights Reserved.</p>
      </footer>
    </main>
  );
}