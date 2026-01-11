import SectionWrapper from "@/components/ui/SectionWrapper";
import { Award, Calendar, FileText } from "lucide-react";
import Image from "next/image";

export default function CompanyStory() {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Kolom Kiri: Teks */}
        <div className="md:w-1/2">
          <span className="text-bjb-600 font-bold tracking-wider uppercase text-sm">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Muda dalam Usia,<br/>
            Matang dalam Pengalaman.
          </h2>
          
          <div className="prose text-gray-600 leading-relaxed space-y-4">
            <p>
              <strong>PT. BETARI JAYA BERSAMA (BJB CARGO)</strong> adalah perusahaan penyedia layanan logistik terpadu yang berkedudukan di Jakarta Selatan. Kami hadir sebagai jawaban atas kebutuhan pasar akan jasa Freight Forwarding yang tidak hanya cepat, tetapi juga transparan dan berbasis teknologi.
            </p>
            <p>
              Secara legalitas, perusahaan kami didirikan pada tanggal <strong>07 Juni 2021</strong> (Akte Notaris Mundji Salim, SH No. 20). Meskipun secara entitas kami tergolong baru, namun <strong>BJB CARGO</strong> digawangi oleh tenaga operasional dan manajemen yang telah malang melintang di industri logistik selama lebih dari <strong>15 Tahun</strong>.
            </p>
            <p>
              Kombinasi antara semangat perusahaan baru yang energik dan keahlian tim senior membuat kami mampu bersaing dan memberikan solusi pengiriman yang taktis, efisien, dan aman.
            </p>
          </div>

          {/* Badge Legalitas */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-bjb-50 px-4 py-3 rounded-lg border border-bjb-100">
                <FileText className="text-bjb-600" size={20}/>
                <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Izin Impor</p>
                    <p className="text-sm font-bold text-bjb-900">API-U Registered</p>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-bjb-50 px-4 py-3 rounded-lg border border-bjb-100">
                <Award className="text-bjb-600" size={20}/>
                <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Legalitas</p>
                    <p className="text-sm font-bold text-bjb-900">NIB & OSS Verified</p>
                </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Visual */}
        <div className="md:w-1/2 relative">
            <div className="relative h-[500px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
               {/* Placeholder Gambar Tim/Meeting */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
               <div className="absolute bottom-8 left-8 z-20 text-white">
                 <p className="text-4xl font-bold">15+</p>
                 <p className="text-lg font-medium">Years of Team Experience</p>
               </div>
               
               {/* Note Dev: Ganti div ini dengan <Image /> */}
               <div className="flex items-center justify-center h-full text-gray-500 bg-gray-300">
                   Image: Professional Team Meeting
               </div>
            </div>
            
            {/* Dekorasi floating card */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-bjb-500 max-w-xs hidden md:block">
                <Calendar className="text-bjb-500 mb-2" size={24}/>
                <p className="font-bold text-gray-900">Established 2021</p>
                <p className="text-xs text-gray-500">Resmi beroperasi di Jakarta Selatan</p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}