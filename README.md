# Kukulcan — site officiel

Landing page statique et responsive du jeu **Kukulcan**, conçue pour GitHub Pages. Le site est publié à la racine pour fonctionner avec la configuration Pages actuelle et conservé dans `website/` comme source de déploiement dédiée.

## Aperçu local

Le site ne demande aucune installation : ouvrez `website/index.html` dans un navigateur ou servez le dossier `website` avec un serveur HTTP statique.

```powershell
cd website
python -m http.server 4173
```

Puis ouvrez `http://localhost:4173`.

## Structure

- `index.html` — page d’accueil servie par GitHub Pages
- `website/index.html` — copie source utilisée par le workflow Pages
- `website/support.html` — aide et contact
- `website/privacy.html` — politique de confidentialité
- `website/styles.css` — design responsive et animations
- `website/script.js` — menu mobile et apparitions au défilement
- `website/assets/` — illustrations web optimisées au format WebP
- `docs/` — documents existants de préparation App Store et TestFlight

## Déploiement GitHub Pages

Le workflow `.github/workflows/pages.yml` publie automatiquement le dossier `website` à chaque changement sur `main`.

Lors du premier déploiement, ouvrez **Settings → Pages** dans GitHub et choisissez **GitHub Actions** comme source. Le workflow peut ensuite être relancé manuellement depuis l’onglet **Actions** si nécessaire.

Les illustrations ont été créées spécialement pour ce site. Elles ne reprennent aucun asset de Supercell.
