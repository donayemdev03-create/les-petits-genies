import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Wallet, Phone, Baby, BookOpen, CalendarCheck, Award, Sparkles } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Icon, { tint } from '../components/ui/Icon'
import Photo from '../components/ui/Photo'
import { NewsCard } from '../components/ui/Cards'
import SchoolScene from '../components/illustrations/SchoolScene'
import Scene from '../components/illustrations/Scene'
import { StatsBand, DayTimeline, Testimonials, QuickContact, CtaBand, EventsList } from '../components/sections/Sections'
import { site, phone } from '../config/site'
import { images } from '../config/images'
import { whyUs } from '../data/content'
import { daySchedule, maternelleLevels, primaireLevels } from '../data/levels'
import { news } from '../data/news'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cloud to-white">
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-sun-200/50 blur-3xl" />
      <div className="container-x relative grid grid-cols-1 items-center gap-12 pb-14 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-20 lg:pt-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-brand-700 shadow-sm ring-1 ring-brand-100">
            <Sparkles className="h-4 w-4 text-sun-500" /> {site.kind} · {site.address.city}
          </p>
          {/* ✏️ SLOGAN */}
          <h1 className="mt-6 text-[2.6rem] leading-[1.04] sm:text-[3.6rem] lg:text-[4.1rem]">
            Grandir, apprendre<br />et s’épanouir <span className="relative whitespace-nowrap text-brand-600">
              en confiance
              <svg viewBox="0 0 220 14" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none" aria-hidden="true"><path d="M2 10C60 2 150 2 218 8" stroke="#FFC93C" strokeWidth="6" fill="none" strokeLinecap="round" /></svg>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            De la petite section au CM2, {site.shortName} accueille les enfants de 3 à 11 ans dans des classes de 20 élèves au maximum, avec l’anglais dès la maternelle.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/a-propos" size="lg">Découvrir l’école <ArrowRight className="h-5 w-5" /></Button>
            <Button to="/contact" variant="outline" size="lg"><CalendarCheck className="h-5 w-5" /> Demander une visite</Button>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-[0.95rem] font-bold text-brand-950">
            <span className="inline-flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-full bg-leaf-50 text-leaf-600"><Award className="h-4 w-4" /></span>100 % au CEP 2026</span>
            <span className="inline-flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-full bg-coral-50 text-coral-600"><Baby className="h-4 w-4" /></span>Dès 3 ans</span>
            <span className="inline-flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-brand-600"><BookOpen className="h-4 w-4" /></span>Bilingue FR / EN</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* ✏️ IMAGE D'ACCUEIL : définir images.hero dans src/config/images.js */}
          <Photo src={images.hero} alt={`Élèves de ${site.shortName}`}
            className="aspect-[4/3.3] w-full rounded-[2.5rem] rounded-tr-[6rem] shadow-lift ring-4 ring-white"
            fallback={<SchoolScene className="h-full w-full" label={site.shortName} />} />
          <div className="absolute -bottom-6 left-3 right-3 flex items-center gap-3 rounded-3xl bg-white p-4 shadow-lift ring-1 ring-slate-100 sm:-left-6 sm:right-auto sm:w-80">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sun-400 text-brand-950"><GraduationCap className="h-6 w-6" /></span>
            <div className="min-w-0">
              <p className="font-display font-semibold leading-tight text-brand-950">Inscriptions {site.schoolYear}</p>
              <p className="text-sm text-ink-500">Ouvertes jusqu’au {site.registration.deadlineLabel}</p>
            </div>
          </div>
          <div className="absolute -right-2 top-8 hidden animate-float items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lift ring-1 ring-slate-100 sm:flex">
            <span className="font-display text-2xl font-semibold text-coral-500">20</span>
            <span className="text-sm font-bold leading-tight text-brand-950">élèves max.<br /><span className="font-normal text-ink-500">par classe</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuickAccess() {
  const tiles = [
    { to: '/admissions', icon: GraduationCap, title: 'Inscriptions', text: 'Pré-inscription en ligne', cls: 'bg-sun-400 text-brand-950 hover:bg-sun-300 border-sun-400', iconCls: 'bg-white/60' },
    { to: '/admissions', icon: Wallet, title: 'Frais de scolarité', text: 'Tarifs et paiement', cls: 'bg-white hover:border-brand-200', iconCls: tint.brand },
    { to: '/maternelle', icon: Baby, title: 'Maternelle', text: 'PS · MS · GS', cls: 'bg-white hover:border-coral-100', iconCls: tint.coral },
    { to: '/primaire', icon: BookOpen, title: 'Primaire', text: 'SIL au CM2', cls: 'bg-white hover:border-leaf-100', iconCls: tint.leaf },
  ]
  return (
    <section aria-label="Accès rapide" className="container-x relative z-10 pt-10 lg:pt-4">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {tiles.map(({ to, icon: I, title, text, cls, iconCls }) => (
          <Link key={title} to={to} className={`flex min-h-[92px] flex-col gap-3 rounded-3xl border-2 border-slate-100 p-4 shadow-card transition hover:-translate-y-0.5 sm:flex-row sm:items-center sm:p-5 ${cls}`}>
            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${iconCls}`}><I className="h-5 w-5" /></span>
            <span className="min-w-0">
              <span className="block font-display text-[1.05rem] font-semibold leading-snug">{title}</span>
              <span className="block text-sm opacity-75">{text}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

function Cycles() {
  const cards = [
    { to: '/maternelle', scene: 'art', title: 'Maternelle', age: '3 à 5 ans', text: 'Apprendre en jouant : langage, graphisme, nombres, arts et motricité, avec une enseignante et une assistante par classe.', chips: maternelleLevels.map((l) => l.name), bg: 'bg-coral-50', chip: 'bg-white text-coral-700', btn: 'coral' },
    { to: '/primaire', scene: 'classe', title: 'Primaire', age: '6 à 11 ans', text: 'Des bases solides en français, mathématiques et anglais, et une préparation sereine au CEP et à l’entrée en 6e.', chips: primaireLevels.map((l) => l.code), bg: 'bg-brand-50', chip: 'bg-white text-brand-700', btn: 'brand' },
  ]
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Nos cycles" title="Deux cycles, un même projet éducatif" text="Votre enfant peut faire toute sa scolarité chez nous, de la petite section jusqu’au CM2." />
        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((c) => (
            <article key={c.title} className={`grid overflow-hidden rounded-blob ${c.bg} sm:grid-cols-[1fr_1.1fr]`}>
              <Scene scene={c.scene} className="h-56 w-full sm:h-full" />
              <div className="flex flex-col p-7">
                <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-ink-500">{c.age}</p>
                <h3 className="mt-1 text-3xl">{c.title}</h3>
                <p className="mt-3 flex-1 text-ink-600">{c.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">{c.chips.map((x) => <span key={x} className={`rounded-full px-3 py-1 text-sm font-bold ${c.chip}`}>{x}</span>)}</div>
                <Button to={c.to} variant={c.btn} className="mt-6 self-start">Découvrir la {c.title.toLowerCase()} <ArrowRight className="h-4 w-4" /></Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="section bg-cloud">
      <div className="container-x">
        <SectionHeading eyebrow="Pourquoi nous choisir ?" title="Ce qui rassure les parents" align="center" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <div key={w.title} className="card p-6 transition hover:-translate-y-1 hover:shadow-lift">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${tint[w.color]}`}><Icon name={w.icon} className="h-7 w-7" /></span>
              <h3 className="mt-5 text-xl">{w.title}</h3>
              <p className="mt-2 text-ink-500">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Numbers() {
  return (
    <section className="section relative overflow-hidden bg-brand-950">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-brand-600/40 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading light eyebrow="Chiffres clés" title="Des résultats qui parlent" text="Données d’exemple, à remplacer par les chiffres réels de l’école." />
        <StatsBand />
      </div>
    </section>
  )
}

function DayType() {
  const [tab, setTab] = useState('maternelle')
  const tabCls = (t) => `min-h-[46px] rounded-full px-5 font-bold transition ${tab === t ? 'bg-brand-600 text-white shadow' : 'text-ink-600 hover:text-brand-950'}`
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Une journée à l’école" title="Comment se passe la journée de votre enfant ?"
          action={
            <div role="tablist" aria-label="Choisir le cycle" className="inline-flex rounded-full bg-cloud p-1 ring-1 ring-slate-200">
              <button role="tab" aria-selected={tab === 'maternelle'} className={tabCls('maternelle')} onClick={() => setTab('maternelle')}>Maternelle</button>
              <button role="tab" aria-selected={tab === 'primaire'} className={tabCls('primaire')} onClick={() => setTab('primaire')}>Primaire</button>
            </div>
          } />
        <div className="card p-6 sm:p-8" role="tabpanel">
          <DayTimeline items={daySchedule[tab]} tone={tab === 'maternelle' ? 'coral' : 'brand'} />
        </div>
      </div>
    </section>
  )
}

function NewsPreview() {
  return (
    <section className="section bg-cloud">
      <div className="container-x">
        <SectionHeading eyebrow="Actualités" title="La vie de l’école"
          action={<Button to="/actualites" variant="outline">Toutes les actualités <ArrowRight className="h-4 w-4" /></Button>} />
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {news.slice(0, 2).map((n) => <NewsCard key={n.slug} article={n} />)}
          </div>
          <div>
            <h3 className="mb-4 text-xl">Prochains événements</h3>
            <EventsList limit={4} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Cycles />
      <WhyUs />
      <Numbers />
      <DayType />
      <NewsPreview />
      <Testimonials />
      <CtaBand />
      <section className="section !pt-12">
        <div className="container-x">
          <SectionHeading eyebrow="Contact rapide" title="Une question ? Parlons-en"
            text={`Le secrétariat vous répond au ${phone.value}, du lundi au samedi.`}
            action={<Button to="/contact" variant="outline">Page contact <ArrowRight className="h-4 w-4" /></Button>} />
          <QuickContact />
        </div>
      </section>
    </>
  )
}
