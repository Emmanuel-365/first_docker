# Utilisation de l'image officielle Python comme base
FROM python:3.9-slim

# Définition des variables d'environnement
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=7500

# Création d'un utilisateur non-root
RUN adduser --disabled-password --gecos "" appuser

# Création et définition du répertoire de travail
WORKDIR /app

# Copie des fichiers de dépendances
COPY requirements.txt .

# Installation des dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Copie du code de l'application
COPY app.py .
COPY static/ ./static/
COPY templates/ ./templates/

# Changement de propriétaire pour les fichiers
RUN chown -R appuser:appuser /app

# Passage à l'utilisateur non-root
USER appuser

# Exposition du port
EXPOSE 7500

# Commande de démarrage
CMD ["python", "app.py"]