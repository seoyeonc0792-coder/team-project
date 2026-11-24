import React from 'react';
import { X, Bell, Check, Trash2, ArrowRight, Sparkles, Clock, CheckCheck } from 'lucide-react';

export default function NotificationDrawer({
  isOpen,
  onClose,
  notifications,
  onSelectItem,
  onMarkAsRead,
  onClearAll
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white w-full max-w-sm h-full shadow-2xl flex flex-col animate-slideLeft border-l border-gray-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-[#1B4F9C] text-white">
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-amber-300" />
            <h2 className="font-extrabold text-base">알림 센터</h2>
            {notifications.filter(n => !n.read).length > 0 && (
              <span className="text-[10px] bg-red-500 font-bold px-1.5 py-0.5 rounded-full">
                {notifications.filter(n => !n.read).length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-150 flex items-center justify-between text-xs">
          <button
            onClick={onMarkAsRead}
            className="text-gray-600 hover:text-[#00A1E9] font-medium flex items-center space-x-1"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span>모두 읽음 처리</span>
          </button>
          {notifications.length > 0 && (
            <button
              onClick={onClearAll}
              className="text-gray-400 hover:text-red-500 text-[11px]"
            >
              알림 전체 삭제
            </button>
          )}
        </div>

        {/* Notification List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
          {notifications.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <Bell className="w-8 h-8 mx-auto mb-2 opacity-30" />
              <p className="font-bold text-gray-600">새로운 알림이 없습니다</p>
              <p className="text-[11px] text-gray-400 mt-0.5">키워드 알림을 등록하면 일치 소식을 전해드려요!</p>
            </div>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif.id}
                onClick={() => {
                  if (notif.itemId) onSelectItem(notif.itemId);
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative ${
                  notif.read
                    ? 'bg-gray-50/70 border-gray-200 text-gray-600'
                    : 'bg-sky-50/60 border-sky-200 text-gray-900 shadow-2xs hover:border-[#00A1E9]'
                }`}
              >
                {!notif.read && (
                  <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#00A1E9]"></span>
                )}
                <div className="flex items-center space-x-1.5 font-extrabold text-xs mb-1 text-[#1B4F9C]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{notif.title}</span>
                </div>
                <p className="text-[11px] text-gray-700 leading-relaxed pr-3">
                  {notif.message}
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[10px] text-gray-400">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-0.5" />
                    {notif.time}
                  </span>
                  {notif.itemId && (
                    <span className="text-[#00A1E9] font-bold flex items-center">
                      <span>상세보기</span>
                      <ArrowRight className="w-3 h-3 ml-0.5" />
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
