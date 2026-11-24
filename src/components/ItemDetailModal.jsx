import React, { useState } from 'react';
import { 
  X, MapPin, Calendar, Clock, ShieldAlert, CheckCircle2, Copy, 
  ExternalLink, Share2, Bookmark, Check, HelpCircle, Building2, Eye, Sparkles
} from 'lucide-react';
import { CATEGORY_COLORS } from '../data/buildings';

export default function ItemDetailModal({
  item,
  isOpen,
  onClose,
  onOpenClaimGuide,
  isBookmarked,
  onToggleBookmark
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !item) return null;

  const catStyle = CATEGORY_COLORS[item.category] || CATEGORY_COLORS['기타'];
  const isClaimed = item.status === '수령완료';

  const handleCopyId = () => {
    navigator.clipboard.writeText(item.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `[숭실대 분실물] ${item.title} (${item.id})`,
        text: `숭실대 분실물센터에 등록된 [${item.id}] ${item.title}을 확인해보세요!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      handleCopyId();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-gray-150 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="px-4 py-3 border-b border-gray-150 flex items-center justify-between bg-gray-50/80">
          <div className="flex items-center space-x-2">
            <span
              className="text-xs font-black px-2 py-0.5 rounded-md"
              style={{
                backgroundColor: catStyle.bg,
                color: catStyle.text,
                border: `1px solid ${catStyle.border}`
              }}
            >
              {item.category}
            </span>
            <span className="text-xs font-mono font-bold text-gray-700 bg-white border border-gray-200 px-2 py-0.5 rounded">
              {item.id}
            </span>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
              title="공유하기"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleBookmark(item.id)}
              className="p-1.5 rounded-full text-gray-400 hover:text-amber-500 hover:bg-gray-200 transition-colors"
              title="북마크"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-500' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-5 space-y-4">
          {/* Large Cut-out Studio Image Box */}
          <div className="aspect-square w-full rounded-2xl bg-radial from-white via-white to-slate-50 border border-gray-200/80 relative flex items-center justify-center p-6 shadow-inner overflow-hidden">
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
              />
            )}

            {isClaimed && (
              <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px] flex flex-col items-center justify-center text-white">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-1" />
                <span className="text-base font-extrabold tracking-wider">수령 완료된 분실물</span>
                <span className="text-xs text-white/80 mt-1">학생서비스팀에서 주인을 찾았습니다</span>
              </div>
            )}
          </div>

          {/* Title & Quick Actions */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug">
                {item.title}
              </h2>
              {/* Copy Management Number Pill */}
              <button
                onClick={handleCopyId}
                className="shrink-0 flex items-center space-x-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-2.5 py-1.5 rounded-lg border border-slate-200 transition-all active:scale-95"
                title="관리번호 복사 (수령 시 직원에게 제시)"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? '복사됨!' : '관리번호 복사'}</span>
              </button>
            </div>
            
            {/* Tags */}
            {item.tags && (
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="text-[11px] bg-slate-100 text-slate-600 font-medium px-2 py-0.5 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Essential Info Grid */}
          <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-gray-400 block mb-0.5 font-medium">관리번호</span>
              <span className="font-mono font-bold text-gray-900 text-sm">{item.id}</span>
            </div>
            <div>
              <span className="text-gray-400 block mb-0.5 font-medium">보관 상태</span>
              <span className={`font-bold inline-flex items-center ${isClaimed ? 'text-gray-500' : 'text-emerald-600'}`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isClaimed ? 'bg-gray-400' : 'bg-emerald-500'}`}></span>
                {item.status}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-0.5 font-medium">습득 장소</span>
              <span className="font-semibold text-gray-900 flex items-center">
                <MapPin className="w-3 h-3 text-[#00A1E9] mr-1 shrink-0" />
                {item.location}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-0.5 font-medium">등록 일자</span>
              <span className="font-semibold text-gray-900 flex items-center">
                <Calendar className="w-3 h-3 text-gray-400 mr-1 shrink-0" />
                {item.date}
              </span>
            </div>
            <div className="col-span-2 pt-2 border-t border-slate-200">
              <span className="text-gray-400 block mb-0.5 font-medium">현재 보관 위치</span>
              <span className="font-bold text-[#1B4F9C] flex items-center">
                <Building2 className="w-3.5 h-3.5 mr-1 text-[#00A1E9]" />
                {item.storageLocation || '학생회관 406호 (학생서비스팀 보관함)'}
              </span>
            </div>
          </div>

          {/* Detailed Description */}
          {item.description && (
            <div className="bg-white rounded-xl p-3 border border-gray-150 text-xs leading-relaxed text-gray-700">
              <span className="font-bold text-gray-900 block mb-1 text-xs">물품 세부 특징 및 비고</span>
              <p>{item.description}</p>
            </div>
          )}

          {/* Location detail if available */}
          {item.locationDetail && (
            <div className="text-xs text-gray-500 flex items-start space-x-1.5 bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
              <MapPin className="w-4 h-4 text-[#00A1E9] shrink-0 mt-0.5" />
              <span><strong>상세 습득 위치:</strong> {item.locationDetail} ({item.foundTime || '시간 미상'})</span>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 bg-gray-50 border-t border-gray-150 flex items-center space-x-2">
          {/* Main Claim Button */}
          <button
            onClick={() => {
              onOpenClaimGuide(item);
            }}
            className="flex-1 bg-gradient-to-r from-[#1B4F9C] to-[#00A1E9] hover:from-[#153e7a] hover:to-[#0284c7] active:scale-[0.98] text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>내 물건 찾기 (수령 방법 안내)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
