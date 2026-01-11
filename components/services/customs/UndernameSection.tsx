import SectionWrapper from "@/components/ui/SectionWrapper";
import { CheckCircle, FileText } from "lucide-react";

export default function UndernameSection() {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="p-2 bg-bjb-100 rounded-lg text-bjb-700">
                <FileText size={24} />
            </span>
            <span className="text-bjb-700 font-bold uppercase tracking-wider text-sm">Undername Service</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Belum Memiliki Izin Impor? <br/>Gunakan Legalitas Resmi Kami.
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Sistem Undername (Sewa Bendera) adalah solusi bagi Anda yang ingin mengimpor barang namun belum memiliki izin import (API-U/NIB). 
            PT. BETARI JAYA BERSAMA bertindak sebagai <em>Consignee</em> (Penerima Barang) resmi yang tercatat di Bea Cukai, sementara Anda tetap sebagai pemilik barang sebenarnya.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-4">Keunggulan Undername BJB Cargo:</h4>
            <ul className="space-y-3">
              {[
                "Legalitas Resmi (API-U & NIB Terverifikasi OSS)",
                "Aman untuk Importir Umum & Lartas",
                "Dokumentasi Transparan & Rapi",
                "Mengurangi Risiko Red Line (Jalur Merah)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-bjb-500 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual representation */}
        <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                {/* Placeholder Image - Ganti dengan foto dokumen/kantor */}
                <div className="w-full h-full bg-bjb-50 flex items-center justify-center text-bjb-300">
                    Image: Document Handover
                </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-bjb-500 max-w-xs">
                <p className="font-bold text-bjb-800 text-lg">100% Compliant</p>
                <p className="text-gray-500 text-sm">Sesuai regulasi Bea Cukai Indonesia.</p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}