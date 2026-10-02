import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, Bus, Clock, Shirt, Info } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Icon, { tint } from '../components/ui/Icon'
import Photo from '../components/ui/Photo'
import Scene from '../components/illustrations/Scene'
import { PageHero, CheckList, CtaBand } from '../components/sections/Sections'
import { gallery } from '../config/images'
import { classHours } from '../config/site'
import { clubs, yearEvents, weeklyMenu, safety, uniform } from '../data/content'
import { services, fcfa } from '../data/fees'

const colors = ['coral', 'brand', 'sun', 'leaf']

function Lightbox({ index, onClose, onMove }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose, onMove])
  const item = gallery[index]
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-950/90 p-4" role="dialog" aria-modal="true" aria-label={item.caption}>
      <button onClick={onClose} className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Fermer la galerie"><X className="h-6 w-6" /></button>
      <button onClick={() => onMove(-1)} className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6" aria-label="Photo précédente"><ChevronLeft className="h-7 w-7" /></button>
      <button onClick={() => onMove(1)} className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6" aria-label="Photo suivante"><ChevronRight className="h-7 w-7" /></button>
      <figure className="w-full max-w-3xl animate-fadeUp">
        <Photo src={item.src} alt={item.caption} className="aspect-[4/3] w-full rounded-3xl" imgClassName="h-full w-full object-contain" fallback={<Scene scene={item.scene} className="h-full w-full" />} />
        <figcaption className="mt-4 text-center text-lg font-bold text-white">{item.caption} <span className="tabular font-normal text-brand-200">· {index + 1} / {gallery.length}</span></figcaption>
      </figure>
    </div>
  )
}

export default function VieScolaire() {
  const [lb, setLb] = useState(-1)
  const [docNote, setDocNote] = useState(false)
  const move = (d) => setLb((i) => (i + d + gallery.length) % gallery.length)
  const canteen = services.find((s) => s.name === 'Cantine')
  const bus = services.find((s) => s.name.startsWith('Transport'))
  const daycare = services.find((s) => s.name === 'Garderie')

  return (
    <>
      <PageHero accent="leaf" eyebrow="Vie scolaire" title="Apprendre, jouer, créer et grandir ensemble"
        text="Activités, fêtes, cantine, transport et sécurité : tout ce qui fait le quotidien de nos élèves."
        crumbs={[{ label: 'Vie scolaire' }]} />

      {/* Clubs */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Activités parascolaires" title="Des clubs pour tous les goûts" text="Le mercredi après-midi et en fin de journée, sur inscription." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((c, i) => (
              <div key={c.name} className="card flex items-center gap-4 p-5">
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${tint[colors[i % 4]]}`}><Icon name={c.icon} className="h-7 w-7" /></span>
                <div>
                  <h3 className="text-lg">{c.name}</h3>
                  <p className="text-[0.95rem] text-ink-500">{c.day} · {c.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Événements de l'année */}
      <section className="section bg-cloud">
        <div className="container-x">
          <SectionHeading eyebrow="Temps forts" title="Les événements de l’année" />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {yearEvents.map((e, i) => (
              <li key={e.name} className="rounded-2xl bg-white p-5 shadow-card">
                <p className={`text-sm font-extrabold uppercase tracking-[0.12em] ${['text-coral-600', 'text-brand-600', 'text-[#8A6100]', 'text-leaf-600'][i % 4]}`}>{e.month}</p>
                <p className="mt-1 font-display text-lg font-semibold text-brand-950">{e.name}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Galerie */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Galerie" title="En images" text="Illustrations d’attente, à remplacer par de vraies photos (avec l’accord écrit des parents)." />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <button key={g.caption} onClick={() => setLb(i)} className={`group relative overflow-hidden rounded-3xl text-left ${i === 0 || i === 5 ? 'lg:col-span-2' : ''}`} aria-label={`Agrandir : ${g.caption}`}>
                <Photo src={g.src} alt={g.caption} className="aspect-[4/3] w-full lg:aspect-auto lg:h-[230px]"
                  fallback={<Scene scene={g.scene} className="h-full w-full transition duration-500 group-hover:scale-105" />} />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-brand-950/80 to-transparent p-3 pt-10 text-sm font-bold text-white">
                  {g.caption} <ZoomIn className="h-4 w-4 shrink-0" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cantine */}
      <section className="section bg-sun-50">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Cantine" title="Le menu de la semaine" text={`Repas cuisinés sur place, avec une nutritionniste. ${fcfa(canteen.price)} ${canteen.unit}.`} />
            <Photo src={null} className="hidden aspect-[4/3] rounded-blob lg:block" fallback={<Scene scene="cantine" className="h-full w-full" />} />
          </div>
          <div className="overflow-x-auto rounded-xl2 bg-white shadow-card">
            <table className="w-full min-w-[480px] text-left">
              <caption className="sr-only">Menu de la cantine pour la semaine</caption>
              <thead className="border-b border-slate-100">
                <tr><th scope="col" className="px-5 py-4 font-display font-medium text-ink-500">Jour</th><th scope="col" className="px-5 py-4 font-display font-medium text-ink-500">Plat</th><th scope="col" className="px-5 py-4 font-display font-medium text-ink-500">Dessert</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {weeklyMenu.map((m) => (
                  <tr key={m.day}>
                    <th scope="row" className="px-5 py-4 font-bold text-brand-950">{m.day}</th>
                    <td className="px-5 py-4 text-ink-700">{m.meal}</td>
                    <td className="px-5 py-4"><span className="rounded-full bg-leaf-50 px-3 py-1 text-sm font-bold text-leaf-700">{m.dessert}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-slate-100 px-5 py-3 text-sm text-ink-500">Menu d’exemple. Allergies : merci de prévenir le secrétariat.</p>
          </div>
        </div>
      </section>

      {/* Garderie, transport, tenue */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Services aux familles" title="Garderie, transport et tenue scolaire" />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="card p-7">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${tint.sun}`}><Clock className="h-7 w-7" /></span>
              <h3 className="mt-5 text-xl">Horaires et garderie</h3>
              <dl className="mt-4 space-y-2">
                {classHours.map((h) => <div key={h.label} className="flex justify-between gap-4"><dt className="text-ink-600">{h.label}</dt><dd className="tabular font-bold text-brand-950">{h.value}</dd></div>)}
              </dl>
              <p className="mt-4 text-sm text-ink-500">Garderie : {fcfa(daycare.price)} {daycare.unit}, aide aux devoirs incluse.</p>
            </div>
            <div className="card p-7">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${tint.brand}`}><Bus className="h-7 w-7" /></span>
              <h3 className="mt-5 text-xl">Transport scolaire</h3>
              <p className="mt-3 text-ink-600">3 bus avec un chauffeur et une accompagnatrice desservent 8 quartiers : Makepe, Bonamoussadi, Kotto, Logpom, Ndogbong, Bepanda, Akwa Nord, Denver.</p>
              <p className="mt-4 text-sm text-ink-500">{fcfa(bus.price)} {bus.unit}. Quartiers d’exemple.</p>
            </div>
            <div className="card p-7">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${tint.coral}`}><Shirt className="h-7 w-7" /></span>
              <h3 className="mt-5 text-xl">Tenue scolaire</h3>
              <div className="mt-4"><CheckList items={uniform} color="text-coral-500" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité + règlement */}
      <section className="section bg-brand-950">
        <div className="container-x">
          <SectionHeading light eyebrow="Santé et sécurité" title="Vos enfants entre de bonnes mains" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {safety.map((s) => (
              <div key={s.title} className="rounded-xl2 bg-white/[0.06] p-6 ring-1 ring-white/10">
                <Icon name={s.icon} className="h-8 w-8 text-sun-300" />
                <h3 className="mt-4 text-xl !text-white">{s.title}</h3>
                <p className="mt-2 text-brand-100/80">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-5 rounded-xl2 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-2xl">Règlement intérieur</h3>
              <p className="mt-1 max-w-xl text-ink-600">Horaires, absences, tenue, comportement, sécurité : les règles de vie de l’école, signées par les parents à l’inscription.</p>
              {docNote && <p className="mt-3 inline-flex items-center gap-2 rounded-xl bg-sun-50 px-3 py-2 text-sm font-bold text-brand-950" role="status"><Info className="h-4 w-4 text-sun-600" /> Document d’exemple : le vrai PDF sera ajouté sur le site final.</p>}
            </div>
            <Button variant="brand" size="lg" onClick={() => setDocNote(true)}><Download className="h-5 w-5" /> Télécharger (PDF)</Button>
          </div>
        </div>
      </section>

      <div className="pt-10" />
      <CtaBand />
      {lb >= 0 && <Lightbox index={lb} onClose={() => setLb(-1)} onMove={move} />}
    </>
  )
}
