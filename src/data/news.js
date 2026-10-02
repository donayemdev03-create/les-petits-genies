/**
 * ============================================================================
 *  ✏️ ACTUALITÉS ET ÉVÉNEMENTS (contenus FICTIFS)
 *  - scene : illustration utilisée tant que `image` vaut null
 *            (classe, jeux, art, musique, sport, lecture, fete, science, cantine, bus)
 *  - date  : AAAA-MM-JJ
 * ============================================================================
 */

export const categories = ['Vie de l’école', 'Événements', 'Annonces aux parents']

export const news = [
  {
    slug: 'rentree-2026-2027',
    title: 'Une rentrée 2026-2027 réussie',
    date: '2026-09-07',
    category: 'Vie de l’école',
    scene: 'classe',
    image: null,
    excerpt: 'Plus de 300 élèves ont retrouvé le chemin de l’école, dont 54 nouveaux en petite section.',
    body: [
      'La rentrée s’est déroulée dans la joie le lundi 7 septembre. Les enseignants ont accueilli les élèves dans des classes fraîchement repeintes.',
      'Pour les plus petits, une rentrée échelonnée sur trois jours a permis à chaque enfant de découvrir sa classe en douceur, accompagné de ses parents la première matinée.',
      'Nous souhaitons à tous les élèves une excellente année scolaire.',
    ],
  },
  {
    slug: 'portes-ouvertes-octobre',
    title: 'Journée portes ouvertes le samedi 17 octobre',
    date: '2026-09-28',
    category: 'Événements',
    scene: 'fete',
    image: null,
    excerpt: 'Visitez les classes, rencontrez les enseignants et découvrez nos activités.',
    body: [
      'Le samedi 17 octobre, de 09:00 à 13:00, l’école ouvre ses portes aux familles qui souhaitent découvrir l’établissement.',
      'Au programme : visite des classes et de la cour, présentation du projet pédagogique, ateliers pour les enfants et échange avec la direction.',
      'Entrée libre. Les inscriptions pour l’année en cours seront possibles sur place.',
    ],
  },
  {
    slug: 'nouveaux-menus-cantine',
    title: 'Nouveaux menus à la cantine',
    date: '2026-09-21',
    category: 'Annonces aux parents',
    scene: 'cantine',
    image: null,
    excerpt: 'Des menus préparés avec une nutritionniste, plus de fruits et de légumes de saison.',
    body: [
      'À partir de cette année, les menus de la cantine sont élaborés avec une nutritionniste. Chaque repas comprend un féculent, une protéine, des légumes et un fruit.',
      'Les menus de la semaine sont affichés à l’entrée de l’école et publiés sur la page Vie scolaire.',
      'Merci de signaler toute allergie alimentaire au secrétariat.',
    ],
  },
  {
    slug: 'resultats-cep-2026',
    title: '100 % de réussite au CEP 2026',
    date: '2026-07-10',
    category: 'Vie de l’école',
    scene: 'lecture',
    image: null,
    excerpt: 'Pour la troisième année consécutive, tous nos élèves de CM2 ont obtenu leur CEP.',
    body: [
      'Félicitations à nos 42 élèves de CM2 qui ont tous obtenu leur Certificat d’études primaires.',
      '97 % d’entre eux ont également réussi le concours d’entrée en 6e.',
      'Bravo aux élèves, aux enseignants et aux parents pour leur investissement tout au long de l’année.',
    ],
  },
  {
    slug: 'atelier-robotique',
    title: 'Un club de robotique pour les CM1 et CM2',
    date: '2026-09-15',
    category: 'Vie de l’école',
    scene: 'science',
    image: null,
    excerpt: 'Chaque mercredi après-midi, les élèves construisent et programment leurs premiers robots.',
    body: [
      'Le nouveau club de robotique accueille 16 élèves de CM1 et CM2 chaque mercredi de 13:30 à 15:00.',
      'Les enfants apprennent à assembler des robots simples et à les programmer avec des blocs visuels.',
      'Inscriptions auprès du secrétariat, dans la limite des places disponibles.',
    ],
  },
  {
    slug: 'reunion-parents',
    title: 'Réunion parents-enseignants du 24 octobre',
    date: '2026-09-30',
    category: 'Annonces aux parents',
    scene: 'bus',
    image: null,
    excerpt: 'Rencontrez l’enseignant de votre enfant pour faire le point sur le début d’année.',
    body: [
      'Une réunion parents-enseignants aura lieu le samedi 24 octobre de 08:30 à 12:00, dans chaque classe.',
      'Ce sera l’occasion de présenter le programme du trimestre et de répondre à vos questions.',
      'Votre présence est vivement souhaitée.',
    ],
  },
]

export const getArticle = (slug) => news.find((n) => n.slug === slug)

/** ✏️ Événements à venir */
export const events = [
  { date: '2026-10-17', title: 'Journée portes ouvertes', place: 'Toute l’école · 09:00 – 13:00' },
  { date: '2026-10-24', title: 'Réunion parents-enseignants', place: 'Dans chaque classe · 08:30' },
  { date: '2026-11-30', title: 'Clôture des inscriptions', place: 'Secrétariat' },
  { date: '2026-12-18', title: 'Fête de Noël', place: 'Cour de l’école · 10:00' },
  { date: '2027-02-11', title: 'Fête de la Jeunesse — défilé', place: 'Boulevard de la Liberté' },
]

export const formatDate = (d, opts = { day: 'numeric', month: 'long', year: 'numeric' }) =>
  new Date(`${d}T12:00:00`).toLocaleDateString('fr-FR', opts)
