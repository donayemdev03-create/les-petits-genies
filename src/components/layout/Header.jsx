import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Clock, Mail, Sparkles, MessageCircle } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { navLinks, site, phone } from '../../config/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkCls = ({ isActive }) =>
    `whitespace-nowrap rounded-full px-3 py-2 text-[0.95rem] font-bold transition ${isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-600 hover:bg-cloud hover:text-brand-950'}`

  return (
    <>
      {/* Barre d'information (desktop) */}
      <div className="hidden bg-brand-950 text-[0.85rem] text-brand-100 lg:block">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-sun-300" /> Secrétariat : lun – ven 07:00 – 17:00 · sam 08:00 – 12:00</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-sun-300" /> {site.email}</span>
          </div>
          <Link to="/admissions" className="inline-flex items-center gap-2 font-bold text-white hover:text-sun-200">
            <Sparkles className="h-4 w-4 text-sun-300" /> Inscriptions {site.schoolYear} ouvertes jusqu’au {site.registration.deadlineLabel}
          </Link>
        </div>
      </div>

      <header style={{ top: 'env(safe-area-inset-top, 0px)' }}
        className={`sticky z-40 border-b bg-white/90 backdrop-blur-md transition ${scrolled ? 'border-slate-200 shadow-[0_6px_24px_-18px_rgba(19,32,74,.5)]' : 'border-transparent'}`}>
        <div className="container-x flex h-[76px] items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Navigation principale" className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkCls}>{l.label}</NavLink>)}
          </nav>
          <div className="flex items-center gap-2">
            <Button href={`tel:${phone.href}`} variant="outline" size="sm" className="hidden md:inline-flex xl:hidden 2xl:inline-flex">
              <Phone className="h-4 w-4" /> <span className="tabular">{phone.value}</span>
            </Button>
            <Button to="/admissions" size="sm" className="hidden !min-h-[46px] sm:inline-flex">Inscrire mon enfant</Button>
            <button onClick={() => setOpen(true)}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-brand-100 text-brand-950 transition hover:bg-cloud xl:hidden"
              aria-label="Ouvrir le menu" aria-expanded={open} aria-controls="mobile-menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile (hamburger) */}
      <div className={`fixed inset-0 z-50 overflow-hidden xl:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-brand-950/40 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} />
        <aside id="mobile-menu"
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ paddingTop: 'env(safe-area-inset-top, 0px)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
          <div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-5">
            <Logo onClick={() => setOpen(false)} />
            <button onClick={() => setOpen(false)} className="grid h-12 w-12 place-items-center rounded-full hover:bg-cloud" aria-label="Fermer le menu" tabIndex={open ? 0 : -1}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Menu mobile" className="flex-1 overflow-y-auto px-3 py-3">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} tabIndex={open ? 0 : -1}
                className={({ isActive }) => `flex min-h-[50px] items-center rounded-2xl px-4 font-display text-lg font-medium transition ${isActive ? 'bg-brand-50 text-brand-700' : 'text-brand-950 hover:bg-cloud'}`}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="space-y-3 border-t border-slate-100 p-5">
            <Button to="/admissions" size="lg" className="w-full" tabIndex={open ? 0 : -1}>Inscrire mon enfant</Button>
            <div className="grid grid-cols-2 gap-2">
              <Button href={`tel:${phone.href}`} variant="brand" className="w-full" tabIndex={open ? 0 : -1}><Phone className="h-4 w-4" /> Appeler</Button>
              <Button href={`https://wa.me/${site.whatsappHref}`} variant="whatsapp" className="w-full" tabIndex={open ? 0 : -1}><MessageCircle className="h-4 w-4" /> WhatsApp</Button>
            </div>
            <p className="text-center text-sm text-ink-500">Secrétariat : <span className="tabular font-bold text-brand-950">{phone.value}</span></p>
          </div>
        </aside>
      </div>
    </>
  )
}
