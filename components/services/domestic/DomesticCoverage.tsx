import SectionWrapper from "@/components/ui/SectionWrapper";
import { Map, Truck, Ship, Plane } from "lucide-react";

export default function DomesticCoverage() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <span className="text-bjb-600 font-bold tracking-wider uppercase text-sm">National Network</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Jangkauan Pengiriman Seluruh Indonesia</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Kami melayani pengiriman kargo via Darat, Laut, dan Udara ke seluruh pelosok nusantara dengan tarif kompetitif dan <em>lead time</em> terukur.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* List Wilayah */}
        <div className="space-y-6">
            <div className="bg-white border-l-4 border-bjb-500 shadow-sm p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Area Konsentrasi Utama</h3>
                <p className="text-gray-600">Jawa, Bali, NTB, dan Sumatera.</p>
            </div>
            <div className="bg-white border-l-4 border-orange-500 shadow-sm p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Expansi Indonesia Timur</h3>
                <p className="text-gray-600">Sulawesi, Kalimantan, Maluku, NTT, hingga Papua.</p>
            </div>
            
            <div className="mt-8">
                <h4 className="font-bold text-gray-900 mb-4">Moda Transportasi Multimodal:</h4>
                <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg min-w-[100px]">
                        <Truck className="text-bjb-600" />
                        <span className="text-xs font-medium">Trucking</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg min-w-[100px]">
                        <Ship className="text-bjb-600" />
                        <span className="text-xs font-medium">Pelni/Roro</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg min-w-[100px]">
                        <Plane className="text-bjb-600" />
                        <span className="text-xs font-medium">Air Cargo</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Visual Map Placeholder */}
        <div className="relative h-[400px] bg-bjb-50 rounded-2xl border-2 border-dashed border-bjb-200 flex items-center justify-center p-8 text-center">
            <div>
                <Map className="text-bjb-200 mx-auto mb-4" size={64} />
                <p className="text-bjb-800 font-bold">PETA INDONESIA</p>
                <p className="text-sm text-gray-500 mt-2">
                    (Nanti ganti dengan gambar peta Indonesia vector yang menyorot pulau-pulau layanan)
                </p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}