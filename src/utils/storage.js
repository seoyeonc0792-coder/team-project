import { INITIAL_ITEMS } from '../data/initialItems';

const STORAGE_KEY_ITEMS = 'ssu_lostnfound_items_v2';
const STORAGE_KEY_ALERTS = 'ssu_lostnfound_alerts_v2';
const STORAGE_KEY_NOTIFS = 'ssu_lostnfound_notifications_v2';
const STORAGE_KEY_BOOKMARKS = 'ssu_lostnfound_bookmarks_v2';

export function getStoredItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ITEMS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(INITIAL_ITEMS));
      return INITIAL_ITEMS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load items from storage', e);
    return INITIAL_ITEMS;
  }
}

export function saveStoredItems(items) {
  try {
    localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save items to storage', e);
  }
}

export function getStoredAlerts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ALERTS);
    if (!raw) {
      // Sample preset alert for demonstration
      const initialAlerts = [
        {
          id: 'alert-demo-1',
          keyword: '바라클라바',
          category: '생활용품',
          createdAt: '2026-11-20',
          active: true,
          matchCount: 1
        },
        {
          id: 'alert-demo-2',
          keyword: '손목시계',
          category: '귀중품',
          createdAt: '2026-11-21',
          active: true,
          matchCount: 1
        }
      ];
      localStorage.setItem(STORAGE_KEY_ALERTS, JSON.stringify(initialAlerts));
      return initialAlerts;
    }
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function saveStoredAlerts(alerts) {
  try {
    localStorage.setItem(STORAGE_KEY_ALERTS, JSON.stringify(alerts));
  } catch (e) {
    console.error('Failed to save alerts', e);
  }
}

export function getStoredNotifications() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_NOTIFS);
    if (!raw) {
      const initialNotifs = [
        {
          id: 'notif-1',
          title: '키워드 알림 일치! [바라클라바]',
          message: '등록하신 "바라클라바" 키워드와 일치하는 [2026-141] 스틸 블루 컬러 니트 후드 바라클라바가 대운동장에서 접수되었습니다.',
          itemId: '2026-141',
          time: '방금 전',
          read: false
        },
        {
          id: 'notif-2',
          title: '키워드 알림 일치! [손목시계]',
          message: '등록하신 "손목시계" 키워드와 일치하는 [2026-162] 블루 다이얼 실버 메탈 크로노그래프 손목시계가 안익태기념관에서 접수되었습니다.',
          itemId: '2026-162',
          time: '2시간 전',
          read: false
        }
      ];
      localStorage.setItem(STORAGE_KEY_NOTIFS, JSON.stringify(initialNotifs));
      return initialNotifs;
    }
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function saveStoredNotifications(notifs) {
  try {
    localStorage.setItem(STORAGE_KEY_NOTIFS, JSON.stringify(notifs));
  } catch (e) {
    console.error('Failed to save notifs', e);
  }
}

export function getStoredBookmarks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function toggleStoredBookmark(id) {
  const current = getStoredBookmarks();
  const exists = current.includes(id);
  const updated = exists ? current.filter(x => x !== id) : [...current, id];
  localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(updated));
  return updated;
}
