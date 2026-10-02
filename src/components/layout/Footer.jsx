import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import Logo from '../ui/Logo'
import { SocialIcon } from '../ui/Icon'
import { navLinks, site } from '../../config/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-brand-950 text-brand-100/80">
      {/* Vague décorative */}
      <svg viewBox="0 0 1440 40" className="absolute -top-px left-0 h-6 w-full text-white sm:h-10" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0h1440v12c-120 18-240 26-360 18S840 4 720 6 480 30 360 30 120 18 0 10z" fill="currentColor" />
      </svg>
      <div className="container-x grid grid-cols-1 gap-12 pb-14 pt-20 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <Logo light />
          <p className="mt-5 text-[0.95rem] leading-relaxed">
            Depuis {site.foundedYear}, {site.shortName} accompagne les enfants de 3 à 11 ans à {site.address.city}, de la petite section au CM2.
          </p>
          <div className="mt-6 flex gap-2">
            {Object.entries(site.socials).map(([k, url]) => (
              <a key={k} href={url} target="_blank" rel="noreferrer" aria-label={k}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-sun-300 hover:text-sun-300">
                <SocialIcon network={k} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] !text-sun-300 !font-sans">Navigation</h3>
          <ul className="mt-3 sm:mt-5 sm:space-y-2.5">
            {navLinks.map((l) => <li key={l.to}><Link to={l.to} className="inline-flex min-h-[44px] items-center transition hover:text-white sm:min-h-0">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] !text-sun-300 !font-sans">Parents</h3>
          <ul className="mt-3 sm:mt-5 sm:space-y-2.5">
            <li><Link to="/admissions" className="inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0">Inscriptions</Link></li>
            <li><Link to="/admissions" className="inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0">Frais de scolarité</Link></li>
            <li><Link to="/vie-scolaire" className="inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0">Menus de la cantine</Link></li>
            <li><Link to="/vie-scolaire" className="inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0">Transport et garderie</Link></li>
            <li><Link to="/actualites" className="inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0">Calendrier</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] !text-sun-300 !font-sans">Nous contacter</h3>
          <ul className="mt-5 space-y-4 text-[0.95rem]">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sun-300" /><span>{site.address.street}<br />{site.address.district}, {site.address.city}</span></li>
            {site.phones.map((p) => (
              <li key={p.href} className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-sun-300" /><span>{p.label} : <a href={`tel:${p.href}`} className="tabular hover:text-white">{p.value}</a></span></li>
            ))}
            <li className="flex gap-3"><MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-sun-300" /><a href={`https://wa.me/${site.whatsappHref}`} target="_blank" rel="noreferrer" className="tabular hover:text-white">{site.whatsapp}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-sun-300" /><a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.shortName}. Tous droits réservés.</p>
          <p className="text-brand-100/50">Maquette — noms, chiffres, frais et coordonnées fictifs.</p>
        </div>
      </div>
    </footer>
  )
}
