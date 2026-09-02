import React from 'react';
import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById('academy');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Hero Frame */}
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E5DEC9] bg-[#FAF8F5]">
          
          {/* Main Visual Image (Al-Aqsa) with Soft Gradient Wash */}
          <div className="relative h-[480px] sm:h-[560px] lg:h-[620px] w-full overflow-hidden">
            <ImageWithFallback
              src="/assets/images/hero/03-al-aqsa-hero.jpg"
              fallbackName="03-al-aqsa-hero.jpg"
              alt="المسجد الأقصى المبارك وقبة الصخرة المشرفة"
              aspectRatio="aspect-auto"
              containerClassName="w-full h-full rounded-none border-none"
              className="scale-102 transition-transform duration-1000 ease-out hover:scale-105"
            />
            
            {/* Editorial Multi-layer Gradient Overlay for Pristine Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#162719]/95 via-[#162719]/70 to-[#162719]/35 backdrop-blur-[0.5px]"></div>
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#581C87]/15 to-[#162719]/80"></div>
          </div>

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 text-white">
            <div className="max-w-3xl space-y-4">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5]/15 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span>مشروع ثقافي وتوعوي • أكاديمية فجر</span>
              </div>

              {/* Main Title */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                حكايتها فلسطين
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-[#F4F1EA]/90 leading-relaxed font-normal max-w-2xl">
                أرضٌ حملت ذاكرة الأنبياء، وقضيةٌ تسكن الوجدان، وحكايات نساءٍ يصنعن من العلم والصبر رسالة.
              </p>

              {/* Action Button */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  id="hero-start-btn"
                  onClick={scrollToNext}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF8F5] text-[#1D3B24] hover:bg-white hover:shadow-lg active:scale-98 text-sm font-bold transition-all duration-200 cursor-pointer shadow-md group"
                >
                  <span>ابدئي الرحلة</span>
                  <ArrowDown className="w-4 h-4 text-[#581C87] group-hover:translate-y-1 transition-transform" />
                </button>

                <div className="hidden sm:flex items-center gap-2 text-xs text-white/80 font-medium bg-black/25 px-3.5 py-2.5 rounded-full backdrop-blur-xs border border-white/10">
                  <span className="text-[#D4AF37]">✦</span>
                  <span>الوعي • الهوية • العلم • الأثر</span>
                </div>
              </div>

            </div>
          </div>

          {/* Subtle Decorative Tatreez Accent Border along bottom */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#9E2A2B] via-[#D4AF37] to-[#1D3B24]"></div>
        </div>
      </div>
    </section>
  );
};
