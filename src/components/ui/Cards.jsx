/**
 * Cartes réutilisables : actualité, membre de l'équipe, accordéon (FAQ).
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, CalendarDays } from 'lucide-react'
import Photo from './Photo'
import Scene from '../illustrations/Scene'
import Portrait from '../illustrations/Portrait'
import { formatDate } from '../../data/news'

const catColor = {
  'Vie de l’école': 'bg-brand-50 text-brand-700',
  'Événements': 'bg-coral-50 text-coral-700',
  'Annonces aux parents': 'bg-sun-100 text-[#8A6100]',
}
export const categoryClass = (c) => catColor[c] || 'bg-slate-100 text-ink-600'

export function NewsCard({ article }) {
  return (
    <article className="card group relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Photo src={article.image} alt="" className="aspect-[16/10]" fallback={<Scene scene={article.scene} className="h-full w-full transition duration-500 group-hover:scale-105" />} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className={`rounded-full px-3 py-1 font-bold ${categoryClass(article.category)}`}>{article.category}</span>
          <span className="inline-flex items-center gap-1 text-ink-500"><CalendarDays className="h-4 w-4" />{formatDate(article.date)}</span>
        </div>
        <h3 className="mt-3 text-xl leading-snug">{article.title}</h3>
        <p className="mt-2 flex-1 text-ink-500">{article.excerpt}</p>
        <Link to={`/actualites/${article.slug}`} className="mt-5 inline-flex min-h-[44px] items-center gap-2 font-bold text-brand-700 after:absolute after:inset-0 after:content-['']">
          Lire la suite <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export function TeamCard({ member, index = 0 }) {
  return (
    <figure className="card overflow-hidden">
      <Photo src={member.photo} alt={`Portrait de ${member.name}`} className="aspect-[4/5]"
        fallback={<Portrait tone={member.tone} gender={member.gender} seed={index} className="h-full w-full" />} />
      <figcaption className="p-4">
        <p className="font-display text-[1.05rem] font-semibold leading-snug text-brand-950">{member.name}</p>
        <p className="text-sm text-ink-500">{member.role}</p>
      </figcaption>
    </figure>
  )
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-slate-200 rounded-xl2 border border-slate-200 bg-white">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.q}>
            <h3 className="!font-sans">
              <button
                id={`faq-btn-${i}`}
                className="flex min-h-[60px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-[1.02rem] font-bold text-brand-950 hover:bg-cloud"
                aria-expanded={isOpen} aria-controls={`faq-panel-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                {it.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-brand-600 transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </h3>
            <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-5 pb-5 text-ink-600">
              {it.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
