import { Link, useLocation } from 'react-router-dom'
import { Phone, GraduationCap } from 'lucide-react'
import { phone } from '../../config/site'

/** Barre d'actions fixe en bas de l'écran sur mobile : Inscription + Appel. */
export default function MobileActionBar() {
  const { pathname } = useLocation()
  if (pathname === '/admissions') return null
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 backdrop-blur-md sm:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2 p-3">
        <Link to="/admissions" className="flex min-h-[52px] min-w-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-sun-400 px-3 font-bold text-brand-950 shadow-sun active:bg-sun-300">
          <GraduationCap className="h-5 w-5" /> Inscrire mon enfant
        </Link>
        <a href={`tel:${phone.href}`} aria-label={`Appeler le secrétariat au ${phone.value}`}
          className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand-600 px-4 font-bold min-[380px]:px-5 text-white active:bg-brand-700">
          <Phone className="h-5 w-5" /> <span className="max-[379px]:sr-only">Appeler</span>
        </a>
      </div>
    </div>
  )
}
