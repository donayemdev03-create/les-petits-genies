import { AlertCircle } from 'lucide-react'

/** Champ de formulaire avec libellé, aide et message d'erreur. */
export default function FormField({ id, label, required, error, hint, children, className = '' }) {
  return (
    <div className={`min-w-0 ${className}`}>
      <label htmlFor={id} className="field-label">
        {label} {required && <span className="text-coral-600" aria-hidden="true">*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-coral-600" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" /> {error}
        </p>
      ) : hint ? <p className="mt-1.5 text-sm text-ink-400">{hint}</p> : null}
    </div>
  )
}
