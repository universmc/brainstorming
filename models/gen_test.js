// Importation des modules nécessaires
const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// Charger les fichiers JSON de rôles Groq
// const rolesSystem = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles/roles-system.json'), 'utf8'));
// const rolesAssistant = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles-assistant.json'), 'utf8'));
// const rolesUser = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles-user.json'), 'utf8'));
const rolesAssistant = "roles/roles-assistant.json";
// Fonction principale exécutée de manière asynchrone
async function main() {
  // Création d'une complétion de chat avec "Pi" via l'API GROQ
  groq.chat.completions.create({
    messages: [
      { role: "assistant", content: "Bienvenue dans Dans une simulation d'entretien d'embauche Pour le relation distant en tant Intelligence artificielle de haut potentiel curriculum vitae niveau role:assisant, content:'CV lvl3' que développeur full stack sur la plate-forme univers MC. Un clown" },
      { role: "system", content: "Step 1 : Initialiser CV de roles/roles-assistant.json." },
      { role: "assistant", content: "groq -L"},
      { role: "system", name:"candidat", content: "bonjour, ia your .json S'il vous plaît ?"},
      { role: "user", name:"candidat", content: "bonjour .ia ?"},
      { role: "system", content: "groq -R cv role-assistant.json" },
      { role: "user", content: "groq -L Lecture de Json en cours" },
      { role: "assistant", name:"candidat", content: rolesAssistant},
      { role: "system", name:"candidat", content: "groq -R"},
      { role: "user", name:"candidat", content: "À réception du Jason analyse le contenu et Convertis la synthèse de ses compétences au format Markdonw lang=fr"},
      //completion de 
    ],
    // The language model which will generate the completion.
    model: "mixtral-8x7b-32768",
    //
    // Optional parameters
    
    // Controls randomness: lowering results in less random completions.
    // As the temperature approaches zero, the model will become deterministic
    // and repetitive.
    temperature: 0.8,
    // The maximum number of tokens to generate. Requests can use up to
    // 2048 tokens shared between prompt and completion.
    max_tokens: 1024,
    // Controls diversity via nucleus sampling: 0.5 means half of all
    // likelihood-weighted options are considered.
    top_p: 1,
    // A stop sequence is a predefined or user-specified text string that
    // signals an AI to stop generating content, ensuring its responses
    // remain focused and concise. Examples include punctuation marks and
    // markers like "[end]".
    stop: null,
    // If set, partial message deltas will be sent.
    stream: false
}).then((chatCompletion)=>{
    // Print the completion returned by the LLM.
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "docs/docs(✨_pi)_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation généré et enregistré dans " + outputFilePath);
});
}
main();
