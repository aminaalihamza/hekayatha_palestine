import React, { useState } from 'react';
import { Award, BookOpen, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { WOMEN_DATA } from '../data/siteData';
import { WomanBiography } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

export const WomenStories: React.FC = () => {
  const [selectedBio, setSelectedBio] = useState<WomanBiography | null>(null);

  return (
    <section id="women" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#581C87]/10 text-[#581C87] text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>نماذج ملهمة في العلم والصمود</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#212529]">
            حكايات نساء فلسطين... صانعات المجد والعزة
          </h2>
          <p className="text-sm sm:text-base text-[#3B4D3C] max-w-2xl mx-auto">
            نماذج لنساء جعلْن من العلم والدعوة والكلمة والتربية طريقًا لصناعة الأثر وحفظ الذاكرة والهوية.
          </p>
        </div>

        {/* 3 Asymmetric Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {WOMEN_DATA.map((woman, idx) => (
            <div
              key={woman.id}
              className={`bg-[#FAF8F5] rounded-3xl border border-[#E5DEC9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                idx === 1 ? 'lg:-translate-y-2 border-[#581C87]/30 ring-1 ring-[#581C87]/10' : ''
              }`}
            >
              {/* Image & Photo Banner */}
              <div className="relative">
                <ImageWithFallback
                  src={woman.imagePath}
                  fallbackName={woman.fallbackImageName}
                  alt={woman.name}
                  aspectRatio="aspect-[4/3]"
                  className="group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#FAF8F5]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#581C87] border border-[#E5DEC9]">
                  {woman.origin}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#212529] group-hover:text-[#1D3B24] transition-colors">
                    {woman.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#581C87]">
                    {woman.title}
                  </p>
                  <p className="text-xs text-[#3B4D3C] leading-relaxed pt-1">
                    {woman.shortBio}
                  </p>
                </div>

                {/* Key Points Badge */}
                <div className="pt-3 border-t border-[#E5DEC9] space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#1D3B24] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1D3B24] shrink-0" />
                    <span className="line-clamp-1">{woman.qualification}</span>
                  </div>

                  <button
                    onClick={() => setSelectedBio(woman)}
                    className="w-full mt-2 py-2.5 px-4 rounded-xl bg-[#F4EFE6] hover:bg-[#1D3B24] text-[#212529] hover:text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>اقرئي المسيرة الكاملة</span>
                    <BookOpen className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fajr Connection Banner */}
        <div className="bg-[#581C87]/8 rounded-2xl p-5 sm:p-6 border border-[#581C87]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#581C87] text-white shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#4A154B]">
                «نماذج تلتقي مع رسالة أكاديمية فجر في بناء المرأة الواعية وصناعة الأثر.»
              </p>
              <p className="text-[11px] text-[#3B4D3C]">
                العلم سلاح، والتربية حصن، والكلمة الصادقة أثر لا يزول.
              </p>
            </div>
          </div>
        </div>

        {/* Full Bio Modal */}
        {selectedBio && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-[#FAF8F5] max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedBio(null)}
                className="absolute top-5 left-5 p-2 rounded-full bg-[#E5DEC9]/60 hover:bg-[#E5DEC9] text-[#212529] transition-colors cursor-pointer"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Top Info */}
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start pt-2">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-[#E5DEC9] shadow-xs">
                  <ImageWithFallback
                    src={selectedBio.imagePath}
                    fallbackName={selectedBio.fallbackImageName}
                    alt={selectedBio.name}
                    aspectRatio="aspect-square"
                  />
                </div>
                <div className="text-center sm:text-right space-y-1.5 flex-1">
                  <span className="text-xs font-semibold text-[#581C87] bg-[#581C87]/10 px-3 py-0.5 rounded-full inline-block">
                    {selectedBio.title}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#212529]">
                    {selectedBio.name}
                  </h3>
                  <p className="text-xs text-[#3B4D3C]">
                    {selectedBio.origin}
                  </p>
                  {selectedBio.birth && (
                    <p className="text-[11px] text-[#3B4D3C]/80 font-mono">
                      الميلاد: {selectedBio.birth}
                    </p>
                  )}
                </div>
              </div>

              {/* Full Bio Paragraphs */}
              <div className="space-y-3 bg-[#F4EFE6]/70 p-5 rounded-2xl border border-[#E5DEC9]">
                <h4 className="font-heading font-bold text-sm text-[#1D3B24]">
                  المسيرة العلمية والتربوية:
                </h4>
                {selectedBio.fullBio.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-xs sm:text-sm text-[#212529] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Contributions */}
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-[#212529]">
                  أبرز المحطات والإسهامات:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedBio.keyContributions.map((item, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2 text-xs text-[#3B4D3C] bg-white p-2.5 rounded-xl border border-[#E5DEC9]">
                      <span className="text-[#1D3B24] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Academy Connection Highlight */}
              <div className="p-4 rounded-xl bg-[#581C87]/10 border-r-3 border-[#581C87] text-xs text-[#4A154B] font-medium leading-relaxed">
                <span className="font-bold">أثر النموذج: </span>
                {selectedBio.fajrConnection}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedBio(null)}
                  className="px-6 py-2.5 bg-[#1D3B24] text-white text-xs font-bold rounded-full hover:bg-[#142919] transition-colors cursor-pointer"
                >
                  إغلاق السيرة
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
