from flask import Flask, render_template, redirect, url_for, request, flash, session
import os
from datetime import datetime

app = Flask(__name__)

app.secret_key = 'votre_clé_secrète_ici'  # Nécessaire pour les messages flash et sessions

# Injecter 'now' dans le contexte des templates
@app.context_processor
def inject_now():
    return {'now': datetime.now}

# Page d'accueil
@app.route('/')
def home():
    return render_template('home.html', title="Accueil")

# Page À propos
@app.route('/about')
def about():
    return render_template('about.html', title="À propos")

# Page Services
@app.route('/services')
def services():
    services_list = [
        {
            'id': 1,
            'name': 'Développement Web',
            'description': 'Création de sites web modernes et réactifs'
        },
        {
            'id': 2,
            'name': 'Applications Cloud',
            'description': 'Déploiement d\'applications dans le cloud'
        },
        {
            'id': 3,
            'name': 'Containerisation',
            'description': 'Services de containerisation avec Docker et Kubernetes'
        }
    ]
    return render_template('services.html', title="Services", services=services_list)

# Page Contact avec formulaire
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        
        # Simulation d'envoi de message (dans un vrai site, vous enverriez un email)
        flash(f"Merci {name}! Votre message a été envoyé avec succès.", "success")
        return redirect(url_for('contact'))
        
    return render_template('contact.html', title="Contact")

# Page 404 personnalisée
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', title="Page non trouvée"), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=7500, debug=True)