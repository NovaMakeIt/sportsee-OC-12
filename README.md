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
|-- /assets/          # Icônes, logos et autres ressources statiques
|-- /components/      # Composants React réutilisables
|   |-- /cards/       # Composants pour les cartes d'information (calories, etc.)
|   |-- /charts/      # Composants pour les graphiques (activité, score, etc.)
|   |-- /layout/      # Composants de mise en page (Header, Sidebar)
|   |-- ProfileHeader.jsx # Composant d'en-tête de la page de profil
|-- /pages/           # Composants représentant les pages de l'application
|   |-- Profile.jsx   # Page principale du tableau de bord utilisateur
|-- /services/        # Logique et communication avec l'API
|   |-- api.js        # Fonctions pour les appels à l'API backend
|   |-- dataFormatter.js # Fonctions pour formater les données de l'API
|   |-- mock.js       # Données mockées pour le développement
|-- App.jsx           # Composant racine
|-- main.jsx          # Point d'entrée de l'application React
|-- index.css         # Fichier CSS global (incluant les directives Tailwind)
|-- App.css           # Styles spécifiques au composant App
```
