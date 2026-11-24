/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ssu: {
          blue: '#00A1E9',
          deep: '#1B4F9C',
          dark: '#0B254A',
          light: '#E6F6FD',
          surface: '#F4F9FD',
        },
        category: {
          electronics: '#4A779D', // 전자기기 (스틸 블루)
          living: '#D96B6B',      // 생활용품 (코랄 레드)
          stationery: '#5B9A8B',  // 문구류 (세이지 그린)
          valuables: '#E5B84B',   // 귀중품 (머스타드 옐로우)
          etc: '#64748B',         // 기타 (슬레이트 그레이)
        }
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 10px 25px -5px rgba(27, 79, 156, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'float': '0 20px 30px -10px rgba(0, 161, 233, 0.25)',
      }
    },
  },
  plugins: [],
}
