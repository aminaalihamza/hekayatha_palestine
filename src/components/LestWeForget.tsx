import React from 'react';
import { Bookmark, Shield } from 'lucide-react';
import { MEMORY_FIGURES } from '../data/siteData';
import { ImageWithFallback } from './ImageWithFallback';

export const LestWeForget: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-[#F4EFE6]/50 to-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E2A2B]/10 text-[#9E2A2B] text-xs font-semibold">
            <Bookmark className="w-3.5 h-3.5" />
            <span>أمانة الكلمة ونقل الحقيقة</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#212529]">
            حتى لا ننسى
          </h2>
          <p className="font-amiri text-lg sm:text-xl text-[#9E2A2B] font-bold max-w-2xl mx-auto">
            «أسماءٌ تبقى في الذاكرة، لأن بعض الحكايات لا ينبغي أن تُنسى.»
          </p>
        </div>

        {/* 4 Reverent Figures Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMORY_FIGURES.map((figure) => (
            <div
              key={figure.id}
              className="bg-[#FAF8F5] rounded-3xl p-5 border border-[#E5DEC9] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md hover:border-[#9E2A2B]/40 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden border border-[#E5DEC9] relative">
                  <ImageWithFallback
                    src={figure.imagePath}
                    fallbackName={figure.fallbackImageName}
                    alt={figure.name}
                    aspectRatio="aspect-square"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Shield className="w-3 h-3 text-[#D4AF37]" />
                    <span>شاهد على الحقيقة</span>
                  </div>
                </div>

                <div className="space-y-1 text-center sm:text-right">
                  <h3 className="font-heading text-lg font-bold text-[#212529]">
                    {figure.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#581C87]">
                    {figure.role}
                  </p>
                  <p className="text-xs text-[#3B4D3C] leading-relaxed pt-1">
                    {figure.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5DEC9] text-center">
                <span className="text-[10px] text-[#9E2A2B] font-mono font-medium">
                  #صوت_فلسطين • #لن_ننسى
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
