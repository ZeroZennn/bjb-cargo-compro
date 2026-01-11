import SectionWrapper from "@/components/ui/SectionWrapper";
import { Plane, Clock, ShieldCheck } from "lucide-react";

export default function AirFreightSection() {
  return (
    <div className="bg-gray-50">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Visual Image (Kiri) */}
            <div className="md:w-1/2">
                <div className="relative h-[400px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                    {/* Placeholder untuk Gambar Pesawat Kargo/Bandara */}
                    <div className="flex items-center justify-center h-full text-gray-500 font-medium bg-white border-2 border-dashed border-gray-300">
                        Image: Air Cargo Loading
                    </div>
                </div>
            </div>

            {/* Konten Teks (Kanan) */}
            <div className="md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                    <span className="p-2 bg-orange-100 rounded-lg text-orange-600">
                        <Plane size={24} />
                    </span>
                    <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Air Freight Service</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Direct Flight: Solusi Kargo Cepat & Tepat Waktu
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Ketika waktu adalah prioritas, layanan kargo udara BJB CARGO adalah jawabannya. Kami menangani pengiriman barang *urgent*, *high-value*, atau *perishable* (mudah rusak) dengan akses ke maskapai penerbangan komersial dan kargo utama.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <Clock className="text-bjb-600 mb-2" size={24} />
                        <h4 className="font-bold text-gray-900">Prioritas Waktu</h4>
                        <p className="text-xs text-gray-500 mt-1">Lead time terpendek untuk pengiriman mendesak.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <ShieldCheck className="text-bjb-600 mb-2" size={24} />
                        <h4 className="font-bold text-gray-900">Handling Aman</h4>
                        <p className="text-xs text-gray-500 mt-1">Prosedur keamanan ketat bandara untuk barang berharga.</p>
                    </div>
                </div>
            </div>
        </div>
      </SectionWrapper>
    </div>
  );
}