import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// InfoBoard removed per user request
import DocumentViewer from './components/DocumentViewer';
import Footer from './components/Footer';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system preference on load
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Sync class list on html element for Tailwind CSS v4 dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-[#0b0f19] dark:text-slate-100 transition-colors duration-300">
      
      {/* Global subtle Islamic geometric pattern background */}
      <div className="fixed inset-0 bg-islamic-pattern opacity-100 pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        {/* Navigation Bar */}
        <Navbar />

        {/* Core Sections */}
        <main className="flex-grow">
          {/* Stunning Welcome/Hero Greetings */}
          <Hero />

          {/* Informasi sholat dihapus — langsung ke Khutbah */}

          {/* Double-Mode Document Viewer & PDF Download Engine */}
          <DocumentViewer />
        </main>

        {/* secretariat, maps, contact details and copyright footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
