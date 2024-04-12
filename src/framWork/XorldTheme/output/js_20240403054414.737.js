Je suis heureux de vous aider. Si vous voulez afficher un message dans la console lors du chargement de la page d'index à l'aide de JavaScript, vous pouvez utiliser le code suivant :

```javascript
console.log("Page index chargée avec succès !");
```

Il suffit de créer un fichier nommé script.js et de coller ce code dans ce fichier. Puis, dans la page index.html, liez le fichier script.js en utilisant la balise `<script>` comme suit :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page d'index</title>
</head>
<body>
    <!-- Contenu de la page -->

    <!-- Liaison du fichier script.js -->
    <script src="script.js"></script>
</body>
</html>
```

Veillez à enregistrer le fichier script.js dans le même répertoire que la page index.html pour qu'il soit correctement chargé.