import React from 'react';
import { Clock, MapPin, User, ShieldCheck } from 'lucide-react';

export const InfoBoard: React.FC = () => {
  return (
    <section id="info-board" className="py-16 sm:py-24 px-4 bg-slate-50 dark:bg-[#0f172a] transition-all duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-emerald-950 dark:text-emerald-50">
            Informasi Shalat Idul Adha
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 text-sm sm:text-base font-light">
            Jadwal pelaksanaan Shalat Idul Adha dan ketentuan jamaah Masjid Az-Zumar 1447 H.
          </p>
        </div>

        {/* Centered Single Card: Shalat Idul Adha */}
        <div className="max-w-2xl mx-auto relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-100/50 dark:shadow-none hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none"></div>
          
          <div className="flex items-center space-x-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="p-3 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-2xl text-emerald-700 dark:text-emerald-400">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-950 dark:text-emerald-50">
                Pelaksanaan Shalat Ied
              </h3>
              <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold tracking-wider">Jadwal & Petugas Shalat</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-3.5 text-sm sm:text-base">
              <Clock className="h-5.5 w-5.5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-slate-700 dark:text-slate-200">Waktu Pelaksanaan</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Pukul 06:30 WIB s.d. Selesai</p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5 text-sm sm:text-base">
              <MapPin className="h-5.5 w-5.5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-slate-700 dark:text-slate-200">Tempat Pelaksanaan</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Lapangan Utama & Masjid Raya Az-Zumar</p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5 text-sm sm:text-base">
              <User className="h-5.5 w-5.5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-slate-700 dark:text-slate-200">Khatib & Imam</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Khatib: <span className="font-semibold text-emerald-700 dark:text-emerald-400">Ustadz H. Jundi Abu Daud, Lc., M.A.</span>
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Imam: <span className="font-semibold text-slate-700 dark:text-slate-350">Ustadz H. Ahmad Syakir Al-Hafiz</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5 text-sm sm:text-base border-t border-slate-100 dark:border-slate-800 pt-5">
              <ShieldCheck className="h-5.5 w-5.5 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-slate-700 dark:text-slate-200">Himbauan Jamaah</p>
                <ul className="list-disc pl-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 space-y-1.5 mt-1.5">
                  <li>Membawa sajadah masing-masing.</li>
                  <li>Telah berwudhu dengan sempurna dari rumah.</li>
                  <li>Mengenakan pakaian terbaik yang bersih dan wangi.</li>
                  <li>Datang lebih awal sebelum Shalat dimulai untuk melantunkan takbir bersama.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InfoBoard;
