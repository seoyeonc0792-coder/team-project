import React, { useState } from 'react';
import { 
  X, Bell, Plus, Trash2, CheckCircle2, Sparkles, AlertCircle, ArrowRight, Tag
} from 'lucide-react';
import { CATEGORIES } from '../data/buildings';

export default function KeywordAlertModal({
  isOpen,
  onClose,
  alerts,
  onAddAlert,
  onRemoveAlert,
  onFilterByKeyword
}) {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('전체');

  if (!isOpen) return null;

  const handleAdd = (e) => {
    e.preventDefault();
    if (!keyword.trim()) {
      alert('등록할 검색 키워드를 입력해주세요.');
      return;
    }

    onAddAlert({
      id: `alert-${Date.now()}`,
      keyword: keyword.trim(),
      category,
      createdAt: new Date().toISOString().slice(0, 10),
      active: true
    });

    setKeyword('');
  };

  const sampleQuickKeywords = ['바라클라바', '손목시계', '네잎클로버 에어팟', '삼성 노트북', '텀블러', '학생증'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-md w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-gray-150 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1B4F9C] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-slate-900">
              <Sparkles className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h2 className="font-extrabold text-base leading-none">내 분실물 키워드 알림</h2>
              <p className="text-[11px] text-cyan-200 mt-0.5">원하는 물건이 등록되면 즉시 알림</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-5 space-y-4 text-xs">
          {/* Explanation Banner */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3 text-amber-900 leading-relaxed">
            <span className="font-bold block mb-0.5 flex items-center text-amber-800">
              <Bell className="w-3.5 h-3.5 mr-1 text-amber-600" />
              아직 내 분실물이 올라오지 않았나요?
            </span>
            <p className="text-[11px] text-amber-800/90">
              찾고 계신 물품의 키워드(예: <strong>바라클라바, 손목시계, 에어팟</strong>)를 등록해두시면, 습득물이 분실물센터에 접수되는 즉시 인앱 알림을 드립니다.
            </p>
          </div>

          {/* Keyword Registration Form */}
          <form onSubmit={handleAdd} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-3">
            <div>
              <label className="block text-gray-700 font-bold mb-1">
                알림 받을 키워드 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="예: 바라클라바, 메탈 시계, 버즈, 카드지갑"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-[#00A1E9] text-xs font-semibold text-gray-900 bg-white"
              />
            </div>

            {/* Quick Keyword Buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] text-gray-400">추천:</span>
              {sampleQuickKeywords.map((k) => (
                <button
                  type="button"
                  key={k}
                  onClick={() => setKeyword(k)}
                  className="text-[10px] bg-white text-gray-700 border border-gray-200 hover:border-[#00A1E9] px-2 py-0.5 rounded-md font-medium"
                >
                  +{k}
                </button>
              ))}
            </div>

            {/* Category Select */}
            <div>
              <label className="block text-gray-700 font-bold mb-1">
                희망 카테고리 (선택)
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-[#00A1E9] text-xs font-medium bg-white text-gray-900"
              >
                <option value="전체">전체 카테고리</option>
                {CATEGORIES.filter(c => c.id !== 'all').map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1B4F9C] hover:bg-[#153e7a] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors active:scale-[0.98]"
            >
              <Plus className="w-4 h-4 text-cyan-300" />
              <span>알림 등록하기</span>
            </button>
          </form>

          {/* Registered Keyword Alerts List */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-extrabold text-gray-900 text-xs">
                현재 등록된 알림 ({alerts.length})
              </span>
            </div>

            {alerts.length === 0 ? (
              <div className="text-center py-6 text-gray-400 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <Bell className="w-6 h-6 mx-auto mb-1 opacity-40" />
                <p className="text-xs">등록된 키워드 알림이 없습니다.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {alerts.map((al) => (
                  <div
                    key={al.id}
                    className="bg-white p-3 rounded-2xl border border-gray-200 flex items-center justify-between shadow-2xs hover:border-[#00A1E9] transition-colors"
                  >
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-bold text-gray-900 text-xs sm:text-sm">
                          "{al.keyword}"
                        </span>
                        <span className="text-[10px] bg-sky-50 text-[#00A1E9] font-bold px-1.5 py-0.2 rounded">
                          {al.category}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-400 block mt-0.5">
                        등록일: {al.createdAt}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      {/* One-click Filter by Keyword */}
                      <button
                        onClick={() => {
                          onFilterByKeyword(al.keyword);
                          onClose();
                        }}
                        className="text-[11px] bg-slate-100 hover:bg-[#00A1E9] hover:text-white text-slate-700 font-bold px-2 py-1 rounded-lg transition-colors flex items-center space-x-0.5"
                        title="이 키워드로 지금 검색"
                      >
                        <span>피드 보기</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => onRemoveAlert(al.id)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="알림 삭제"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-150 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl text-xs transition-colors"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
