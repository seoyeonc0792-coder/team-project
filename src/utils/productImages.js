// High-fidelity SVG cut-out visuals for the 9 Soongsil Lost & Found items
// Designed to mimic Instagram @soongsil_lostnfound clean studio white backdrop photography

export const ITEM_SVGS = {
  // 1. 2026-110: 삼성 실버 노트북
  '2026-110': `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="silver-metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="40%" stop-color="#E2E8F0"/>
          <stop offset="70%" stop-color="#CBD5E1"/>
          <stop offset="100%" stop-color="#94A3B8"/>
        </linearGradient>
        <linearGradient id="screen-glow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0F172A"/>
          <stop offset="60%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#0284C7"/>
        </linearGradient>
        <filter id="shadow-110" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="18" stdDeviation="14" flood-color="#0F172A" flood-opacity="0.14" />
        </filter>
      </defs>
      <!-- Shadow & Base -->
      <g filter="url(#shadow-110)">
        <!-- Open Screen Lid at tilt angle -->
        <polygon points="90,140 310,140 280,245 120,245" fill="url(#silver-metal)" stroke="#94A3B8" stroke-width="2"/>
        <polygon points="98,145 302,145 275,240 125,240" fill="url(#screen-glow)"/>
        <!-- SSU Wallpaper Graphic on Screen -->
        <circle cx="200" cy="190" r="24" fill="#00A1E9" opacity="0.3"/>
        <path d="M190 190h20m-10-10v20" stroke="#38BDF8" stroke-width="2"/>
        <!-- Keyboard Deck / Bottom Base -->
        <polygon points="50,250 350,250 310,295 90,295" fill="url(#silver-metal)" stroke="#CBD5E1" stroke-width="2"/>
        <!-- Keyboard area -->
        <polygon points="85,255 315,255 290,280 110,280" fill="#334155" opacity="0.9"/>
        <!-- Trackpad -->
        <polygon points="175,283 225,283 220,293 180,293" fill="#94A3B8" opacity="0.6"/>
        <!-- Samsung Logo on Back/Top Edge -->
        <text x="200" y="152" font-family="Arial, sans-serif" font-weight="900" font-size="7" fill="#64748B" text-anchor="middle" letter-spacing="1">SAMSUNG</text>
      </g>
      <!-- Management Tag Badge on object -->
      <g transform="translate(265, 230) rotate(-6)">
        <rect width="64" height="24" rx="3" fill="#FFFDE7" stroke="#FDE047" stroke-width="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
        <text x="32" y="11" font-family="'Pretendard', sans-serif" font-size="7" font-weight="bold" fill="#854D0E" text-anchor="middle">숭실대 분실물</text>
        <text x="32" y="20" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#1E293B" text-anchor="middle">2026-110</text>
      </g>
    </svg>
  `,

  // 2. 2026-145: 네이비 손잡이 텀블러
  '2026-145': `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="navy-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0F2B5C"/>
          <stop offset="40%" stop-color="#1B4F9C"/>
          <stop offset="70%" stop-color="#2563EB"/>
          <stop offset="100%" stop-color="#0F2B5C"/>
        </linearGradient>
        <linearGradient id="steel-rim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#CBD5E1"/>
          <stop offset="50%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#94A3B8"/>
        </linearGradient>
        <filter id="shadow-145">
          <feDropShadow dx="2" dy="16" stdDeviation="12" flood-color="#0F172A" flood-opacity="0.16" />
        </filter>
      </defs>
      <g filter="url(#shadow-145)">
        <!-- Ergonomic Navy Handle on the Left -->
        <path d="M125 150 C70 150 70 250 125 250" fill="none" stroke="#0F2B5C" stroke-width="22" stroke-linecap="round"/>
        <path d="M125 150 C75 150 75 250 125 250" fill="none" stroke="#1B4F9C" stroke-width="16" stroke-linecap="round"/>
        <!-- Tumbler Body -->
        <path d="M135 125 L145 310 C145 320 255 320 255 310 L265 125 Z" fill="url(#navy-body)"/>
        <!-- Stainless Steel Top Rim -->
        <rect x="133" y="115" width="134" height="12" rx="4" fill="url(#steel-rim)"/>
        <!-- Lid Cap & Drink Spout -->
        <path d="M138 115 C138 98 262 98 262 115 Z" fill="#1E293B"/>
        <rect x="190" y="90" width="20" height="12" rx="3" fill="#64748B"/>
        <!-- Subtle vertical highlight on tumbler curve -->
        <path d="M210 130 L205 310" stroke="#60A5FA" stroke-width="6" opacity="0.4" stroke-linecap="round"/>
      </g>
      <!-- Tag -->
      <g transform="translate(160, 220) rotate(-4)">
        <rect width="66" height="24" rx="3" fill="#FFFDE7" stroke="#FDE047" stroke-width="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
        <text x="33" y="11" font-family="'Pretendard', sans-serif" font-size="7" font-weight="bold" fill="#854D0E" text-anchor="middle">숭실대 분실물</text>
        <text x="33" y="20" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#1E293B" text-anchor="middle">2026-145</text>
      </g>
    </svg>
  `,

  // 3. 2026-109: 아쿠아리움 키링 및 빨간색 USB
  '2026-109': `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="red-usb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EF4444"/>
          <stop offset="50%" stop-color="#DC2626"/>
          <stop offset="100%" stop-color="#991B1B"/>
        </linearGradient>
        <linearGradient id="aqua-acrylic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0F2FE" stop-opacity="0.95"/>
          <stop offset="60%" stop-color="#38BDF8" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#0284C7" stop-opacity="0.9"/>
        </linearGradient>
        <filter id="shadow-109">
          <feDropShadow dx="2" dy="14" stdDeviation="10" flood-color="#0F172A" flood-opacity="0.14" />
        </filter>
      </defs>
      <g filter="url(#shadow-109)">
        <!-- Keyring Silver Chain -->
        <circle cx="170" cy="120" r="28" fill="none" stroke="#94A3B8" stroke-width="6"/>
        <circle cx="170" cy="120" r="22" fill="none" stroke="#CBD5E1" stroke-width="4"/>
        <path d="M170 148 L170 190" stroke="#94A3B8" stroke-width="5" stroke-dasharray="3,3"/>
        
        <!-- Acrylic Aquarium Pouch / Charm on Left -->
        <rect x="90" y="170" width="95" height="120" rx="16" fill="url(#aqua-acrylic)" stroke="#BAE6FD" stroke-width="3"/>
        <!-- Mini Aquarium Fish & Shell inside -->
        <ellipse cx="130" cy="220" rx="14" ry="9" fill="#FB923C"/>
        <polygon points="142,220 152,213 152,227" fill="#F97316"/>
        <circle cx="125" cy="218" r="2" fill="white"/>
        <circle cx="125" cy="218" r="1" fill="#1E293B"/>
        <!-- Water bubbles -->
        <circle cx="150" cy="195" r="5" fill="#FFFFFF" opacity="0.7"/>
        <circle cx="115" cy="255" r="4" fill="#FFFFFF" opacity="0.6"/>
        <circle cx="160" cy="260" r="6" fill="#FFFFFF" opacity="0.8"/>

        <!-- Red Metal USB Flash Drive on Right -->
        <!-- Silver connector -->
        <rect x="235" y="150" width="36" height="32" rx="2" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
        <rect x="243" y="160" width="6" height="12" fill="#64748B"/>
        <rect x="257" y="160" width="6" height="12" fill="#64748B"/>
        <!-- Red Body -->
        <rect x="230" y="180" width="46" height="110" rx="6" fill="url(#red-usb)" stroke="#B91C1C" stroke-width="1.5"/>
        <circle cx="253" cy="275" r="6" fill="#7F1D1D"/>
        <!-- Lanyard connecting to ring -->
        <path d="M175 140 C 210 140 240 150 253 180" fill="none" stroke="#1E293B" stroke-width="3"/>
        <text x="253" y="235" font-family="Arial, sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle" transform="rotate(90, 253, 235)">SanDisk 32G</text>
      </g>
      <!-- Tag -->
      <g transform="translate(190, 290) rotate(2)">
        <rect width="66" height="24" rx="3" fill="#FFFDE7" stroke="#FDE047" stroke-width="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
        <text x="33" y="11" font-family="'Pretendard', sans-serif" font-size="7" font-weight="bold" fill="#854D0E" text-anchor="middle">숭실대 분실물</text>
        <text x="33" y="20" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#1E293B" text-anchor="middle">2026-109</text>
      </g>
    </svg>
  `,

  // 4. 2026-010: 검정색 m 로고 필통
  '2026-010': `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="black-fabric" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#334155"/>
          <stop offset="30%" stop-color="#1E293B"/>
          <stop offset="80%" stop-color="#0F172A"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
        <filter id="shadow-010">
          <feDropShadow dx="0" dy="16" stdDeviation="12" flood-color="#0F172A" flood-opacity="0.16" />
        </filter>
      </defs>
      <g filter="url(#shadow-010)">
        <!-- Black Pencil Case Oval/Rectangular Shape -->
        <rect x="75" y="150" width="250" height="110" rx="42" fill="url(#black-fabric)" stroke="#475569" stroke-width="2"/>
        <!-- Top Zipper Line -->
        <path d="M95 158 Q200 152 305 158" stroke="#94A3B8" stroke-width="4" stroke-dasharray="4,2"/>
        <!-- Metal Zipper Pull on Left -->
        <rect x="90" y="152" width="16" height="24" rx="3" fill="#E2E8F0" stroke="#64748B" stroke-width="1.5"/>
        <circle cx="98" cy="160" r="3" fill="#64748B"/>
        <!-- Elegant 'm' Logo in Center -->
        <text x="200" y="215" font-family="'Georgia', serif" font-style="italic" font-size="44" font-weight="bold" fill="#F8FAFC" text-anchor="middle" letter-spacing="1">m</text>
        <!-- Fine stitching line along bottom curve -->
        <path d="M100 240 Q200 245 300 240" stroke="#475569" stroke-width="2" stroke-dasharray="3,3"/>
      </g>
      <!-- Tag -->
      <g transform="translate(165, 275) rotate(-3)">
        <rect width="66" height="24" rx="3" fill="#FFFDE7" stroke="#FDE047" stroke-width="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
        <text x="33" y="11" font-family="'Pretendard', sans-serif" font-size="7" font-weight="bold" fill="#854D0E" text-anchor="middle">숭실대 분실물</text>
        <text x="33" y="20" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#1E293B" text-anchor="middle">2026-010</text>
      </g>
    </svg>
  `,

  // 5. 2026-108: 흰색 원형 무선이어폰 케이스
  '2026-108': `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="white-pebble" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="50%" stop-color="#F8FAFC"/>
          <stop offset="85%" stop-color="#E2E8F0"/>
          <stop offset="100%" stop-color="#CBD5E1"/>
        </linearGradient>
        <filter id="shadow-108">
          <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#0F172A" flood-opacity="0.14" />
        </filter>
      </defs>
      <g filter="url(#shadow-108)">
        <!-- Pebble / Round Earbuds Case Body -->
        <rect x="120" y="130" width="160" height="145" rx="72" fill="url(#white-pebble)" stroke="#E2E8F0" stroke-width="2"/>
        <!-- Lid Seam Split line -->
        <path d="M121 190 Q200 194 279 190" stroke="#CBD5E1" stroke-width="2.5"/>
        <!-- Opening Thumb Groove Indent -->
        <rect x="182" y="186" width="36" height="8" rx="4" fill="#E2E8F0"/>
        <!-- Green LED Indicator Dot -->
        <circle cx="200" cy="214" r="3.5" fill="#22C55E" filter="drop-shadow(0 0 4px #4ADE80)"/>
        <!-- Samsung/Galaxy sound tuning badge subtle mark -->
        <text x="200" y="165" font-family="'Pretendard', sans-serif" font-size="8" font-weight="600" fill="#94A3B8" text-anchor="middle">Sound by AKG</text>
      </g>
      <!-- Tag -->
      <g transform="translate(166, 285) rotate(-2)">
        <rect width="66" height="24" rx="3" fill="#FFFDE7" stroke="#FDE047" stroke-width="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
        <text x="33" y="11" font-family="'Pretendard', sans-serif" font-size="7" font-weight="bold" fill="#854D0E" text-anchor="middle">숭실대 분실물</text>
        <text x="33" y="20" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#1E293B" text-anchor="middle">2026-108</text>
      </g>
    </svg>
  `,

  // 6. 2026-107: 캐릭터 케이스 및 네잎클로버 키링 에어팟
  '2026-107': `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="clover-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4ADE80"/>
          <stop offset="60%" stop-color="#16A34A"/>
          <stop offset="100%" stop-color="#14532D"/>
        </linearGradient>
        <filter id="shadow-107">
          <feDropShadow dx="2" dy="16" stdDeviation="12" flood-color="#0F172A" flood-opacity="0.15" />
        </filter>
      </defs>
      <g filter="url(#shadow-107)">
        <!-- Soft Pastel Cream Silicone Case (Character theme) -->
        <rect x="110" y="150" width="170" height="130" rx="36" fill="#FEF3C7" stroke="#FDE68A" stroke-width="2.5"/>
        <!-- Lid Divider -->
        <path d="M110 190 H280" stroke="#F59E0B" stroke-width="2" opacity="0.6"/>
        <!-- Cute Character Face (Bear/Cat eyes & blush) -->
        <circle cx="170" cy="225" r="5" fill="#78350F"/>
        <circle cx="220" cy="225" r="5" fill="#78350F"/>
        <!-- Blush cheeks -->
        <ellipse cx="155" cy="235" rx="8" ry="5" fill="#FCA5A5" opacity="0.7"/>
        <ellipse cx="235" cy="235" rx="8" ry="5" fill="#FCA5A5" opacity="0.7"/>
        <!-- Nose/Mouth -->
        <ellipse cx="195" cy="232" rx="4" ry="3" fill="#D97706"/>
        <path d="M192 235 Q195 240 198 235" stroke="#78350F" stroke-width="2" fill="none"/>

        <!-- Keychain Ring on right side -->
        <circle cx="282" cy="180" r="14" fill="none" stroke="#F59E0B" stroke-width="4"/>
        <circle cx="295" cy="205" r="8" fill="none" stroke="#D97706" stroke-width="3"/>
        
        <!-- Dangling Emerald Four-Leaf Clover Charm -->
        <g transform="translate(305, 230)">
          <!-- Leaf 1 (top) -->
          <circle cx="0" cy="-14" r="11" fill="url(#clover-green)"/>
          <!-- Leaf 2 (bottom) -->
          <circle cx="0" cy="14" r="11" fill="url(#clover-green)"/>
          <!-- Leaf 3 (left) -->
          <circle cx="-14" cy="0" r="11" fill="url(#clover-green)"/>
          <!-- Leaf 4 (right) -->
          <circle cx="14" cy="0" r="11" fill="url(#clover-green)"/>
          <!-- Stem -->
          <path d="M0 8 Q8 26 2 34" fill="none" stroke="#16A34A" stroke-width="3" stroke-linecap="round"/>
          <!-- Golden Center Gem -->
          <circle cx="0" cy="0" r="4.5" fill="#FBBF24"/>
        </g>
      </g>
      <!-- Tag -->
      <g transform="translate(125, 290) rotate(-3)">
        <rect width="66" height="24" rx="3" fill="#FFFDE7" stroke="#FDE047" stroke-width="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
        <text x="33" y="11" font-family="'Pretendard', sans-serif" font-size="7" font-weight="bold" fill="#854D0E" text-anchor="middle">숭실대 분실물</text>
        <text x="33" y="20" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#1E293B" text-anchor="middle">2026-107</text>
      </g>
    </svg>
  `,

  // 7. 2026-143: 검정 지퍼 투명 격자 메쉬 파우치
  '2026-143': `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-mesh" width="14" height="14" patternUnits="userSpaceOnUse">
          <path d="M 14 0 L 0 0 0 14" fill="none" stroke="#64748B" stroke-width="0.8" opacity="0.45"/>
        </pattern>
        <filter id="shadow-143">
          <feDropShadow dx="0" dy="16" stdDeviation="12" flood-color="#0F172A" flood-opacity="0.14" />
        </filter>
      </defs>
      <g filter="url(#shadow-143)">
        <!-- Transparent Mesh Pouch Body -->
        <rect x="80" y="125" width="240" height="165" rx="14" fill="#F8FAFC" fill-opacity="0.85" stroke="#94A3B8" stroke-width="2"/>
        <!-- Grid Pattern Overlay -->
        <rect x="80" y="125" width="240" height="165" rx="14" fill="url(#grid-mesh)"/>

        <!-- Items visibly stored inside pouch -->
        <!-- Pen 1 (Pink) -->
        <line x1="105" y1="210" x2="280" y2="160" stroke="#F472B6" stroke-width="9" stroke-linecap="round" opacity="0.6"/>
        <!-- Pen 2 (Blue) -->
        <line x1="115" y1="235" x2="290" y2="185" stroke="#38BDF8" stroke-width="8" stroke-linecap="round" opacity="0.6"/>
        <!-- Sticky notes block -->
        <rect x="130" y="170" width="46" height="46" rx="4" fill="#FDE047" opacity="0.5"/>

        <!-- Black Top Zipper Band -->
        <rect x="76" y="120" width="248" height="20" rx="4" fill="#0F172A"/>
        <line x1="80" y1="130" x2="320" y2="130" stroke="#E2E8F0" stroke-width="2" stroke-dasharray="3,2"/>
        <!-- Black/Silver Zipper Pull Tab -->
        <rect x="90" y="125" width="14" height="26" rx="3" fill="#334155" stroke="#E2E8F0" stroke-width="1.5"/>
        <circle cx="97" cy="142" r="3" fill="#E2E8F0"/>
      </g>
      <!-- Tag -->
      <g transform="translate(170, 275) rotate(2)">
        <rect width="66" height="24" rx="3" fill="#FFFDE7" stroke="#FDE047" stroke-width="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
        <text x="33" y="11" font-family="'Pretendard', sans-serif" font-size="7" font-weight="bold" fill="#854D0E" text-anchor="middle">숭실대 분실물</text>
        <text x="33" y="20" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#1E293B" text-anchor="middle">2026-143</text>
      </g>
    </svg>
  `,

  // 8. 2026-162: 블루 다이얼 실버 메탈 크로노그래프 손목시계
  '2026-162': `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="silver-bracelet" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#94A3B8"/>
          <stop offset="30%" stop-color="#E2E8F0"/>
          <stop offset="50%" stop-color="#FFFFFF"/>
          <stop offset="70%" stop-color="#CBD5E1"/>
          <stop offset="100%" stop-color="#64748B"/>
        </linearGradient>
        <radialGradient id="blue-dial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1E40AF"/>
          <stop offset="60%" stop-color="#1E3A8A"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </radialGradient>
        <filter id="shadow-162">
          <feDropShadow dx="0" dy="16" stdDeviation="12" flood-color="#0F172A" flood-opacity="0.18" />
        </filter>
      </defs>
      <g filter="url(#shadow-162)">
        <!-- Top Bracelet Links -->
        <rect x="165" y="55" width="70" height="90" rx="6" fill="url(#silver-bracelet)"/>
        <line x1="165" y1="85" x2="235" y2="85" stroke="#64748B" stroke-width="2"/>
        <line x1="165" y1="115" x2="235" y2="115" stroke="#64748B" stroke-width="2"/>
        <!-- Bottom Bracelet Links -->
        <rect x="165" y="255" width="70" height="90" rx="6" fill="url(#silver-bracelet)"/>
        <line x1="165" y1="285" x2="235" y2="285" stroke="#64748B" stroke-width="2"/>
        <line x1="165" y1="315" x2="235" y2="315" stroke="#64748B" stroke-width="2"/>

        <!-- Watch Case (Round Stainless Steel) -->
        <circle cx="200" cy="200" r="76" fill="url(#silver-bracelet)" stroke="#CBD5E1" stroke-width="3"/>
        <!-- Tachymeter Bezel -->
        <circle cx="200" cy="200" r="67" fill="#1E293B"/>
        <!-- Blue Sunburst Dial -->
        <circle cx="200" cy="200" r="60" fill="url(#blue-dial)"/>
        
        <!-- Hour markers -->
        <line x1="200" y1="145" x2="200" y2="152" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        <line x1="200" y1="248" x2="200" y2="255" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        <line x1="145" y1="200" x2="152" y2="200" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        <line x1="248" y1="200" x2="255" y2="200" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>

        <!-- Chronograph sub-dials -->
        <circle cx="200" cy="178" r="14" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
        <circle cx="180" cy="214" r="12" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
        <circle cx="220" cy="214" r="12" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>

        <!-- Hands (Hour, Minute, Red Chrono Second) -->
        <line x1="200" y1="200" x2="175" y2="175" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="200" y1="200" x2="232" y2="165" stroke="#E2E8F0" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="200" x2="200" y2="148" stroke="#EF4444" stroke-width="1.5"/>
        <circle cx="200" cy="200" r="4" fill="#EF4444"/>

        <!-- Crown & Pushers on Right -->
        <rect x="274" y="194" width="9" height="12" rx="2" fill="#94A3B8"/>
        <rect x="268" y="172" width="7" height="9" rx="2" fill="#94A3B8"/>
        <rect x="268" y="219" width="7" height="9" rx="2" fill="#94A3B8"/>
      </g>
      <!-- Tag -->
      <g transform="translate(167, 335) rotate(-3)">
        <rect width="66" height="24" rx="3" fill="#FFFDE7" stroke="#FDE047" stroke-width="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
        <text x="33" y="11" font-family="'Pretendard', sans-serif" font-size="7" font-weight="bold" fill="#854D0E" text-anchor="middle">숭실대 분실물</text>
        <text x="33" y="20" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#1E293B" text-anchor="middle">2026-162</text>
      </g>
    </svg>
  `,

  // 9. 2026-141: 스틸 블루 컬러 니트 후드 바라클라바
  '2026-141': `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="knit-steel-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6488A8"/>
          <stop offset="40%" stop-color="#4A779D"/>
          <stop offset="80%" stop-color="#365D80"/>
          <stop offset="100%" stop-color="#244360"/>
        </linearGradient>
        <filter id="shadow-141">
          <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#0F172A" flood-opacity="0.15" />
        </filter>
      </defs>
      <g filter="url(#shadow-141)">
        <!-- Hood & Neck Warmer Silhouette (Balaclava) -->
        <path d="M125 150 C125 75 275 75 275 150 L285 285 C285 305 115 305 115 285 Z" fill="url(#knit-steel-blue)"/>
        
        <!-- Ribbed texture lines on neck -->
        <line x1="130" y1="240" x2="130" y2="295" stroke="#244360" stroke-width="2.5" opacity="0.6"/>
        <line x1="145" y1="240" x2="145" y2="295" stroke="#244360" stroke-width="2.5" opacity="0.6"/>
        <line x1="160" y1="240" x2="160" y2="295" stroke="#244360" stroke-width="2.5" opacity="0.6"/>
        <line x1="175" y1="240" x2="175" y2="295" stroke="#244360" stroke-width="2.5" opacity="0.6"/>
        <line x1="190" y1="240" x2="190" y2="295" stroke="#244360" stroke-width="2.5" opacity="0.6"/>
        <line x1="205" y1="240" x2="205" y2="295" stroke="#244360" stroke-width="2.5" opacity="0.6"/>
        <line x1="220" y1="240" x2="220" y2="295" stroke="#244360" stroke-width="2.5" opacity="0.6"/>
        <line x1="235" y1="240" x2="235" y2="295" stroke="#244360" stroke-width="2.5" opacity="0.6"/>
        <line x1="250" y1="240" x2="250" y2="295" stroke="#244360" stroke-width="2.5" opacity="0.6"/>
        <line x1="265" y1="240" x2="265" y2="295" stroke="#244360" stroke-width="2.5" opacity="0.6"/>

        <!-- Face Opening (Oval cut) -->
        <ellipse cx="200" cy="165" rx="46" ry="54" fill="#F8FAFC" stroke="#365D80" stroke-width="8"/>
        <!-- Inside shadow of hood -->
        <ellipse cx="200" cy="165" rx="42" ry="50" fill="#1E293B" opacity="0.12"/>
        
        <!-- Hood drawstring cords dangling down -->
        <path d="M165 210 Q160 250 162 285" fill="none" stroke="#E2E8F0" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="162" cy="287" r="3" fill="#94A3B8"/>
        <path d="M235 210 Q240 250 238 285" fill="none" stroke="#E2E8F0" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="238" cy="287" r="3" fill="#94A3B8"/>
      </g>
      <!-- Tag -->
      <g transform="translate(167, 305) rotate(-2)">
        <rect width="66" height="24" rx="3" fill="#FFFDE7" stroke="#FDE047" stroke-width="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
        <text x="33" y="11" font-family="'Pretendard', sans-serif" font-size="7" font-weight="bold" fill="#854D0E" text-anchor="middle">숭실대 분실물</text>
        <text x="33" y="20" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#1E293B" text-anchor="middle">2026-141</text>
      </g>
    </svg>
  `
};

// Generates fallback SVG for newly reported items based on category & title
export function getGenericItemSvg(category, title = '', id = 'NEW') {
  const colorMap = {
    '전자기기': '#4A779D',
    '생활용품': '#D96B6B',
    '문구류': '#5B9A8B',
    '귀중품': '#E5B84B',
    '기타': '#64748B'
  };
  const color = colorMap[category] || '#1B4F9C';

  return `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow-gen">
          <feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="#0F172A" flood-opacity="0.14" />
        </filter>
      </defs>
      <g filter="url(#shadow-gen)">
        <rect x="110" y="110" width="180" height="180" rx="32" fill="${color}" opacity="0.15" stroke="${color}" stroke-width="3"/>
        <circle cx="200" cy="200" r="55" fill="${color}" opacity="0.25"/>
        <rect x="150" y="165" width="100" height="70" rx="16" fill="white" stroke="${color}" stroke-width="3"/>
        <circle cx="200" cy="200" r="14" fill="${color}"/>
      </g>
      <text x="200" y="260" font-family="'Pretendard', sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">${title.slice(0, 15)}</text>
      <!-- Tag -->
      <g transform="translate(167, 305)">
        <rect width="66" height="24" rx="3" fill="#FFFDE7" stroke="#FDE047" stroke-width="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
        <text x="33" y="11" font-family="'Pretendard', sans-serif" font-size="7" font-weight="bold" fill="#854D0E" text-anchor="middle">숭실대 분실물</text>
        <text x="33" y="20" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#1E293B" text-anchor="middle">${id}</text>
      </g>
    </svg>
  `;
}
