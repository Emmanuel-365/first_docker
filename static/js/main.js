// Script principal

// Attendre que le document soit chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('FlaskDocker application ready!');
    
    // Ajouter la classe fade-in aux éléments principaux
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.classList.add('fade-in');
    }
    
    // Gérer les alertes auto-fermantes
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }, 5000); // Fermer après 5 secondes
    });
    
    // Activer tous les tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Gérer la soumission du formulaire de contact
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Vous pouvez ajouter une validation côté client ici si nécessaire
            console.log('Formulaire soumis');
        });
    }
    
    // Ajouter l'année actuelle dans le footer
    const yearElement = document.querySelector('#current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Fonction pour valider une adresse email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Fonction pour afficher un message toast
function showToast(message, type = 'info') {
    // Vous pouvez implémenter une fonction de toast ici si nécessaire
    console.log(`Toast (${type}): ${message}`);
}