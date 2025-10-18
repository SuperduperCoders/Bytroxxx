// Simple working chat implementation
function simpleChat() {
    console.log('Simple chat function called');
    
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!userInput) {
        console.error('User input not found');
        return;
    }
    
    const message = userInput.value.trim();
    if (!message) {
        console.log('No message to send');
        return;
    }
    
    console.log('Sending message:', message);
    
    // Add user message
    const userDiv = document.createElement('div');
    userDiv.className = 'message user-message';
    userDiv.innerHTML = `
        <div class="message-avatar">👤</div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    chatMessages.appendChild(userDiv);
    
    // Clear input
    userInput.value = '';
    
    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.className = 'message ai-message';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <p>Bytrox AI is typing...</p>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Get AI response
    fetch(`${window.AI_CONFIG.apiUrl}?key=${window.AI_CONFIG.apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: `You are Bytrox AI, a cybersecurity assistant. Answer this question: ${message}`
                        }
                    ]
                }
            ]
        })
    })
    .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('AI response data:', data);
        
        // Remove typing indicator
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
        
        // Add AI response
        const aiResponse = data.candidates && data.candidates[0] && data.candidates[0].content 
            ? data.candidates[0].content.parts[0].text 
            : 'Sorry, I could not generate a response.';
            
        const aiDiv = document.createElement('div');
        aiDiv.className = 'message ai-message';
        aiDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <p>${aiResponse}</p>
            </div>
        `;
        chatMessages.appendChild(aiDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    })
    .catch(error => {
        console.error('Error:', error);
        
        // Remove typing indicator
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
        
        // Show error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'message ai-message';
        errorDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <p>Sorry, I encountered an error: ${error.message}</p>
            </div>
        `;
        chatMessages.appendChild(errorDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });
}

// Make it globally available
window.simpleChat = simpleChat;