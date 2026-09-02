import React, { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  fallbackName?: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
  priority?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackName,
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-video',
  objectFit = 'cover',
}) => {
  // Build list of candidate sources to try in sequence
  const getCandidateSources = () => {
    const list: string[] = [];
    if (src) list.push(src);
    if (fallbackName) {
      if (!list.includes(fallbackName)) list.push(fallbackName);
      const withSlash = `/assets/images/${fallbackName}`;
      if (!list.includes(withSlash)) list.push(withSlash);
      const withoutLeadingSlash = `assets/images/${fallbackName}`;
      if (!list.includes(withoutLeadingSlash)) list.push(withoutLeadingSlash);

      // Also try common subfolders if not already prefixed
      const subfolders = ['academy', 'hero', 'women', 'map', 'palestine', 'heritage', 'food', 'literature', 'memory', 'ending'];
      for (const folder of subfolders) {
        const folderPath = `/assets/images/${folder}/${fallbackName}`;
        if (!list.includes(folderPath)) list.push(folderPath);
      }
    }
    return list;
  };

  const candidateSources = getCandidateSources();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(candidateSources.length === 0);

  useEffect(() => {
    setCurrentIndex(0);
    setIsLoaded(false);
    setAllFailed(candidateSources.length === 0);
  }, [src, fallbackName]);

  const handleError = () => {
    if (currentIndex + 1 < candidateSources.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  const currentSrc = candidateSources[currentIndex];

  return (
    <div
      className={`relative overflow-hidden bg-[#F2EDE4] rounded-xl flex items-center justify-center border border-[#E5DEC9] ${aspectRatio} ${containerClassName}`}
    >
      {!allFailed && currentSrc ? (
        <>
          <img
            key={currentSrc}
            src={currentSrc}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
            className={`w-full h-full transition-opacity duration-700 ${
              objectFit === 'contain' ? 'object-contain' : 'object-cover'
            } ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FAF8F5]/80 backdrop-blur-xs text-center p-4">
              <div className="w-8 h-8 rounded-full border-2 border-[#581C87]/40 border-t-[#581C87] animate-spin mb-2"></div>
              <span className="text-xs text-[#3B4D3C] font-medium">{alt}</span>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full p-4 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#FAF8F5] via-[#F4EFE6] to-[#ECE4D5] text-[#3B4D3C]">
          <div className="w-12 h-12 rounded-full bg-[#3B4D3C]/10 flex items-center justify-center mb-2 text-[#3B4D3C]">
            <ImageIcon className="w-6 h-6 stroke-[1.5]" />
          </div>
          <p className="font-heading font-semibold text-sm text-[#212529] mb-1">{alt}</p>
          {fallbackName && (
            <p className="text-[11px] font-mono text-[#581C87] bg-[#581C87]/8 px-2 py-0.5 rounded-md border border-[#581C87]/15 dir-ltr">
              {fallbackName}
            </p>
          )}
          <div className="mt-2 flex items-center gap-1 text-[10px] text-[#9E2A2B]/80 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D3B24]"></span>
            <span>مساحة مخصصة للصورة المرفوعة</span>
          </div>
        </div>
      )}
    </div>
  );
};
