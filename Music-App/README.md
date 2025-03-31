# MusicApp 🎵

Ce projet est une application React permettant de rechercher des albums et d'écouter des extraits musicaux via l'API iTunes.

## Prérequis

Avant d'exécuter le projet, assurez-vous d'avoir installé les dépendances suivantes :

### 1. Node.js et npm

- [Télécharger et installer Node.js](https://nodejs.org/)
- Vérifier l'installation avec les commandes :
  ```sh
  node -v
  npm -v
  ```

### 2. Installer les dépendances du projet

Dans le répertoire du projet, exécutez la commande suivante pour installer toutes les dépendances nécessaires :
  ```sh
  npm install
  ```

### 3. Dépendances utilisées

Le projet utilise les bibliothèques suivantes :

- **React** : bibliothèque JavaScript pour construire l'interface utilisateur
- **React Router** (`react-router-dom`) : gestion de la navigation entre les pages
- **React Hooks** (`useState`, `useEffect`) : gestion de l'état et des effets de bord
- **react-js-loader** : affichage d'un loader lors des chargements asynchrones
- **Fetch API** : récupération des données depuis l'API iTunes

Ces dépendances sont installées automatiquement via `npm install`.

## Lancer le projet

Pour démarrer le projet en mode développement, exécutez :
  ```sh
  npm start
  ```
Le projet sera accessible à l'adresse :
  ```
  http://localhost:3000
  ```

## Structure du projet

```
/src
  ├── components
  │   ├── Music.js   # Composant principal pour la recherche
  │   ├── Album.js   # Composant affichant les détails d'un album
  │   ├── Music.css  # Styles pour la page de recherche
  │   ├── Album.css  # Styles pour la page d'album
  ├── App.js        # Point d'entrée de l'application
  ├── index.js      # Initialisation de React et React Router
```

## Fonctionnalités

- Recherche d'albums via l'API iTunes
- Filtrage pour afficher uniquement un album unique (sans doublons)
- Affichage des détails d'un album et de ses morceaux
- Lecture des extraits audio
- Navigation entre la page de recherche et la page d'album

## API utilisée

Le projet utilise l'API **iTunes Search API** pour récupérer les données musicales :

- Recherche d'un artiste ou album :
  ```
  https://itunes.apple.com/search?term={recherche}
  ```
- Détails d'un album :
  ```
  https://itunes.apple.com/lookup?id={albumId}
  ```
- Liste des morceaux d'un album :
  ```
  https://itunes.apple.com/lookup?id={albumId}&entity=song
  ```

## Auteur
Projet développé par **[Blue 974]**.

---