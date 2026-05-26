import React from 'react';
import { Mail, Phone, MapPin, Globe, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Mosque Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 22h20" />
                  <path d="M12 2v4" />
                  <path d="M12 6a4 4 0 0 0-4 4v4h8v-4a4 4 0 0 0-4-4z" />
                  <path d="M6 14v8M18 14v8" />
                  <path d="M10 22v-3a2 2 0 0 1 4 0v3" />
                </svg>
              </div>
              <span className="font-serif text-lg font-bold tracking-wider">
                MASJID AL-IKHLAS
              </span>
            </div>
            <p className="text-sm font-light text-slate-400 leading-relaxed max-w-sm">
              Wadah Pembinaan Ummat, Penguatan Aqidah, dan Pelaksanaan Ibadah berdasarkan Al-Qur'an dan As-Sunnah.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold text-white tracking-widest uppercase">
              Tautan Cepat
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition-colors">
                  Halaman Utama
                </a>
              </li>
              <li>
                <a href="#info-board" className="hover:text-emerald-400 transition-colors">
                  Informasi Shalat
                </a>
              </li>
              <li>
                <a href="#sermon-section" className="hover:text-emerald-400 transition-colors">
                  Baca Khutbah
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold text-white tracking-widest uppercase">
              Sekretariat & Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Jl. Raya Al-Ikhlas No. 47, Bandung, Jawa Barat, Indonesia</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <span>+62 22 7654-3210</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <span>info@masjidalikhlas.or.id</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Globe className="h-4 w-4 text-amber-500 shrink-0" />
                <span>www.masjidalikhlas.or.id</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Masjid Al-Ikhlas. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="flex items-center">
            Dibuat dengan <Heart className="h-3 w-3 text-amber-500 fill-amber-500 mx-1 animate-pulse" /> untuk Ummat.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
