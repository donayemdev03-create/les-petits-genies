import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, Copy, Check, X } from 'lucide-react'
import { site } from '../../config/site'

/**
 * Intercepte les liens tel: et mailto: quand le site est affiché dans un cadre
 * (aperçu en ligne, iframe…) où ces liens ne peuvent pas s'ouvrir et rendraient
 * la page blanche. Une fenêtre affiche alors le numéro / l'adresse à copier.
 * Sur le vrai site (hors cadre), les liens fonctionnent normalement :
 * un clic sur « Appeler » lance l'appel sur smartphone.
 */
const inFrame = (() => { try { return window.self !== window.top } catch { return true } })()

export default function ContactDialog() {
  const [info, setInfo] = useState(null)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!inFrame) return
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="tel:"], a[href^="mailto:"]')
      if (!a) return
      e.preventDefault()
      const href = a.getAttribute('href')
      if (href.startsWith('mailto:')) {
        setInfo({ kind: 'mail', title: 'Nous écrire', value: href.slice(7) })
      } else {
        const raw = href.slice(4)
        const known = site.phones.find((p) => p.href === raw)
        setInfo({ kind: 'tel', title: known ? `Appeler — ${known.label}` : 'Appeler l’école', value: known ? known.value : raw })
      }
      setCopied(false)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  useEffect(() => {
    if (!info) return
    const onKey = (e) => e.key === 'Escape' && setInfo(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [info])

  if (!info) return null
  const I = info.kind === 'mail' ? Mail : Phone

  const copy = async () => {
    try { await navigator.clipboard.writeText(info.value); setCopied(true) }
    catch { inputRef.current?.select() }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title">
      <div className="absolute inset-0 bg-brand-950/50 backdrop-blur-sm" onClick={() => setInfo(null)} />
      <div className="relative w-full max-w-sm animate-fadeUp rounded-3xl bg-white p-6 shadow-2xl" style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <button onClick={() => setInfo(null)} className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full text-ink-500 hover:bg-slate-100" aria-label="Fermer">
          <X className="h-5 w-5" />
        </button>
        <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600`}>
          <I className="h-7 w-7" />
        </span>
        <h2 id="contact-dialog-title" className="mt-4 text-xl font-semibold">{info.title}</h2>
        <input ref={inputRef} readOnly value={info.value} aria-label="Coordonnée"
          className={`tabular mt-4 w-full rounded-xl border px-4 py-3 text-center font-display text-2xl font-semibold border-slate-200 bg-cloud text-brand-950`} />
        <button onClick={copy} className={`mt-4 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full font-semibold text-white bg-brand-600 hover:bg-brand-700`}>
          {copied ? <><Check className="h-5 w-5" /> Copié</> : <><Copy className="h-5 w-5" /> Copier {info.kind === 'mail' ? 'l’adresse' : 'le numéro'}</>}
        </button>
        <p className="mt-3 text-center text-sm text-ink-400">Aperçu de la maquette : sur le site final, ce bouton lancera directement {info.kind === 'mail' ? 'votre messagerie' : 'l’appel'}.</p>
      </div>
    </div>
  )
}
