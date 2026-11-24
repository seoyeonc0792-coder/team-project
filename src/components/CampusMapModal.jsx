import React from 'react';
import { X, MapPin, Building2, Phone, Clock, Compass, ExternalLink } from 'lucide-react';
import { SOONGSIL_BUILDINGS } from '../data/buildings';

export default function CampusMapModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-gray-150 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1B4F9C] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-[#00A1E9] flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="font-extrabold text-base leading-none">숭실대학교 캠퍼스 맵</h2>
              <p className="text-[11px] text-cyan-200 mt-0.5">분실물센터 (학생회관 406호) 위치</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="overflow-y-auto p-5 space-y-4 text-xs">
          {/* Stylized Illustrated Campus Map Graphic */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 text-white p-4 shadow-inner">
            <svg viewBox="0 0 400 240" className="w-full h-auto" fill="none">
              {/* Campus Roads and Paths */}
              <path d="M40 220 L160 160 L240 160 L360 220" stroke="#334155" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M200 40 L200 160 L200 220" stroke="#334155" strokeWidth="16" strokeLinecap="round"/>
              <path d="M100 120 L300 120" stroke="#334155" strokeWidth="12" strokeLinecap="round"/>

              {/* Buildings Representation */}
              {/* Central Library */}
              <rect x="60" y="60" width="70" height="45" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="2"/>
              <text x="95" y="86" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">중앙도서관</text>

              {/* IT convergence hall */}
              <rect x="50" y="140" width="75" height="45" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="2"/>
              <text x="87" y="166" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">정보과학관</text>

              {/* Hyeongnam Eng Hall */}
              <rect x="270" y="60" width="75" height="45" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="2"/>
              <text x="307" y="86" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">형남공학관</text>

              {/* Cho Man-sik Hall */}
              <rect x="275" y="140" width="75" height="45" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="2"/>
              <text x="312" y="166" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">조만식기념관</text>

              {/* MAIN TARGET: 학생회관 (Student Hall 406) */}
              <rect x="155" y="80" width="90" height="60" rx="8" fill="#1B4F9C" stroke="#00A1E9" strokeWidth="3" filter="drop-shadow(0 0 12px #00A1E9)"/>
              <text x="200" y="106" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle">학생회관 406호</text>
              <text x="200" y="122" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle">★ 분실물센터</text>

              {/* Subways / Gate */}
              <circle cx="200" cy="220" r="14" fill="#00A1E9"/>
              <text x="200" y="223" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle">정문/역</text>
            </svg>
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[10px] text-cyan-200 font-bold border border-white/10">
              숭실대입구역 3번 출구 방면 도보 3분
            </div>
          </div>

          {/* Location Description */}
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-sky-950">
            <h3 className="font-extrabold text-sm mb-1 text-[#1B4F9C] flex items-center">
              <Building2 className="w-4 h-4 mr-1.5 text-[#00A1E9]" />
              학생회관 406호 찾아오시는 길
            </h3>
            <p className="text-[11px] leading-relaxed text-sky-900 mt-1">
              숭실대학교 정문(지하철 7호선 숭실대입구역 3번 출구)에서 직진하여 중앙광장 좌측의 <strong>학생회관 건물</strong>로 들어오신 후, 중앙 엘리베이터를 타고 <strong>4층 학생서비스팀 창구</strong>로 오시면 됩니다.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
              <span className="text-gray-400 font-semibold block text-[10px] mb-0.5">운영 시간</span>
              <p className="font-bold text-gray-900 text-xs">학기중 09:00 ~ 17:30</p>
              <p className="text-[10px] text-gray-500">방학중 10:00 ~ 17:00</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
              <span className="text-gray-400 font-semibold block text-[10px] mb-0.5">문의 전화</span>
              <a href="tel:02-820-0164" className="font-bold text-[#00A1E9] text-xs hover:underline block">
                02-820-0164
              </a>
              <p className="text-[10px] text-gray-500">학생서비스팀 유실물 창구</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-150 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#1B4F9C] text-white font-bold rounded-xl text-xs hover:bg-[#153e7a] transition-colors"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
}
