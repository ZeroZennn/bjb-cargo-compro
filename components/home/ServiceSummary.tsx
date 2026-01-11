import SectionWrapper from '../ui/SectionWrapper';
import { Ship, FileCheck, Truck } from 'lucide-react';

const services = [
  {
    icon: <Ship size={40} />,
    title: "International Freight",
    desc: "Layanan Ekspor & Impor via Laut (FCL/LCL) dan Udara ke seluruh dunia dengan jaringan agency global.",
    items: ["Sea Freight Forwarding", "Air Freight Service", "Global Network"]
  },
  {
    icon: <FileCheck size={40} />,
    title: "Customs & Legal",
    desc: "Solusi perizinan bagi Anda yang terkendala izin impor. Kami menangani birokrasi kepabeanan.",
    items: ["Undername (Sewa Bendera)", "Customs Clearance", "Impor Borongan & Lartas"]
  },
  {
    icon: <Truck size={40} />,
    title: "Domestic & Distribution",
    desc: "Pengiriman antar pulau di Indonesia dan layanan Door to Door yang praktis terima beres.",
    items: ["Project Cargo", "Warehousing", "Door to Door Service"]
  }
];

export default function ServiceSummary() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-bjb-900">Layanan Unggulan Kami</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Kami membagi layanan kami menjadi 3 pilar utama untuk memenuhi kebutuhan logistik bisnis Anda.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-bjb-500 group">
            <div className="text-bjb-700 mb-6 bg-bjb-50 w-fit p-4 rounded-full group-hover:bg-bjb-700 group-hover:text-white transition">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
            <ul className="space-y-2">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                  <span className="w-1.5 h-1.5 bg-bjb-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}