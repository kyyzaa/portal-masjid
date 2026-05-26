import React from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white pt-16 sm:pt-20 pb-12 sm:pb-20 px-4 transition-all duration-300">
      {/* Subtle vector stars/crescents grid in background */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none"></div>
      
      {/* Subtle colored glow bubbles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase animate-bounce">
          <Sparkles className="h-4 w-4" />
          <span>Selamat Hari Raya Idul Adha 1447 H</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 drop-shadow-md">
          TAUHID & CINTA
        </h1>

        <p className="max-w-2xl mx-auto text-slate-200 text-base sm:text-lg lg:text-xl font-light leading-relaxed">
          Mengenang Ketaatan Sejati Nabi Ibrahim & Keadilan Pengorbanan Nabi Isma’il عليه السلام dalam Bingkai Keimanan Murni.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-4">
          <div className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm w-full sm:w-auto">
            <Calendar className="h-5 w-5 text-amber-400" />
            <div className="text-left">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Tanggal Kegiatan</p>
              <p className="text-sm font-semibold">27 Mei 2026</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm w-full sm:w-auto">
            <MapPin className="h-5 w-5 text-amber-400" />
            <div className="text-left">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Lokasi Utama</p>
              <p className="text-sm font-semibold">Lapangan Masjid Azzumar</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <a
            href="#sermon-section"
            className="px-8 py-3.5 rounded-2xl font-bold bg-amber-500 hover:bg-amber-600 text-emerald-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            Mulai Membaca Khutbah
          </a>
          <a
            href="/tauhid.pdf"
            download
            className="px-8 py-3.5 rounded-2xl font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 w-full sm:w-auto flex items-center justify-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Unduh PDF Naskah</span>
          </a>
        </div>
      </div>

      {/* Decorative Wave Divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50 to-transparent dark:from-[#0f172a] opacity-100 pointer-events-none"></div>
    </section>
  );
};
export default Hero;
