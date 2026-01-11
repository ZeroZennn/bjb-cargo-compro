import SectionWrapper from "@/components/ui/SectionWrapper";
import { PackageOpen, AlertTriangle } from "lucide-react";

const lartasItems = [
  "Mesin Bekas & Alat Berat",
  "Besi Baja & Konstruksi",
  "Tekstil & Produk Tekstil (TPT)",
  "Alat Kesehatan (Alkes)",
  "Produk Elektronik",
  "Barang SNI Wajib",
  "Kimia & Farmasi (BPOM)",
  "Sparepart & Otomotif"
];

export default function BoronganList() {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Deskripsi */}
        <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-bjb-900 mb-6">
                Spesialis Impor Borongan & Barang Lartas
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
                Khawatir barang tertahan karena regulasi pembatasan (Lartas)? <br/><br/>
                BJB CARGO menyediakan solusi Impor Borongan <em>(All-in)</em> untuk komoditas yang memerlukan perizinan khusus. Layanan ini mengurangi risiko <strong>NOTUL</strong> (Denda/Tambah Bayar) dan menyederhanakan perhitungan biaya import Anda.
            </p>
            
            <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg flex gap-4">
                <AlertTriangle className="text-orange-500 flex-shrink-0" />
                <p className="text-sm text-orange-800 font-medium">
                    Kami menangani perizinan kompleks: Depperindag, L/S, SNI, Postel, Bappeten, hingga Karantina Pertanian.
                </p>
            </div>
        </div>

        {/* Grid Barang */}
        <div className="md:w-1/2">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <PackageOpen className="text-bjb-600"/>
                Komoditas yang Sering Kami Tangani:
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {lartasItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-bjb-300 transition cursor-default">
                        <div className="w-2 h-2 bg-bjb-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}