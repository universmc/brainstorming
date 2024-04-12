document.addEventListener('DOMContentLoaded', function () {
  fetch('srv/json/pi.json') // Assurez-vous que le chemin d'accès est correct
    .then(response => response.json())
    .then(data => {
      const contentElement = document.getElementById('content');

      data.sections.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.className = 'section';

        const titleElement = document.createElement('h2');
        titleElement.textContent = section.title;

        // Création d'un élément <p> pour le contenu de la section
        const textContentElement = document.createElement('p');
        textContentElement.className = 'content-text'; // Classe modifiée pour l'élément <p>
        textContentElement.textContent = section.content;

        // Condition pour ne pas créer d'élément img si l'image n'est pas spécifiée
        if (section.image) {
          const imageElement = document.createElement('img');
          imageElement.src = section.image;
          imageElement.alt = section.title;
          sectionElement.appendChild(imageElement); // Ajout de l'image à la section si présente
        }

        // Création d'un élément <p> pour le promptModel de la section
        const promptModelElement = document.createElement('p');
        promptModelElement.className = 'prompt-model-text'; // Classe pour le promptModel
        promptModelElement.textContent = section.promptModel;

        // Ajout des éléments créés à la section
        sectionElement.appendChild(titleElement);
        sectionElement.appendChild(textContentElement); // Ajout du contenu
        sectionElement.appendChild(promptModelElement); // Ajout du promptModel

        // Ajout de la section complète à l'élément principal 'content'
        contentElement.appendChild(sectionElement);
      });
    })
    .catch(error => console.error('Error loading the JSON:', error));
});
