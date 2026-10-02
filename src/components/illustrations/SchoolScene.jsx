/**
 * Illustration vectorielle de l'école (utilisée tant qu'aucune photo n'est
 * définie dans src/config/images.js).
 */
function Kid({ x, y, shirt, skin = '#8A5636', hair = '#1E1612', scale = 1, arm = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-9" y="-2" width="7" height="24" rx="3.5" fill="#1E3368" />
      <rect x="2" y="-2" width="7" height="24" rx="3.5" fill="#1E3368" />
      <path d="M-14 -30a14 14 0 0 1 28 0v30h-28z" fill={shirt} />
      <rect x="-21" y={-28 - arm} width="8" height="22" rx="4" fill={skin} transform={`rotate(${arm ? -35 : 8} -17 -26)`} />
      <rect x="13" y="-28" width="8" height="22" rx="4" fill={skin} transform="rotate(-8 17 -26)" />
      <circle cx="0" cy="-44" r="13" fill={skin} />
      <path d="M-13 -46a13 13 0 0 1 26 0c-6-4-14-6-26 0z" fill={hair} />
    </g>
  )
}

export default function SchoolScene({ className = '', label = 'ÉCOLE' }) {
  return (
    <svg viewBox="0 0 640 480" className={className} role="img" aria-label="Illustration de l'école et de sa cour de récréation" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ss-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CFE0FF" />
          <stop offset="1" stopColor="#F5F8FF" />
        </linearGradient>
      </defs>
      <rect width="640" height="480" fill="url(#ss-sky)" />
      <circle cx="540" cy="86" r="38" fill="#FFC93C" />
      <circle cx="540" cy="86" r="54" fill="#FFC93C" opacity=".18" />
      <g fill="#FFFFFF" opacity=".95">
        <ellipse cx="110" cy="80" rx="48" ry="14" /><ellipse cx="140" cy="68" rx="30" ry="14" />
        <ellipse cx="380" cy="58" rx="36" ry="10" />
      </g>

      {/* Drapeau */}
      <rect x="96" y="150" width="4" height="210" fill="#5C6782" />
      <rect x="100" y="152" width="44" height="30" fill="#FF8A73" />
      <rect x="100" y="152" width="14.6" height="30" fill="#2FAE66" />
      <rect x="129.4" y="152" width="14.6" height="30" fill="#FFC93C" />

      {/* Bâtiment */}
      <rect x="170" y="190" width="300" height="190" rx="8" fill="#FFFFFF" stroke="#C7D5F2" strokeWidth="2" />
      <path d="M150 196 L320 110 L490 196 Z" fill="#F4694F" />
      <path d="M150 196 L320 110 L490 196" fill="none" stroke="#DB4F36" strokeWidth="6" strokeLinejoin="round" />
      <circle cx="320" cy="160" r="22" fill="#FFFFFF" stroke="#2C52C9" strokeWidth="4" />
      <path d="M320 146v14l9 6" stroke="#2C52C9" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {[0, 1].map((r) => [0, 1, 2, 3].map((c) => {
        const cols = ['#FFC93C', '#86D6A6', '#8FB0FA', '#FFAE9E']
        const x = c < 2 ? 192 + c * 58 : 344 + (c - 2) * 58
        return (
          <g key={`${r}${c}`}>
            <rect x={x} y={214 + r * 66} width="46" height="44" rx="6" fill={cols[(r + c) % 4]} />
            <rect x={x + 5} y={219 + r * 66} width="36" height="34" rx="4" fill="#DCE7FF" />
            <path d={`M${x + 23} ${219 + r * 66}v34M${x + 5} ${236 + r * 66}h36`} stroke="#FFFFFF" strokeWidth="3" />
          </g>
        )
      }))}
      <rect x="292" y="306" width="56" height="74" rx="26" fill="#2C52C9" />
      <rect x="292" y="306" width="56" height="74" rx="26" fill="none" stroke="#2442A3" strokeWidth="3" />
      <circle cx="334" cy="346" r="3.5" fill="#FFC93C" />
      <rect x="236" y="272" width="168" height="22" rx="11" fill="#13204A" />
      <text x="320" y="287" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontWeight="600" fontSize="10.5" letterSpacing="1.5" fill="#FFFFFF">{label.toUpperCase()}</text>

      {/* Sol */}
      <path d="M0 380 H640 V480 H0 Z" fill="#9FDDB7" />
      <path d="M0 392 C 160 376, 300 404, 640 386 V480 H0 Z" fill="#86D6A6" />
      <path d="M262 380 L378 380 L420 480 L220 480 Z" fill="#F0E6D2" />

      {/* Toboggan */}
      <g transform="translate(500 300)">
        <rect x="0" y="0" width="8" height="90" rx="3" fill="#2C52C9" />
        <rect x="36" y="0" width="8" height="90" rx="3" fill="#2C52C9" />
        {[18, 38, 58].map((y) => <rect key={y} x="4" y={y} width="36" height="5" rx="2" fill="#5F89F0" />)}
        <path d="M44 4 C 80 10, 90 70, 128 86 L 122 96 C 80 80, 70 22, 40 14 Z" fill="#FFC93C" />
      </g>

      {/* Arbres */}
      {[[40, 360, 34, '#5FC48A'], [600, 352, 30, '#2FAE66'], [460, 372, 18, '#5FC48A']].map(([x, y, r, c], i) => (
        <g key={i}>
          <rect x={x - 4} y={y} width="8" height="34" rx="3" fill="#8B6B4F" />
          <circle cx={x} cy={y - r * 0.6} r={r} fill={c} />
          <circle cx={x - r * 0.5} cy={y - r * 0.2} r={r * 0.6} fill={c} />
        </g>
      ))}

      {/* Enfants */}
      <Kid x={170} y={430} shirt="#FFC93C" scale={1.05} arm={1} />
      <Kid x={230} y={440} shirt="#F4694F" skin="#A36A45" hair="#2A1D16" scale={0.95} />
      <circle cx="200" cy="384" r="11" fill="#FFFFFF" stroke="#2C52C9" strokeWidth="3" />
      <path d="M192 378l16 12M208 378l-16 12" stroke="#2C52C9" strokeWidth="2" />
      <Kid x={430} y={445} shirt="#5F89F0" skin="#6E4329" scale={1.1} />
      <Kid x={470} y={448} shirt="#2FAE66" skin="#8A5636" hair="#16110E" scale={0.9} arm={1} />
    </svg>
  )
}
