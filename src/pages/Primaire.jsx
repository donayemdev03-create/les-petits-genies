import { ClipboardCheck, FileText, MessagesSquare, LifeBuoy } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Icon, { tint } from '../components/ui/Icon'
import Photo from '../components/ui/Photo'
import Scene from '../components/illustrations/Scene'
import { PageHero, DayTimeline, CtaBand } from '../components/sections/Sections'
import { images } from '../config/images'
import { primaireLevels, subjects, daySchedule, results } from '../data/levels'

const subjColors = ['brand', 'coral', 'leaf', 'sun']

function ResultsChart() {
  return (
    <div className="card p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl">Taux de réussite (exemples)</h3>
        <div className="flex gap-4 text-sm font-bold">
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-brand-600" />CEP</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-sun-400" />Entrée en 6e</span>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-5 gap-3 sm:gap-6" role="img" aria-label="Taux de réussite au CEP et à l'entrée en 6e de 2022 à 2026">
        {results.map((r) => (
          <div key={r.year} className="flex flex-col items-center">
            <div className="flex h-48 w-full items-end justify-center gap-1.5 border-b-2 border-slate-200">
              {[['cep', 'bg-brand-600', 'text-brand-700'], ['sixieme', 'bg-sun-400', 'text-[#8A6100]']].map(([k, bar, txt]) => (
                <div key={k} className="flex h-full w-full max-w-[34px] flex-col justify-end">
                  <span className={`tabular mb-1 text-center text-xs font-extrabold ${txt}`}>{r[k]}</span>
                  <div className={`w-full rounded-t-lg ${bar}`} style={{ height: `${r[k] * 0.85}%` }} />
                </div>
              ))}
            </div>
            <span className="tabular mt-2 text-sm font-bold text-ink-600">{r.year}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Primaire() {
  return (
    <>
      <PageHero accent="brand" eyebrow="Primaire · 6 à 11 ans" title="Des bases solides pour réussir au collège"
        text="De la SIL au CM2, nos élèves apprennent à lire, écrire, compter et raisonner, en français et en anglais."
        crumbs={[{ label: 'Primaire' }]}>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button to="/admissions" size="lg">Inscrire mon enfant au primaire</Button>
          <Button to="/contact" variant="outline" size="lg">Rencontrer l’équipe</Button>
        </div>
      </PageHero>

      {/* Classes */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Les classes" title="Six années pour bien grandir" text="Trois niveaux de deux ans chacun, avec un enseignant titulaire par classe." />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {primaireLevels.map((l, i) => (
              <div key={l.code} className="card flex flex-col items-center p-5 text-center">
                <span className={`grid h-16 w-16 place-items-center rounded-full font-display text-xl font-semibold ${tint[subjColors[Math.floor(i / 2)]]}`}>{l.code}</span>
                <p className="mt-3 text-[0.95rem] font-bold leading-snug text-brand-950">{l.name}</p>
                <p className="mt-1 text-sm text-ink-500">{l.age} · {l.stage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matières */}
      <section className="section bg-cloud">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Programme" title="Matières enseignées" text="Le programme officiel, enrichi par l’anglais, l’informatique, le sport et les arts." />
            <div className="grid gap-4 sm:grid-cols-2">
              {subjects.map((s, i) => (
                <div key={s.title} className="flex gap-4 rounded-2xl bg-white p-4 shadow-card">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${tint[subjColors[i % 4]]}`}><Icon name={s.icon} className="h-6 w-6" /></span>
                  <div><h3 className="text-lg">{s.title}</h3><p className="text-[0.95rem] text-ink-500">{s.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <Photo src={images.primaire} alt="Classe de primaire" className="aspect-[4/3.6] rounded-blob shadow-lift lg:mt-32"
            fallback={<Scene scene="classe" className="h-full w-full" />} />
        </div>
      </section>

      {/* Journée type */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Journée type" title="Une journée au primaire" />
          <div className="card p-6 sm:p-8"><DayTimeline items={daySchedule.primaire} tone="brand" /></div>
        </div>
      </section>

      {/* Suivi */}
      <section className="section bg-brand-950">
        <div className="container-x">
          <SectionHeading light eyebrow="Suivi des élèves" title="Les parents informés à chaque étape" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ClipboardCheck, title: 'Évaluations', text: 'Contrôles réguliers et compositions chaque trimestre.' },
              { icon: FileText, title: 'Bulletins', text: 'Un bulletin détaillé par trimestre, commenté par l’enseignant.' },
              { icon: MessagesSquare, title: 'Rencontres', text: 'Réunions parents-enseignants et cahier de liaison quotidien.' },
              { icon: LifeBuoy, title: 'Soutien scolaire', text: 'Études dirigées gratuites de 15:00 à 16:00.' },
            ].map(({ icon: I, title, text }) => (
              <div key={title} className="rounded-xl2 bg-white/[0.06] p-6 ring-1 ring-white/10">
                <I className="h-8 w-8 text-sun-300" />
                <h3 className="mt-4 text-xl !text-white">{title}</h3>
                <p className="mt-2 text-brand-100/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="section">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <SectionHeading eyebrow="Résultats" title="100 % de réussite au CEP depuis 2024"
            text="Nos élèves de CM2 sont préparés au Certificat d’études primaires et au concours d’entrée en 6e tout au long de l’année : examens blancs, révisions guidées et accompagnement." />
          <ResultsChart />
        </div>
      </section>

      <CtaBand title="Une place pour votre enfant au primaire ?" />
    </>
  )
}
