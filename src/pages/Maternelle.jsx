import { ArrowRight, Users, Languages, Moon, UtensilsCrossed, Droplets, GraduationCap } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Icon, { tint } from '../components/ui/Icon'
import Photo from '../components/ui/Photo'
import Scene from '../components/illustrations/Scene'
import { PageHero, DayTimeline, CheckList, CtaBand } from '../components/sections/Sections'
import { images } from '../config/images'
import { maternelleLevels, awakeningActivities, daySchedule } from '../data/levels'

const levelStyle = {
  sun: { card: 'bg-sun-50 ring-sun-200', badge: 'bg-sun-400 text-brand-950' },
  coral: { card: 'bg-coral-50 ring-coral-100', badge: 'bg-coral-500 text-white' },
  leaf: { card: 'bg-leaf-50 ring-leaf-100', badge: 'bg-leaf-500 text-white' },
}
const actColors = ['coral', 'brand', 'sun', 'leaf', 'coral', 'brand']

export default function Maternelle() {
  return (
    <>
      <PageHero accent="coral" eyebrow="Maternelle · 3 à 5 ans" title="Les premiers pas à l’école, en douceur"
        text="En petite, moyenne et grande section, votre enfant apprend en jouant, prend confiance et se prépare à entrer au primaire."
        crumbs={[{ label: 'Maternelle' }]}>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button to="/admissions" size="lg">Inscrire mon enfant en maternelle</Button>
          <Button to="/contact" variant="outline" size="lg">Visiter les classes</Button>
        </div>
      </PageHero>

      {/* Niveaux */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Les trois sections" title="Un niveau adapté à chaque âge" />
          <div className="grid gap-5 md:grid-cols-3">
            {maternelleLevels.map((l) => (
              <article key={l.code} className={`rounded-blob p-7 ring-2 ${levelStyle[l.color].card}`}>
                <div className="flex items-center justify-between">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl font-display text-xl font-semibold ${levelStyle[l.color].badge}`}>{l.code}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-950">{l.age}</span>
                </div>
                <h3 className="mt-5 text-2xl">{l.name}</h3>
                <p className="mt-2 text-ink-600">{l.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Activités d'éveil */}
      <section className="section bg-cloud">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <Photo src={images.maternelle} alt="Classe de maternelle" className="aspect-[4/3.4] rounded-blob shadow-lift"
              fallback={<Scene scene="art" className="h-full w-full" />} />
          </div>
          <div>
            <SectionHeading eyebrow="Activités d’éveil" title="Apprendre en jouant, chaque jour" />
            <div className="grid gap-4 sm:grid-cols-2">
              {awakeningActivities.map((a, i) => (
                <div key={a.title} className="flex gap-4 rounded-2xl bg-white p-4 shadow-card">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${tint[actColors[i]]}`}><Icon name={a.icon} className="h-6 w-6" /></span>
                  <div><h3 className="text-lg">{a.title}</h3><p className="text-[0.95rem] text-ink-500">{a.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Langues + encadrement */}
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            { icon: Languages, color: 'brand', title: 'Français et anglais', text: 'Comptines, jeux et rituels en anglais chaque jour, dès la petite section.' },
            { icon: Users, color: 'coral', title: '1 enseignante + 1 assistante', text: '20 enfants au maximum par classe, pour un vrai suivi individuel.' },
            { icon: GraduationCap, color: 'leaf', title: 'Prêt pour le primaire', text: 'En grande section : sons, lettres, nombres jusqu’à 30 et autonomie.' },
          ].map(({ icon: I, color, title, text }) => (
            <div key={title} className="card p-7">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${tint[color]}`}><I className="h-7 w-7" /></span>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-2 text-ink-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journée type */}
      <section className="section bg-coral-50/60">
        <div className="container-x">
          <SectionHeading eyebrow="Journée type" title="Une journée en maternelle" text="Des repères stables qui rassurent les tout-petits." />
          <div className="card p-6 sm:p-8"><DayTimeline items={daySchedule.maternelle} tone="coral" /></div>
        </div>
      </section>

      {/* Hygiène, sieste, repas */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Bien-être" title="Hygiène, sieste et repas" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Droplets, title: 'Hygiène et propreté', items: ['Lavage des mains avant chaque repas', 'Sanitaires à hauteur d’enfant', 'Accompagnement vers la propreté'] },
              { icon: Moon, title: 'Sieste', items: ['Salle de repos calme et ventilée', 'Lit et drap individuels', 'Surveillance par une assistante'] },
              { icon: UtensilsCrossed, title: 'Repas', items: ['Goûter à 09:30', 'Déjeuner équilibré à la cantine (option)', 'Allergies prises en compte'] },
            ].map(({ icon: I, title, items }) => (
              <div key={title} className="rounded-xl2 border-2 border-slate-100 p-7">
                <I className="h-8 w-8 text-coral-500" />
                <h3 className="mt-4 text-xl">{title}</h3>
                <div className="mt-4"><CheckList items={items} /></div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button to="/primaire" variant="outline" className="!whitespace-normal text-center">Découvrir ensuite le primaire <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      <CtaBand title="Une place pour votre enfant en maternelle ?" />
    </>
  )
}
