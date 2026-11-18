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
    ├── tempi.png           # Capture de Tempi (démo locale)
    ├── yana-bot.png        # Capture de Yana-Bot (formulaire de scouting)
    ├── zappy.png           # Capture de Zappy
    ├── raytracer.png       # Rendu du Raytracer
    ├── mypgp.jpeg          # Visuel MyPGP
    ├── og-image.png        # Aperçu des liens partagés (1200 × 630)
    ├── CV_Matheo_EMMA_FR.pdf
    └── CV_Matheo_EMMA_EN.pdf
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

## Mettre à jour le CV

Les PDF de `assets/` sont générés depuis la source Typst du CV (`cv.typ`, versions FR et EN).
Remplace simplement les deux fichiers en gardant les mêmes noms.

---

## Accessibilité

- Navigation clavier fonctionnelle
- `prefers-reduced-motion` respecté (animations désactivées)
- Structure sémantique (`<nav>`, `<header>`, `<section>`, `<article>`, `<footer>`)
- Textes alternatifs et labels ARIA
