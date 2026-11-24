import React, { useState } from 'react';
import { Clock, MapPin, Phone, AlertCircle, ChevronDown, ChevronUp, ShieldCheck, Calendar, Info } from 'lucide-react';

export default function NoticeBanner({ onOpenMap, onOpenClaimGuide }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#1B4F9C] via-[#0F3B7A] to-[#00A1E9] text-white shadow-sm border-b border-blue-900/20">
      <div className="max-w-4xl mx-auto px-4 py-3">
        {/* Core Summary Line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-start sm:items-center space-x-2.5">
            <span className="bg-[#00A1E9] text-white text-[11px] font-bold px-2 py-0.5 rounded-md shrink-0 shadow-sm">
              센터 안내
            </span>
            <div className="text-xs sm:text-sm font-medium leading-tight">
              <span className="text-cyan-200 font-semibold">학생회관 406호 (학생서비스팀)</span>
              <span className="mx-1.5 opacity-60">|</span>
              <span className="text-white/90">학기중 09:00~17:30</span>
              <span className="hidden md:inline text-white/70 ml-1.5">(방학중 10:00~17:00)</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            {/* Quick Call */}
            <a
              href="tel:02-820-0164"
              className="inline-flex items-center space-x-1 bg-white/15 hover:bg-white/25 active:scale-95 text-white font-semibold px-2.5 py-1 rounded-md transition-all border border-white/20"
              title="분실물센터 문의 전화 걸기"
            >
              <Phone className="w-3 h-3 text-cyan-300" />
              <span>02-820-0164</span>
            </a>

            {/* Map Button */}
            <button
              onClick={onOpenMap}
              className="inline-flex items-center space-x-1 bg-white/15 hover:bg-white/25 active:scale-95 text-white font-semibold px-2.5 py-1 rounded-md transition-all border border-white/20"
            >
              <MapPin className="w-3 h-3 text-amber-300" />
              <span>위치 안내</span>
            </button>

            {/* Toggle Expand */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-white/80 hover:text-white transition-colors"
              aria-label="안내사항 펼치기"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Expandable Detailed Notice Box */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs animate-fadeIn">
            <div className="bg-white/10 rounded-lg p-2.5 border border-white/10">
              <div className="font-bold text-cyan-200 flex items-center mb-1">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-cyan-300" />
                분실물 수령 절차 (필독)
              </div>
              <ul className="text-white/85 space-y-1 list-disc list-inside">
                <li>앱에서 확인한 <strong>'관리번호'</strong>(예: 2026-143)를 숙지 후 방문</li>
                <li>본인 소유 증빙(잠금화면 비밀번호, 외관 특징, 사진 등) 필수</li>
                <li>지갑·신분증·학생증 등 신원 확인 가능 물품은 센터에서 개별 연락함</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-2.5 border border-white/10">
              <div className="font-bold text-amber-200 flex items-center mb-1">
                <Clock className="w-3.5 h-3.5 mr-1 text-amber-300" />
                보관 기간 및 폐기 규정
              </div>
              <ul className="text-white/85 space-y-1 list-disc list-inside">
                <li>일반 분실물: 습득 등록일로부터 <strong>최대 1년 보관</strong></li>
                <li>부패/변질 우려 음식물·식품류: <strong>익일 즉시 폐기</strong></li>
                <li>수령 완료 또는 보관 만료 물품은 자동 상태 전환</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
