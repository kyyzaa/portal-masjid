import React from 'react';
import { ChevronRight } from 'lucide-react';
import { sermonData } from '../data/sermon';

export const DocumentViewer: React.FC = () => {

  return (
    <section id="sermon-section" className="py-16 sm:py-24 px-4 bg-white text-slate-900 transition-all duration-300">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section header removed per request */}

        {/* PDF download moved to homepage; remove button here */}

        {/* Document Render Container simplified: white background, no boxed card */}
        <div id="printable-content" className="relative z-10 p-6 sm:p-10 md:p-16 leading-relaxed text-left w-full mx-auto transition-all duration-300">
            
            <article className="space-y-12">
              
              {/* Decorative Frame Header */}
              <header className="text-center border-b-2 border-double border-emerald-900/20 pb-8 space-y-4">
                <span className="font-serif text-sm font-semibold text-amber-700 tracking-widest uppercase">
                  {sermonData.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-emerald-950 leading-tight">
                  {sermonData.title}
                </h1>
                <p className="text-sm font-bold text-slate-500 flex items-center justify-center space-x-1.5">
                  <span>Khatib:</span>
                  <span className="text-emerald-700 font-semibold">{sermonData.author}</span>
                </p>
              </header>

              {/* Arabic Opening - Highlighted in soft emerald */}
              <section className="bg-emerald-50/50 border-l-4 border-emerald-700 p-6 sm:p-8 rounded-r-3xl space-y-6">
                {sermonData.arabicOpening.map((txt, idx) => (
                  <p key={idx} className="font-arabic text-xl sm:text-2xl text-emerald-900 leading-loose text-right font-semibold">
                    {txt}
                  </p>
                ))}
              </section>

              {/* Takbir Callout - Highlighted in soft amber */}
              <section className="text-center p-6 bg-amber-50/40 border border-amber-200 rounded-2xl">
                <p className="font-serif italic text-amber-800 text-sm sm:text-base font-semibold leading-relaxed">
                  "{sermonData.takbir}"
                </p>
              </section>

              {/* Intro Paragraphs */}
              <section className="space-y-4 font-normal text-slate-700 text-sm sm:text-base leading-relaxed">
                {sermonData.introParagraphs.map((txt, idx) => (
                  <p key={idx} className={idx === 0 ? 'font-bold text-emerald-950 text-base' : ''}>
                    {txt}
                  </p>
                ))}
              </section>

              {/* Story Section */}
              <section className="space-y-8 border-t border-slate-200 pt-8">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-950 mb-6 flex items-center">
                  <ChevronRight className="h-5 w-5 text-amber-600 mr-1.5 shrink-0" />
                  Kisah Pengorbanan Ibrahim & Isma'il
                </h3>

                <div className="space-y-6 text-sm sm:text-base font-normal text-slate-700">
                  {sermonData.storySections.map((sec, idx) => (
                    <div key={idx} className="space-y-4">
                      <p>{sec.text}</p>
                      {sec.verse && (
                        <div className="my-6 p-6 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-4">
                          <p className="font-arabic text-xl text-emerald-900 text-right leading-loose font-bold">
                            {sec.verse.arabic}
                          </p>
                          <p className="text-xs sm:text-sm text-slate-500 italic">
                            {sec.verse.translation} <span className="font-bold font-serif not-italic text-amber-700">({sec.verse.reference})</span>
                          </p>
                        </div>
                      )}
                      {sec.text2 && <p>{sec.text2}</p>}
                    </div>
                  ))}

                  {sermonData.detailedStory.map((sec, idx) => (
                    <div key={idx} className="space-y-4 pt-4">
                      {sec.verse && (
                        <div className="my-6 p-6 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-4">
                          <p className="font-arabic text-xl text-emerald-900 text-right leading-loose font-bold">
                            {sec.verse.arabic}
                          </p>
                          <p className="text-xs sm:text-sm text-slate-500 italic">
                            {sec.verse.translation} <span className="font-bold font-serif not-italic text-amber-700">({sec.verse.reference})</span>
                          </p>
                        </div>
                      )}
                      <p>{sec.text}</p>
                      {sec.text2 && <p>{sec.text2}</p>}
                      {sec.text3 && <p>{sec.text3}</p>}
                      {sec.text4 && <p>{sec.text4}</p>}
                    </div>
                  ))}
                </div>
              </section>

              {/* Process Section */}
              <section className="space-y-6 border-t border-slate-200 pt-8">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-700 flex items-center">
                  <ChevronRight className="h-5 w-5 text-amber-600 mr-1.5 shrink-0" />
                  {sermonData.sacrificeProcess.question}
                </h3>
                
                <div className="space-y-6 text-sm sm:text-base font-normal text-slate-700">
                  <div className="my-6 p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-4">
                    <p className="font-arabic text-xl text-emerald-900 text-right leading-loose font-bold">
                      {sermonData.sacrificeProcess.verse.arabic}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 italic">
                      {sermonData.sacrificeProcess.verse.translation} <span className="font-bold font-serif not-italic text-amber-700">({sermonData.sacrificeProcess.verse.reference})</span>
                    </p>
                  </div>

                  <p>{sermonData.sacrificeProcess.text}</p>
                  <p>{sermonData.sacrificeProcess.text2}</p>

                  <div className="my-6 p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-4">
                    <p className="font-arabic text-xl text-emerald-900 text-right leading-loose font-bold">
                      {sermonData.sacrificeProcess.verse2.arabic}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 italic">
                      {sermonData.sacrificeProcess.verse2.translation} <span className="font-bold font-serif not-italic text-amber-700">({sermonData.sacrificeProcess.verse2.reference})</span>
                    </p>
                  </div>

                  <p>{sermonData.sacrificeProcess.text3}</p>

                  <div className="my-6 p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-4">
                    <p className="font-arabic text-xl text-emerald-900 text-right leading-loose font-bold">
                      {sermonData.sacrificeProcess.verse3.arabic}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 italic">
                      {sermonData.sacrificeProcess.verse3.translation} <span className="font-bold font-serif not-italic text-amber-700">({sermonData.sacrificeProcess.verse3.reference})</span>
                    </p>
                  </div>

                  <p>{sermonData.sacrificeProcess.text4}</p>

                  <div className="my-6 p-6 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-4">
                    <p className="font-arabic text-xl text-emerald-900 text-right leading-loose font-bold">
                      {sermonData.sacrificeProcess.verse4.arabic}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 italic">
                      {sermonData.sacrificeProcess.verse4.translation} <span className="font-bold font-serif not-italic text-amber-700">({sermonData.sacrificeProcess.verse4.reference})</span>
                    </p>
                  </div>
                </div>
              </section>

              {/* 13 Lessons Grid */}
              <section className="space-y-8 border-t border-slate-200 pt-8 page-break-before">
                <header className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
                    13 Pelajaran & 'Ibroh Kisah Qurban
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-slate-500">Intisari pengorbanan Nabi Ibrahim dan ketaatan Nabi Ismail.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {sermonData.lessons.map((lesson, idx) => (
                    <div 
                      key={idx} 
                      className="bg-slate-50/80 border border-slate-200 p-6 rounded-3xl space-y-4 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 break-inside-avoid"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-700 text-white font-bold text-xs">
                          {idx + 1}
                        </span>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-emerald-950 leading-tight">
                          {lesson.title}
                        </h4>
                      </div>

                      <p className="text-xs sm:text-sm font-normal text-slate-700 leading-relaxed">
                        {lesson.content}
                      </p>

                      {lesson.verse && (
                        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                          <p className="font-arabic text-sm text-emerald-900 text-right leading-loose font-semibold">
                            {lesson.verse.arabic}
                          </p>
                          <p className="text-[10px] text-slate-500 italic">
                            {lesson.verse.translation} <span className="font-semibold font-serif not-italic text-amber-700">({lesson.verse.reference})</span>
                          </p>
                        </div>
                      )}

                      {lesson.quote && (
                        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                          {lesson.quote.arabic && (
                            <p className="font-arabic text-sm text-emerald-900 text-right font-semibold">
                              {lesson.quote.arabic}
                            </p>
                          )}
                          <p className="text-[10px] text-slate-500 italic">
                            {lesson.quote.indonesian} {lesson.quote.ref && <span className="font-bold text-amber-700 font-serif">({lesson.quote.ref})</span>}
                          </p>
                        </div>
                      )}

                      {lesson.subpoints && (
                        <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-650 font-normal">
                          {lesson.subpoints.map((sub, sIdx) => (
                            <li key={sIdx}>{sub}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Post Lessons Message */}
              <section className="space-y-4 border-t border-slate-200 pt-8 font-normal text-slate-700 text-sm sm:text-base">
                {sermonData.postLessons.map((txt, idx) => (
                  <p key={idx} className={idx === 0 ? 'font-bold text-emerald-950' : ''}>
                    {txt}
                  </p>
                ))}
              </section>

              {/* Closing prayers (Dua) */}
              <section className="bg-emerald-50/40 border-t-4 border-amber-500 p-6 sm:p-10 rounded-b-3xl space-y-6 page-break-inside-avoid">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-center text-emerald-950 mb-6">
                  Doa dan Penutup Khutbah
                </h3>
                
                <div className="space-y-8">
                  {sermonData.closingDua.map((dua, idx) => (
                    <div key={idx} className="space-y-3 pb-4 border-b border-emerald-900/10 last:border-b-0">
                      {dua.arabic.includes('اللَّهُمَّ') || dua.arabic.includes('اللهم') ? (
                        <p className="font-arabic text-xl sm:text-2xl text-emerald-900 text-right leading-loose font-bold">
                          {dua.arabic}
                        </p>
                      ) : (
                        <p className="text-sm font-semibold text-emerald-900">
                          {dua.arabic}
                        </p>
                      )}
                      {dua.translation && (
                        <p className="text-xs sm:text-sm text-slate-500 italic">
                          "{dua.translation}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

            </article>
          </div>
      </div>
    </section>
  );
};
export default DocumentViewer;
