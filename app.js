const chatbot = document.getElementById('chatbot');
const inputMessage = document.getElementById('input-message');
const sendButton = document.getElementById('send-button');

// Intégrez ici les fonctionnalités de chatbot et d'IA Groq Model Mistral

sendButton.addEventListener('click', () => {
    const message = inputMessage.value;
    if (message.trim()) {
        addMessage('user', message);
        // Appelez ici l'API de l'IA Groq Model Mistral avec `message`
    }
});

function addMessage(role, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', role);
    messageElement.textContent = text;
    chatbot.appendChild(messageElement);
}