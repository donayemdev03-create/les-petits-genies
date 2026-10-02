import { Link } from 'react-router-dom'
import { site } from '../../config/site'

/** ✏️ Logo : définissez `site.logo` dans src/config/site.js pour utiliser votre fichier. */
export default function Logo({ light = false, onClick }) {
  return (
    <Link to="/" onClick={onClick} className="group inline-flex items-center gap-3" aria-label={`${site.shortName} — accueil`}>
      {site.logo ? (
        <img src={site.logo} alt={site.name} className="h-11 w-auto" />
      ) : (
        <>
          <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-brand-600 shadow-[0_8px_18px_-8px_rgba(44,82,201,.9)] transition group-hover:-rotate-6">
            {/* Livre ouvert + étoile */}
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path d="M3 7.5c3-1.4 6-1.2 9 .8 3-2 6-2.2 9-.8v11c-3-1.4-6-1.2-9 .8-3-2-6-2.2-9-.8z" fill="#fff" />
              <path d="M12 8.3v11" stroke="#2C52C9" strokeWidth="1.4" />
            </svg>
            <svg viewBox="0 0 24 24" className="absolute -right-1.5 -top-1.5 h-5 w-5" aria-hidden="true">
              <path d="M12 2l2.6 6.1 6.4.5-4.9 4.2 1.5 6.4L12 15.8 6.4 19.2l1.5-6.4L3 8.6l6.4-.5z" fill="#FFC93C" stroke="#fff" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display text-[1.2rem] font-semibold ${light ? 'text-white' : 'text-brand-950'}`}>{site.shortName}</span>
            <span className={`mt-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] ${light ? 'text-sun-300' : 'text-coral-600'}`}>Maternelle · Primaire</span>
          </span>
        </>
      )}
    </Link>
  )
}
