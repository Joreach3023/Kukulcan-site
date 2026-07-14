# Checklist TestFlight complète — Kukulcan

## 1. Préparation du projet
- [ ] Vérifier que le Bundle Identifier Xcode correspond à App Store Connect.
- [ ] Vérifier que la version marketing est correcte, par exemple `1.0`.
- [ ] Vérifier que le build number est incrémenté à chaque upload.
- [ ] Vérifier l’icône de l’application dans toutes les tailles requises.
- [ ] Vérifier le nom affiché sous l’icône.
- [ ] Vérifier les permissions iOS et les textes `Info.plist` associés.
- [ ] Supprimer les logs de debug inutiles.
- [ ] Tester l’app sur simulateur et sur appareil réel.

## 2. Signature et archivage
- [ ] Sélectionner la bonne équipe Apple Developer.
- [ ] Vérifier les certificats et provisioning profiles.
- [ ] Sélectionner une destination `Any iOS Device` ou appareil réel.
- [ ] Lancer **Product > Clean Build Folder**.
- [ ] Lancer **Product > Archive**.
- [ ] Vérifier que l’archive apparaît dans Organizer.
- [ ] Valider l’archive avant upload.
- [ ] Uploader vers App Store Connect.

## 3. App Store Connect
- [ ] Créer ou vérifier l’app Kukulcan.
- [ ] Vérifier le SKU.
- [ ] Vérifier le Bundle Identifier associé.
- [ ] Renseigner la catégorie principale.
- [ ] Ajouter l’URL de support.
- [ ] Ajouter l’URL de Privacy Policy.
- [ ] Renseigner les informations de contact.
- [ ] Compléter le questionnaire de confidentialité Apple.
- [ ] Déclarer l’utilisation ou non de chiffrement export compliance.

## 4. Métadonnées TestFlight
- [ ] Ajouter une description claire de ce que les testeurs doivent vérifier.
- [ ] Ajouter les instructions de test.
- [ ] Ajouter une adresse de contact pour les retours.
- [ ] Préciser les limitations connues.
- [ ] Indiquer les appareils ou versions iOS recommandés.

## 5. Tests internes
- [ ] Ajouter les testeurs internes.
- [ ] Installer l’app via TestFlight.
- [ ] Vérifier le lancement à froid.
- [ ] Vérifier le lancement après fermeture complète.
- [ ] Vérifier les principaux parcours utilisateur.
- [ ] Vérifier l’affichage en mode clair et sombre si applicable.
- [ ] Vérifier les petits écrans et grands écrans.
- [ ] Vérifier l’absence de crash dans App Store Connect.

## 6. Tests externes
- [ ] Préparer le groupe de testeurs externes.
- [ ] Ajouter les emails des testeurs.
- [ ] Soumettre le build à la revue Beta App Review.
- [ ] Attendre l’approbation Apple.
- [ ] Envoyer l’invitation aux testeurs.
- [ ] Suivre les retours TestFlight.
- [ ] Prioriser les bugs bloquants avant soumission App Store.

## 7. Avant soumission App Store
- [ ] Vérifier les captures d’écran App Store.
- [ ] Vérifier le texte App Store final.
- [ ] Vérifier la Privacy Policy publiée.
- [ ] Vérifier la page Support publiée.
- [ ] Vérifier que les URLs GitHub Pages répondent correctement.
- [ ] Vérifier que les données collectées dans l’app correspondent à la déclaration App Privacy.
- [ ] Préparer les notes pour la revue.
- [ ] Soumettre la version pour review.
