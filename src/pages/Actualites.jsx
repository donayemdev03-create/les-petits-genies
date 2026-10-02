import { useState } from 'react'
import { NewsCard } from '../components/ui/Cards'
import { PageHero, EventsList, CtaBand } from '../components/sections/Sections'
import { news, categories } from '../data/news'

export default function Actualites() {
  const [cat, setCat] = useState('Toutes')
  const list = [...news].sort((a, b) => b.date.localeCompare(a.date)).filter((n) => cat === 'Toutes' || n.category === cat)
  const chip = (active) => `min-h-[44px] shrink-0 rounded-full px-4 text-[0.95rem] font-bold transition ${active ? 'bg-brand-950 text-white' : 'bg-white text-ink-600 ring-1 ring-slate-200 hover:ring-brand-300'}`

  return (
    <>
      <PageHero accent="coral" eyebrow="Actualités" title="Les nouvelles de l’école"
        text="Événements, annonces aux parents et moments forts de la vie des Petits Génies."
        crumbs={[{ label: 'Actualités' }]} />
      <section className="section !pt-10">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filtrer par catégorie">
              {['Toutes', ...categories].map((c) => (
                <button key={c} className={chip(cat === c)} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {list.map((n) => <NewsCard key={n.slug} article={n} />)}
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="mb-4 text-2xl">Calendrier</h2>
            <EventsList />
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
