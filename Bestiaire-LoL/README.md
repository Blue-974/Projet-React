# Bestiaire League of Legends

Ce projet est une application React permettant d'afficher et de rechercher des champions de League of Legends à partir de l'API Data Dragon.

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
- **Vite** : outil de build rapide pour les projets React
- **React Hooks** (`useState`, `useEffect`) : gestion de l'état et des effets de bord
- **Fetch API** : récupération des données depuis l'API Data Dragon

Ces dépendances sont installées automatiquement via `npm install`.

## Lancer le projet

Pour démarrer le projet en mode développement, exécutez :

```sh
npm run dev
```

Le projet sera accessible à l'adresse :

```
http://localhost:5173
```

## Build du projet

Pour générer une version optimisée pour la production :

```sh
npm run build
```

## Structure du projet

```
/src
  ├── components
  │   ├── Bestiaire.jsx   # Composant principal
  │   ├── Bestiaire.css  # Styles du composant
  ├── App.jsx           # Point d'entrée de l'application
  ├── main.jsx         # Initialisation de React avec Vite
```

## Fonctionnalités

- Affichage de la liste des champions de League of Legends
- Recherche dynamique des champions
- Affichage des détails d'un champion (statistiques, rôles, sorts)
- Récupération des données depuis l'API officielle de Riot Games

## API utilisée

Le projet utilise l'API **Data Dragon** de League of Legends pour récupérer les données des champions :

- Liste des champions :
  ```
  https://ddragon.leagueoflegends.com/cdn/14.6.1/data/fr_FR/champion.json
  ```
- Détails d'un champion :
  ```
  https://ddragon.leagueoflegends.com/cdn/14.6.1/data/fr_FR/champion/{championId}.json
  ```

## Auteur

Projet développé par **[Blue 974]**.

---