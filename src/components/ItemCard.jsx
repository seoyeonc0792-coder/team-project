import React from 'react';
import { Eye, MapPin, Check, Bookmark, Clock } from 'lucide-react';
import { CATEGORY_COLORS } from '../data/buildings';

export default function ItemCard({
  item,
  onClick,
  isBookmarked,
  onToggleBookmark,
  viewMode = 'grid3' // 'grid3' | 'grid2' | 'list'
}) {
  const catStyle = CATEGORY_COLORS[item.category] || CATEGORY_COLORS['기타'];
  const isClaimed = item.status === '수령완료';

  if (viewMode === 'list') {
    return (
      <div
        onClick={() => onClick(item)}
        className="bg-white rounded-2xl p-3 border border-gray-150 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center space-x-3 group relative overflow-hidden"
      >
        {/* Photo Box */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white border border-gray-100 flex items-center justify-center p-1.5 shrink-0 relative overflow-hidden">
          {item.svg ? (
            <div 
              className="w-full h-full cutout-object"
              dangerouslySetInnerHTML={{ __html: item.svg }} 
            />
          ) : (
            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-contain cutout-object" />
          )}
          {isClaimed && (
            <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[1px] flex items-center justify-center">
              <span className="text-[10px] font-bold text-white bg-gray-800/90 px-1.5 py-0.5 rounded">수령완료</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1.5 mb-1">
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-md"
              style={{
                backgroundColor: catStyle.bg,
                color: catStyle.text,
                border: `1px solid ${catStyle.border}`
              }}
            >
              {item.category}
            </span>
            <span className="text-xs font-mono font-bold text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">
              {item.id}
            </span>
            {isClaimed ? (
              <span className="text-[10px] text-gray-500 font-medium">수령완료</span>
            ) : (
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1"></span>
                보관중
              </span>
            )}
          </div>

          <h3 className="font-bold text-sm text-gray-900 truncate group-hover:text-[#00A1E9] transition-colors">
            {item.title}
          </h3>

          <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1.5">
            <span className="flex items-center truncate">
              <MapPin className="w-3 h-3 mr-0.5 text-gray-400 shrink-0" />
              {item.location}
            </span>
            <span>•</span>
            <span>{item.date}</span>
          </div>
        </div>

        {/* Bookmark */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(item.id);
          }}
          className="p-2 text-gray-300 hover:text-amber-500 transition-colors"
          title="관심 물품 북마크"
        >
          <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-amber-400 text-amber-500' : ''}`} />
        </button>
      </div>
    );
  }

  // 3-Column / 2-Column Grid Card (Instagram Feed Style)
  return (
    <div
      onClick={() => onClick(item)}
      className="group feed-card bg-white rounded-2xl overflow-hidden border border-gray-150/90 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col relative"
    >
      {/* 1:1 Instagram Cut-out Photo Display */}
      <div className="feed-photo-card p-2 sm:p-3 relative border-b border-gray-100/80">
        {item.svg ? (
          <div 
            className="w-full h-full cutout-object flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: item.svg }} 
          />
        ) : (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain cutout-object"
            loading="lazy"
          />
        )}

        {/* Status Overlay Badge if Claimed */}
        {isClaimed && (
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] flex items-center justify-center">
            <span className="text-[11px] font-extrabold text-white bg-slate-800/90 px-2 py-1 rounded-md shadow-md tracking-wider">
              수령완료
            </span>
          </div>
        )}

        {/* Keeping status indicator green dot (top left) */}
        {!isClaimed && (
          <div className="absolute top-2 left-2 flex items-center space-x-1 bg-white/90 backdrop-blur-xs px-1.5 py-0.5 rounded-full shadow-xs border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[9px] font-bold text-emerald-700">보관중</span>
          </div>
        )}

        {/* Bookmark star / heart (top right) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(item.id);
          }}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-amber-500 transition-colors shadow-xs"
          title="관심 등록"
        >
          <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400 text-amber-500' : ''}`} />
        </button>
      </div>

      {/* Card Info Section */}
      <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between">
        <div>
          {/* Row 1: Category Badge + Management Number */}
          <div className="flex items-center justify-between gap-1 mb-1.5">
            {/* Category Badge */}
            <span
              className="text-[10px] sm:text-[11px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-md truncate"
              style={{
                backgroundColor: catStyle.bg,
                color: catStyle.text,
                border: `1px solid ${catStyle.border}`
              }}
            >
              {item.category}
            </span>

            {/* Management Number (e.g. 2026-143) */}
            <span className="text-[10px] sm:text-[11px] font-mono font-black text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded tracking-tight">
              {item.id}
            </span>
          </div>

          {/* Row 2: Item Title */}
          <h3 className="font-bold text-xs sm:text-sm text-gray-900 line-clamp-2 leading-snug group-hover:text-[#00A1E9] transition-colors mb-1.5">
            {item.title}
          </h3>
        </div>

        {/* Row 3: Location & Date Footer */}
        <div className="pt-1.5 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-600">
          <span className="flex items-center truncate max-w-[65%]">
            <MapPin className="w-2.5 h-2.5 mr-0.5 text-gray-400 shrink-0" />
            <span className="truncate">{item.location}</span>
          </span>
          <span className="shrink-0">{item.date.slice(5)}</span>
        </div>
      </div>
    </div>
  );
}
