import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition duration-200 ' +
  'focus-visible:outline-none focus-visible:ring-4 disabled:opacity-60 disabled:pointer-events-none select-none'

const variants = {
  // Jaune soleil : réservé aux actions clés (Inscrire mon enfant)
  primary: 'bg-sun-400 text-brand-950 shadow-sun hover:bg-sun-300 hover:-translate-y-0.5 focus-visible:ring-sun-200',
  brand: 'bg-brand-600 text-white hover:bg-brand-700 hover:-translate-y-0.5 focus-visible:ring-brand-100',
  outline: 'border-2 border-brand-100 bg-white text-brand-900 hover:border-brand-300 hover:text-brand-700 focus-visible:ring-brand-100',
  light: 'bg-white text-brand-950 hover:bg-brand-50 focus-visible:ring-white/40',
  ghostLight: 'border-2 border-white/30 text-white hover:bg-white/10 focus-visible:ring-white/30',
  coral: 'bg-coral-500 text-white hover:bg-coral-600 hover:-translate-y-0.5 focus-visible:ring-coral-100',
  whatsapp: 'bg-leaf-500 text-white hover:bg-leaf-600 hover:-translate-y-0.5 focus-visible:ring-leaf-100',
}

const sizes = {
  sm: 'min-h-[42px] px-4 text-sm',
  md: 'min-h-[48px] px-6 text-[0.975rem]',
  lg: 'min-h-[56px] px-7 text-base sm:text-[1.05rem]',
}

/**
 * Bouton réutilisable.
 * - `to`   : lien interne (React Router)
 * - `href` : lien externe / tel: / mailto:
 * - sinon  : <button>
 */
export default function Button({ to, href, variant = 'primary', size = 'md', className = '', children, ...props }) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) {
    const external = href.startsWith('http')
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...props}>
        {children}
      </a>
    )
  }
  return <button className={cls} {...props}>{children}</button>
}
