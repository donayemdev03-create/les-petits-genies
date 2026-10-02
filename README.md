# Les Petits Génies — maquette du site (école maternelle et primaire)

Maquette React + Tailwind CSS, responsive (ordinateur, tablette, smartphone).
Noms, chiffres, frais, actualités et coordonnées **fictifs**.

## Lancer le projet

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # version de production dans /dist
```

## Où modifier quoi ? (repères ✏️ dans le code)

| Élément | Fichier |
|---|---|
| Nom, slogan, logo, adresse, téléphones, WhatsApp, e-mail, horaires, menu, dates d'inscription | `src/config/site.js` |
| Images (accueil, à propos, maternelle, primaire, directrice) et galerie | `src/config/images.js` + photos dans `public/images/` |
| Niveaux, classes, journées types, matières, résultats aux examens | `src/data/levels.js` |
| Frais de scolarité, tranches, services (cantine, transport, garderie, tenue), paiements | `src/data/fees.js` |
| Directrice et équipe | `src/data/team.js` |
| Actualités et événements | `src/data/news.js` |
| Chiffres clés, valeurs, infrastructures, FAQ, clubs, menus, sécurité, tenue, témoignages | `src/data/content.js` |
| Couleurs et polices | `tailwind.config.js` et `index.html` |

**Photos** : tant qu'une image vaut `null`, une illustration intégrée s'affiche.
Copiez la photo dans `public/images/` puis indiquez son chemin, par ex. `hero: './images/cour.jpg'`.
⚠️ Photos d'enfants : uniquement avec l'accord écrit des parents.

## Pages

Accueil · À propos · Maternelle · Primaire · Admissions (frais, FAQ, pré-inscription) ·
Vie scolaire (clubs, galerie, cantine, transport, sécurité) · Actualités (+ détail) · Contact · 404

## Étapes suivantes (mise en production)

- Connecter les formulaires (pré-inscription, contact) à une API / base de données ou à un e-mail.
- Remplacer le plan de la page Contact par une carte Google Maps intégrée.
- Ajouter le vrai règlement intérieur (PDF).
- Option : version bilingue français / anglais.
