import SectionWrapper from "@/components/ui/SectionWrapper";
import { Shield, Server, FileCheck2, ArrowRightLeft } from "lucide-react";

export default function ClearanceDetail() {
  return (
    <div className="bg-slate-50">
        <SectionWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
                {/* UPDATE: Judul mencakup PIB & PEB */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Customs Clearance (PIB & PEB)
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    Layanan pengurusan dokumen pabean satu pintu. Kami menangani proses clearance untuk barang masuk (Impor) maupun barang keluar (Ekspor) dengan cepat, akurat, dan sesuai regulasi Bea Cukai Indonesia.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1: Expertise */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-bjb-500 transition duration-300 group">
                    <div className="bg-bjb-50 w-fit p-3 rounded-lg mb-6 group-hover:bg-bjb-700 transition">
                      <Shield className="w-8 h-8 text-bjb-700 group-hover:text-white transition" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Customs Expertise</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Tim ahli bersertifikat PPJK dengan pengalaman 10+ tahun menangani berbagai jalur (Merah/Kuning/Hijau) di Pelabuhan Laut (Tanjung Priok, dll) maupun Bandara Soekarno-Hatta.
                    </p>
                </div>

                {/* Card 2: EDI System (UPDATE DISINI) */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-bjb-500 transition duration-300 group">
                    <div className="bg-bjb-50 w-fit p-3 rounded-lg mb-6 group-hover:bg-bjb-700 transition">
                      <Server className="w-8 h-8 text-bjb-700 group-hover:text-white transition" />
                    </div>
                    {/* Penjelasan PIB & PEB */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Transfer PIB & PEB</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Proses submit dokumen menggunakan sistem <strong>EDI (Electronic Data Interchange)</strong> yang terintegrasi langsung dengan server Bea Cukai.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li className="text-xs text-gray-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-bjb-500 rounded-full"></span>
                            <strong>PIB:</strong> Untuk Impor (Pemberitahuan Impor Barang)
                        </li>
                        <li className="text-xs text-gray-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-bjb-500 rounded-full"></span>
                            <strong>PEB:</strong> Untuk Ekspor (Pemberitahuan Ekspor Barang)
                        </li>
                    </ul>
                </div>

                {/* Card 3: Documentation */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-bjb-500 transition duration-300 group">
                    <div className="bg-bjb-50 w-fit p-3 rounded-lg mb-6 group-hover:bg-bjb-700 transition">
                      <FileCheck2 className="w-8 h-8 text-bjb-700 group-hover:text-white transition" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Dokumen Pelengkap</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Kami membantu pengecekan draft dokumen vital sebelum submit untuk meminimalisir kesalahan (Redress/Notul): Invoice, Packing List, B/L, dan COO (Certificate of Origin).
                    </p>
                </div>
            </div>
        </SectionWrapper>
    </div>
  );
}