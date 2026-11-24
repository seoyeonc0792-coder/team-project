import React from 'react';
import { Bell, PlusCircle, Search, Smartphone, Monitor, Instagram, Bookmark, MapPin, Sparkles } from 'lucide-react';

export default function Header({
  unreadCount,
  onOpenNotifications,
  onOpenReport,
  onOpenAlerts,
  onOpenMap,
  isMobileView,
  setIsMobileView,
  alertCount
}) {
  return (
    <header className="sticky top-0 z-30 bg-[#1B4F9C] text-white shadow-md">
      {/* Top Brand Bar */}
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center p-1 border border-white/20 shadow-inner">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <path d="M22 28H78M22 50H66M22 72H54" stroke="#00A1E9" strokeWidth="12" strokeLinecap="round"/>
              <circle cx="72" cy="68" r="16" fill="#00A1E9"/>
              <path d="M67 68L70 71L78 63" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-extrabold text-base tracking-tight leading-none text-white">숭실대학교 분실물센터</span>
              <span className="text-[10px] bg-[#00A1E9] text-white font-bold px-1.5 py-0.5 rounded-full">OFFICIAL</span>
            </div>
            <div className="flex items-center space-x-2 text-[11px] text-blue-100 mt-0.5">
              <span>학생회관 406호</span>
              <span>•</span>
              <a 
                href="https://www.instagram.com/soongsil_lostnfound/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center hover:text-[#00A1E9] transition-colors"
                title="인스타그램 @soongsil_lostnfound 바로가기"
              >
                <Instagram className="w-3 h-3 mr-0.5 text-pink-300 inline" />
                @soongsil_lostnfound
              </a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {/* Keyword Alert Button */}
          <button
            onClick={onOpenAlerts}
            className="flex items-center space-x-1 text-xs bg-white/10 hover:bg-white/20 active:scale-95 text-white font-medium px-2.5 py-1.5 rounded-lg border border-white/15 transition-all"
            title="키워드 알림 등록"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="hidden sm:inline">키워드 알림</span>
            {alertCount > 0 && (
              <span className="bg-amber-400 text-gray-900 text-[10px] font-bold px-1 rounded-full">
                {alertCount}
              </span>
            )}
          </button>

          {/* Report Item Button */}
          <button
            onClick={onOpenReport}
            className="flex items-center space-x-1 text-xs bg-[#00A1E9] hover:bg-[#0284c7] active:scale-95 text-white font-bold px-2.5 py-1.5 rounded-lg shadow-sm transition-all"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>제보하기</span>
          </button>

          {/* Campus Map Shortcut */}
          <button
            onClick={onOpenMap}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="숭실대 분실물센터 위치 지도"
          >
            <MapPin className="w-4 h-4 text-cyan-200" />
          </button>

          {/* Notification Bell */}
          <button
            onClick={onOpenNotifications}
            className="relative p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="알림함"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Mobile Preview Frame Toggle (for desktop testing) */}
          <button
            onClick={() => setIsMobileView(!isMobileView)}
            className="hidden md:flex p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title={isMobileView ? "전체 화면으로 보기" : "모바일 폰 프레임 뷰로 보기"}
          >
            {isMobileView ? <Monitor className="w-4 h-4 text-blue-200" /> : <Smartphone className="w-4 h-4 text-blue-200" />}
          </button>
        </div>
      </div>
    </header>
  );
}
