/**
 * ============================================================================
 *  ✏️ FRAIS DE SCOLARITÉ (montants FICTIFS, en francs CFA)
 * ============================================================================
 */

export const currency = 'FCFA'

export const tuition = [
  { cycle: 'Maternelle', level: 'Petite section', registration: 25000, yearly: 240000 },
  { cycle: 'Maternelle', level: 'Moyenne section', registration: 25000, yearly: 240000 },
  { cycle: 'Maternelle', level: 'Grande section', registration: 25000, yearly: 250000 },
  { cycle: 'Primaire', level: 'SIL – CP', registration: 30000, yearly: 275000 },
  { cycle: 'Primaire', level: 'CE1 – CE2', registration: 30000, yearly: 290000 },
  { cycle: 'Primaire', level: 'CM1', registration: 30000, yearly: 310000 },
  { cycle: 'Primaire', level: 'CM2 (examens inclus)', registration: 30000, yearly: 330000 },
]

/** Paiement de la scolarité en 3 tranches (part en %, date limite) */
export const installments = [
  { label: '1re tranche', share: 40, due: 'À l’inscription' },
  { label: '2e tranche', share: 30, due: 'Avant le 15 janvier' },
  { label: '3e tranche', share: 30, due: 'Avant le 15 avril' },
]

export const services = [
  { icon: 'UtensilsCrossed', name: 'Cantine', price: 25000, unit: 'par mois', text: 'Repas chaud équilibré + goûter.' },
  { icon: 'Bus', name: 'Transport scolaire', price: 20000, unit: 'par mois', text: 'Ramassage matin et soir, selon le quartier.' },
  { icon: 'Clock', name: 'Garderie', price: 10000, unit: 'par mois', text: 'De 06:30 à 07:30 et de 15:00 à 18:00.' },
  { icon: 'Shirt', name: 'Tenue scolaire', price: 15000, unit: 'par an', text: '2 tenues de classe + 1 tenue de sport.' },
]

export const paymentMethods = ['Orange Money', 'MTN Mobile Money', 'Virement bancaire', 'Espèces au secrétariat']

export const fcfa = (n) => `${n.toLocaleString('fr-FR').replace(/ | /g, ' ')} ${currency}`
