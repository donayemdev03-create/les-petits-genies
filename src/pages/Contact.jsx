import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2, Navigation, MessageCircle, Copy, Check } from 'lucide-react'
import Button from '../components/ui/Button'
import FormField from '../components/ui/FormField'
import MapPlaceholder from '../components/illustrations/MapPlaceholder'
import { PageHero, HoursCard } from '../components/sections/Sections'
import { site, classHours } from '../config/site'

const SUBJECTS = ['Demande de visite', 'Renseignement sur les inscriptions', 'Frais de scolarité', 'Transport / cantine / garderie', 'Autre']

function CopyButton({ text }) {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1600) } catch { /* copie refusée */ }
  }
  return (
    <button type="button" onClick={copy} className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-ink-400 transition hover:bg-cloud hover:text-brand-700" aria-label={`Copier ${text}`}>
      {done ? <Check className="h-4 w-4 text-leaf-600" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}

const EMPTY = { name: '', email: '', phone: '', subject: SUBJECTS[0], message: '' }

export default function Contact() {
  const [v, setV] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => { setV((x) => ({ ...x, [k]: e.target.value })); setErrors((er) => ({ ...er, [k]: undefined })) }

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (v.name.trim().length < 2) er.name = 'Indiquez votre nom.'
    if (!/^\+?[\d\s.-]{8,}$/.test(v.phone.trim()) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) er.phone = 'Indiquez un téléphone ou un e-mail pour que nous puissions vous répondre.'
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) er.email = 'Adresse e-mail invalide.'
    if (v.message.trim().length < 10) er.message = 'Votre message doit contenir au moins 10 caractères.'
    setErrors(er)
    if (Object.keys(er).length) { document.getElementById(`ct-${Object.keys(er)[0]}`)?.focus(); return }
    setStatus('sending') // Maquette : rien n'est envoyé.
    setTimeout(() => setStatus('sent'), 800)
  }

  const channels = [
    ...site.phones.map((p) => ({ icon: Phone, label: p.label, value: p.value, href: `tel:${p.href}`, cta: 'Appeler', variant: 'brand', tint: 'bg-brand-50 text-brand-600' })),
    { icon: MessageCircle, label: 'WhatsApp', value: site.whatsapp, href: `https://wa.me/${site.whatsappHref}`, cta: 'Écrire sur WhatsApp', variant: 'whatsapp', tint: 'bg-leaf-50 text-leaf-600' },
    { icon: Mail, label: 'E-mail', value: site.email, href: `mailto:${site.email}`, cta: 'Envoyer un e-mail', variant: 'outline', tint: 'bg-coral-50 text-coral-600' },
  ]

  return (
    <>
      <PageHero eyebrow="Contact" title="Contactez-nous"
        text="Une question, une visite, une inscription ? Appelez-nous, écrivez-nous ou passez nous voir."
        crumbs={[{ label: 'Contact' }]} />

      <section className="container-x pt-10 sm:pt-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: I, label, value, href, cta, variant, tint }) => (
            <div key={label} className="card flex flex-col p-5">
              <div className="flex items-center justify-between">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tint}`}><I className="h-6 w-6" /></span>
                <CopyButton text={value} />
              </div>
              <p className="mt-4 text-sm text-ink-500">{label}</p>
              <p className="tabular mt-0.5 flex-1 select-all break-words font-bold text-brand-950">{value}</p>
              <Button href={href} variant={variant} size="sm" className="mt-4 !min-h-[46px] w-full">{cta}</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="section !pt-12">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0">
            {status === 'sent' ? (
              <div className="card animate-fadeUp p-8 text-center sm:p-12" role="status">
                <CheckCircle2 className="mx-auto h-14 w-14 text-leaf-500" />
                <h2 className="mt-5 text-3xl">Message envoyé</h2>
                <p className="mx-auto mt-3 max-w-md text-ink-600">Merci {v.name.split(' ')[0]}, le secrétariat vous répond sous 24 heures ouvrées.</p>
                <Button className="mt-6" variant="outline" onClick={() => { setV(EMPTY); setStatus('idle') }}>Envoyer un autre message</Button>
                <p className="mt-6 text-sm text-ink-400">Maquette : aucune donnée n’a été transmise.</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="card p-6 sm:p-8">
                <h2 className="text-3xl">Envoyer un message</h2>
                <p className="mt-2 text-ink-500">Pour inscrire votre enfant, utilisez plutôt le <Link to="/admissions" className="font-bold text-brand-700 underline-offset-4 hover:underline">formulaire de pré-inscription</Link>.</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <FormField id="ct-name" label="Nom et prénom" required error={errors.name}>
                    <input id="ct-name" autoComplete="name" value={v.name} onChange={set('name')} className={`field ${errors.name ? 'field-error' : ''}`} />
                  </FormField>
                  <FormField id="ct-subject" label="Objet">
                    <select id="ct-subject" value={v.subject} onChange={set('subject')} className="field">{SUBJECTS.map((s) => <option key={s}>{s}</option>)}</select>
                  </FormField>
                  <FormField id="ct-phone" label="Téléphone" error={errors.phone}>
                    <input id="ct-phone" type="tel" inputMode="tel" autoComplete="tel" value={v.phone} onChange={set('phone')} className={`field ${errors.phone ? 'field-error' : ''}`} />
                  </FormField>
                  <FormField id="ct-email" label="E-mail" error={errors.email}>
                    <input id="ct-email" type="email" autoComplete="email" value={v.email} onChange={set('email')} className={`field ${errors.email ? 'field-error' : ''}`} />
                  </FormField>
                  <FormField id="ct-message" label="Message" required error={errors.message} className="sm:col-span-2">
                    <textarea id="ct-message" rows={5} value={v.message} onChange={set('message')} className={`field resize-y ${errors.message ? 'field-error' : ''}`} />
                  </FormField>
                </div>
                <Button type="submit" size="lg" variant="brand" className="mt-6 w-full sm:w-auto" disabled={status === 'sending'}>
                  {status === 'sending' ? <><Loader2 className="h-5 w-5 animate-spin" /> Envoi…</> : <><Send className="h-5 w-5" /> Envoyer le message</>}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="card overflow-hidden">
              {/* ✏️ CARTE : remplacer MapPlaceholder par un iframe Google Maps sur le site final */}
              <div className="relative aspect-[16/10]">
                <MapPlaceholder className="h-full w-full" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink-500">Emplacement de la carte</span>
              </div>
              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-coral-500" />
                  <p><span className="font-bold text-brand-950">{site.address.street}</span><br /><span className="text-ink-500">{site.address.district}, {site.address.city}, {site.address.country}</span></p>
                </div>
                <Button href={site.mapUrl} variant="outline" size="sm" className="!min-h-[46px] shrink-0"><Navigation className="h-4 w-4" /> Itinéraire</Button>
              </div>
            </div>
            <HoursCard />
            <div className="rounded-xl2 bg-sun-50 p-6 ring-1 ring-sun-200">
              <h3 className="text-lg">Horaires des cours</h3>
              <dl className="mt-3 space-y-1.5">
                {classHours.map((h) => <div key={h.label} className="flex justify-between gap-4"><dt className="text-ink-600">{h.label}</dt><dd className="tabular font-bold text-brand-950">{h.value}</dd></div>)}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
