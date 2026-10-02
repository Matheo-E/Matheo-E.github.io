# Portfolio — Mathéo EMMA

Site vitrine statique. Design brutaliste / éditorial : typographie géante, grain animé, curseur custom, images flottantes au survol des projets.

---

## Structure du projet

```
portfolio/
├── index.html              # Page principale (HTML sémantique)
├── css/
│   ├── variables.css       # Design tokens (couleurs, typographie, espacements)
│   ├── base.css            # Reset, base styles, accessibilité
│   ├── layout.css          # Navigation, hero, sections, footer
│   ├── components.css      # Composants UI (projets, stack, stats, cursor...)
│   ├── animations.css      # Keyframes
│   └── responsive.css      # Media queries
├── js/
│   ├── cursor.js           # Curseur personnalisé avec lissage
│   ├── scrollReveal.js     # Animations au scroll (IntersectionObserver)
│   └── projectHover.js     # Images flottantes au survol des projets
└── assets/
    ├── zappy.png           # Screenshot du projet Zappy
    ├── yana-bot.png        # Placeholder Yana-Bot
    ├── dashboard.png       # Placeholder Dashboard
    ├── mypgp.png           # Placeholder MyPGP
    └── raytracer.png       # Placeholder Raytracer
```

---

## Modifier les images des projets

Chaque projet possède un attribut `data-img` dans `index.html` :

```html
<a class="proj" href="#" data-img="assets/zappy.png">
```

1. Place ton screenshot dans le dossier `assets/`
2. Mets à jour le chemin dans `data-img="assets/ton-image.png"`

**Conseil** : utilise des images d'au moins **760 × 520 px** pour un rendu net dans la fenêtre flottante.

---

## Déployer sur GitHub Pages

### Option A — URL racine (recommandée)
`https://matheo-e.github.io`

1. Crée un repo public nommé exactement `Matheo-E.github.io`
2. Pousse les fichiers :
   ```bash
   git init
   git remote add origin https://github.com/Matheo-E/Matheo-E.github.io.git
   git add .
   git commit -m "Initial portfolio"
   git push -u origin main
   ```
3. Va dans **Settings > Pages** → source : `main` / `/ (root)`

### Option B — Sous-chemin
`https://matheo-e.github.io/portfolio`

1. Crée un repo public (ex: `portfolio`)
2. Pousse les fichiers
3. Active GitHub Pages sur la branche `main`

---

## Remplacer les placeholders

| Élément | Emplacement |
|---|---|
| Email | Section Contact → `<a class="mail" href="mailto:...">` |
| LinkedIn / X / CV | Section Contact → `<div class="socials">` |
| Stats chiffrées | Section À propos → `.stat b` |
| Liens GitHub projets | Attributs `href` des `.proj` |

---

## Accessibilité

- Navigation clavier fonctionnelle
- `prefers-reduced-motion` respecté (animations désactivées)
- Structure sémantique (`<nav>`, `<header>`, `<section>`, `<article>`, `<footer>`)
- Textes alternatifs et labels ARIA
