import React, { useState, useRef } from 'react';
import { History, ChevronLeft, ChevronRight, X, Calendar, BookOpen } from 'lucide-react';
import { TIMELINE_DATA } from '../data/siteData';
import { TimelineItem } from '../types';

export const HistoryTimeline: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E2A2B]/10 text-[#9E2A2B] text-xs font-semibold">
              <History className="w-3.5 h-3.5" />
              <span>الذاكرة والتاريخ</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#212529]">
              محطات من تاريخ فلسطين
            </h2>
            <p className="text-sm text-[#3B4D3C]">
              تسلسل زمني يرصد أبرز المحطات التاريخية والمفصلية في مسيرة الصمود والرباط.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => handleScroll('right')}
              className="p-2.5 rounded-full bg-[#FAF8F5] border border-[#E5DEC9] text-[#212529] hover:bg-[#1D3B24] hover:text-white transition-colors cursor-pointer shadow-xs"
              aria-label="التالي"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('left')}
              className="p-2.5 rounded-full bg-[#FAF8F5] border border-[#E5DEC9] text-[#212529] hover:bg-[#1D3B24] hover:text-white transition-colors cursor-pointer shadow-xs"
              aria-label="السابق"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Timeline Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-5 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {TIMELINE_DATA.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedMilestone(item)}
              className="min-w-[280px] sm:min-w-[320px] max-w-[340px] bg-[#FAF8F5] rounded-3xl p-6 border border-[#E5DEC9] shadow-xs hover:shadow-lg hover:border-[#1D3B24] transition-all duration-200 cursor-pointer flex flex-col justify-between group snap-start relative overflow-hidden"
            >
              {/* Top Index & Tag */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 font-mono font-bold text-sm text-white bg-[#1D3B24] px-3 py-1 rounded-full shadow-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </span>
                  {item.tag && (
                    <span className="text-[11px] font-medium text-[#581C87] bg-[#581C87]/8 px-2.5 py-0.5 rounded-full border border-[#581C87]/15">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Milestone Title */}
                <h3 className="font-heading text-lg font-bold text-[#212529] group-hover:text-[#1D3B24] transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#3B4D3C] leading-relaxed line-clamp-3">
                  {item.shortDesc}
                </p>
              </div>

              {/* Bottom Interactive CTA */}
              <div className="pt-4 mt-4 border-t border-[#E5DEC9]/70 flex items-center justify-between text-xs text-[#1D3B24] font-semibold">
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  اقرئي تفاصيل المحطة
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
                <span className="w-6 h-6 rounded-full bg-[#1D3B24]/10 flex items-center justify-center text-[10px] font-mono">
                  {idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Detail Modal */}
        {selectedMilestone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-[#FAF8F5] max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-2xl relative space-y-5 max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedMilestone(null)}
                className="absolute top-5 left-5 p-2 rounded-full bg-[#E5DEC9]/60 hover:bg-[#E5DEC9] text-[#212529] transition-colors cursor-pointer"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#1D3B24] text-white font-mono font-bold text-sm">
                    {selectedMilestone.year}
                  </span>
                  {selectedMilestone.tag && (
                    <span className="text-xs font-semibold text-[#581C87] bg-[#581C87]/10 px-3 py-1 rounded-full">
                      {selectedMilestone.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#212529]">
                  {selectedMilestone.title}
                </h3>
              </div>

              {/* Full Content */}
              <div className="bg-[#F4EFE6]/60 p-5 rounded-2xl border border-[#E5DEC9] text-sm sm:text-base text-[#212529] leading-relaxed">
                {selectedMilestone.fullDesc}
              </div>

              {/* Quote Footer in Modal */}
              <div className="p-4 rounded-xl bg-[#9E2A2B]/8 border-r-3 border-[#9E2A2B] text-xs text-[#9E2A2B] font-medium">
                «حفظ التاريخ وتوريث الرواية الصادقة أمانة في عنق كل جيل.»
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedMilestone(null)}
                  className="px-5 py-2.5 bg-[#1D3B24] text-white text-xs font-bold rounded-full hover:bg-[#142919] transition-colors cursor-pointer"
                >
                  إغلاق النافذة
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
