import React, { useState } from 'react';
import {
  Sparkles,
  Home,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  Compass,
  ShieldCheck,
  Users,
  Award,
  ShoppingBag,
  Cpu,
  Feather,
  Video,
  Heart,
  Bookmark,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import { IMPACT_PILLARS, SKILL_OPTIONS } from '../data/siteData';
import { ImpactPillar, ImpactSkillOption } from '../types';

export const ImpactMakers: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<ImpactSkillOption>(SKILL_OPTIONS[4]); // Default to Tech/AI
  const [expandedPillar, setExpandedPillar] = useState<number | null>(3); // Default expand Pillar 3 (AI/Tech)

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4" />;
      case 'Home':
        return <Home className="w-4 h-4" />;
      case 'Feather':
        return <Feather className="w-4 h-4" />;
      case 'Video':
        return <Video className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Heart':
        return <Heart className="w-4 h-4" />;
      case 'Bookmark':
        return <Bookmark className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Main Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#581C87]/10 text-[#581C87] text-xs font-bold border border-[#581C87]/20 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#581C87]" />
            <span>رسالة أكاديمية فجر لبناء المرأة الرسالية</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#212529]">
            صناعة الأثر
          </h2>
          <p className="font-amiri text-lg sm:text-xl text-[#1D3B24] font-bold">
            «من الوعي إلى العمل... كيف تصبح المرأة جزءًا من نصرة قضيتها؟»
          </p>
        </div>

        {/* 11 Structured Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_PILLARS.map((pillar) => {
            const isExpanded = expandedPillar === pillar.id;
            return (
              <div
                key={pillar.id}
                className={`bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  pillar.specialBadge
                    ? 'border-[#581C87] ring-2 ring-[#581C87]/15 shadow-md bg-gradient-to-b from-[#FAF8F5] to-[#F3EBF9]/40'
                    : 'border-[#E5DEC9] shadow-xs hover:shadow-lg hover:border-[#1D3B24]'
                }`}
              >
                <div className="space-y-4">
                  {/* Pillar Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-3 rounded-2xl ${
                        pillar.specialBadge
                          ? 'bg-[#581C87] text-white shadow-xs'
                          : 'bg-[#1D3B24]/10 text-[#1D3B24]'
                      }`}
                    >
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    {pillar.specialBadge && (
                      <span className="text-[10px] font-bold text-[#581C87] bg-[#581C87]/10 px-2.5 py-1 rounded-full border border-[#581C87]/20 animate-pulse">
                        {pillar.specialBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#212529]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#581C87] mt-1">
                      «{pillar.subtitle}»
                    </p>
                  </div>

                  {/* Core Description */}
                  <p className="text-xs sm:text-sm text-[#3B4D3C] leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Key Points */}
                  <div className="pt-2 space-y-1.5">
                    {pillar.keyPoints.map((point, ptIdx) => (
                      <div key={ptIdx} className="flex items-start gap-2 text-xs text-[#212529] bg-white/70 p-2 rounded-xl border border-[#E5DEC9]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1D3B24] shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5DEC9]/70 flex items-center justify-between text-[11px] text-[#3B4D3C] font-mono">
                  <span>المحور {pillar.id} من 11</span>
                  <span className="text-[#581C87] font-semibold">أكاديمية فجر</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Climax Interactive Reflection Tool */}
        <div className="relative bg-gradient-to-br from-[#1D3B24] via-[#162C1B] to-[#122216] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#D4AF37]/30 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#581C87]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-8 max-w-4xl mx-auto text-center">
            
            {/* Poetic Core Quotes */}
            <div className="space-y-4">
              <p className="font-amiri text-2xl sm:text-3xl lg:text-4xl text-[#FDFBF7] font-bold leading-relaxed">
                «العلم يبنيكِ، والوعي يوجّهكِ، والإخلاص يثبتكِ، والعمل يجعل لأثركِ معنى.»
              </p>
              <p className="text-sm sm:text-base text-[#D4AF37] font-medium">
                «فلسطين تحتاج إلى وعيٍ لا يخبو، وعلمٍ لا يتوقف، وأجيالٍ تعرف قضيتها.»
              </p>
            </div>

            <div className="h-px w-32 bg-[#D4AF37]/40 mx-auto"></div>

            {/* Interactive Question */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                وأنتِ... ما المهارة التي تستطيعين أن تجعليها أثرًا؟
              </h3>
              <p className="text-xs sm:text-sm text-[#F4F1EA]/80">
                اختاري مجالكِ لتري كيف يُترجم إلى فعلٍ ونصرةٍ حقيقية:
              </p>

              {/* Skill Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {SKILL_OPTIONS.map((skill) => {
                  const isSelected = selectedSkill.id === skill.id;
                  return (
                    <button
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-[#D4AF37] text-[#1D3B24] shadow-lg scale-105 ring-2 ring-white/50'
                          : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-xs'
                      }`}
                    >
                      {getSkillIcon(skill.icon)}
                      <span>{skill.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Skill Guidance Result Box */}
              {selectedSkill && (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 text-right space-y-3 animate-in fade-in duration-300 max-w-2xl mx-auto shadow-inner">
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    {getSkillIcon(selectedSkill.icon)}
                    <span className="font-bold text-sm">{selectedSkill.label}</span>
                  </div>

                  <p className="font-amiri text-xl sm:text-2xl text-white font-bold leading-relaxed">
                    {selectedSkill.impactMessage}
                  </p>

                  <p className="text-xs sm:text-sm text-[#F4F1EA]/90 leading-relaxed pt-2 border-t border-white/10">
                    <span className="font-bold text-[#D4AF37]">خارطة الفعل: </span>
                    {selectedSkill.actionGuidance}
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
