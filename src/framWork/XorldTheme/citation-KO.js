const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {
    
  const citation =
    "Le combat des idées se fait maintenant avec les gants CONTRE Emmanuel Macron, le champion du monde de la PUNG line! 🥊🇫🇷";

  const sujet = "Combat des idées avec Emmanuel Macron";
  const verbe = "BOXER";
  const complement = "Avec des gants de boxe et des emojis Punchline";


  const contexte =
    "Un gameplay emoji(🛠️,👍,🥊,🇫🇷,+✨💪,💰,🔥,🏛,🌍,📊,💻,🗣,🤝,💥,🤖,[🥊🤖🥊],🤓,🤩,🎈,🎥,📺,🥊,🏫,🗝️,🏴‍☠️,+ /DevOps Meta Donnée G20-Boxing)ou une application prototype de boxe à l'Élysée, où les joueurs s'entraînent à boxer avec des gants de boxe et des emojis Punchline pour remporter le combat des idées contre Emmanuel Macron. Les pirates informatiques aident à créer et à promouvoir l'application en y intégrant de l'IA et en diffusant des Punchline pour rallier les joueurs à la cause";
    const PunchLine = contexte;


    const Ressource = "http[`http://archive.org`projet `https://github.com/universmc/DisKetCrypto` Méthode de recherche google.com gcloud ml projetFinal http://Ia.univers-mc.cloud/DisKetCrypto/ CDN Bootstrap(css:<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>;javascript:<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>)";

    const gameplay1 = "🇫🇷 Sélectionnez votre avatar de boxeur et vos gants{🥊} de boxe personnalisés avec des emojis Punchline";
    const gameplay2 = "Entraînez-vous à boxer en regardant des vidéos d'entraînement et en donnant des coups de poing dans le punching ball avec l'image d'Emmanuel Macron.";
    const gameplay3 = "Gagnez des points et de l'argent en tapant fort dans le punching ball.";
    const gameplay4 = "Utilisez vos points pour améliorer vos compétences de boxe et acheter de nouveaux gants de boxe et des emojis Punchline.";
    const gameplay5 = "Confrontrez Macron dans le ring de boxe à l'Élysée et essayez de le battre avec vos meilleures techniques de boxe.";
    const gameplay6 = "Gagnez le combat des idées en remportant le plus de rounds de boxe.";
    const gameplay7 = "Partagez vos scores et vos performances sur les réseaux sociaux pour défier d'autres joueurs.";

    const gameplay = "1.(🇫🇷)Sélectionnez votre avatar de boxeur et vos gants{🥊} de boxe personnalisés avec des emojis Punchline";
    
  
    groq.chat.completions.create({
    messages: [
      {role: "system",content: `"${citation}"`},
      {role: "assistant",content: `"${gameplay}"`},
      {role: "user",content: `"${PunchLine}"`},
      {role: "user",content: `"${Ressource}"`},
      {
        role: "assistant",
        content:
          "[RUN][Devops]phase1:initalisation de l'instance groq +emoji"
      },
      {
        role: "system",
        name:"G20-Boxing",
        content:"gameplay emoji(🛠️,👍,🥊,🇫🇷,+✨💪,💰,🔥,🏛,🌍,📊,💻,🗣,🤝,💥,🤖,[🥊🤖🥊],🤓,🤩,🎈,🎥,📺,🥊,🏫,🗝️,🏴‍☠️,+ /DevOps Meta Donnée G20-Boxing) "
      },
      {
        role: "assistant",
        name:"geek1",
        content:"groq -R `user,content:'${Ressource}+CDN BOOTSTRAP'`"
      }
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.3,
    max_tokens: 1024,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion) => {
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath =
      "output/🥊🇫🇷-68_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log(
      "Documentation générée et enregistrée dans " + outputFilePath
    );
  });
}

main();
