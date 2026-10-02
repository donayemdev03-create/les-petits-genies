import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import Photo from '../components/ui/Photo'
import { NewsCard, categoryClass } from '../components/ui/Cards'
import SectionHeading from '../components/ui/SectionHeading'
import Scene from '../components/illustrations/Scene'
import { PageHero } from '../components/sections/Sections'
import NotFound from './NotFound'
import { getArticle, news, formatDate } from '../data/news'

export default function ArticleDetail() {
  const { slug } = useParams()
  const a = getArticle(slug)
  if (!a) return <NotFound />
  const others = news.filter((n) => n.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero title={a.title} crumbs={[{ label: 'Actualités', to: '/actualites' }, { label: a.category }]}>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
          <span className={`rounded-full px-3 py-1 font-bold ${categoryClass(a.category)}`}>{a.category}</span>
          <span className="inline-flex items-center gap-1.5 text-ink-500"><CalendarDays className="h-4 w-4" /> {formatDate(a.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
      </PageHero>
      <section className="section !pt-10">
        <article className="container-x max-w-3xl">
          <Photo src={a.image} alt="" className="aspect-[16/9] rounded-blob shadow-lift" fallback={<Scene scene={a.scene} className="h-full w-full" />} />
          <p className="mt-8 text-xl font-semibold leading-relaxed text-brand-950">{a.excerpt}</p>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-700">
            {a.body.map((p) => <p key={p}>{p}</p>)}
          </div>
          <Link to="/actualites" className="mt-10 inline-flex min-h-[44px] items-center gap-2 font-bold text-brand-700"><ArrowLeft className="h-4 w-4" /> Toutes les actualités</Link>
        </article>
      </section>
      <section className="section bg-cloud">
        <div className="container-x">
          <SectionHeading eyebrow="À lire aussi" title="Autres actualités" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{others.map((n) => <NewsCard key={n.slug} article={n} />)}</div>
        </div>
      </section>
    </>
  )
}
