phase[01-5]:[RUN]init{HowTo}:

1. **Prérequis**
   - Assurez-vous d'avoir Node.js et npm installés sur votre système.
   - Installez Bootstrap en utilisant npm ou un CDN.

2. **Utilisation de npm pour installer Bootstrap**
   - Créez un dossier pour votre projet et naviguez jusqu'à ce dossier dans votre terminal.
   - Exécutez `npm init` pour initialiser votre projet et suivez les invites pour renseigner les détails de votre projet.
   - Exécutez `npm install bootstrap` pour installer Bootstrap.
   - Incluez les fichiers CSS et JS de Bootstrap dans votre projet en utilisant les chemins suivants :
     - CSS: `<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">`
     - JS: `<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>`

3. **Utilisation d'un CDN pour inclure Bootstrap**
   - Incluez les fichiers CSS et JS de Bootstrap dans votre projet en utilisant les liens suivants :
     - CSS: `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`
     - JS: `<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>`
     `<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>`
     `<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>`

4. **Création de composants Bootstrap**
   - Créez un fichier HTML et incluez les fichiers CSS et JS de Bootstrap comme indiqué ci-dessus.
   - Utilisez les classes Bootstrap pour créer des composants tels que des boutons, des formulaires, des cartes, etc.
   - Consultez la documentation officielle de Bootstrap pour plus d'informations sur la création de composants : <https://getbootstrap.com/docs/4.3/components/>

5. **Personnalisation des composants Bootstrap**
   - Utilisez les utilities de Bootstrap pour personnaliser les composants en fonction de vos besoins.
   - Consultez la documentation officielle de Bootstrap pour plus d'informations sur la personnalisation des composants : <https://getbootstrap.com/docs/4.3/utilities/>

phase[01-6]:[END]