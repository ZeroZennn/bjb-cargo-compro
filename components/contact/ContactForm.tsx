"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Di sini nanti logika kirim email (misal via API Route atau EmailJS)
    // Untuk sekarang kita hanya alert simulasi
    alert(`Terima kasih, ${formData.name}. Pesan Anda akan kami proses (Simulasi).`);
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Nama & Email */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input 
              type="text" name="name" id="name" required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bjb-500 focus:border-transparent outline-none transition"
              placeholder="Budi Santoso"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Perusahaan</label>
            <input 
              type="email" name="email" id="email" required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bjb-500 focus:border-transparent outline-none transition"
              placeholder="budi@company.com"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Telepon & Subject */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">No. WhatsApp</label>
            <input 
              type="tel" name="phone" id="phone"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bjb-500 focus:border-transparent outline-none transition"
              placeholder="+62 812..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Layanan</label>
            <select 
              name="subject" id="subject" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bjb-500 focus:border-transparent outline-none transition bg-white"
              onChange={handleChange}
            >
              <option value="General">Pertanyaan Umum</option>
              <option value="Quote">Permintaan Penawaran (Quote)</option>
              <option value="Import">Jasa Import / Undername</option>
              <option value="Domestic">Pengiriman Domestik</option>
            </select>
          </div>
        </div>

        {/* Pesan */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Detail Kebutuhan</label>
          <textarea 
            name="message" id="message" rows={4} required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bjb-500 focus:border-transparent outline-none transition"
            placeholder="Mohon info tarif pengiriman dari Shanghai ke Jakarta untuk..."
            onChange={handleChange}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-bjb-700 text-white font-bold py-4 rounded-lg hover:bg-bjb-800 transition shadow-lg shadow-bjb-700/20 flex justify-center items-center gap-2"
        >
          <Send size={20} />
          Kirim Pesan
        </button>

      </form>
    </div>
  );
}