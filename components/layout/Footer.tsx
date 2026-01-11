import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bjb-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight text-white">
                BJB<span className="text-bjb-500">CARGO</span>
              </span>
            </Link>
            <p className="text-bjb-100 text-sm leading-relaxed mb-6">
              PT. BETARI JAYA BERSAMA adalah perusahaan Freight Forwarding terpercaya dengan layanan ekspor, impor, dan logistik domestik yang terintegrasi.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Placeholders */}
              <a href="#" className="bg-bjb-800 p-2 rounded-full hover:bg-bjb-500 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-bjb-800 p-2 rounded-full hover:bg-bjb-500 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-bjb-800 p-2 rounded-full hover:bg-bjb-500 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-bjb-500 pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-bjb-100 hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 text-sm">
                  <ArrowRight size={14} className="text-bjb-500" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-bjb-100 hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 text-sm">
                  <ArrowRight size={14} className="text-bjb-500" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-bjb-100 hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 text-sm">
                  <ArrowRight size={14} className="text-bjb-500" /> Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-bjb-100 hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 text-sm">
                  <ArrowRight size={14} className="text-bjb-500" /> Track Shipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-bjb-500 pl-3">Layanan Kami</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/international-freight" className="text-bjb-100 hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 text-sm">
                  <ArrowRight size={14} className="text-bjb-500" /> Sea & Air Freight
                </Link>
              </li>
              <li>
                <Link href="/services/customs-legal" className="text-bjb-100 hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 text-sm">
                  <ArrowRight size={14} className="text-bjb-500" /> Customs & Undername
                </Link>
              </li>
              <li>
                <Link href="/services/domestic" className="text-bjb-100 hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 text-sm">
                  <ArrowRight size={14} className="text-bjb-500" /> Domestic & Logistics
                </Link>
              </li>
              <li>
                <Link href="/services/customs-legal" className="text-bjb-100 hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 text-sm">
                  <ArrowRight size={14} className="text-bjb-500" /> Impor Borongan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-bjb-500 pl-3">Head Office</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-bjb-100 text-sm">
                <MapPin className="flex-shrink-0 text-bjb-500 mt-1" size={18} />
                <span>
                  Jakarta Selatan, DKI Jakarta<br/>
                  Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3 text-bjb-100 text-sm">
                <Phone className="flex-shrink-0 text-bjb-500" size={18} />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-bjb-100 text-sm">
                <Mail className="flex-shrink-0 text-bjb-500" size={18} />
                <span>info@bjbcargo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-bjb-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-bjb-300">
          <p>&copy; {new Date().getFullYear()} PT. Betari Jaya Bersama. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="flex items-center gap-1">
                Legalitas: <span className="text-white font-semibold">API-U & NIB Registered</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}