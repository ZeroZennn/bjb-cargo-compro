import SectionWrapper from "@/components/ui/SectionWrapper";
import { MapPin, Globe } from "lucide-react";

export default function GlobalNetwork() {
  const regions = [
    { name: "ASIA", countries: "China, Singapore, Japan, Korea, Thailand, Vietnam" },
    { name: "EUROPE", countries: "Germany, UK, Netherlands, Italy, France" },
    { name: "AMERICA", countries: "USA, Canada, Brazil" },
    { name: "AUSTRALIA", countries: "Australia, New Zealand" },
  ];

  return (
    <SectionWrapper>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Jaringan Global Kami</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                BJB Cargo memiliki jaringan agen yang kuat di pelabuhan dan bandara utama dunia untuk memastikan pengiriman 
                <em> Door-to-Door</em> berjalan lancar.
            </p>
        </div>

        {/* Map Representation (Stylized Grid) */}
        <div className="grid md:grid-cols-4 gap-6">
            {regions.map((region, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg hover:border-bjb-500 transition duration-300 group text-center">
                    <div className="w-16 h-16 bg-bjb-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bjb-600 transition">
                        <Globe className="text-bjb-600 group-hover:text-white transition" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-bjb-900 mb-2">{region.name}</h3>
                    <div className="h-0.5 w-10 bg-gray-200 mx-auto mb-3"></div>
                    <p className="text-sm text-gray-500">
                        {region.countries}
                    </p>
                </div>
            ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 bg-bjb-900 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-2">Mau Impor dari China?</h3>
                <p className="text-bjb-100">Kami adalah spesialis rute China - Indonesia dengan harga All-in terbaik.</p>
            </div>
            <div className="relative z-10">
                <a href="/contact" className="bg-white text-bjb-900 px-6 py-3 rounded-lg font-bold hover:bg-bjb-50 transition">
                    Cek Tarif China-Indo
                </a>
            </div>
            
            {/* Background Pattern Decoration */}
            <div className="absolute right-0 top-0 opacity-10 transform translate-x-10 -translate-y-10">
                <MapPin size={300} />
            </div>
        </div>
    </SectionWrapper>
  );
}