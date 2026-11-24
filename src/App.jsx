import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import NoticeBanner from './components/NoticeBanner';
import CategoryTabs from './components/CategoryTabs';
import SearchBar from './components/SearchBar';
import ItemGrid from './components/ItemGrid';
import ItemDetailModal from './components/ItemDetailModal';
import ClaimGuideModal from './components/ClaimGuideModal';
import ReportItemModal from './components/ReportItemModal';
import KeywordAlertModal from './components/KeywordAlertModal';
import NotificationDrawer from './components/NotificationDrawer';
import CampusMapModal from './components/CampusMapModal';

import { 
  getStoredItems, saveStoredItems, 
  getStoredAlerts, saveStoredAlerts, 
  getStoredNotifications, saveStoredNotifications,
  getStoredBookmarks, toggleStoredBookmark 
} from './utils/storage';
import { Sparkles, Plus, Bell, RefreshCw, Smartphone } from 'lucide-react';

export default function App() {
  // Core Items State
  const [items, setItems] = useState(() => getStoredItems());
  const [alerts, setAlerts] = useState(() => getStoredAlerts());
  const [notifications, setNotifications] = useState(() => getStoredNotifications());
  const [bookmarks, setBookmarks] = useState(() => getStoredBookmarks());

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Modals & Drawers
  const [activeItem, setActiveItem] = useState(null);
  const [claimGuideItem, setClaimGuideItem] = useState(null);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isAlertsOpen, setIsAlertsOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  
  // Mobile Frame Simulation for Desktop Preview
  const [isMobileView, setIsMobileView] = useState(false);

  // Sync state to storage
  useEffect(() => {
    saveStoredItems(items);
  }, [items]);

  useEffect(() => {
    saveStoredAlerts(alerts);
  }, [alerts]);

  useEffect(() => {
    saveStoredNotifications(notifications);
  }, [notifications]);

  // Unread notifications count
  const unreadCount = useMemo(() => {
    return notifications.filter(n => !n.read).length;
  }, [notifications]);

  // Category counts
  const itemCounts = useMemo(() => {
    const counts = { all: items.length };
    for (const item of items) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, [items]);

  // Filtered Items logic
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Year filter
      if (selectedYear !== 'all' && item.year !== selectedYear) {
        return false;
      }
      // Location filter
      if (selectedLocation !== 'all' && item.location !== selectedLocation) {
        return false;
      }
      // Status filter
      if (selectedStatus !== 'all' && item.status !== selectedStatus) {
        return false;
      }
      // Search query (Management ID or title, tags, description)
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const idMatch = item.id.toLowerCase().includes(q);
        const titleMatch = item.title.toLowerCase().includes(q);
        const tagsMatch = item.tags && item.tags.some(t => t.toLowerCase().includes(q));
        const descMatch = item.description && item.description.toLowerCase().includes(q);
        const locMatch = item.location && item.location.toLowerCase().includes(q);

        if (!idMatch && !titleMatch && !tagsMatch && !descMatch && !locMatch) {
          return false;
        }
      }
      return true;
    });
  }, [items, selectedCategory, selectedYear, selectedLocation, selectedStatus, searchQuery]);

  const hasActiveFilters = Boolean(
    selectedCategory !== 'all' || 
    selectedYear !== 'all' || 
    selectedLocation !== 'all' || 
    selectedStatus !== 'all' || 
    searchQuery.trim()
  );

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedYear('all');
    setSelectedLocation('all');
    setSelectedStatus('all');
    setSearchQuery('');
  };

  // Toggle bookmark
  const handleToggleBookmark = (id) => {
    const updated = toggleStoredBookmark(id);
    setBookmarks(updated);
  };

  // Handle New Item Report
  const handleSubmitReport = (newItem) => {
    const updatedItems = [newItem, ...items];
    setItems(updatedItems);

    // Check if new item matches any registered keyword alert!
    const matches = alerts.filter(al => {
      if (!al.active) return false;
      const kw = al.keyword.toLowerCase();
      const matchTitle = newItem.title.toLowerCase().includes(kw);
      const matchTag = newItem.tags.some(t => t.toLowerCase().includes(kw));
      const matchCategory = al.category === '전체' || al.category === newItem.category;
      return (matchTitle || matchTag) && matchCategory;
    });

    if (matches.length > 0) {
      const newNotifs = matches.map(m => ({
        id: `notif-${Date.now()}-${m.id}`,
        title: `키워드 일치 알림! [${m.keyword}]`,
        message: `등록하신 키워드 "${m.keyword}"와 일치하는 새 분실물 [${newItem.id}] ${newItem.title}이 접수되었습니다!`,
        itemId: newItem.id,
        time: '방금 전',
        read: false
      }));

      setNotifications(prev => [...newNotifs, ...prev]);
    }
  };

  // Add Alert
  const handleAddAlert = (newAlert) => {
    setAlerts(prev => [newAlert, ...prev]);

    // Check existing items to see if there is an immediate match!
    const matchedItems = items.filter(it => {
      const kw = newAlert.keyword.toLowerCase();
      const matchTitle = it.title.toLowerCase().includes(kw);
      const matchTag = it.tags.some(t => t.toLowerCase().includes(kw));
      const matchCategory = newAlert.category === '전체' || newAlert.category === it.category;
      return (matchTitle || matchTag) && matchCategory;
    });

    if (matchedItems.length > 0) {
      const instantNotif = {
        id: `notif-instant-${Date.now()}`,
        title: `등록하신 키워드 [${newAlert.keyword}] 일치 분실물 발견!`,
        message: `등록 즉시 기존 접수된 분실물 중 [${matchedItems[0].id}] ${matchedItems[0].title} 등 ${matchedItems.length}건이 발견되었습니다.`,
        itemId: matchedItems[0].id,
        time: '방금 전',
        read: false
      };
      setNotifications(prev => [instantNotif, ...prev]);
    }
  };

  const handleRemoveAlert = (id) => {
    setAlerts(prev => prev.filter(a => a.id !== id));
  };

  // Open item from notification
  const handleSelectItemById = (itemId) => {
    const found = items.find(i => i.id === itemId);
    if (found) {
      setActiveItem(found);
      setIsNotifOpen(false);
    }
  };

  const handleMarkNotifsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleClearAllNotifs = () => {
    setNotifications([]);
  };

  // Calculate next management id number
  const nextIdNum = useMemo(() => {
    const nums = items.map(it => {
      const parts = it.id.split('-');
      return parseInt(parts[1], 10) || 0;
    });
    return Math.max(...nums, 162) + 1;
  }, [items]);

  return (
    <div className={`min-h-screen bg-[#F0F4F8] flex flex-col ${isMobileView ? 'py-6 px-4 items-center' : ''}`}>
      {/* Container - adapts to mobile frame if toggled on desktop */}
      <div className={`w-full bg-[#F8FAFC] flex flex-col min-h-screen shadow-xl ${
        isMobileView ? 'max-w-md rounded-[36px] overflow-hidden border-[8px] border-slate-800 my-auto h-[92vh]' : 'max-w-5xl mx-auto'
      }`}>
        {/* Top Header */}
        <Header
          unreadCount={unreadCount}
          onOpenNotifications={() => setIsNotifOpen(true)}
          onOpenReport={() => setIsReportOpen(true)}
          onOpenAlerts={() => setIsAlertsOpen(true)}
          onOpenMap={() => setIsMapOpen(true)}
          isMobileView={isMobileView}
          setIsMobileView={setIsMobileView}
          alertCount={alerts.length}
        />

        {/* Operating Hours & Notice Banner */}
        <NoticeBanner
          onOpenMap={() => setIsMapOpen(true)}
          onOpenClaimGuide={() => {
            if (items.length > 0) setClaimGuideItem(items[0]);
          }}
        />

        {/* Category Tabs Bar */}
        <CategoryTabs
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          itemCounts={itemCounts}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-4xl w-full mx-auto p-3 sm:p-4 pb-20">
          {/* Real-time Search & Filter Box */}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            onResetFilters={handleResetFilters}
            hasActiveFilters={hasActiveFilters}
            totalResults={filteredItems.length}
          />

          {/* Instagram-style 3-Column / Responsive Card Grid */}
          <ItemGrid
            items={filteredItems}
            onSelectItem={(item) => setActiveItem(item)}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onOpenReport={() => setIsReportOpen(true)}
          />
        </main>

        {/* Floating Quick Action Footer on Mobile */}
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-float border border-white/10 text-xs">
          <button
            onClick={() => setIsAlertsOpen(true)}
            className="flex items-center space-x-1 hover:text-[#00A1E9] transition-colors py-1 px-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-semibold">키워드 알림</span>
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => setIsReportOpen(true)}
            className="flex items-center space-x-1 text-[#00A1E9] hover:text-sky-300 font-extrabold py-1 px-2"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>습득물 제보</span>
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => {
              if (items.length > 0) setClaimGuideItem(items[0]);
            }}
            className="hover:text-cyan-200 transition-colors py-1 px-2 font-medium"
          >
            수령 안내
          </button>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-6 px-4 text-center text-xs text-gray-500 mt-auto">
          <div className="max-w-4xl mx-auto space-y-1">
            <p className="font-bold text-gray-700">숭실대학교 학생서비스팀 분실물센터</p>
            <p className="text-[11px] text-gray-400">
              서울특별시 동작구 상도로 369 숭실대학교 학생회관 406호 | 전화: 02-820-0164
            </p>
            <p className="text-[10px] text-gray-400">
              Instagram: @soongsil_lostnfound | 학기중 09:00~17:30 (방학중 10:00~17:00)
            </p>
          </div>
        </footer>

        {/* Modals & Slide-overs */}
        <ItemDetailModal
          item={activeItem}
          isOpen={Boolean(activeItem)}
          onClose={() => setActiveItem(null)}
          onOpenClaimGuide={(item) => {
            setActiveItem(null);
            setClaimGuideItem(item);
          }}
          isBookmarked={activeItem ? bookmarks.includes(activeItem.id) : false}
          onToggleBookmark={handleToggleBookmark}
        />

        <ClaimGuideModal
          item={claimGuideItem}
          isOpen={Boolean(claimGuideItem)}
          onClose={() => setClaimGuideItem(null)}
          onOpenMap={() => setIsMapOpen(true)}
        />

        <ReportItemModal
          isOpen={isReportOpen}
          onClose={() => setIsReportOpen(false)}
          onSubmitReport={handleSubmitReport}
          nextIdNumber={nextIdNum}
        />

        <KeywordAlertModal
          isOpen={isAlertsOpen}
          onClose={() => setIsAlertsOpen(false)}
          alerts={alerts}
          onAddAlert={handleAddAlert}
          onRemoveAlert={handleRemoveAlert}
          onFilterByKeyword={(kw) => {
            setSearchQuery(kw);
            setSelectedCategory('all');
          }}
        />

        <NotificationDrawer
          isOpen={isNotifOpen}
          onClose={() => setIsNotifOpen(false)}
          notifications={notifications}
          onSelectItem={handleSelectItemById}
          onMarkAsRead={handleMarkNotifsRead}
          onClearAll={handleClearAllNotifs}
        />

        <CampusMapModal
          isOpen={isMapOpen}
          onClose={() => setIsMapOpen(false)}
        />
      </div>
    </div>
  );
}
