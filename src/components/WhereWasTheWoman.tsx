import React from 'react';
import { Quote } from 'lucide-react';

export const WhereWasTheWoman: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-r from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#E5DEC9] shadow-sm text-center space-y-6">
          
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#581C87]/10 text-[#581C87]">
            <Quote className="w-6 h-6 rotate-180" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#212529]">
            وأين كانت المرأة؟
          </h2>

          <p className="font-amiri text-lg sm:text-2xl text-[#1D3B24] font-bold leading-[2.1] max-w-3xl mx-auto">
            «لم تكن المرأة المسلمة عبر تاريخ الأمة متفرجة على أحداثها، بل كانت حاضرة في التربية والعلم والرعاية والبذل والصبر وصناعة الأجيال. وفي القضية الفلسطينية ظل حضور المرأة جزءًا من مسيرة الصمود والحفاظ على الذاكرة والهوية.»
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-[#581C87]">
            <span className="w-2 h-2 rounded-full bg-[#581C87]"></span>
            <span>صانعات المجد والعزة في قلب الرواية الفلسطينية</span>
          </div>

        </div>
      </div>
    </section>
  );
};
