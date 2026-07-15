# Kukulcan — site officiel

Landing page statique et responsive du jeu **Kukulcan**, conçue pour GitHub Pages.

## Aperçu local

Le site ne demande aucune installation : ouvrez `website/index.html` dans un navigateur ou servez le dossier `website` avec un serveur HTTP statique.

```powershell
cd website
python -m http.server 4173
```

Puis ouvrez `http://localhost:4173`.

## Structure

- `website/index.html` — page d’accueil
- `website/support.html` — aide et contact
- `website/privacy.html` — politique de confidentialité
- `website/styles.css` — design responsive et animations
- `website/script.js` — menu mobile et apparitions au défilement
- `website/assets/` — illustrations web optimisées au format WebP
- `docs/` — documents existants de préparation App Store et TestFlight

## Déploiement GitHub Pages

GitHub Pages ne permet pas de sélectionner arbitrairement le dossier `/website`. Pour publier ce dossier tel quel, utilisez une action GitHub Pages ou déplacez son contenu dans `/docs` ou à la racine de la branche publiée.

Les illustrations ont été créées spécialement pour ce site. Elles ne reprennent aucun asset de Supercell.
