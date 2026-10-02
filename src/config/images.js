/**
 * ============================================================================
 *  IMAGES DU SITE
 *  ✏️ Pour remplacer une image : copiez la photo dans /public/images/
 *     puis indiquez son chemin, par ex. hero: './images/facade.jpg'
 *
 *  Tant qu'une valeur vaut `null`, la maquette affiche une illustration
 *  intégrée. Formats conseillés : 1600 × 1100 px (JPG/WebP, < 300 Ko).
 *  ⚠️ Photos d'enfants : publier uniquement avec l'accord écrit des parents.
 * ============================================================================
 */

export const images = {
  hero: null,        // Grande photo d'accueil (enfants en classe, cour de récréation)
  about: null,       // Bâtiment ou équipe
  maternelle: null,  // Classe de maternelle
  primaire: null,    // Classe de primaire
  director: null,    // Portrait de la directrice / du directeur
}

/**
 * ✏️ GALERIE PHOTOS (page Vie scolaire)
 * - src     : chemin de la photo (null = illustration)
 * - scene   : illustration utilisée en attendant (classe, jeux, art, musique, sport, lecture, fete, science, cantine, bus)
 */
export const gallery = [
  { src: null, scene: 'classe', caption: 'En classe de CE1' },
  { src: null, scene: 'jeux', caption: 'Récréation dans la cour' },
  { src: null, scene: 'art', caption: 'Atelier peinture en moyenne section' },
  { src: null, scene: 'musique', caption: 'Chorale de l’école' },
  { src: null, scene: 'sport', caption: 'Journée sportive' },
  { src: null, scene: 'lecture', caption: 'Coin lecture à la bibliothèque' },
  { src: null, scene: 'fete', caption: 'Fête de fin d’année' },
  { src: null, scene: 'science', caption: 'Découverte des plantes au CM1' },
]
