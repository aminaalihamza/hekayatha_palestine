import React, { useState } from 'react';
import { MapPin, Sparkles, Utensils, BookOpen, Layers, X, Info } from 'lucide-react';
import { CITIES_DATA, FOOD_DATA } from '../data/siteData';
import { CityInfo, FoodItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

export const IdentityHeritage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cities' | 'heritage' | 'food' | 'literature'>('cities');
  const [selectedCity, setSelectedCity] = useState<CityInfo>(CITIES_DATA[0]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; fallback: string } | null>(null);

  return (
    <section id="heritage" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D3B24]/10 text-[#1D3B24] text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>الأرض والإنسان والذاكرة</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#212529]">
            الهوية والتراث
          </h2>
          <p className="font-amiri text-lg sm:text-xl text-[#1D3B24] font-bold max-w-3xl mx-auto">
            «فلسطين ليست خارطةً فقط... إنها مدنٌ وذاكرةٌ وطعامٌ ولباسٌ وأرضٌ وحكايات.»
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center">
          <div className="inline-flex flex-wrap gap-2 p-1.5 bg-[#F4EFE6] rounded-2xl border border-[#E5DEC9] shadow-2xs">
            <button
              onClick={() => setActiveTab('cities')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'cities'
                  ? 'bg-[#1D3B24] text-white shadow-xs'
                  : 'text-[#3B4D3C] hover:bg-[#EAE4D5]'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>الجغرافيا والمدن</span>
            </button>

            <button
              onClick={() => setActiveTab('heritage')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'heritage'
                  ? 'bg-[#1D3B24] text-white shadow-xs'
                  : 'text-[#3B4D3C] hover:bg-[#EAE4D5]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>التراث والملابس</span>
            </button>

            <button
              onClick={() => setActiveTab('food')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'food'
                  ? 'bg-[#1D3B24] text-white shadow-xs'
                  : 'text-[#3B4D3C] hover:bg-[#EAE4D5]'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>الطعام الفلسطيني</span>
            </button>

            <button
              onClick={() => setActiveTab('literature')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'literature'
                  ? 'bg-[#1D3B24] text-white shadow-xs'
                  : 'text-[#3B4D3C] hover:bg-[#EAE4D5]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>الأدب والذاكرة</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Geography & Cities */}
        {activeTab === 'cities' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Map Banner & Quick Introduction */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-xs">
              <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-[#E5DEC9] shadow-xs">
                <ImageWithFallback
                  src="/assets/images/map/07-palestine-map.png"
                  fallbackName="07-palestine-map.png"
                  alt="خريطة فلسطين التاريخية"
                  aspectRatio="aspect-[3/4]"
                  objectFit="contain"
                />
              </div>

              <div className="lg:col-span-8 space-y-5">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-[#212529]">
                    تعرفي إلى مدن فلسطين
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3B4D3C] leading-relaxed">
                    من البحر إلى النهر، ومن رأس الناقورة إلى أم الرشراش؛ مدن عريقة تنبض بالحياة، وحواضر سكنها التاريخ وحافظت على اسمها وهويتها العربية والإسلامية.
                  </p>
                </div>

                {/* City Selectors */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {CITIES_DATA.map((city) => {
                    const isSelected = selectedCity.id === city.id;
                    return (
                      <button
                        key={city.id}
                        onClick={() => setSelectedCity(city)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#581C87] text-white shadow-xs scale-102'
                            : 'bg-[#F4EFE6] text-[#212529] hover:bg-[#EAE4D5]'
                        }`}
                      >
                        {city.name}
                      </button>
                    );
                  })}
                </div>

                {/* Active City Card */}
                <div className="bg-white rounded-2xl p-5 border border-[#E5DEC9] shadow-xs space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    <div className="sm:col-span-5 rounded-xl overflow-hidden border border-[#E5DEC9]">
                      <ImageWithFallback
                        src={selectedCity.imagePath}
                        fallbackName={selectedCity.fallbackImageName}
                        alt={selectedCity.name}
                        aspectRatio="aspect-video"
                      />
                    </div>
                    <div className="sm:col-span-7 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading text-xl font-bold text-[#1D3B24]">
                          {selectedCity.name}
                        </h4>
                        <span className="text-[11px] font-medium text-[#581C87] bg-[#581C87]/10 px-2.5 py-0.5 rounded-full">
                          {selectedCity.tagline}
                        </span>
                      </div>
                      <p className="text-xs text-[#3B4D3C] leading-relaxed">
                        {selectedCity.description}
                      </p>
                      <div className="pt-2">
                        <span className="text-[11px] font-bold text-[#212529] block mb-1">أبرز المعالم:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedCity.landmarks.map((landmark, lIdx) => (
                            <span key={lIdx} className="text-[10px] bg-[#FAF8F5] text-[#3B4D3C] px-2 py-0.5 rounded-md border border-[#E5DEC9]">
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Heritage & Clothing */}
        {activeTab === 'heritage' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Palestinian Tatreez */}
              <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E5DEC9] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden border border-[#E5DEC9]">
                    <ImageWithFallback
                      src="/assets/images/heritage/14-palestinian-embroidery.jpg"
                      fallbackName="14-palestinian-embroidery.jpg"
                      alt="التطريز الفلسطيني التراثي"
                      aspectRatio="aspect-[4/3]"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#212529]">
                    التطريز الفلسطيني (التطريز الفلاحي)
                  </h3>
                  <p className="text-xs text-[#3B4D3C] leading-relaxed">
                    وثيقة تاريخية ولغة بصرية غير مكتوبة؛ تحمل كل غرزة ونقشة حكاية قرية أو مدينة فلسطينية، وسجلت اليونسكو التطريز الفلسطيني كعنصر تراثي إنساني عالمي يحفظ الهوية.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E5DEC9] text-[11px] text-[#9E2A2B] font-semibold">
                  غرزة الفلاحي • نقشة السرو • خيمة الباشا • نجمة بيت لحم
                </div>
              </div>

              {/* Card 2: Palestinian Thobe */}
              <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E5DEC9] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden border border-[#E5DEC9]">
                    <ImageWithFallback
                      src="/assets/images/heritage/15-palestinian-thobe.jpg"
                      fallbackName="15-palestinian-thobe.jpg"
                      alt="الثوب الفلسطيني التقليدي"
                      aspectRatio="aspect-[4/3]"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#212529]">
                    الثوب الفلسطيني الأصيل
                  </h3>
                  <p className="text-xs text-[#3B4D3C] leading-relaxed">
                    تاج المرأة الفلسطينية ورمز كبريائها؛ يختلف من الخليل إلى رام الله ويافا والقدس وغزة وبئر السبع، ليعبر عن تنوع الجغرافيا وثرائها وجمال أصالتها.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E5DEC9] text-[11px] text-[#1D3B24] font-semibold">
                  ثوب المجدل • ثوب قريش • ثوب الملك • ثوب القدس
                </div>
              </div>

              {/* Card 3: Keffiyeh & Folk Symbols */}
              <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E5DEC9] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden border border-[#E5DEC9]">
                    <ImageWithFallback
                      src="/assets/images/heritage/16-keffiyeh.jpg"
                      fallbackName="16-keffiyeh.jpg"
                      alt="الكوفية الفلسطينية والرموز الشعبية"
                      aspectRatio="aspect-[4/3]"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#212529]">
                    الكوفية والرموز الوطنية
                  </h3>
                  <p className="text-xs text-[#3B4D3C] leading-relaxed">
                    من لباس الفلاحين المقاومين عام 1936 إلى رمز عالمي للحرية والعدالة؛ نقشة شباك الصيد ترمز للبحر، وخطوط أوراق شجر الزيتون ترمز للتجذر في الأرض.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E5DEC9] text-[11px] text-[#581C87] font-semibold">
                  الكوفية • ورق الزيتون • شباك الصيد • مفتاح العودة
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Palestinian Food & Gallery with Lightbox */}
        {activeTab === 'food' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="text-center max-w-xl mx-auto mb-6">
              <p className="text-xs sm:text-sm text-[#3B4D3C]">
                المائدة الفلسطينية ليست مجرد وجبات، بل طقس كرم وارتباط بالأرض والزيتون والمواسم. اضغطي على أي طبق لاستعراض دلالاته التراثية.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FOOD_DATA.map((food) => (
                <div
                  key={food.id}
                  onClick={() => setSelectedFood(food)}
                  className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#E5DEC9] shadow-xs hover:shadow-lg hover:border-[#1D3B24] transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                >
                  <div className="relative">
                    <ImageWithFallback
                      src={food.imagePath}
                      fallbackName={food.fallbackImageName}
                      alt={food.name}
                      aspectRatio="aspect-[4/3]"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-md">
                      {food.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading text-lg font-bold text-[#212529] group-hover:text-[#1D3B24] transition-colors">
                        {food.name}
                      </h4>
                      <p className="text-xs text-[#3B4D3C] line-clamp-2 mt-1">
                        {food.description}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-[#E5DEC9] flex items-center justify-between text-xs text-[#1D3B24] font-semibold">
                      <span>عرض الحكاية التراثية</span>
                      <Info className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Food Detail Modal */}
            {selectedFood && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
                <div className="bg-[#FAF8F5] max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-2xl relative space-y-5">
                  <button
                    onClick={() => setSelectedFood(null)}
                    className="absolute top-5 left-5 p-2 rounded-full bg-[#E5DEC9]/60 hover:bg-[#E5DEC9] text-[#212529] transition-colors cursor-pointer"
                    aria-label="إغلاق"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="rounded-2xl overflow-hidden border border-[#E5DEC9] shadow-xs">
                    <ImageWithFallback
                      src={selectedFood.imagePath}
                      fallbackName={selectedFood.fallbackImageName}
                      alt={selectedFood.name}
                      aspectRatio="aspect-video"
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[#581C87] bg-[#581C87]/10 px-3 py-0.5 rounded-full">
                      {selectedFood.category}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-[#212529]">
                      {selectedFood.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3B4D3C] leading-relaxed">
                      {selectedFood.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#1D3B24]/8 border-r-3 border-[#1D3B24] space-y-1">
                    <span className="text-xs font-bold text-[#1D3B24] block">الدلالة التراثية والرمزية:</span>
                    <p className="text-xs text-[#212529] leading-relaxed">
                      {selectedFood.culturalSignificance}
                    </p>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setSelectedFood(null)}
                      className="px-5 py-2 bg-[#1D3B24] text-white text-xs font-bold rounded-full hover:bg-[#142919] transition-colors cursor-pointer"
                    >
                      إغلاق
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Literature & Memory */}
        {activeTab === 'literature' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              
              <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E5DEC9] shadow-xs space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#E5DEC9]">
                  <ImageWithFallback
                    src="/assets/images/literature/21-palestinian-literature.jpg"
                    fallbackName="21-palestinian-literature.jpg"
                    alt="الأدب الفلسطيني والكتب والذاكرة"
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#212529]">
                  الأدب وسلاح الكلمة
                </h3>
                <p className="text-xs text-[#3B4D3C] leading-relaxed">
                  يحفظ الأدب ما قد تحاول الذاكرة أن تنساه، وتحمل الكلمات حكاية الأرض والإنسان من جيل إلى جيل، ليبقى صوت غسان كنفاني وفدوى طوقان ومحمود درويش شاهدًا على الحق.
                </p>
              </div>

              <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E5DEC9] shadow-xs space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#E5DEC9]">
                  <ImageWithFallback
                    src="/assets/images/memory/22-old-palestine-photo.jpg"
                    fallbackName="22-old-palestine-photo.jpg"
                    alt="صور تاريخية لفلسطين القديمة"
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#212529]">
                  الوثيقة والصورة القديمة
                </h3>
                <p className="text-xs text-[#3B4D3C] leading-relaxed">
                  صور الأسواق العامرة، والمدارس التاريخية، والبيارات الخضراء تفضح أكذوبة "أرض بلا شعب لشعب بلا أرض"، وتثبت تجذر الفلسطينيين في ديارهم عبر القرون.
                </p>
              </div>

              <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E5DEC9] shadow-xs space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#E5DEC9]">
                  <ImageWithFallback
                    src="/assets/images/memory/23-return-key.jpg"
                    fallbackName="23-return-key.jpg"
                    alt="مفتاح العودة التاريخي"
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#212529]">
                  مفتاح العودة... عهد لا يزول
                </h3>
                <p className="text-xs text-[#3B4D3C] leading-relaxed">
                  المفتاح الحديدي الثقيل الذي ورّثه الأجداد للأحفاد ليس مجرد قطعة معدنية؛ بل هو وثيقة ملكية مقدسة ويقين لا يتزعزع بأن العودة حق مشروع لا يسقط بالتقادم.
                </p>
              </div>

            </div>

            <div className="bg-[#1D3B24]/8 p-5 rounded-2xl border border-[#1D3B24]/20 text-center">
              <p className="font-amiri text-lg text-[#1D3B24] font-bold">
                «يحفظ الأدب ما قد تحاول الذاكرة أن تنساه، وتحمل الكلمات حكاية الأرض والإنسان من جيل إلى جيل.»
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
