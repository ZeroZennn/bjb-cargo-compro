import SectionWrapper from "@/components/ui/SectionWrapper";
import { ArrowRight, PackageCheck, Home, Warehouse } from "lucide-react";

export default function DoorToDoorFeature() {
  return (
    <div className="bg-gray-50">
      <SectionWrapper>
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Layanan Door to Door & Port to Port</h2>
            <p className="text-gray-600 mt-4">
                Pilih skema pengiriman yang paling sesuai dengan kebutuhan dan anggaran bisnis Anda.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Door to Door (Highlight) */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-bjb-600 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-bjb-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULER
                </div>
                <div className="flex justify-between items-center mb-6 text-bjb-700">
                    <Home size={32} />
                    <ArrowRight size={24} className="text-gray-300" />
                    <Home size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Door to Door</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Layanan terima beres. Tim kami menjemput barang dari gudang Anda (Pickup) dan mengantarkannya langsung ke lokasi penerima. 
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex gap-2"><PackageCheck size={16} className="text-bjb-500"/> Hemat Waktu & Tenaga</li>
                    <li className="flex gap-2"><PackageCheck size={16} className="text-bjb-500"/> Termasuk Handling</li>
                </ul>
            </div>

            {/* Card 2: Port to Port */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-center mb-6 text-gray-600">
                    <Warehouse size={32} />
                    <ArrowRight size={24} className="text-gray-300" />
                    <Warehouse size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Port to Port</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Pengiriman dari pelabuhan/bandara asal ke pelabuhan/bandara tujuan. Pengirim mengantar barang ke gudang kami, penerima mengambil di tujuan.
                </p>
                <p className="text-xs font-medium text-gray-400 uppercase">Lebih Hemat Biaya</p>
            </div>

            {/* Card 3: Door to Port / Port to Door */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-center mb-6 text-gray-600">
                    <Home size={32} />
                    <ArrowRight size={24} className="text-gray-300" />
                    <Warehouse size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Door to Port</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Kombinasi fleksibel. Kami jemput barang di tempat Anda, namun penerima mengambil sendiri di gudang/pelabuhan tujuan (atau sebaliknya).
                </p>
                <p className="text-xs font-medium text-gray-400 uppercase">Solusi Fleksibel</p>
            </div>
        </div>
      </SectionWrapper>
    </div>
  );
}