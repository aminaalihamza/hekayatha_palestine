import React from 'react';
import { ArrowUp } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#162C1B] text-white pt-16 pb-12 border-t border-[#23422A] overflow-hidden">
      
      {/* Ending Image Feature */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <ImageWithFallback
            src="/assets/images/ending/27-ending-palestine.jpg"
            fallbackName="27-ending-palestine.jpg"
            alt="فلسطين الحرة والذاكرة المستمرة"
            aspectRatio="aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 sm:p-8">
            <p className="font-amiri text-xl sm:text-2xl lg:text-3xl text-white font-bold text-center sm:text-right w-full">
              «من الحكاية يبدأ الوعي، ومن الوعي يبدأ الأثر.»
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/20">
                <ImageWithFallback
                  src="/assets/images/academy/01-fajr-logo.png"
                  fallbackName="01-fajr-logo.png"
                  alt="أكاديمية فجر"
                  aspectRatio="aspect-square"
                  objectFit="contain"
                  containerClassName="border-none bg-transparent rounded-none"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  حكايتها فلسطين
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium">
                  أكاديمية فجر لتكوين المرأة الرسالية
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#F4F1EA]/80 max-w-md leading-relaxed">
              مشروع ثقافي وتوعوي يربط بين أصالة الهوية الفلسطينية وبناء المرأة الرسالية الواعية في العلم والتربية وصناعة الأثر.
            </p>
          </div>

          {/* Core Values / Slogans */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 text-xs text-[#F4F1EA]/90">
            <div className="bg-white/5 px-4 py-3 rounded-2xl border border-white/10 text-center">
              <span className="text-[#D4AF37] block font-bold mb-0.5">رسالة فجر</span>
              <span>«ليمتد أثرك من الذات إلى الأمة»</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#581C87] hover:bg-[#6B21A8] text-white transition-all shadow-md flex items-center gap-2 text-xs font-bold cursor-pointer"
            >
              <span>إلى أعلى</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar with Links and Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div>
            © {new Date().getFullYear()} مشروع «حكايتها فلسطين» • أكاديمية فجر لتكوين المرأة الرسالية.
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-white/90">
            <span className="hover:text-[#D4AF37] transition-colors">القدس في القلب</span>
            <span>•</span>
            <span className="hover:text-[#D4AF37] transition-colors">لن ينحني زيتون فلسطين</span>
            <span>•</span>
            <span className="hover:text-[#D4AF37] transition-colors">باقون ما بقي الزعتر والزيتون</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
