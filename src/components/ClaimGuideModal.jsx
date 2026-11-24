import React, { useEffect, useState } from 'react';
import { 
  X, MapPin, Phone, Clock, AlertTriangle, CheckCircle, Copy, 
  ExternalLink, Building2, ShieldCheck, Ticket, Download, ArrowRight, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ClaimGuideModal({
  item,
  isOpen,
  onClose,
  onOpenMap
}) {
  const [copied, setCopied] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#00A1E9', '#1B4F9C', '#E5B84B', '#5B9A8B']
        });
      } catch (e) {
        // Confetti fallback
      }
    }
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(item.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-extrabold text-base leading-none">숭실대학교 분실물센터 수령 안내</h2>
              <p className="text-[11px] text-cyan-200 mt-1">학생서비스팀 공식 분실물 인수 절차</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 space-y-4 text-xs">
          {/* Key Management Number Card (Prominent Callout) */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-[#00A1E9] rounded-2xl p-4 text-center relative overflow-hidden shadow-sm">
            <span className="text-[11px] font-bold text-[#1B4F9C] uppercase tracking-wider block mb-1">
              방문 시 필수 제시 관리번호
            </span>
            <div className="flex items-center justify-center space-x-2 my-1">
              <span className="text-2xl sm:text-3xl font-mono font-black text-[#1B4F9C] tracking-wide">
                {item.id}
              </span>
              <button
                onClick={handleCopyId}
                className="bg-white hover:bg-gray-100 text-[#1B4F9C] border border-blue-200 px-2 py-1 rounded-lg font-bold text-xs flex items-center space-x-1 shadow-2xs active:scale-95 transition-all"
                title="관리번호 복사"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-blue-600" />}
                <span>{copied ? '복사됨' : '복사'}</span>
              </button>
            </div>
            <p className="text-gray-600 text-[11px] mt-1">
              물품명: <strong className="text-gray-900">{item.title}</strong>
            </p>
          </div>

          {/* 1. 센터 위치 안내 */}
          <div className="bg-white rounded-2xl p-3.5 border border-gray-200 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-extrabold text-sm text-gray-900 flex items-center">
                <MapPin className="w-4 h-4 text-[#00A1E9] mr-1.5" />
                1. 센터 위치
              </span>
              <button
                onClick={onOpenMap}
                className="text-[11px] text-[#00A1E9] hover:underline font-bold flex items-center"
              >
                <span>캠퍼스 맵 보기</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </button>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 font-medium text-gray-800 leading-relaxed">
              <p className="font-bold text-[#1B4F9C] text-xs">
                숭실대학교 학생회관 406호 (학생서비스팀)
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                * 숭실대입구역 3번 출구 방면 학생회관 엘리베이터 이용 후 4층 이동
              </p>
            </div>
          </div>

          {/* 2. 운영 시간 & 문의 전화 */}
          <div className="bg-white rounded-2xl p-3.5 border border-gray-200 shadow-2xs">
            <span className="font-extrabold text-sm text-gray-900 flex items-center mb-2">
              <Clock className="w-4 h-4 text-[#00A1E9] mr-1.5" />
              2. 운영 시간 및 문의처
            </span>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="bg-blue-50/50 p-2.5 rounded-xl border border-blue-100">
                <span className="text-[10px] text-blue-800 font-bold block mb-0.5">학기 중 운영시간</span>
                <span className="font-extrabold text-gray-900 text-xs">09:00 ~ 17:30</span>
                <span className="text-[10px] text-gray-500 block mt-0.5">(점심시간 12:00~13:00)</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span className="text-[10px] text-gray-600 font-bold block mb-0.5">방학 중 운영시간</span>
                <span className="font-extrabold text-gray-900 text-xs">10:00 ~ 17:00</span>
                <span className="text-[10px] text-gray-500 block mt-0.5">(주말 및 공휴일 휴무)</span>
              </div>
            </div>
            {/* Direct Phone Call Link */}
            <a
              href="tel:02-820-0164"
              className="w-full bg-[#1B4F9C]/10 hover:bg-[#1B4F9C]/15 text-[#1B4F9C] font-bold py-2 px-3 rounded-xl flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00A1E9]" />
              <span>문의 전화 걸기: 02-820-0164</span>
            </a>
          </div>

          {/* 3. 수령 절차 상세 안내 */}
          <div className="bg-white rounded-2xl p-3.5 border border-gray-200 shadow-2xs">
            <span className="font-extrabold text-sm text-gray-900 flex items-center mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 mr-1.5" />
              3. 방문 수령 절차
            </span>
            <div className="space-y-2 text-[11px] text-gray-700">
              <div className="flex items-start space-x-2">
                <span className="w-4 h-4 rounded-full bg-[#00A1E9] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </span>
                <p>앱에서 확인한 <strong>관리번호 ({item.id})</strong>를 캡처하거나 메모해두세요.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-4 h-4 rounded-full bg-[#00A1E9] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </span>
                <p>운영 시간 내 <strong>학생회관 406호 학생서비스팀</strong> 창구를 방문합니다.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-4 h-4 rounded-full bg-[#00A1E9] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </span>
                <p>담당 교직원에게 관리번호를 말씀하신 뒤, <strong>본인 소유 증빙</strong>(잠금화면 비밀번호 해제, 학생증/신분증, 외관 특징 확인 등) 후 수령 확인증에 서명합니다.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-amber-900 text-[11px] leading-relaxed">
                <strong className="block font-bold mb-0.5 text-amber-800">💡 신원 확인 가능 물품 안내:</strong>
                학생증, 주민등록증, 운전면허증, 신용카드, 지갑 등 명의자를 식별할 수 있는 물품은 분실물센터에서 u-SAINT 연락처를 통해 <strong>학생에게 개별 연락(문자/전화)</strong>을 취하고 있습니다.
              </div>
            </div>
          </div>

          {/* 4. 보관 기간 및 폐기 안내 */}
          <div className="bg-red-50/70 border border-red-200 rounded-2xl p-3.5 text-red-900">
            <span className="font-extrabold text-xs flex items-center mb-1 text-red-800">
              <AlertTriangle className="w-3.5 h-3.5 mr-1.5 text-red-600" />
              4. 보관 기간 및 폐기 규정 (필독)
            </span>
            <ul className="text-[11px] space-y-1 list-disc list-inside text-red-800/90 leading-relaxed">
              <li><strong>일반 물품:</strong> 등록일로부터 <strong>1년간 보관</strong> 후 유실물법 및 학칙에 따라 일괄 처리(폐기/기부)됩니다.</li>
              <li><strong>음식물/식품류:</strong> 부패 및 위생 문제로 인해 <strong>습득 익일 즉시 폐기</strong>됩니다.</li>
            </ul>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-150 flex items-center space-x-2">
          <button
            onClick={() => {
              handleCopyId();
              alert(`관리번호 [${item.id}]가 복사되었습니다! 학생회관 406호 방문 시 직원에게 보여주세요.`);
            }}
            className="flex-1 bg-[#1B4F9C] hover:bg-[#153e7a] text-white font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1.5 text-xs shadow-xs"
          >
            <Ticket className="w-4 h-4 text-cyan-300" />
            <span>수령 번호 복사 및 확인</span>
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2.5 px-4 rounded-xl transition-colors text-xs"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
