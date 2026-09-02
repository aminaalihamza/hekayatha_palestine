import React from 'react';
import { BookMarked, Sparkles, Compass } from 'lucide-react';
import { HADITHS_DATA } from '../data/siteData';

export const SeerahSection: React.FC = () => {
  return (
    <section id="seerah" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D3B24]/10 text-[#1D3B24] text-xs font-semibold">
            <BookMarked className="w-3.5 h-3.5" />
            <span>الجذور الإيمانية والتاريخية</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#212529]">
            فلسطين في قلب السيرة
          </h2>
          <p className="text-sm sm:text-base text-[#3B4D3C] max-w-2xl mx-auto">
            ارتباط المسجد الأقصى وأكنافه بالوحي والنبوة، وتأصيل مكانتها في وجدان كل مسلم ومسلمة.
          </p>
        </div>

        {/* 1. Central Quranic Verse Display */}
        <div className="relative bg-gradient-to-b from-[#1D3B24] to-[#142919] text-white rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden border border-[#D4AF37]/30">
          {/* Subtle Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 mb-2">
              <Sparkles className="w-6 h-6" />
            </div>

            <p className="font-quran text-2xl sm:text-3xl lg:text-4xl text-[#FDFBF7] leading-[2.2] font-normal tracking-wide">
              ﴿سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا ۚ إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ﴾
            </p>

            <div className="pt-2 flex items-center justify-center gap-3 text-xs sm:text-sm text-[#D4AF37] font-medium">
              <span className="h-px w-12 bg-[#D4AF37]/40"></span>
              <span>سورة الإسراء: الآية 1</span>
              <span className="h-px w-12 bg-[#D4AF37]/40"></span>
            </div>
          </div>
        </div>

        {/* 2. Authentic Hadiths in Sunnah */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5DEC9]">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1D3B24] flex items-center gap-2">
              <span>في السنة النبوية المطهرة</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#1D3B24]/10 text-[#1D3B24] font-medium">أحاديث صحيحة ومحققة</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HADITHS_DATA.map((hadith, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5DEC9] shadow-xs flex flex-col justify-between hover:shadow-md hover:border-[#1D3B24]/40 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#3B4D3C]/10 text-[#3B4D3C] flex items-center justify-center text-xs font-bold font-heading">
                    {idx + 1}
                  </div>
                  <p className="font-amiri text-base sm:text-lg text-[#212529] leading-relaxed font-bold">
                    {hadith.text}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5DEC9]/80 space-y-2">
                  <p className="text-xs text-[#581C87] font-semibold flex items-center gap-1">
                    <span>المصدر:</span>
                    <span>{hadith.source}</span>
                  </p>
                  <p className="text-[11px] text-[#3B4D3C] leading-snug">
                    {hadith.significance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The Journey of Isra & Mi'raj */}
        <div className="bg-[#FAF8F5] rounded-3xl p-7 sm:p-9 border border-[#E5DEC9] shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#581C87]/10 text-[#581C87]">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#212529]">
                رحلة الإسراء والمعراج... رباط العقيدة والذاكرة
              </h3>
              <p className="text-xs text-[#3B4D3C]">معجزة الربط بين القبلتين</p>
            </div>
          </div>

          <div className="text-sm sm:text-base text-[#3B4D3C] leading-relaxed space-y-3 font-normal">
            <p>
              ارتبط المسجد الأقصى في وجدان المسلمين بحادثة الإسراء والمعراج، حين أسرى الله سبحانه وتعالى بنبيه محمد صلى الله عليه وسلم من المسجد الحرام إلى المسجد الأقصى، في رحلة عظيمة جعلت القدس والمسجد الأقصى جزءًا راسخًا من الذاكرة والهوية الإسلامية.
            </p>
            <p className="font-medium text-[#1D3B24] bg-[#1D3B24]/5 p-3.5 rounded-xl border-r-3 border-[#1D3B24]">
              «فلسطين ليست قضيةً طارئة في الذاكرة الإسلامية، بل جزء من تاريخ طويل من الإيمان والأرض والإنسان.»
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
