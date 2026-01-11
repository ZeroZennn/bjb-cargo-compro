import SectionWrapper from "@/components/ui/SectionWrapper";
import { Ship, Container, Package } from "lucide-react";

export default function SeaFreightSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Konten Teks */}
        <div className="md:w-1/2 order-2 md:order-1">
          <div className="flex items-center gap-2 mb-4">
             <span className="p-2 bg-blue-50 rounded-lg text-blue-700">
                <Ship size={24} />
             </span>
             <span className="text-blue-700 font-bold uppercase tracking-wider text-sm">Sea Freight Service</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Solusi Pengiriman Jalur Laut yang Efisien & Hemat Biaya
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Layanan pengiriman kargo via laut adalah spesialisasi kami. Kami bekerjasama dengan Shipping Line terkemuka untuk memastikan slot kontainer tersedia dengan harga kompetitif, baik untuk pengiriman Ekspor maupun Impor.
          </p>

          <div className="space-y-6">
            {/* Feature 1: FCL */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Container className="text-bjb-600" size={28} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">FCL (Full Container Load)</h4>
                <p className="text-sm text-gray-600 mt-1">
                    Sewa satu kontainer penuh (20ft, 40ft, 40HC) khusus untuk barang Anda. Lebih aman, tersegel, dan langsung sampai tujuan tanpa tercampur barang lain.
                </p>
              </div>
            </div>

            {/* Feature 2: LCL */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Package className="text-bjb-600" size={28} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">LCL (Less Container Load)</h4>
                <p className="text-sm text-gray-600 mt-1">
                    Kirim barang dalam jumlah kecil? Kami gabungkan (konsolidasi) barang Anda dengan pengirim lain dalam satu kontainer. Bayar hanya sesuai volume (CBM) yang dipakai.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Image */}
        <div className="md:w-1/2 order-1 md:order-2">
           <div className="relative h-[400px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl group">
              {/* Placeholder untuk Gambar Kapal Kargo */}
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition duration-500"></div>
              <div className="flex items-center justify-center h-full text-gray-500 font-medium bg-gray-100">
                  Image: Container Ship at Sea
              </div>
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
}