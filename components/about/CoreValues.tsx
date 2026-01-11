import SectionWrapper from "@/components/ui/SectionWrapper";
import { MonitorCheck, HeartHandshake, Anchor } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: <MonitorCheck size={40} />,
      title: "Technology Support",
      desc: "Kami mengadopsi sistem informasi modern untuk memastikan update status pengiriman yang akurat kepada customer."
    },
    {
      icon: <Anchor size={40} />,
      title: "Expert Operation",
      desc: "Dijalankan oleh tenaga ahli yang paham seluk-beluk kepabeanan (Customs) di seluruh wilayah Pabean Indonesia."
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Customer Focus",
      desc: "Komitmen kami adalah menjadi mitra jangka panjang. Keberhasilan pengiriman barang Anda adalah prioritas utama kami."
    }
  ];

  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Nilai Utama Kami</h2>
        <p className="text-gray-600 mt-3">Prinsip kerja yang menjadikan BJB CARGO mitra terpercaya.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((val, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center group">
                <div className="w-16 h-16 mx-auto bg-bjb-50 rounded-full flex items-center justify-center text-bjb-600 group-hover:bg-bjb-600 group-hover:text-white transition mb-6">
                    {val.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
            </div>
        ))}
      </div>
    </SectionWrapper>
  );
}