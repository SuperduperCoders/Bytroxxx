# Bytrox Setup Instructions

## API Configuration

This project requires a Google API key for the AI chat functionality. The API keys are **not included** in the repository for security reasons.

### Setup Steps:

1. **Get a Google API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the "Generative Language API"
   - Create credentials (API Key)

2. **Configure the API Key:**
   - Copy `config.template.js` to `config.js`
   - Replace `'YOUR_GOOGLE_API_KEY_HERE'` with your actual API key
   - Save the file

3. **Important Security Notes:**
   - **NEVER** commit `config.js` to version control
   - The `config.js` file is already in `.gitignore`
   - Keep your API keys secure and private
   - API keys are NOT logged to console for security
   - Regularly rotate your API keys
   - See `SECURITY.md` for comprehensive security guidelines

### File Structure:
```
├── config.template.js  (Template - safe to commit)
├── config.js          (Your actual config - DO NOT COMMIT)
├── .gitignore         (Prevents config.js from being committed)
├── SECURITY.md        (Security guidelines and best practices)
└── API_SETUP.md       (This file)
```

### Running the Application:
1. Complete the API configuration above
2. Start a local server (e.g., `python -m http.server 8000`)
3. Open `http://localhost:8000` in your browser

The AI chat feature will only work after properly configuring your API key.