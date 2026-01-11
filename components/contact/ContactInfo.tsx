import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Informasi Kantor</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Silakan kunjungi kantor operasional kami atau hubungi tim marketing kami untuk konsultasi gratis mengenai kebutuhan logistik Anda.
      </p>

      <div className="space-y-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="bg-bjb-50 p-3 rounded-lg text-bjb-700">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Alamat Kantor</h4>
            <p className="text-gray-600 text-sm mt-1">
              Jl. TB Simatupang No. XX, Jakarta Selatan<br/>
              DKI Jakarta, Indonesia 12xxx
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-bjb-50 p-3 rounded-lg text-bjb-700">
            <Phone size={24} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Telepon / WhatsApp</h4>
            <p className="text-gray-600 text-sm mt-1">
              <span className="block">+62 21 1234 5678 (Office)</span>
              <span className="block font-medium text-bjb-700">+62 812 3456 7890 (Hotline 24/7)</span>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-bjb-50 p-3 rounded-lg text-bjb-700">
            <Mail size={24} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Email</h4>
            <p className="text-gray-600 text-sm mt-1">
              marketing@bjbcargo.com<br/>
              cs@bjbcargo.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-bjb-50 p-3 rounded-lg text-bjb-700">
            <Clock size={24} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Jam Operasional</h4>
            <p className="text-gray-600 text-sm mt-1">
              Senin - Jumat: 08.00 - 17.00 WIB<br/>
              Sabtu: 08.00 - 13.00 WIB
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 h-[300px] w-full bg-gray-100 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.054457850577!2d106.8279!3d-6.2565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sJakarta%20Selatan!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          title="BJB Cargo Location"
          className="absolute inset-0"
        ></iframe>
        {/* Catatan untuk Developer: Ganti URL src di atas dengan link Embed Map asli dari lokasi kantor klien */}
      </div>
    </div>
  );
}