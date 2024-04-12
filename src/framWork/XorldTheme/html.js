const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
        
            {
                role: "system",
                content: "Génère le code HTML/CSS d'une page index.html bien stylé avec ces  const Ressource = http[`http://archive.org`projet `https://github.com/universmc/DisKetCrypto' Méthode de recherche https://www.google.com norme Méthode d'apprentissage automatique deep_learning:https://www.w3big.com/ et le composant Modal <div class='myModalJS'></div> sur des emoji(🛠️,👍,🥊,🇫🇷,+✨💪,💰,🔥,🏛,🌍,📊,💻,🗣,🤝,💥,🤖,[🥊🤖🥊],🤓,🤩,🎈,🎥,📺,🥊,🏫,🗝️,🏴‍☠️,+ /DevOps Meta Donnée G20-Boxing) avec un element déclancheur addevenlistener [💬.picker] avec en info Wiki [🤖.emoji]: `https://www.wikidata.org/wiki/User:Gpt.univers-mc`[ 📔.codex]  gcloud ml projetFinal http://Ia.univers-mc.cloud/DisKetCrypto/ CDN Bootstrap(css:<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>;javascript:<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>);"
            },
            {
                role: "assistant",
                content: "Voici le code HTML/CSS d'une page web stylé :"
            },
        
            // Set a user message for the assistant to respond to.
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.4,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 4096,
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
        const htmlContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/html_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Code HTML généré et enregistré dans " + outputFilePath);
    });

}
main();
