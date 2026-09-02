import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AcademyIntro } from './components/AcademyIntro';
import { SeerahSection } from './components/SeerahSection';
import { HistoryTimeline } from './components/HistoryTimeline';
import { WhereWasTheWoman } from './components/WhereWasTheWoman';
import { WomenStories } from './components/WomenStories';
import { IdentityHeritage } from './components/IdentityHeritage';
import { LestWeForget } from './components/LestWeForget';
import { ImpactMakers } from './components/ImpactMakers';
import { QuoteBanner } from './components/QuoteBanner';
import { Footer } from './components/Footer';
import { ImageWithFallback } from './components/ImageWithFallback';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Intersection observer to highlight current navbar link smoothly
  useEffect(() => {
    const sections = ['hero', 'academy', 'seerah', 'timeline', 'women', 'heritage', 'impact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative text-[#212529] font-sans selection:bg-[#581C87]/20 selection:text-[#581C87]">
      
      {/* 
        Fixed Background (02-background-girl-olive-tree.jpg)
        Soft opacity and warm overlay so it is beautifully visible while text remains high contrast
      */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FAF8F5]">
        <div className="absolute inset-0 opacity-[0.75] sm:opacity-[0.85]">
          <img
            src="/assets/images/02-background-girl-olive-tree.jpg"
            alt="خلفية الموقع - زيتون فلسطين"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center fixed inset-0"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('background.jpg')) {
                target.src = '/assets/images/background.jpg';
              }
            }}
          />
        </div>
        {/* Soft warm gradient wash for pristine typography readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/30 via-[#FAF8F5]/30 to-[#FAF8F5]/40"></div>
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar activeSection={activeSection} />

        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Academy Intro Section */}
          <AcademyIntro />

          {/* Quote Banner 1 */}
          <QuoteBanner
            quote="«لن ينحني زيتون فلسطين»"
            subtext="شجرة مباركة تمتد جذورها في أعماق الأرض والتاريخ"
            theme="ivory"
          />

          {/* 3. Palestine in the Seerah */}
          <SeerahSection />

          {/* Quote Banner 2 */}
          <QuoteBanner
            quote="«القدس في القلب»"
            subtext="مسجدٌ بارك الله حوله وأسرى إليه بخير خلقه صلى الله عليه وسلم"
            theme="olive"
          />

          {/* 4. History Timeline */}
          <HistoryTimeline />

          {/* 5. Where was the Woman? */}
          <WhereWasTheWoman />

          {/* 6. Stories of Palestinian Women */}
          <WomenStories />

          {/* Quote Banner 3 */}
          <QuoteBanner
            quote="«الأرض والذاكرة والهوية»"
            subtext="حكايات الصمود تتوارثها الأجيال ولا تسقط بالتقادم"
            theme="ivory"
          />

          {/* 7. Identity & Heritage */}
          <IdentityHeritage />

          {/* 8. Lest We Forget */}
          <LestWeForget />

          {/* Quote Banner 4 */}
          <QuoteBanner
            quote="«باقون ما بقي الزعتر والزيتون»"
            subtext="زاد الصمود وثبات الوجود في كل قرية وبيت"
            theme="purple"
          />

          {/* 9. Making an Impact (Climax) */}
          <ImpactMakers />
        </main>

        {/* 10. Footer */}
        <Footer />
      </div>

    </div>
  );
};

export default App;
