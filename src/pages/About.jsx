import { Target, Eye, BadgeCheck } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Icon, { tint } from '../components/ui/Icon'
import Photo from '../components/ui/Photo'
import { TeamCard } from '../components/ui/Cards'
import SchoolScene from '../components/illustrations/SchoolScene'
import Portrait from '../components/illustrations/Portrait'
import { PageHero, CheckList, CtaBand } from '../components/sections/Sections'
import { site } from '../config/site'
import { images } from '../config/images'
import { values, pedagogy, infrastructure, history, accreditations } from '../data/content'
import { director, team } from '../data/team'

const valueColors = ['coral', 'sun', 'brand', 'leaf']

export default function About() {
  return (
    <>
      <PageHero eyebrow="À propos" title={`${site.shortName}, une école à taille humaine depuis ${site.foundedYear}`}
        text="Une équipe engagée, un cadre sécurisé et un projet éducatif qui place l’enfant au centre."
        crumbs={[{ label: 'À propos' }]} />

      {/* Histoire */}
      <section className="section">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Photo src={images.about} alt={`Bâtiment de ${site.shortName}`} className="aspect-[4/3.2] rounded-blob shadow-lift"
            fallback={<SchoolScene className="h-full w-full" label={site.shortName} />} />
          <div>
            <SectionHeading eyebrow="Notre histoire" title="D’une petite maternelle à une école complète" />
            {/* ✏️ HISTOIRE DE L'ÉCOLE */}
            <p className="text-lg text-ink-600">
              {site.shortName} a ouvert ses portes en {site.foundedYear} avec trois classes de maternelle. Portée par la confiance des familles, l’école a ouvert le cycle primaire quelques années plus tard et accueille aujourd’hui plus de 300 élèves.
            </p>
            <ol className="mt-8 border-l-4 border-sun-200">
              {history.map((h) => (
                <li key={h.year} className="relative pb-6 pl-6 last:pb-0">
                  <span className="absolute -left-[12px] top-1 h-5 w-5 rounded-full border-4 border-white bg-coral-500 shadow" />
                  <p className="tabular font-display text-lg font-semibold text-coral-600">{h.year}</p>
                  <p className="text-ink-600">{h.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Mot de la directrice */}
      <section className="section bg-cloud">
        <div className="container-x grid grid-cols-1 items-center gap-10 lg:grid-cols-[320px_1fr]">
          <Photo src={images.director} alt={`Portrait de ${director.name}`} className="mx-auto aspect-[4/5] w-full max-w-xs rounded-blob shadow-lift"
            fallback={<Portrait tone={director.tone} gender={director.gender} seed={0} className="h-full w-full" />} />
          <div className="relative">
            <svg className="absolute -left-2 -top-6 h-16 w-16 text-sun-300" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h4v4c0 3-1.5 5-4 6l-1-1.5c1.4-.8 2-1.8 2-3.5H7zm8 0h4v4c0 3-1.5 5-4 6l-1-1.5c1.4-.8 2-1.8 2-3.5h-1z" fill="currentColor" /></svg>
            <p className="eyebrow relative">Le mot de la directrice</p>
            <div className="relative mt-4 space-y-4 text-lg leading-relaxed text-ink-700">
              {director.message.map((p) => <p key={p}>{p}</p>)}
            </div>
            <p className="mt-6 font-display text-xl font-semibold text-brand-950">{director.name}</p>
            <p className="text-ink-500">{director.role} · portrait et texte d’exemple</p>
          </div>
        </div>
      </section>

      {/* Mission, vision, valeurs */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Target, title: 'Notre mission', text: 'Donner à chaque enfant des bases solides et le goût d’apprendre, dans un cadre bienveillant et sécurisé.', cls: 'bg-brand-600 text-white' },
              { icon: Eye, title: 'Notre vision', text: 'Former des enfants curieux, autonomes, bilingues et respectueux des autres, prêts à réussir au collège.', cls: 'bg-sun-400 text-brand-950' },
            ].map(({ icon: I, title, text, cls }) => (
              <div key={title} className="card p-8 sm:p-10">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl ${cls}`}><I className="h-7 w-7" /></span>
                <h2 className="mt-6 text-3xl">{title}</h2>
                <p className="mt-3 text-lg text-ink-600">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <SectionHeading eyebrow="Nos valeurs" title="Ce qui guide notre équipe" align="center" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <div key={v.title} className="rounded-xl2 border-2 border-slate-100 p-6 text-center">
                  <span className={`mx-auto grid h-14 w-14 place-items-center rounded-full ${tint[valueColors[i]]}`}><Icon name={v.icon} className="h-7 w-7" /></span>
                  <h3 className="mt-4 text-xl">{v.title}</h3>
                  <p className="mt-2 text-ink-500">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pédagogie */}
      <section className="section bg-brand-950">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading light eyebrow="Projet éducatif" title="Apprendre avec plaisir, progresser avec méthode"
            text="Notre pédagogie associe le jeu et la manipulation en maternelle à un apprentissage structuré au primaire." />
          <div className="rounded-blob bg-white p-8">
            <CheckList items={pedagogy} />
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="L’équipe" title="Des adultes attentifs autour de vos enfants"
            text="Direction, enseignants, assistantes de classe, infirmière et personnel d’encadrement. Noms et portraits d’exemple." />
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {team.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}
          </div>
        </div>
      </section>

      {/* Infrastructures */}
      <section className="section bg-cloud">
        <div className="container-x">
          <SectionHeading eyebrow="Infrastructures" title="Un cadre pensé pour les enfants" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructure.map((e, i) => (
              <div key={e.name} className="card flex flex-col p-5">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tint[valueColors[i % 4]]}`}><Icon name={e.icon} className="h-6 w-6" /></span>
                <h3 className="mt-4 text-lg">{e.name}</h3>
                <p className="text-[0.95rem] text-ink-500">{e.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl2 border-2 border-dashed border-brand-200 bg-white p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-xl"><BadgeCheck className="h-6 w-6 text-leaf-500" /> Agréments et autorisations</h3>
            <div className="mt-4"><CheckList items={accreditations} color="text-brand-500" /></div>
          </div>
        </div>
      </section>

      <div className="pt-10" />
      <CtaBand />
    </>
  )
}
