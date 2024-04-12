const fs = require("fs").promises;
const readline = require("readline");
const Groq = require("groq-sdk");
const groq = new Groq();
const prompt = require("prompt-promise");


// Configuration initiale de l'assistant
const defaultAssistantData = {
  nom: 'assistant',
  description: "Bonjour, je suis votre assistant IA 'pi'."
};

// Fonction pour modifier le nom de l'assistant
function changeAssistantName(newName) {
  defaultAssistantData.description = newName;
  console.log(`💎_pi: ${defaultAssistantData.description}`);
}

// Fonction pour récupérer l'entrée utilisateur
async function getUserInput(promptMessage) {
  return prompt(promptMessage);
}

// Fonction pour charger les données d'une nouvelle persona
async function loadPersonaData(personaName) {
  try {
    const data = await fs.readFile(`./json/persona_${personaName}.json`, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erreur lors du chargement de la persona ${personaName}:`, error);
    return null;
  }
}

// Fonction principale pour gérer le flux de dialogue
async function main() {
  let sessionActive = true;
  let currentPersona = defaultAssistantData.nom;

  while (sessionActive) {
    const userInput = await getUserInput(`[${currentPersona}] Entrez votre message ou 'quitter' pour terminer : `);

    if (userInput.toLowerCase() === "quitter") {
      sessionActive = false;
      console.log("💎_pi : Au revoir !");
      continue;
    }

    if (userInput.toLowerCase().startsWith("/persona ")) {
      const newPersona = userInput.split("/persona ")[1];
      const newAssistantData = await loadPersonaData(newPersona);

      if (newAssistantData) {
        changeAssistantName(newAssistantData.description);
        currentPersona = newAssistantData.nom;
        console.log(`💎_pi : Changement de persona effectué. Nouvelle persona : ${newPersona}`);
      } else {
        console.log(`Assistant: La persona ${newPersona} n'existe pas.`);
      }
      continue;
    }

    if (userInput.toLowerCase().startsWith("/role ")) {
      const newRole = userInput.split("/role ")[1];
      if (newRole === "assistant" || newRole === "system") {
        currentPersona = newRole;
        console.log(`Changement de rôle effectué. Nouveau rôle : ${newRole}`);
      } else {
        console.log(`Role non valide. Veuillez choisir "assistant" ou "system".`);
      }
      continue;
    }

    // Génération de réponses avec Groq SDK
    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "assistant",
            content: "comment fonctionne ce system ?"
          },
          {
            role: "system",
            content: "default"
          },
          {
            role: "user",
            content: userInput
          }
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.6,
        max_tokens: 1024,
        top_p: 1,
        stream: false,
        stop: null
      });

      const fullResponse = chatCompletion.choices[0]?.message?.content || "Désolé, je n'ai pas compris.";
      console.log(`💎_pi : ${fullResponse}`);
    } catch (error) {
      console.error("Erreur lors de la génération de la réponse de l'assistant :", error);
    }
  }

  prompt.finish();
}

(async () => {
  try {
    await main();
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
  }
})(); 