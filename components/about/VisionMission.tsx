import SectionWrapper from "@/components/ui/SectionWrapper";
import { Target, Lightbulb, Zap, Users } from "lucide-react";

export default function VisionMission() {
  return (
    <div className="bg-bjb-900 text-white">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16">
            
            {/* Visi */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-bjb-700 rounded-lg">
                        <Target size={32} className="text-white"/>
                    </div>
                    <h2 className="text-3xl font-bold">Visi Kami</h2>
                </div>
                <p className="text-bjb-100 text-lg leading-relaxed">
                    Menjadi perusahaan Freight Forwarding terdepan yang mampu memberikan informasi satu pintu (one-point information) kepada seluruh relasi bisnis, didukung oleh fasilitas teknologi dan sistem pelayanan yang handal.
                </p>
            </div>

            {/* Misi */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-bjb-700 rounded-lg">
                        <Lightbulb size={32} className="text-white"/>
                    </div>
                    <h2 className="text-3xl font-bold">Misi Kami</h2>
                </div>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <Zap className="text-bjb-500 flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-white text-lg">Responsif & Cepat</h4>
                            <p className="text-bjb-200 text-sm mt-1">Memberikan layanan tanggap dan solusi cepat dalam setiap penanganan pengiriman via Laut maupun Udara.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <Users className="text-bjb-500 flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-white text-lg">Koneksi Solid</h4>
                            <p className="text-bjb-200 text-sm mt-1">Membangun jaringan yang kuat dengan shipping line, maskapai, dan agent global untuk kepuasan pelanggan.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
      </SectionWrapper>
    </div>
  );
}