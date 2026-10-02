# Les Petits Génies — site vitrine (maquette)

React 18 + Vite 5 + Tailwind CSS 3 + React Router 6 (HashRouter). JavaScript uniquement.

- `npm run dev` · `npm run build` · `SINGLE=1 npm run build` (un seul fichier HTML autonome)
- Contenus modifiables uniquement dans `src/config/` et `src/data/` (repères ✏️).
- Couleurs : `brand` (bleu), `sun` (jaune, actions clés), `coral`, `leaf` (vert) — `tailwind.config.js`.
- Polices : Fredoka (titres), Nunito (texte).
- Mobile d'abord : cibles ≥ 44 px, barre fixe « Inscrire mon enfant / Appeler » sur mobile.
- Formulaires non connectés : brancher l'API dans `submit` de `Admissions.jsx` et `Contact.jsx`.
- Liens tel:/mailto: interceptés uniquement dans une iframe (`ContactDialog.jsx`).
