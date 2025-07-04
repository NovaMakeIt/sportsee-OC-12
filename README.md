# SportSee - Tableau de bord d'analytics sportif

SportSee est une application web développée avec React qui permet aux utilisateurs de suivre leurs activités sportives et d'analyser leurs performances à travers des graphiques interactifs.

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :
- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Installation

1.  Clonez le dépôt du projet :
    ```bash
    git clone https://github.com/NovaMakeIt/sportsee-OC-12.git
    ```
2.  Naviguez dans le dossier du projet :
    ```bash
    cd sportsee-OC-12
    ```
3.  Installez les dépendances :
    ```bash
    npm install
    # ou
    yarn install
    ```

## Lancer le projet

Pour lancer l'application en mode développement, exécutez la commande suivante :

```bash
npm run dev
# ou
yarn dev
```

L'application sera alors accessible à l'adresse `http://localhost:5173`.

## Lancer le backend

Ce projet nécessite un backend pour fournir les données. Assurez-vous de cloner et de lancer le backend fourni pour ce projet dans un terminal séparé.

1. Clonez le dépôt du backend.
2. Suivez les instructions du `README.md` du backend pour l'installer et le lancer (généralement sur le port 3000).

## Structure du projet

```
/src
|-- /api/           # Fonctions pour les appels à l'API et le formatage des données
|-- /assets/        # Images, icônes et autres ressources statiques
|-- /components/    # Composants React réutilisables
|   |-- /charts/    # Composants de graphiques (ex: ActivityBarChart)
|   |-- /cards/     # Composants de cartes (ex: KeyInfoCard)
|   |-- /layout/    # Composants de mise en page (Header, Sidebar)
|-- /hooks/         # Hooks React personnalisés
|-- /models/        # Modèles de données ou classes
|-- /pages/         # Composants de page (ex: Profile, Home)
|-- App.jsx         # Composant racine de l'application
|-- main.jsx        # Point d'entrée de l'application
|-- index.css       # Fichier CSS global avec TailwindCSS
```
