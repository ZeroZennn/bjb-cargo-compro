import SectionWrapper from "@/components/ui/SectionWrapper";
import { Boxes, Forklift, MapPin } from "lucide-react";
import Image from "next/image";

export default function WarehousingSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Kolom Kiri: Warehousing */}
        <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Boxes className="text-bjb-600" size={32} />
                Pergudangan & Distribusi
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
                Fungsi gudang BJB Cargo tidak hanya sebagai tempat penyimpanan, tapi sebagai <strong>Pusat Distribusi</strong>. Kami membantu manajemen stok, <em>re-packing</em>, hingga distribusi barang ke berbagai titik (ritel/cabang) sesuai instruksi Anda.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-900">Penyimpanan</h4>
                    <p className="text-sm text-gray-500">Short & Long Term Storage</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-900">Distribusi</h4>
                    <p className="text-sm text-gray-500">Pengiriman Partai Besar/Kecil</p>
                </div>
            </div>
        </div>

        {/* Kolom Kanan: Project Cargo (Highlight Khusus) */}
        <div className="md:w-1/2 bg-bjb-900 text-white p-8 rounded-2xl relative overflow-hidden">
            {/* Background Pattern Decoration */}
            <div className="absolute right-0 bottom-0 opacity-10">
                <Forklift size={150} />
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Forklift className="text-bjb-500" />
                    Project Cargo Handling
                </h3>
                <p className="text-bjb-100 mb-6 text-sm leading-relaxed">
                    Kami berpengalaman menangani pengiriman barang proyek (Project Cargo) seperti material konstruksi, alat berat, dan mesin industri ke lokasi *remote area* di seluruh Indonesia.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs">Alat Berat</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs">Konstruksi</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs">Mesin Pabrik</span>
                </div>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}