import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="tabular font-display text-8xl font-semibold text-sun-300">404</p>
      <h1 className="mt-4 text-4xl">Oups, page introuvable</h1>
      <p className="mt-3 max-w-md text-ink-500">La page demandée n’existe pas ou a été déplacée.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button to="/" variant="brand">Retour à l’accueil</Button>
        <Button to="/admissions">Inscrire mon enfant</Button>
      </div>
    </section>
  )
}
