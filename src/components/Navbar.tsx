import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'الرئيسية' },
    { id: 'academy', label: 'أكاديمية فجر' },
    { id: 'seerah', label: 'فلسطين في قلب السيرة' },
    { id: 'timeline', label: 'تاريخ القضية' },
    { id: 'women', label: 'حكاياتهن' },
    { id: 'heritage', label: 'الهوية والتراث' },
    { id: 'impact', label: 'صناعة الأثر' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E5DEC9] py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo Area */}
        <button
          id="nav-brand-btn"
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 text-right group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#581C87]/10 p-0.5 border border-[#581C87]/20 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <ImageWithFallback
              src="/assets/images/academy/01-fajr-logo.png"
              fallbackName="01-fajr-logo.png"
              alt="أكاديمية فجر"
              aspectRatio="aspect-square"
              objectFit="contain"
              containerClassName="border-none bg-transparent rounded-none"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-[#1D3B24] tracking-tight group-hover:text-[#581C87] transition-colors flex items-center gap-1.5">
              حكايتها فلسطين
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B] inline-block"></span>
            </span>
            <span className="text-[11px] text-[#581C87] font-medium">أكاديمية فجر لتكوين المرأة الرسالية</span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-[#FAF8F5]/80 p-1 rounded-full border border-[#E5DEC9]/80 shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1D3B24] text-white shadow-xs'
                    : 'text-[#3B4D3C] hover:text-[#1D3B24] hover:bg-[#EAE4D5]/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            id="nav-impact-cta"
            onClick={() => scrollTo('impact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#581C87] hover:bg-[#4A154B] active:scale-98 rounded-full transition-all duration-200 shadow-xs cursor-pointer"
          >
            اصنعي أثركِ
          </button>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#3B4D3C] hover:bg-[#EAE4D5] transition-colors cursor-pointer"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#FAF8F5] border-b border-[#E5DEC9] shadow-lg px-4 py-6 flex flex-col gap-2 max-h-[85vh] overflow-y-auto"
        >
          <div className="pb-3 mb-2 border-b border-[#E5DEC9] flex items-center justify-between">
            <span className="text-xs font-semibold text-[#581C87]">تنقل بين أقسام حكايتها فلسطين</span>
            <span className="text-[11px] text-[#3B4D3C]/70">أكاديمية فجر</span>
          </div>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`mobile-link-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-right px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#1D3B24] text-white font-bold'
                    : 'text-[#212529] hover:bg-[#F2EDE4]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 mt-2 border-t border-[#E5DEC9]">
            <button
              onClick={() => scrollTo('impact')}
              className="w-full py-3 bg-[#581C87] text-white rounded-xl text-center text-sm font-semibold shadow-xs"
            >
              اصنعي أثركِ مع أكاديمية فجر
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
