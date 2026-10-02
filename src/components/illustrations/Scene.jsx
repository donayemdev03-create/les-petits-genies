/**
 * Petites illustrations thématiques utilisées comme images d'attente
 * (actualités, galerie, sections). Variante choisie avec `scene`.
 */
const BG = {
  classe: '#DCE7FF', jeux: '#FFEFB8', art: '#FFDCD5', musique: '#E5DCFF', sport: '#CDEFD9',
  lecture: '#FFF1D6', fete: '#FFE3EC', science: '#D8F3E6', cantine: '#FFE9D6', bus: '#DCEBFF',
}

function Art({ scene }) {
  switch (scene) {
    case 'classe':
      return (<>
        <rect x="70" y="50" width="260" height="140" rx="10" fill="#2F6B4F" stroke="#8B6B4F" strokeWidth="10" />
        <text x="100" y="105" fontFamily="Fredoka, sans-serif" fontSize="34" fill="#FFFFFF" opacity=".9">A b c</text>
        <text x="210" y="160" fontFamily="Fredoka, sans-serif" fontSize="30" fill="#FFE48A">1 + 2 = 3</text>
        {[60, 170, 280].map((x) => <g key={x}><rect x={x} y="220" width="70" height="14" rx="4" fill="#F5B416" /><rect x={x + 6} y="234" width="6" height="40" fill="#8B6B4F" /><rect x={x + 58} y="234" width="6" height="40" fill="#8B6B4F" /></g>)}
      </>)
    case 'jeux':
      return (<>
        <circle cx="320" cy="70" r="30" fill="#FFC93C" />
        <rect x="80" y="110" width="10" height="150" rx="4" fill="#2C52C9" /><rect x="130" y="110" width="10" height="150" rx="4" fill="#2C52C9" />
        {[140, 175, 210].map((y) => <rect key={y} x="84" y={y} width="52" height="7" rx="3" fill="#5F89F0" />)}
        <path d="M140 116 C 200 124, 220 230, 290 252 L 282 266 C 210 246, 190 140, 136 130 Z" fill="#F4694F" />
        <circle cx="300" cy="236" r="26" fill="#FFFFFF" stroke="#2C52C9" strokeWidth="4" />
        <path d="M282 222l36 28M318 222l-36 28" stroke="#2C52C9" strokeWidth="3" />
        <rect x="0" y="262" width="400" height="38" fill="#86D6A6" />
      </>)
    case 'art':
      return (<>
        <path d="M120 270 L170 40 L220 270" stroke="#8B6B4F" strokeWidth="10" fill="none" strokeLinecap="round" />
        <rect x="110" y="60" width="120" height="110" rx="6" fill="#FFFFFF" stroke="#E9D9C7" strokeWidth="4" />
        <circle cx="145" cy="100" r="18" fill="#FFC93C" /><path d="M115 165 L150 120 L175 145 L195 125 L226 165 Z" fill="#2FAE66" />
        <ellipse cx="290" cy="210" rx="72" ry="52" fill="#F7E3CB" />
        <circle cx="265" cy="195" r="11" fill="#F4694F" /><circle cx="295" cy="185" r="11" fill="#2C52C9" /><circle cx="322" cy="200" r="11" fill="#FFC93C" /><circle cx="300" cy="228" r="11" fill="#2FAE66" />
        <circle cx="258" cy="228" r="9" fill="#FFDCD5" />
        <rect x="320" y="120" width="10" height="90" rx="5" fill="#8B6B4F" transform="rotate(30 325 165)" /><path d="M343 112l14 -6-4 16z" fill="#F4694F" />
      </>)
    case 'musique':
      return (<>
        <ellipse cx="150" cy="230" rx="70" ry="22" fill="#B83D27" /><rect x="80" y="170" width="140" height="60" fill="#F4694F" /><ellipse cx="150" cy="170" rx="70" ry="22" fill="#FFF1EE" stroke="#B83D27" strokeWidth="4" />
        <path d="M90 180l30 40 30-40 30 40 30-40" stroke="#FFC93C" strokeWidth="4" fill="none" />
        <rect x="200" y="100" width="8" height="70" rx="4" fill="#8B6B4F" transform="rotate(-30 204 135)" />
        <g fill="#2C52C9"><circle cx="280" cy="150" r="14" /><rect x="290" y="70" width="6" height="82" /><path d="M296 70c18 6 30 14 30 32-10-10-20-14-30-14z" /></g>
        <g fill="#7B5BD6"><circle cx="330" cy="200" r="11" /><rect x="338" y="140" width="5" height="62" /></g>
      </>)
    case 'sport':
      return (<>
        <rect x="40" y="60" width="200" height="130" fill="none" stroke="#FFFFFF" strokeWidth="8" />
        <path d="M40 60l30 30h140l30-30M70 90v100M210 90v100" stroke="#FFFFFF" strokeWidth="2" opacity=".8" />
        <path d="M44 64h192v122H44z" fill="url(#net)" opacity=".5" />
        <defs><pattern id="net" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M0 0h14v14" fill="none" stroke="#FFFFFF" strokeWidth="1.5" /></pattern></defs>
        <circle cx="300" cy="230" r="34" fill="#FFFFFF" stroke="#141B2E" strokeWidth="3" />
        <path d="M300 214l14 10-5 16h-18l-5-16z" fill="#141B2E" />
        {[90, 140, 190].map((x) => <path key={x} d={`M${x} 270l12 -30 12 30z`} fill="#F4694F" />)}
        <rect x="0" y="270" width="400" height="30" fill="#2FAE66" />
      </>)
    case 'lecture':
      return (<>
        {[['#2C52C9', 60], ['#F4694F', 80], ['#2FAE66', 70], ['#F5B416', 90]].map(([c, w], i) => <rect key={i} x={100 + (i % 2) * 10} y={240 - i * 26} width={w + 100} height="24" rx="4" fill={c} />)}
        <path d="M230 120 C 260 106, 300 106, 320 120 V 200 C 300 188, 260 188, 230 200 Z" fill="#FFFFFF" stroke="#C7D5F2" strokeWidth="3" />
        <path d="M320 120 C 340 106, 370 106, 380 120 V 200 C 370 188, 340 188, 320 200 Z" fill="#FFFFFF" stroke="#C7D5F2" strokeWidth="3" />
        {[140, 156, 172].map((y) => <path key={y} d={`M246 ${y}h56M334 ${y}h36`} stroke="#BCD0FF" strokeWidth="4" strokeLinecap="round" />)}
        <path d="M60 60l8 16 18 3-13 12 3 18-16-9-16 9 3-18-13-12 18-3z" fill="#FFC93C" />
      </>)
    case 'fete':
      return (<>
        <path d="M0 40 Q200 100 400 40" stroke="#5C6782" strokeWidth="2" fill="none" />
        {Array.from({ length: 9 }).map((_, i) => { const x = 20 + i * 44; const y = 46 + Math.sin((i / 8) * Math.PI) * 28; return <path key={i} d={`M${x} ${y}l18 0-9 26z`} fill={['#F4694F', '#FFC93C', '#2C52C9', '#2FAE66'][i % 4]} /> })}
        {[[90, 150, '#F4694F'], [130, 130, '#2C52C9'], [320, 140, '#FFC93C'], [355, 165, '#2FAE66']].map(([x, y, c], i) => <g key={i}><path d={`M${x} ${y + 34}q6 40 -4 90`} stroke="#5C6782" strokeWidth="1.5" fill="none" /><ellipse cx={x} cy={y} rx="22" ry="28" fill={c} /></g>)}
        <rect x="160" y="200" width="100" height="60" rx="8" fill="#FFFFFF" /><rect x="160" y="200" width="100" height="16" rx="8" fill="#FFAE9E" /><rect x="180" y="170" width="60" height="32" rx="6" fill="#FFE48A" />
        {[195, 210, 225].map((x) => <g key={x}><rect x={x - 2} y="152" width="4" height="18" fill="#2C52C9" /><path d={`M${x} 142c4 4 4 8 0 10-4-2-4-6 0-10z`} fill="#F5B416" /></g>)}
      </>)
    case 'science':
      return (<>
        <path d="M120 270 L110 200 H210 L200 270 Z" fill="#DB4F36" />
        <path d="M160 200 C 160 150, 150 120, 160 90" stroke="#23914F" strokeWidth="6" fill="none" />
        <ellipse cx="135" cy="140" rx="30" ry="14" fill="#2FAE66" transform="rotate(-25 135 140)" />
        <ellipse cx="188" cy="118" rx="32" ry="14" fill="#5FC48A" transform="rotate(25 188 118)" />
        <ellipse cx="160" cy="84" rx="14" ry="20" fill="#86D6A6" />
        <circle cx="290" cy="150" r="48" fill="#DCE7FF" stroke="#2C52C9" strokeWidth="10" />
        <rect x="320" y="185" width="16" height="70" rx="8" fill="#2C52C9" transform="rotate(-40 328 220)" />
        <ellipse cx="275" cy="135" rx="14" ry="8" fill="#FFFFFF" opacity=".8" />
      </>)
    case 'cantine':
      return (<>
        <ellipse cx="200" cy="180" rx="120" ry="70" fill="#FFFFFF" stroke="#E9D9C7" strokeWidth="4" />
        <ellipse cx="200" cy="180" rx="86" ry="48" fill="#FFF8EE" />
        <path d="M150 170c10-26 50-26 60 0z" fill="#F5B416" /><circle cx="236" cy="170" r="20" fill="#B83D27" />
        <path d="M170 196c20 10 50 10 70 0" stroke="#2FAE66" strokeWidth="12" strokeLinecap="round" />
        <rect x="56" y="110" width="8" height="140" rx="4" fill="#9AA6BD" /><rect x="336" y="110" width="8" height="140" rx="4" fill="#9AA6BD" />
        <circle cx="330" cy="70" r="22" fill="#F4694F" /><path d="M330 48c4-8 10-10 16-8" stroke="#2FAE66" strokeWidth="4" fill="none" />
        <path d="M60 60c20-16 50-6 54 18-24 6-46 0-54-18z" fill="#FFC93C" />
      </>)
    case 'bus':
    default:
      return (<>
        <rect x="50" y="110" width="290" height="120" rx="20" fill="#FFC93C" />
        <rect x="50" y="190" width="290" height="14" fill="#13204A" />
        {[70, 130, 190, 250].map((x) => <rect key={x} x={x} y="126" width="46" height="40" rx="6" fill="#DCE7FF" />)}
        <rect x="300" y="126" width="30" height="62" rx="6" fill="#DCE7FF" />
        <circle cx="110" cy="236" r="22" fill="#13204A" /><circle cx="110" cy="236" r="9" fill="#C7D5F2" />
        <circle cx="280" cy="236" r="22" fill="#13204A" /><circle cx="280" cy="236" r="9" fill="#C7D5F2" />
        <rect x="0" y="258" width="400" height="42" fill="#C7D5F2" />
        <path d="M20 280h40M100 280h40M180 280h40M260 280h40M340 280h40" stroke="#FFFFFF" strokeWidth="5" />
      </>)
  }
}

export default function Scene({ scene = 'classe', className = '' }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label={`Illustration : ${scene}`} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill={BG[scene] || BG.classe} />
      <circle cx="360" cy="40" r="70" fill="#FFFFFF" opacity=".35" />
      <Art scene={scene} />
    </svg>
  )
}
