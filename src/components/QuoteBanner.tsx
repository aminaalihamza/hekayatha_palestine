import React from 'react';

interface QuoteBannerProps {
  quote: string;
  subtext?: string;
  theme?: 'olive' | 'purple' | 'ivory' | 'red';
}

export const QuoteBanner: React.FC<QuoteBannerProps> = ({
  quote,
  subtext,
  theme = 'ivory',
}) => {
  let themeStyles = 'bg-[#FAF8F5] text-[#212529] border-[#E5DEC9]';
  let quoteColor = 'text-[#1D3B24]';

  if (theme === 'olive') {
    themeStyles = 'bg-[#1D3B24] text-white border-[#1D3B24]';
    quoteColor = 'text-[#D4AF37]';
  } else if (theme === 'purple') {
    themeStyles = 'bg-[#581C87] text-white border-[#581C87]';
    quoteColor = 'text-[#F4EFE6]';
  } else if (theme === 'red') {
    themeStyles = 'bg-[#9E2A2B] text-white border-[#9E2A2B]';
    quoteColor = 'text-[#FAF8F5]';
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className={`rounded-2xl p-6 sm:p-8 border shadow-xs text-center space-y-2 relative overflow-hidden ${themeStyles}`}
        >
          {/* Subtle Tatreez Corner Dots */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 sm:w-16 bg-current opacity-30"></span>
            <p className={`font-amiri text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide ${quoteColor}`}>
              {quote}
            </p>
            <span className="h-px w-8 sm:w-16 bg-current opacity-30"></span>
          </div>

          {subtext && (
            <p className="text-xs sm:text-sm opacity-85 font-medium pt-1">
              {subtext}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
