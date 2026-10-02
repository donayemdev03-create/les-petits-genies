/**
 * Sections réutilisées sur plusieurs pages.
 */
import { Link } from 'react-router-dom'
import { ChevronRight, Quote, Phone, Mail, MapPin, MessageCircle, Clock, CalendarDays, CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import { site, phone, officeHours } from '../../config/site'
import { stats, testimonials } from '../../data/content'
import { events, formatDate } from '../../data/news'

/* ---------- En-tête des pages intérieures ---------- */
export function PageHero({ eyebrow, title, text, crumbs = [], children, accent = 'sun' }) {
  const blob = { sun: 'bg-sun-200/70', coral: 'bg-coral-100', leaf: 'bg-leaf-100', brand: 'bg-brand-100' }[accent]
  return (
    <section className="relative overflow-hidden bg-cloud">
      <div className={`pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full ${blob} blur-2xl`} />
      <div className="pointer-events-none absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-brand-100/60 blur-2xl" />
      <div className="container-x relative py-12 sm:py-16">
        <nav aria-label="Fil d'Ariane" className="mb-5 flex flex-wrap items-center gap-1 text-sm text-ink-500">
          <Link to="/" className="hover:text-brand-700">Accueil</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-1">
              <ChevronRight className="h-4 w-4" />
              {c.to ? <Link to={c.to} className="hover:text-brand-700">{c.label}</Link> : <span className="font-bold text-brand-950">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-[2.3rem] leading-[1.08] sm:text-[3.3rem]">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-lg text-ink-500">{text}</p>}
        {children}
      </div>
    </section>
  )
}

/* ---------- Chiffres clés ---------- */
export function StatsBand() {
  const colors = ['text-sun-300', 'text-coral-300', 'text-leaf-300', 'text-brand-200']
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.label} className="rounded-xl2 bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-7">
          <p className={`tabular font-display text-[2.3rem] font-semibold leading-none sm:text-5xl ${colors[i]}`}>{s.value}</p>
          <p className="mt-3 text-[0.95rem] text-brand-100/85">{s.label}</p>
        </div>
      ))}
    </div>
  )
}

/* ---------- Journée type ---------- */
export function DayTimeline({ items, tone = 'brand' }) {
  const dot = { brand: 'bg-brand-600', coral: 'bg-coral-500', leaf: 'bg-leaf-500' }[tone]
  return (
    <ol className="relative grid gap-0 sm:grid-cols-2 sm:gap-x-10">
      {items.map((it) => (
        <li key={it.time} className="relative flex gap-4 pb-6">
          <span className={`tabular grid h-12 w-[4.5rem] shrink-0 place-items-center rounded-2xl font-display text-[1.02rem] font-semibold text-white ${dot}`}>{it.time}</span>
          <div className="pt-1">
            <p className="font-bold text-brand-950">{it.title}</p>
            <p className="text-[0.95rem] text-ink-500">{it.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

/* ---------- Liste à puces cochées ---------- */
export function CheckList({ items, color = 'text-leaf-500' }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => <li key={t} className="flex gap-3 text-ink-700"><CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${color}`} />{t}</li>)}
    </ul>
  )
}

/* ---------- Témoignages ---------- */
export function Testimonials() {
  const bg = ['bg-sun-100 text-[#8A6100]', 'bg-coral-100 text-coral-700', 'bg-leaf-100 text-leaf-700']
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Ils nous font confiance" title="La parole aux parents" text="Témoignages d’exemple, à remplacer par de vrais avis (avec l’accord des familles)." align="center" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="card flex flex-col p-7">
              <Quote className="h-8 w-8 text-sun-400" />
              <blockquote className="mt-4 flex-1 text-[1.05rem] leading-relaxed text-ink-700">« {t.text} »</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className={`grid h-11 w-11 place-items-center rounded-full font-display font-semibold ${bg[i % 3]}`}>{t.name[0]}</span>
                <span><span className="block font-bold text-brand-950">{t.name}</span><span className="text-sm text-ink-500">{t.context}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Contact rapide ---------- */
export function QuickContact() {
  const items = [
    { icon: Phone, label: 'Secrétariat', value: phone.value, href: `tel:${phone.href}`, cta: 'Appeler', tint: 'bg-brand-50 text-brand-600' },
    { icon: MessageCircle, label: 'WhatsApp', value: site.whatsapp, href: `https://wa.me/${site.whatsappHref}`, cta: 'Écrire', tint: 'bg-leaf-50 text-leaf-600' },
    { icon: Mail, label: 'E-mail', value: site.email, href: `mailto:${site.email}`, cta: 'Envoyer un e-mail', tint: 'bg-coral-50 text-coral-600' },
    { icon: MapPin, label: 'Adresse', value: `${site.address.street}, ${site.address.city}`, href: site.mapUrl, cta: 'Itinéraire', tint: 'bg-sun-100 text-sun-600' },
  ]
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: I, label, value, href, cta, tint }) => (
        <div key={label} className="card flex flex-col p-6">
          <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tint}`}><I className="h-6 w-6" /></span>
          <p className="mt-4 text-sm text-ink-500">{label}</p>
          <p className="tabular mt-1 flex-1 select-all break-words font-bold text-brand-950">{value}</p>
          <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="mt-4 inline-flex min-h-[44px] items-center gap-1 font-bold text-brand-700 hover:text-brand-800">
            {cta} <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      ))}
    </div>
  )
}

/* ---------- Horaires du secrétariat ---------- */
export function HoursCard({ className = '' }) {
  const idx = (new Date().getDay() + 6) % 7
  return (
    <div className={`card p-6 sm:p-7 ${className}`}>
      <h3 className="flex items-center gap-2 text-xl"><Clock className="h-5 w-5 text-coral-500" /> Horaires du secrétariat</h3>
      <dl className="mt-4 divide-y divide-slate-100">
        {officeHours.map((h, i) => (
          <div key={h.day} className={`flex items-center justify-between gap-4 py-2.5 ${i === idx ? '-mx-3 rounded-xl bg-sun-50 px-3 font-bold text-brand-950' : ''}`}>
            <dt>{h.day}{i === idx && <span className="ml-2 text-xs font-extrabold uppercase tracking-wider text-coral-600">aujourd’hui</span>}</dt>
            <dd className="tabular">{h.open ? `${h.open} – ${h.close}` : <span className="text-ink-400">Fermé</span>}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/* ---------- Événements à venir ---------- */
export function EventsList({ limit = 5 }) {
  return (
    <ul className="space-y-3">
      {events.slice(0, limit).map((e) => {
        const d = new Date(`${e.date}T12:00:00`)
        return (
          <li key={e.date + e.title} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 pr-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-coral-50 text-center leading-none">
              <span>
                <span className="tabular block font-display text-2xl font-semibold text-coral-600">{d.getDate()}</span>
                <span className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-coral-700">{d.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', '')}</span>
              </span>
            </span>
            <div className="min-w-0">
              <p className="font-bold text-brand-950">{e.title}</p>
              <p className="flex items-center gap-1.5 text-sm text-ink-500"><CalendarDays className="h-4 w-4 shrink-0" />{formatDate(e.date, { weekday: 'long', day: 'numeric', month: 'long' })} · {e.place}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

/* ---------- Bandeau inscriptions ---------- */
export function CtaBand({ title = `Inscriptions ${site.schoolYear} ouvertes`, text = `${site.registration.note} Date limite : ${site.registration.deadlineLabel}.` }) {
  return (
    <section className="container-x py-8">
      <div className="relative overflow-hidden rounded-blob bg-brand-700 p-8 sm:p-12">
        <svg className="absolute -right-6 -top-8 h-48 w-48 text-sun-400/90" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.6 6.1 6.4.5-4.9 4.2 1.5 6.4L12 15.8 6.4 19.2l1.5-6.4L3 8.6l6.4-.5z" fill="currentColor" /></svg>
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-coral-500/40 blur-2xl" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl !text-white sm:text-4xl">{title}</h2>
            <p className="mt-3 text-lg text-brand-100">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:mr-20">
            <Button to="/admissions" size="lg">Inscrire mon enfant</Button>
            <Button to="/contact" variant="ghostLight" size="lg">Demander une visite</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
