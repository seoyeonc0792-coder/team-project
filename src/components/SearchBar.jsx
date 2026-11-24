import React from 'react';
import { Search, X, Filter, RotateCcw, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SOONGSIL_BUILDINGS } from '../data/buildings';

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  selectedYear,
  setSelectedYear,
  selectedLocation,
  setSelectedLocation,
  selectedStatus,
  setSelectedStatus,
  onResetFilters,
  hasActiveFilters,
  totalResults
}) {
  const quickKeywords = ['삼성 노트북', '손목시계', '바라클라바', '네잎클로버 에어팟', '텀블러', '2026-162'];

  return (
    <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-100 mb-4">
      {/* Main Search Input */}
      <div className="relative flex items-center">
        <Search className="w-5 h-5 text-gray-400 absolute left-3.5 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="관리번호(예: 2026-162) 또는 물품명/특징(노트북, 시계, 바라클라바) 실시간 검색"
          className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:border-[#00A1E9] focus:ring-2 focus:ring-[#00A1E9]/20 transition-all text-gray-900 placeholder:text-gray-400 font-medium"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Quick Search Chips */}
      <div className="flex items-center space-x-1.5 mt-2.5 overflow-x-auto no-scrollbar py-0.5">
        <span className="text-[11px] font-semibold text-gray-600 shrink-0">추천 검색:</span>
        {quickKeywords.map((kw) => (
          <button
            key={kw}
            onClick={() => setSearchQuery(kw)}
            className="text-[11px] bg-sky-50 text-[#00A1E9] hover:bg-sky-100 px-2 py-0.8 rounded-md font-medium shrink-0 transition-colors border border-sky-100"
          >
            #{kw}
          </button>
        ))}
      </div>

      {/* Secondary Filter Row (Year, Location, Status) */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2.5 border-t border-gray-100 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Year Filter */}
          <div className="flex items-center space-x-1 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1">
            <Calendar className="w-3.5 h-3.5 text-gray-500" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-transparent font-medium text-gray-700 focus:outline-none text-xs cursor-pointer"
            >
              <option value="all">전체 연도</option>
              <option value="2026">2026년</option>
              <option value="2025">2025년</option>
            </select>
          </div>

          {/* Location Filter */}
          <div className="flex items-center space-x-1 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1">
            <MapPin className="w-3.5 h-3.5 text-gray-500" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-transparent font-medium text-gray-700 focus:outline-none text-xs cursor-pointer max-w-[110px] truncate"
            >
              <option value="all">전체 건물</option>
              {SOONGSIL_BUILDINGS.filter(b => b.id !== 'all').map(b => (
                <option key={b.id} value={b.name}>{b.name}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-1 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-gray-500" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-transparent font-medium text-gray-700 focus:outline-none text-xs cursor-pointer"
            >
              <option value="all">전체 상태</option>
              <option value="보관중">보관중</option>
              <option value="수령완료">수령완료</option>
            </select>
          </div>
        </div>

        {/* Results Count & Reset Filter */}
        <div className="flex items-center space-x-2 ml-auto">
          <span className="text-[11px] text-gray-500">
            검색 결과 <strong className="text-[#00A1E9] font-bold">{totalResults}</strong>건
          </span>
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center space-x-0.5 text-[11px] text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-1.5 py-0.5 rounded transition-colors"
              title="검색 조건 초기화"
            >
              <RotateCcw className="w-3 h-3 mr-0.5" />
              <span>초기화</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
