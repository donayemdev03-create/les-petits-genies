import { useState } from 'react'

/**
 * Affiche une photo si `src` est défini, sinon (ou si l'image ne charge pas)
 * affiche l'illustration passée dans `fallback`.
 */
export default function Photo({ src, alt = '', fallback, className = '', imgClassName = 'h-full w-full object-cover' }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src && !failed
        ? <img src={src} alt={alt} className={imgClassName} loading="lazy" onError={() => setFailed(true)} />
        : fallback}
    </div>
  )
}
