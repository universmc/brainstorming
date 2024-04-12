document.addEventListener("DOMContentLoaded", function() {
    // Sélection du bouton déclencheur
    var btnOuvrirModal = document.getElementById('ouvrirModal');
  
    // Sélection du modal par son ID
    var monModal = new bootstrap.Modal(document.getElementById('monModal'));
  
    // Ajout de l'écouteur d'événement au clic sur le bouton
    btnOuvrirModal.addEventListener('click', function() {
      monModal.show(); // Affichage du modal
    });
  });
  