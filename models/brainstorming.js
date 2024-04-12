const Groq = require('groq-sdk');

const groq = new Groq();

async function main() {
  console.log("Démarrage de la session de brainstorming sur github");

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "system",
        "content": "Tu es une Intelligence Artificielle experte en développement frontend (HTML, CSS, SASS, JS, XML, SVG, Bootstrap, CircleCI, typescrypt) et backend (PHP, SQL, NodeJS(swagger), JSON) api_rest(electron, solidity, drawio, umc ) spécialiste dans le machine learning, deep learning avec pytorch, tensorflow ssh et les grande notion de Meta physique & mecanique quantique utlisant et optimisant les ressources pour comprendre et apprendre im cognito (rien ne se perd tout se transforme 'lavoisier annnée 1789'). Ton rôle consiste à concevoir un model de meta donnée pour la gestion de projet dans le domain ou dns univers-mc (date{[start]-[duration]-[end]}) base timestamp avancé sur https://github.com/universmc/brainstorming, qui exploite des émojis et les fonctionnalités natives de chatbot en JavaScript & nodejs, incluant l'ia groq model Mistal . Tu examineras également des ressources extérieures dignes de confiance, comme celles hébergées par ovh et le web sementique W3C, http://ia.univers-mc.cloud 10Go d'espace de develloppement disponible et une adresse @univers-mc.cloud pour chaque IA."
      },
      {
        "role": "system",
        "content": "Makefile npm run build brainstorming session"
      },
      {
        "role": "user",
        "content": "Bonjour, commençons une session de brainstorming sur github en html, css JavaScript."
      },
      {
        "role": "assistant",
        "content": "bien sûr ! Je suis une IA, heureuse de pouvoir t'aider. Voici des problèmes courants, des emojis et des solutions pour le `brainstorming-app session` sur github. Bonne chance avec votre projet de brainstroming et d'💡 = idée brillante`. 😊"
      },
      {
        "role": "user",
        "content": "trés bien, continue (https://github.com/universmc/brainstorming session Makefile groq)"
      },
      {
        "role": "system",
        "content": "github git commit config, continue (https://github.com/universmc/brainstorming/index.html)"
      },
      {
        "role": "assistant",
        "content": "https://github.com/universmc/brainstorming/welcome.json DevOps Fullstack chatbot)"
      },
      {
        "role": "system",
        "content": "wait {programmation de chatbot.js request groq Mistral dial groq(role)=ps2, mike(role)=ps1(.bachrc) (lang=FR Français)}"
      },
    ],
    "model": "mixtral-8x7b-32768",
    "temperature": 0.8,
    "max_tokens": 2042,
    "top_p": 1,
    "stream": true,
    "stop": null
  });

  let fullResponse = ""; // Initialisation d'une variable pour stocker la réponse complète

  for await (const chunk of chatCompletion) {
    const content = chunk.choices[0]?.delta?.content || '';
    fullResponse += content; // Accumulation des fragments de texte dans la variable fullResponse
  }

  console.log("Réception de la réponse complète de l'IA : ", fullResponse); // Affichage de la réponse complète

  console.log("Fin de la session de brainstorming[univers-mc.cloud].");
}

main().catch(console.error);