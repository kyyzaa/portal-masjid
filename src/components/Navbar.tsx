import React from 'react';
import { BookOpen } from 'lucide-react';
import Logo from '../assets/logo-removebg.png';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#111827]/70 border-b border-emerald-950/10 dark:border-emerald-100/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Masjid Az-Zumar" className="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-emerald-900 dark:text-emerald-100 flex items-center">
                MASJID AZZUMAR
              </span>
              <p className="text-[10px] sm:text-xs text-amber-600 dark:text-amber-400 font-semibold tracking-widest uppercase">
                Naskah Digital Khutbah Idul Adha
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#hero" className="text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
              Beranda
            </a>
            {/* Informasi Ibadah dihapus */}
            <a href="#sermon-section" className="text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
              Khutbah
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <a 
              href="#sermon-section"
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-semibold rounded-xl text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 shadow-md shadow-emerald-900/20 hover:shadow-emerald-900/30 transition-all hover:-translate-y-0.5 duration-300"
            >
              <BookOpen className="h-4 w-4" />
              <span>Baca Khutbah</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
