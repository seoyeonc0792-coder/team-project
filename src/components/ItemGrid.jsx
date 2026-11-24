import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { LayoutGrid, Grid3X3, List, Inbox } from 'lucide-react';

export default function ItemGrid({
  items,
  onSelectItem,
  bookmarks,
  onToggleBookmark,
  onOpenReport
}) {
  const [viewMode, setViewMode] = useState('grid3'); // 'grid3' (Instagram 3열) | 'grid2' | 'list'

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center border border-gray-150 shadow-sm my-6">
        <div className="w-16 h-16 rounded-2xl bg-sky-50 text-[#00A1E9] mx-auto flex items-center justify-center mb-4">
          <Inbox className="w-8 h-8" />
        </div>
        <h3 className="text-base font-bold text-gray-900 mb-1">일치하는 분실물이 없습니다</h3>
        <p className="text-xs text-gray-500 max-w-sm mx-auto mb-5 leading-relaxed">
          검색어 철자를 확인하시거나 필터 조건을 변경해보세요.
          찾으시는 물품이 아직 등록되지 않았다면 키워드 알림을 신청해보세요!
        </p>
        <button
          onClick={onOpenReport}
          className="inline-flex items-center space-x-1.5 bg-[#00A1E9] hover:bg-[#0284c7] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition-all"
        >
          <span>직접 습득물 제보하기</span>
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Grid Header Toolbar: Count & View Switcher */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="text-xs font-semibold text-gray-700 flex items-center space-x-1">
          <span>인스타그램 피드형 분실물 목록</span>
          <span className="text-[11px] text-[#00A1E9] font-bold bg-sky-50 px-2 py-0.5 rounded-full">
            총 {items.length}개
          </span>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-gray-100 rounded-lg p-0.5 border border-gray-200">
          <button
            onClick={() => setViewMode('grid3')}
            className={`p-1 rounded ${viewMode === 'grid3' ? 'bg-white text-[#1B4F9C] shadow-xs' : 'text-gray-400 hover:text-gray-700'}`}
            title="인스타 3열 피드 뷰"
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('grid2')}
            className={`p-1 rounded ${viewMode === 'grid2' ? 'bg-white text-[#1B4F9C] shadow-xs' : 'text-gray-400 hover:text-gray-700'}`}
            title="2열 카드 뷰"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1 rounded ${viewMode === 'list' ? 'bg-white text-[#1B4F9C] shadow-xs' : 'text-gray-400 hover:text-gray-700'}`}
            title="리스트 뷰"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid Container */}
      <div
        className={
          viewMode === 'grid3'
            ? 'grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4'
            : viewMode === 'grid2'
            ? 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'
            : 'space-y-2.5'
        }
      >
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onClick={onSelectItem}
            isBookmarked={bookmarks.includes(item.id)}
            onToggleBookmark={onToggleBookmark}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
}
