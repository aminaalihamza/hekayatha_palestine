import React from 'react';
import { Sparkles, Compass, Shield, Sun } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const AcademyIntro: React.FC = () => {
  return (
    <section id="academy" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Editorial Card */}
        <div className="relative bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E5DEC9] shadow-md overflow-hidden">
          
          {/* Subtle Ambient Background Tint */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#581C87]/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1D3B24]/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Header with Logo */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-8 border-b border-[#E5DEC9]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#581C87]/8 p-2 border border-[#581C87]/20 flex items-center justify-center shrink-0 shadow-xs">
                <ImageWithFallback
                  src="/assets/images/academy/01-fajr-logo.png"
                  fallbackName="01-fajr-logo.png"
                  alt="شعار أكاديمية فجر"
                  aspectRatio="aspect-square"
                  objectFit="contain"
                  containerClassName="border-none bg-transparent rounded-none"
                />
              </div>

              <div className="text-center sm:text-right space-y-1.5 flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#581C87]/10 text-[#581C87] text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>رسالة البناء والأثر</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#212529]">
                  أكاديمية فجر <span className="text-[#581C87] text-xl sm:text-2xl font-normal">| لتكوين المرأة الرسالية</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#3B4D3C] font-medium">
                  «أكاديمية فجر... ليمتد أثرك من الذات إلى الأمة»
                </p>
              </div>
            </div>

            {/* Core Academy Definition */}
            <div className="py-8 space-y-6">
              <p className="text-base sm:text-lg text-[#212529] leading-relaxed text-justify sm:text-right font-normal">
                أكاديمية فجر لتكوين المرأة الرسالية هي مساحة تهدف إلى بناء امرأة واعية برسالتها، تجمع بين العلم والوعي والصلاح، وتنتقل في أثرها من بناء ذاتها إلى خدمة أسرتها ومجتمعها وأمتها.
              </p>

              {/* Callout Quote in Ruqaa/Amiri Display */}
              <div className="bg-[#581C87]/6 border-r-4 border-[#581C87] rounded-2xl p-5 sm:p-7 relative">
                <p className="font-amiri text-lg sm:text-xl lg:text-2xl text-[#4A154B] font-bold leading-relaxed text-center sm:text-right">
                  «لنصوغ من وعيكِ درعًا.. ومن علمكِ سيفًا.. ومن صلاحكِ نورًا يهتدي به الجيل القادم.»
                </p>
              </div>

              {/* 3 Meaning Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#FAF8F5] p-4 sm:p-5 rounded-2xl border border-[#E5DEC9] shadow-xs flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#581C87]/10 text-[#581C87] shrink-0 mt-0.5">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#212529] mb-1">نور البدايات</h3>
                    <p className="text-xs text-[#3B4D3C] leading-relaxed">
                      فجر... لأن كل بناءٍ عظيم يبدأ بنورٍ صغير، ولأن الوعي بداية الطريق إلى الأثر.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF8F5] p-4 sm:p-5 rounded-2xl border border-[#E5DEC9] shadow-xs flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#1D3B24]/10 text-[#1D3B24] shrink-0 mt-0.5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#212529] mb-1">الدرع الواقي</h3>
                    <p className="text-xs text-[#3B4D3C] leading-relaxed">
                      بناء المرأة الواعية بمسؤوليتها الإيمانية والوطنية في حفظ الهوية والذاكرة.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF8F5] p-4 sm:p-5 rounded-2xl border border-[#E5DEC9] shadow-xs flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#9E2A2B]/10 text-[#9E2A2B] shrink-0 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#212529] mb-1">امتداد الأثر</h3>
                    <p className="text-xs text-[#3B4D3C] leading-relaxed">
                      الانتقال من الفهم النظري إلى الفعل والمبادرة وصناعة النماذج الحية في الواقع.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Connection Note */}
            <div className="pt-4 border-t border-[#E5DEC9] flex flex-col sm:flex-row items-center justify-between text-xs text-[#3B4D3C]">
              <span className="font-medium">هذا الموقع ثمرة وعي ورسالة نصرة مستمرة لبيت المقدس</span>
              <span className="text-[#581C87] font-semibold mt-2 sm:mt-0">العلم • الوعي • الصلاح • الأثر</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
