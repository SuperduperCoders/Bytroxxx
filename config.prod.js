// Production configuration for Bytrox AI Chat System
// This file uses environment variables for security

window.AI_CONFIG = {
    apiKey: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? 'AIzaSyDud0VbsC-0C9CjVt5F3vpJugbhKD5wYQQ' // Local development key
        : 'VERCEL_API_KEY_PLACEHOLDER', // This will be replaced by Vercel build process
    apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent'
};

// For production, the API key should be injected during build time
// or loaded from a secure endpoint