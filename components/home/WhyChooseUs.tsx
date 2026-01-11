import SectionWrapper from '../ui/SectionWrapper';
import { ShieldCheck, Clock, Users, Globe } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div>
          <span className="text-bjb-700 font-bold uppercase tracking-wide text-sm">Mengapa BJB Cargo?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
            Mitra Logistik dengan Legalitas & Pengalaman Teruji
          </h2>
          <p className="text-gray-600 mb-8">
            PT. BETARI JAYA BERSAMA (BJB CARGO) memiliki legalitas resmi (API-U, NIB) dan didukung tenaga operasional yang berpengalaman lebih dari 15 tahun.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <ShieldCheck className="text-bjb-600 flex-shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-gray-900">Legalitas Resmi</h4>
                <p className="text-sm text-gray-500 mt-1">Terverifikasi OSS & Bea Cukai.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="text-bjb-600 flex-shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-gray-900">Tim Ahli</h4>
                <p className="text-sm text-gray-500 mt-1">15+ Tahun Pengalaman.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe className="text-bjb-600 flex-shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-gray-900">Jaringan Global</h4>
                <p className="text-sm text-gray-500 mt-1">Koneksi Asia, Eropa & US.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-bjb-600 flex-shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-gray-900">Respon Cepat</h4>
                <p className="text-sm text-gray-500 mt-1">Layanan satu pintu informasi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
           {/* Ganti div ini dengan <Image /> NextJS nantinya */}
           <div className="absolute inset-0 flex items-center justify-center bg-bjb-100 text-bjb-800 font-bold">
             IMAGE: Activities at Port / Warehouse
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
}