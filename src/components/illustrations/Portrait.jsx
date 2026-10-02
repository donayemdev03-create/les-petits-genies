/**
 * Portrait illustré d'un membre de l'équipe (quand `photo` vaut null).
 */
const tones = {
  brand: ['#DCE7FF', '#BCD0FF', '#2C52C9'],
  sun: ['#FFF3C9', '#FFE48A', '#F5B416'],
  coral: ['#FFE6E0', '#FFC7BA', '#F4694F'],
  leaf: ['#DDF5E6', '#B4E8C8', '#2FAE66'],
}
const skins = ['#8A5636', '#6E4329', '#A36A45', '#7C4B2F']
const hairs = ['#1E1612', '#2A1D16', '#16110E']

export default function Portrait({ tone = 'brand', gender = 'f', seed = 0, className = '' }) {
  const [bg1, bg2, top] = tones[tone] || tones.brand
  const skin = skins[seed % skins.length]
  const hair = hairs[seed % hairs.length]
  const id = `pt-${tone}-${seed}`
  return (
    <svg viewBox="0 30 200 210" className={className} role="img" aria-label="Portrait illustré (photo à remplacer)" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={bg1} /><stop offset="1" stopColor={bg2} />
        </linearGradient>
      </defs>
      <rect y="0" width="200" height="240" fill={`url(#${id})`} />
      <circle cx="40" cy="60" r="40" fill="#FFFFFF" opacity=".35" />
      {gender === 'f' && <path d="M60 112c0-40 18-62 40-62s40 22 40 62c0 24-4 44-10 56H70c-6-12-10-32-10-56z" fill={hair} />}
      <rect x="88" y="138" width="24" height="36" rx="10" fill={skin} />
      <path d="M22 240c2-44 26-66 78-70 52 4 76 26 78 70z" fill={top} />
      <path d="M82 170c6 10 30 10 36 0l-4 18c-8 6-20 6-28 0z" fill="#FFFFFF" />
      {gender === 'm' && <path d="M100 178l-6 30 6 8 6-8z" fill="#13204A" opacity=".85" />}
      <ellipse cx="100" cy="108" rx="31" ry="37" fill={skin} />
      <ellipse cx="69" cy="112" rx="5" ry="8" fill={skin} />
      <ellipse cx="131" cy="112" rx="5" ry="8" fill={skin} />
      {gender === 'f'
        ? <path d="M68 104c0-26 14-42 32-42s34 14 34 40c-12-4-22-14-28-24-6 12-20 22-38 26z" fill={hair} />
        : <path d="M69 102c-2-24 12-38 31-38s33 12 31 38c-4-10-10-16-14-18-10 4-26 4-36 0-5 3-9 9-12 18z" fill={hair} />}
      <path d="M88 124c6 6 18 6 24 0" stroke="#3B2618" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".6" />
    </svg>
  )
}
