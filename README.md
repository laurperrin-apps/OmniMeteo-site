# OmniMeteo-site — version 1.0

Site statique d’information de l’application OmniMeteo.

## Contenu
- `index.html` : présentation de l’application
- `support.html` : support et FAQ
- `confidentialite.html` : politique de confidentialité (à valider avant publication App Store)
- `style.css` : feuille de style commune responsive
- `assets/omnimeteo-icon.png` : icône originale de l’application OmniMeteo

## Déploiement GitHub Pages
Déposer **les fichiers et le dossier `assets` à la racine** du dépôt `OmniMeteo-site` (ne pas ajouter de sous-dossier contenant tout le site). Dans **Settings > Pages**, choisir **Deploy from a branch**, branche `main`, dossier `/(root)`.

Adresse attendue après déploiement :
- https://laurperrin-apps.github.io/OmniMeteo-site/
- https://laurperrin-apps.github.io/OmniMeteo-site/support.html
- https://laurperrin-apps.github.io/OmniMeteo-site/confidentialite.html

## À finaliser avant publication
1. Ajouter un contact réel pour le support et les questions de confidentialité.
2. Vérifier les formulations de la politique de confidentialité par rapport au code de la version définitive.
3. Mettre à jour les pages si des fonctions d’analyse d’usage, publicité, compte ou paiement sont ajoutées.
4. Les polices du site sont chargées depuis Google Fonts ; pour éviter cet appel tiers, supprimer la règle `@import` de `style.css` (des polices de remplacement sont déjà prévues).

La version **1.0** désigne ici la **version du site web**, pas la version actuelle de l’application iOS.
