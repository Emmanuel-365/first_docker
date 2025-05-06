# TP Docker - Application Flask conteneurisée

Ce projet est une démonstration de conteneurisation d'une application Flask simple avec Docker.  
Il a été réalisé dans le cadre du TP1 du cours de conteneurisation (B2).

## Auteur

**Emmanuel**

---

## 📦 Contenu du projet

- `app.py` : application web Flask simple
- `Dockerfile` : instructions pour construire l'image Docker
- `requirements.txt` : dépendances Python (Flask)
- `commandes.txt` : historique des commandes utilisées pour construire, exécuter et publier l’image
- `README.md` : description du projet

---

## 🚀 Instructions pour exécuter le projet

### 1. Construire l’image Docker

```bash
docker build -t emmanuel-flask-app .
