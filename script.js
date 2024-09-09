function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    const chatBox = document.getElementById('chatBox');

    if (userMessage.trim() !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user-message');
        messageDiv.textContent = userMessage;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
        document.getElementById('userMessage').value = '';
        setTimeout(simulateAutoResponse, 2000);
    }
}
 
function simulateAutoResponse() {
    const chatBox = document.getElementById('chatBox');
    const autoResponses = [
        'Hola, ¿cómo estás?',
        '¿Necesitas ayuda con algo?',
        '¡Qué bien! Cuéntame más.',
        'Estoy aquí para ayudarte.',
        '¿Cuál es tu próximo paso?',
        '¡Eso suena genial!',
        '¿Tienes alguna duda?',
        'Es un día soleado por aquí.',
        'Sigue adelante, ¡vas muy bien!'
    ];

    const randomResponse = autoResponses[Math.floor(Math.random() * autoResponses.length)];
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'auto-message');
    messageDiv.textContent = randomResponse;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
