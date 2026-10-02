/**
 * ============================================================================
 *  ✏️ NIVEAUX, CLASSES, JOURNÉES TYPES ET PROGRAMMES
 *  Toutes les informations sont des EXEMPLES à adapter.
 * ============================================================================
 */

export const maternelleLevels = [
  { code: 'PS', name: 'Petite section', age: '3 ans', color: 'sun', focus: 'Se séparer en douceur, découvrir la vie en groupe, parler et bouger.' },
  { code: 'MS', name: 'Moyenne section', age: '4 ans', color: 'coral', focus: 'Enrichir le langage, découvrir les formes, les couleurs et les nombres.' },
  { code: 'GS', name: 'Grande section', age: '5 ans', color: 'leaf', focus: 'Préparer l’entrée au primaire : graphisme, sons, premiers mots écrits.' },
]

export const primaireLevels = [
  { code: 'SIL', name: 'Section d’initiation au langage', age: '6 ans', stage: 'Niveau I' },
  { code: 'CP', name: 'Cours préparatoire', age: '7 ans', stage: 'Niveau I' },
  { code: 'CE1', name: 'Cours élémentaire 1', age: '8 ans', stage: 'Niveau II' },
  { code: 'CE2', name: 'Cours élémentaire 2', age: '9 ans', stage: 'Niveau II' },
  { code: 'CM1', name: 'Cours moyen 1', age: '10 ans', stage: 'Niveau III' },
  { code: 'CM2', name: 'Cours moyen 2', age: '11 ans', stage: 'Niveau III' },
]

export const awakeningActivities = [
  { icon: 'MessageCircle', title: 'Langage', text: 'Comptines, histoires, échanges en groupe pour oser prendre la parole.' },
  { icon: 'PenLine', title: 'Graphisme', text: 'Tracés, boucles et lettres pour préparer l’écriture.' },
  { icon: 'Shapes', title: 'Nombres et formes', text: 'Compter, trier, comparer avec du matériel à manipuler.' },
  { icon: 'Footprints', title: 'Motricité', text: 'Parcours, jeux de ballon et danse pour développer l’équilibre.' },
  { icon: 'Palette', title: 'Arts plastiques', text: 'Peinture, collage, modelage : exprimer sa créativité.' },
  { icon: 'Music', title: 'Musique', text: 'Chants, rythmes et instruments pour éveiller l’oreille.' },
]

export const subjects = [
  { icon: 'BookOpen', title: 'Français', text: 'Lecture, écriture, grammaire, conjugaison, expression.' },
  { icon: 'Calculator', title: 'Mathématiques', text: 'Numération, calcul, géométrie, mesures, problèmes.' },
  { icon: 'Languages', title: 'Anglais', text: 'Pratique orale dès la SIL, lecture et écriture ensuite.' },
  { icon: 'Leaf', title: 'Sciences', text: 'Observer, expérimenter, comprendre le vivant et la matière.' },
  { icon: 'Globe2', title: 'Histoire-Géographie', text: 'Se repérer dans le temps et l’espace, éducation civique.' },
  { icon: 'Monitor', title: 'Informatique', text: 'Clavier, souris, logiciels éducatifs, usage responsable.' },
  { icon: 'Trophy', title: 'Sport', text: 'Deux séances par semaine : athlétisme, jeux collectifs.' },
  { icon: 'Palette', title: 'Arts et musique', text: 'Dessin, chant, théâtre et travaux manuels.' },
]

/** ✏️ Journées types (horaires) */
export const daySchedule = {
  maternelle: [
    { time: '06:30', title: 'Garderie du matin', text: 'Accueil échelonné, jeux calmes.' },
    { time: '07:30', title: 'Accueil en classe', text: 'Rituels du matin : date, météo, appel.' },
    { time: '08:00', title: 'Activités d’apprentissage', text: 'Langage, graphisme, nombres en petits groupes.' },
    { time: '09:30', title: 'Goûter et récréation', text: 'Collation et jeux dans la cour sécurisée.' },
    { time: '10:15', title: 'Ateliers d’éveil', text: 'Arts, musique, motricité.' },
    { time: '11:30', title: 'Déjeuner', text: 'Repas équilibré à la cantine (en option).' },
    { time: '12:00', title: 'Sieste / temps calme', text: 'Salle de repos pour les petits.' },
    { time: '13:00', title: 'Sortie ou garderie', text: 'Remise aux personnes autorisées uniquement.' },
  ],
  primaire: [
    { time: '07:30', title: 'Accueil et rassemblement', text: 'Levée des couleurs le lundi.' },
    { time: '07:45', title: 'Français et mathématiques', text: 'Les apprentissages clés le matin.' },
    { time: '10:00', title: 'Récréation', text: 'Goûter et jeux surveillés.' },
    { time: '10:30', title: 'Anglais, sciences, histoire-géo', text: 'Selon l’emploi du temps.' },
    { time: '12:00', title: 'Pause déjeuner', text: 'Cantine ou repas apporté.' },
    { time: '13:00', title: 'Activités de l’après-midi', text: 'Informatique, sport, arts, études dirigées.' },
    { time: '15:00', title: 'Sortie ou garderie', text: 'Aide aux devoirs jusqu’à 18:00 (en option).' },
  ],
}

/** ✏️ Résultats aux examens officiels (taux de réussite en %) */
export const results = [
  { year: '2022', cep: 96, sixieme: 88 },
  { year: '2023', cep: 98, sixieme: 91 },
  { year: '2024', cep: 100, sixieme: 93 },
  { year: '2025', cep: 100, sixieme: 95 },
  { year: '2026', cep: 100, sixieme: 97 },
]
