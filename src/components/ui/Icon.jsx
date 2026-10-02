/**
 * Icônes du site (bibliothèque Lucide : https://lucide.dev/icons).
 * Pour utiliser une nouvelle icône dans les fichiers de données :
 * importez-la ci-dessous puis ajoutez-la à `registry`.
 */
import {
  MessageCircle, PenLine, Shapes, Footprints, Palette, Music, BookOpen, Calculator, Languages, Leaf,
  Globe2, Monitor, Trophy, UtensilsCrossed, Bus, Clock, Shirt, Users, ShieldCheck, Sparkles, Heart,
  Star, Handshake, Sprout, School, Castle, BedDouble, Library, Stethoscope, Drama, Bot, DoorClosed,
  IdCard, Droplets,
} from 'lucide-react'

const registry = {
  MessageCircle, PenLine, Shapes, Footprints, Palette, Music, BookOpen, Calculator, Languages, Leaf,
  Globe2, Monitor, Trophy, UtensilsCrossed, Bus, Clock, Shirt, Users, ShieldCheck, Sparkles, Heart,
  Star, Handshake, Sprout, School, Castle, BedDouble, Library, Stethoscope, Drama, Bot, DoorClosed,
  IdCard, Droplets,
}

export default function Icon({ name, ...props }) {
  const Cmp = registry[name] || Sparkles
  return <Cmp aria-hidden="true" {...props} />
}

/** Pastilles de couleur réutilisées pour les icônes */
export const tint = {
  brand: 'bg-brand-50 text-brand-600',
  sun: 'bg-sun-100 text-sun-600',
  coral: 'bg-coral-50 text-coral-600',
  leaf: 'bg-leaf-50 text-leaf-600',
}

/* Icônes des réseaux sociaux (Lucide ne fournit plus les logos de marques) */
export function SocialIcon({ network, className = 'h-5 w-5' }) {
  const common = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (network === 'facebook')
    return <svg {...common}><path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z" /></svg>
  if (network === 'instagram')
    return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".6" fill="currentColor" /></svg>
  return <svg {...common}><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" /></svg>
}
