# Correction du Bundle Identifier Xcode

Aucun projet Xcode n’est présent dans ce dépôt `Kukulcan-site`, donc la correction ne peut pas être appliquée directement ici.

## Bundle Identifier recommandé
`app.kukulcan.ios`

## Étapes dans Xcode
1. Ouvrir le projet iOS Kukulcan dans Xcode.
2. Sélectionner le projet dans le navigateur de gauche.
3. Sélectionner la target principale de l’application.
4. Ouvrir l’onglet **Signing & Capabilities**.
5. Vérifier l’équipe Apple Developer.
6. Remplacer **Bundle Identifier** par `app.kukulcan.ios` ou par l’identifiant déjà réservé dans App Store Connect.
7. Ouvrir l’onglet **Build Settings**.
8. Rechercher `PRODUCT_BUNDLE_IDENTIFIER`.
9. Vérifier que toutes les configurations utilisent le même identifiant attendu, par exemple :
   - Debug: `app.kukulcan.ios`
   - Release: `app.kukulcan.ios`
10. Vérifier que l’identifiant correspond exactement à l’App ID dans Apple Developer et à l’app créée dans App Store Connect.
11. Nettoyer le build avec **Product > Clean Build Folder**.
12. Archiver à nouveau avec **Product > Archive**.

## Points de contrôle
- Le Bundle Identifier doit être unique.
- Il doit être stable après publication.
- Il doit correspondre au provisioning profile utilisé pour TestFlight.
- Il ne doit pas contenir d’espace, d’accent ou de caractère spécial non autorisé.
