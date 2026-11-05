# Les Héritiers du large

Site vitrine pour Bertrand Castelnérac — conseil, communication d'entreprise et sponsoring voile à Lorient.

Design inspiré d’Oïkos (containers `max-w-7xl`, blocs / cartes arrondies, palette océan, sur-titres mono type journal de bord).

## Démo en ligne

**https://mnbrault.github.io/heritiers-du-large/**

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Pages

- `/` Accueil
- `/offres` Offres
- `/elite` Élite
- `/academie` Académie
- `/corporatif` Corporatif
- `/bertrand` Bertrand

Les images sont chargées depuis le WordPress actuel (et Wikimedia pour deux crédits CC).

## Déploiement

Chaque push sur `main` publie le site en static export sur GitHub Pages (workflow `.github/workflows/deploy-pages.yml`).
