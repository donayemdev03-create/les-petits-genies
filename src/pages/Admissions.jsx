import { useState } from 'react'
import { Send, CheckCircle2, Loader2, FileText, Wallet, CalendarDays, ShieldCheck, ArrowDown } from 'lucide-react'
import Button from '../components/ui/Button'
import FormField from '../components/ui/FormField'
import SectionHeading from '../components/ui/SectionHeading'
import Icon, { tint } from '../components/ui/Icon'
import { Accordion } from '../components/ui/Cards'
import { PageHero, CheckList } from '../components/sections/Sections'
import { site, phone } from '../config/site'
import { admissionSteps, documents, ageRules, keyDates, faq } from '../data/content'
import { tuition, installments, services, paymentMethods, fcfa } from '../data/fees'
import { maternelleLevels, primaireLevels } from '../data/levels'
import { formatDate } from '../data/news'

const CLASSES = {
  maternelle: maternelleLevels.map((l) => l.name),
  primaire: primaireLevels.map((l) => l.code),
}
const EMPTY = { parent: '', phone: '', email: '', child: '', birth: '', cycle: '', level: '', school: '', needs: '', message: '', consent: false }
const svcColors = ['coral', 'brand', 'sun', 'leaf']

function validate(v) {
  const e = {}
  if (v.parent.trim().length < 3) e.parent = 'Indiquez votre nom et votre prénom.'
  if (!/^\+?[\d\s.-]{8,}$/.test(v.phone.trim())) e.phone = 'Numéro invalide. Exemple : 6 99 00 00 00'
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Adresse e-mail invalide.'
  if (v.child.trim().length < 2) e.child = 'Indiquez le nom et le prénom de l’enfant.'
  if (!v.birth) e.birth = 'Indiquez la date de naissance.'
  if (!v.cycle) e.cycle = 'Choisissez un cycle.'
  if (!v.level) e.level = 'Choisissez une classe.'
  if (!v.consent) e.consent = 'Votre accord est nécessaire pour traiter la demande.'
  return e
}

function PreRegistrationForm() {
  const [v, setV] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [ref, setRef] = useState('')

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setV((x) => ({ ...x, [k]: val, ...(k === 'cycle' ? { level: '' } : {}) }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }
  const cls = (k) => `field ${errors[k] ? 'field-error' : ''}`
  const aria = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `pi-${k}-error` : undefined })

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) {
      const el = document.getElementById(`pi-${Object.keys(errs)[0]}`)
      el?.focus(); el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    // Maquette : aucune donnée n'est envoyée. À connecter plus tard à une API / base de données.
    setStatus('sending')
    setTimeout(() => {
      setRef(`INS-${site.schoolYear.slice(2, 4)}${site.schoolYear.slice(7)}-${Math.floor(1000 + Math.random() * 9000)}`)
      setStatus('sent')
      document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 900)
  }

  if (status === 'sent') {
    return (
      <div className="card animate-fadeUp overflow-hidden" role="status" aria-live="polite">
        <div className="bg-leaf-50 p-8 text-center sm:p-10">
          <span className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-leaf-500 text-white">
            <span className="absolute inset-0 animate-pulseRing rounded-full bg-leaf-500/40" />
            <CheckCircle2 className="relative h-10 w-10" />
          </span>
          <h3 className="mt-6 text-3xl">Demande de pré-inscription envoyée</h3>
          <p className="mx-auto mt-3 max-w-md text-lg text-ink-600">Merci {v.parent.split(' ')[0]}. Le secrétariat vous rappelle au <strong className="tabular text-brand-950">{v.phone}</strong> sous 48 heures pour fixer un rendez-vous.</p>
          <p className="mt-4 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-bold text-leaf-700 ring-1 ring-leaf-100">Référence : <span className="tabular ml-1">{ref}</span></p>
        </div>
        <dl className="grid gap-px bg-slate-100 sm:grid-cols-2">
          {[
            ['Enfant', v.child],
            ['Date de naissance', formatDate(v.birth)],
            ['Cycle', v.cycle === 'maternelle' ? 'Maternelle' : 'Primaire'],
            ['Classe demandée', v.level],
          ].map(([k, val]) => (
            <div key={k} className="bg-white p-5"><dt className="text-sm text-ink-500">{k}</dt><dd className="mt-1 font-bold text-brand-950">{val}</dd></div>
          ))}
        </dl>
        <div className="flex flex-col gap-3 p-6 sm:flex-row sm:p-8">
          <Button onClick={() => { setV(EMPTY); setStatus('idle') }} variant="outline" size="lg">Inscrire un autre enfant</Button>
          <Button to="/" variant="brand" size="lg">Retour à l’accueil</Button>
        </div>
        <p className="px-6 pb-6 text-sm text-ink-400 sm:px-8">Maquette : aucune donnée n’a été transmise.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="card p-6 sm:p-8 lg:p-10">
      <fieldset>
        <legend className="flex items-center gap-3 font-display text-xl font-semibold text-brand-950"><span className="grid h-9 w-9 place-items-center rounded-full bg-sun-400 text-base">1</span> Le parent ou tuteur</legend>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FormField id="pi-parent" label="Nom et prénom" required error={errors.parent} className="sm:col-span-2">
            <input id="pi-parent" autoComplete="name" value={v.parent} onChange={set('parent')} className={cls('parent')} placeholder="Ex. Mireille Tchamba" {...aria('parent')} />
          </FormField>
          <FormField id="pi-phone" label="Téléphone (WhatsApp de préférence)" required error={errors.phone}>
            <input id="pi-phone" type="tel" inputMode="tel" autoComplete="tel" value={v.phone} onChange={set('phone')} className={cls('phone')} placeholder="+237 6 99 00 00 00" {...aria('phone')} />
          </FormField>
          <FormField id="pi-email" label="Adresse e-mail" error={errors.email} hint="Facultatif">
            <input id="pi-email" type="email" inputMode="email" autoComplete="email" value={v.email} onChange={set('email')} className={cls('email')} placeholder="vous@exemple.com" {...aria('email')} />
          </FormField>
        </div>
      </fieldset>

      <fieldset className="mt-10 border-t border-slate-100 pt-8">
        <legend className="sr-only">L’enfant</legend>
        <p className="flex items-center gap-3 font-display text-xl font-semibold text-brand-950"><span className="grid h-9 w-9 place-items-center rounded-full bg-sun-400 text-base">2</span> L’enfant</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FormField id="pi-child" label="Nom et prénom de l’enfant" required error={errors.child}>
            <input id="pi-child" value={v.child} onChange={set('child')} className={cls('child')} placeholder="Ex. Léa Tchamba" {...aria('child')} />
          </FormField>
          <FormField id="pi-birth" label="Date de naissance" required error={errors.birth}>
            <input id="pi-birth" type="date" max={new Date().toISOString().slice(0, 10)} value={v.birth} onChange={set('birth')} className={cls('birth')} {...aria('birth')} />
          </FormField>
          <div className="sm:col-span-2">
            <p id="pi-cycle-label" className="field-label">Cycle souhaité <span className="text-coral-600" aria-hidden="true">*</span></p>
            <div id="pi-cycle" tabIndex={-1} role="radiogroup" aria-labelledby="pi-cycle-label" className="grid grid-cols-2 gap-3">
              {[['maternelle', 'Maternelle', '3 à 5 ans'], ['primaire', 'Primaire', '6 à 11 ans']].map(([val, label, age]) => (
                <button type="button" key={val} role="radio" aria-checked={v.cycle === val}
                  onClick={() => { setV((x) => ({ ...x, cycle: val, level: '' })); setErrors((er) => ({ ...er, cycle: undefined })) }}
                  className={`min-h-[64px] rounded-2xl border-2 px-4 py-3 text-left transition ${v.cycle === val ? 'border-brand-600 bg-brand-50' : 'border-slate-200 bg-white hover:border-brand-300'}`}>
                  <span className="block font-display text-lg font-semibold text-brand-950">{label}</span>
                  <span className="text-sm text-ink-500">{age}</span>
                </button>
              ))}
            </div>
            {errors.cycle && <p className="mt-1.5 text-sm font-medium text-coral-600" role="alert">{errors.cycle}</p>}
          </div>
          <FormField id="pi-level" label="Classe demandée" required error={errors.level} hint={!v.cycle ? 'Choisissez d’abord un cycle.' : undefined}>
            <select id="pi-level" value={v.level} onChange={set('level')} disabled={!v.cycle} className={`${cls('level')} disabled:bg-slate-50`} {...aria('level')}>
              <option value="">Choisir une classe…</option>
              {(CLASSES[v.cycle] || []).map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </FormField>
          <FormField id="pi-school" label="École fréquentée actuellement" hint="Facultatif">
            <input id="pi-school" value={v.school} onChange={set('school')} className="field" />
          </FormField>
          <FormField id="pi-needs" label="Besoins particuliers ou allergies alimentaires" hint="Facultatif — information confidentielle" className="sm:col-span-2">
            <input id="pi-needs" value={v.needs} onChange={set('needs')} className="field" placeholder="Ex. allergie à l’arachide" />
          </FormField>
          <FormField id="pi-message" label="Message ou question" className="sm:col-span-2">
            <textarea id="pi-message" rows={4} value={v.message} onChange={set('message')} className="field resize-y" />
          </FormField>
        </div>
      </fieldset>

      <label htmlFor="pi-consent" className="mt-8 flex cursor-pointer items-start gap-3 rounded-2xl bg-cloud p-4">
        <input id="pi-consent" type="checkbox" checked={v.consent} onChange={set('consent')} className="mt-1 h-5 w-5 shrink-0 accent-brand-600" />
        <span className="text-[0.95rem] text-ink-600">J’accepte que {site.shortName} utilise ces informations pour me recontacter au sujet de cette demande d’inscription.</span>
      </label>
      {errors.consent && <p className="mt-1.5 text-sm font-medium text-coral-600" role="alert">{errors.consent}</p>}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'sending'}>
          {status === 'sending' ? <><Loader2 className="h-5 w-5 animate-spin" /> Envoi en cours…</> : <><Send className="h-5 w-5" /> Envoyer la demande</>}
        </Button>
        <p className="text-sm text-ink-400"><span className="text-coral-600">*</span> Champs obligatoires</p>
      </div>
    </form>
  )
}

export default function Admissions() {
  const goForm = () => document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return (
    <>
      <PageHero eyebrow={`Inscriptions ${site.schoolYear}`} title="Inscrire votre enfant, étape par étape"
        text={`${site.registration.note} Date limite des inscriptions en cours d’année : ${site.registration.deadlineLabel}.`}
        crumbs={[{ label: 'Admissions' }]}>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button onClick={goForm} size="lg"><ArrowDown className="h-5 w-5" /> Remplir la pré-inscription</Button>
          <Button href={`tel:${phone.href}`} variant="outline" size="lg">Appeler le secrétariat</Button>
        </div>
      </PageHero>

      {/* Étapes */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Comment ça marche ?" title="Les 5 étapes de l’inscription" />
          <ol className="grid gap-4 md:grid-cols-5">
            {admissionSteps.map((s, i) => (
              <li key={s.title} className="relative rounded-xl2 border-2 border-slate-100 bg-white p-5">
                <span className={`grid h-11 w-11 place-items-center rounded-full font-display text-lg font-semibold ${i === admissionSteps.length - 1 ? 'bg-leaf-500 text-white' : 'bg-sun-400 text-brand-950'}`}>{i + 1}</span>
                <h3 className="mt-4 text-lg leading-snug">{s.title}</h3>
                <p className="mt-1 text-[0.95rem] text-ink-500">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Conditions + pièces */}
      <section className="section bg-cloud">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h2 className="text-2xl">Âge requis par niveau</h2>
            <dl className="mt-5 divide-y divide-slate-100">
              {ageRules.map((r) => (
                <div key={r.level} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-6">
                  <dt className="font-bold text-brand-950">{r.level}</dt>
                  <dd className="text-ink-600 sm:text-right">{r.rule}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card p-6 sm:p-8">
            <h2 className="flex items-center gap-2 text-2xl"><FileText className="h-6 w-6 text-coral-500" /> Pièces à fournir</h2>
            <div className="mt-5"><CheckList items={documents} /></div>
          </div>
        </div>
      </section>

      {/* Frais */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Frais de scolarité" title={`Tarifs ${site.schoolYear}`} text="Montants d’exemple, en francs CFA. La scolarité se règle en trois tranches." />
          <div className="overflow-x-auto rounded-xl2 border border-slate-200 bg-white shadow-card">
            <table className="w-full min-w-[560px] text-left">
              <caption className="sr-only">Frais d’inscription et de scolarité par niveau</caption>
              <thead className="bg-brand-950 text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-display font-medium">Niveau</th>
                  <th scope="col" className="px-5 py-4 text-right font-display font-medium">Inscription</th>
                  <th scope="col" className="px-5 py-4 text-right font-display font-medium">Scolarité annuelle</th>
                </tr>
              </thead>
              <tbody className="tabular divide-y divide-slate-100">
                {tuition.map((t, i) => (
                  <tr key={t.level} className={i === 3 ? 'border-t-4 border-cloud' : ''}>
                    <th scope="row" className="px-5 py-4 font-bold text-brand-950">
                      <span className={`mr-2 inline-block rounded-full px-2 py-0.5 text-xs font-extrabold ${t.cycle === 'Maternelle' ? 'bg-coral-50 text-coral-700' : 'bg-brand-50 text-brand-700'}`}>{t.cycle}</span>
                      {t.level}
                    </th>
                    <td className="whitespace-nowrap px-5 py-4 text-right">{fcfa(t.registration)}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-right font-bold text-brand-950">{fcfa(t.yearly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {installments.map((p) => (
              <div key={p.label} className="rounded-2xl bg-sun-50 p-5 ring-1 ring-sun-200">
                <p className="text-sm font-bold text-ink-600">{p.label}</p>
                <p className="tabular font-display text-3xl font-semibold text-brand-950">{p.share} %</p>
                <p className="text-sm text-ink-500">{p.due}</p>
              </div>
            ))}
          </div>

          <h3 className="mb-5 mt-14 text-2xl">Services complémentaires</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={s.name} className="card flex flex-col p-5">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tint[svcColors[i]]}`}><Icon name={s.icon} className="h-6 w-6" /></span>
                <h4 className="mt-4 font-display text-lg font-semibold text-brand-950">{s.name}</h4>
                <p className="flex-1 text-[0.95rem] text-ink-500">{s.text}</p>
                <p className="tabular mt-3 font-bold text-brand-950">{fcfa(s.price)} <span className="font-normal text-ink-500">{s.unit}</span></p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl2 border-2 border-slate-100 p-6">
              <h3 className="flex items-center gap-2 text-xl"><Wallet className="h-6 w-6 text-brand-600" /> Moyens de paiement</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {paymentMethods.map((m) => <span key={m} className="rounded-full bg-cloud px-4 py-2 font-bold text-brand-950 ring-1 ring-slate-200">{m}</span>)}
              </div>
              <p className="mt-4 text-sm text-ink-500">Un reçu est remis pour chaque paiement.</p>
            </div>
            <div className="rounded-xl2 border-2 border-slate-100 p-6">
              <h3 className="flex items-center gap-2 text-xl"><CalendarDays className="h-6 w-6 text-coral-500" /> Dates importantes</h3>
              <ul className="mt-4 space-y-2.5">
                {keyDates.map((d) => (
                  <li key={d.label} className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-4">
                    <span className="font-bold text-brand-950">{d.label}</span>
                    <span className="tabular text-ink-500">{formatDate(d.date)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cloud">
        <div className="container-x grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Questions fréquentes" title="Les parents nous demandent souvent…"
            text={`Une autre question ? Appelez le secrétariat au ${phone.value}.`} />
          <Accordion items={faq} />
        </div>
      </section>

      {/* Formulaire */}
      <section id="formulaire" className="section scroll-mt-24">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            <SectionHeading eyebrow="Pré-inscription" title="Formulaire de pré-inscription" text="Remplissez ce formulaire en 3 minutes. Le secrétariat vous rappelle sous 48 heures." />
            <PreRegistrationForm />
          </div>
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start lg:pt-48">
            <div className="rounded-xl2 bg-brand-950 p-6 text-brand-100">
              <p className="font-display text-xl font-semibold text-white">Besoin d’aide ?</p>
              <p className="mt-2">Le secrétariat vous accompagne du lundi au samedi.</p>
              <p className="tabular mt-3 select-all font-display text-2xl font-semibold text-sun-300">{phone.value}</p>
              <Button href={`tel:${phone.href}`} className="mt-4 w-full">Appeler</Button>
              <Button href={`https://wa.me/${site.whatsappHref}`} variant="whatsapp" className="mt-2 w-full">Écrire sur WhatsApp</Button>
            </div>
            <p className="flex gap-2 px-1 text-sm text-ink-400"><ShieldCheck className="h-4 w-4 shrink-0" /> Vos informations restent confidentielles et ne servent qu’à traiter votre demande.</p>
          </aside>
        </div>
      </section>
    </>
  )
}
