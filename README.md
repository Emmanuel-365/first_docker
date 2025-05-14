# FlaskDocker - Application Flask Multipage avec Docker

Ce projet est une application Flask moderne multi-pages conteneurisée avec Docker. Il démontre comment structurer et déployer une application web Flask avec une interface utilisateur attrayante et responsive.

## Fonctionnalités

- Application Flask à plusieurs pages (Accueil, À propos, Services, Contact)
- Design responsive avec Bootstrap 5
- Formulaire de contact interactif
- Structure organisée pour le développement
- Conteneurisation avec Docker
- Dockerfile optimisé et sécurisé

## Structure du projet

```
flaskdocker/
├── app.py                  # Application Flask principale
├── Dockerfile              # Configuration Docker
├── docker-compose.yml      # Configuration Docker Compose
├── requirements.txt        # Dépendances Python
├── static/                 # Fichiers statiques
│   ├── css/
│   │   └── style.css       # Styles personnalisés
│   ├── js/
│   │   └── main.js         # JavaScript personnalisé
│   └── img/
│       └── 404.svg         # Image pour la page 404
└── templates/              # Templates HTML
    ├── base.html           # Template de base (layout)
    ├── home.html           # Page d'accueil
    ├── about.html          # Page À propos
    ├── services.html       # Page Services
    ├── contact.html        # Page Contact
    └── 404.html            # Page d'erreur 404
```

## Prérequis

- Docker et Docker Compose

## Installation et démarrage

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-nom/flaskdocker.git
   cd flaskdocker
   ```

2. Créez les répertoires nécessaires (si pas déjà existants) :
   ```bash
   mkdir -p static/{css,js,img} templates
   ```

3. Lancez l'application avec Docker Compose :
   ```bash
   docker-compose up --build
   ```

4. Accédez à l'application à l'adresse : [http://localhost:7500](http://localhost:7500)

## Utilisation avec Docker

### Construction de l'image

```bash
docker build -t flaskdocker:latest .
```

### Exécution du conteneur

```bash
docker run -p 7500:7500 flaskdocker:latest
```

## Développement

Pour développer cette application :

1. Installez les dépendances dans un environnement virtuel :
   ```bash
   python -m venv venv
   source venv/bin/activate  # Sur Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

2. Exécutez l'application en mode développement :
   ```bash
   python app.py
   ```

## Déploiement

Cette application est prête à être déployée sur n'importe quelle plateforme supportant Docker.

## Licence

MIT

## Auteur

Emmanuel