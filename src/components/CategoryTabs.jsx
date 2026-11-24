import React from 'react';
import { CATEGORIES } from '../data/buildings';

export default function CategoryTabs({ selectedCategory, onSelectCategory, itemCounts }) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-[57px] z-20 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 py-2.5">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = itemCounts[cat.id] ?? 0;

            // Custom active styles matching the required color palette:
            // 전자기기: Steel Blue (#4A779D)
            // 생활용품: Coral Red (#D96B6B)
            // 문구류: Sage Green (#5B9A8B)
            // 귀중품: Mustard Yellow (#E5B84B)
            // 기타: Slate Gray (#64748B)
            let activeClass = '';
            if (isSelected) {
              if (cat.id === '전자기기') activeClass = 'bg-[#4A779D] text-white shadow-sm';
              else if (cat.id === '생활용품') activeClass = 'bg-[#D96B6B] text-white shadow-sm';
              else if (cat.id === '문구류') activeClass = 'bg-[#5B9A8B] text-white shadow-sm';
              else if (cat.id === '귀중품') activeClass = 'bg-[#E5B84B] text-gray-950 font-bold shadow-sm';
              else if (cat.id === '기타') activeClass = 'bg-[#64748B] text-white shadow-sm';
              else activeClass = 'bg-[#1B4F9C] text-white shadow-sm'; // 전체
            } else {
              activeClass = 'bg-gray-100 hover:bg-gray-200/80 text-gray-700';
            }

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 active:scale-95 ${activeClass}`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected
                      ? cat.id === '귀중품' ? 'bg-amber-800 text-white' : 'bg-white/25 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
