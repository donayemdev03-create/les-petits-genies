/**
 * ============================================================================
 *  CONFIGURATION GÉNÉRALE DU SITE
 *  ✏️ C'est ICI que vous remplacez le nom, le logo, les coordonnées,
 *     les horaires et les numéros de téléphone de l'école.
 *  Toutes les valeurs ci-dessous sont FICTIVES (exemples pour la maquette).
 * ============================================================================
 */

export const site = {
  // ✏️ NOM DE L'ÉCOLE
  name: 'École Maternelle et Primaire Les Petits Génies',
  shortName: 'Les Petits Génies',
  kind: 'École maternelle et primaire',
  tagline: 'Grandir, apprendre et s’épanouir en toute confiance',
  foundedYear: 2008,
  schoolYear: '2026-2027',

  // ✏️ LOGO — `null` = logo généré. Sinon : './images/logo.svg' (fichier dans /public/images/)
  logo: null,

  // ✏️ COORDONNÉES
  address: {
    street: '48, rue des Écoliers',        // exemple
    district: 'Quartier Makepe',           // exemple
    city: 'Douala',
    country: 'Cameroun',
  },
  phones: [
    { label: 'Secrétariat', value: '+237 233 00 11 22', href: '+237233001122' },
    { label: 'Direction', value: '+237 699 00 11 22', href: '+237699001122' },
  ],
  whatsapp: '+237 677 00 11 22',
  whatsappHref: '237677001122',
  email: 'contact@lespetitsgenies.cm',

  // ✏️ LIEN GOOGLE MAPS
  mapUrl: 'https://maps.google.com/?q=Douala',

  // ✏️ RÉSEAUX SOCIAUX
  socials: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
  },

  // ✏️ INSCRIPTIONS
  registration: {
    open: true,
    deadline: '2026-11-30',        // date limite affichée sur le site (AAAA-MM-JJ)
    deadlineLabel: '30 novembre 2026',
    note: 'Places limitées : 20 élèves maximum par classe.',
  },
}

export const phone = site.phones[0] // numéro principal

/** ✏️ HORAIRES DU SECRÉTARIAT (`null` = fermé) */
export const officeHours = [
  { day: 'Lundi', open: '07:00', close: '17:00' },
  { day: 'Mardi', open: '07:00', close: '17:00' },
  { day: 'Mercredi', open: '07:00', close: '17:00' },
  { day: 'Jeudi', open: '07:00', close: '17:00' },
  { day: 'Vendredi', open: '07:00', close: '17:00' },
  { day: 'Samedi', open: '08:00', close: '12:00' },
  { day: 'Dimanche', open: null, close: null },
]

/** ✏️ HORAIRES DES COURS */
export const classHours = [
  { label: 'Garderie du matin', value: '06:30 – 07:30' },
  { label: 'Cours (maternelle)', value: '07:30 – 13:00' },
  { label: 'Cours (primaire)', value: '07:30 – 15:00' },
  { label: 'Garderie du soir', value: '15:00 – 18:00' },
]

// Navigation principale (ordre du menu)
export const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/maternelle', label: 'Maternelle' },
  { to: '/primaire', label: 'Primaire' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/vie-scolaire', label: 'Vie scolaire' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/contact', label: 'Contact' },
]
