# Security Guidelines for Bytrox

## API Key Security

### ⚠️ Critical Security Practices

1. **Never commit API keys to version control**
   - The `config.js` file is gitignored for this reason
   - Always use the template file (`config.template.js`) as reference

2. **API Key Management**
   - Keep API keys in `config.js` (local development only)
   - Use environment variables in production
   - Regularly rotate your API keys
   - Monitor API key usage in Google Cloud Console

3. **Local Development Setup**
   ```bash
   # Copy the template
   cp config.template.js config.js
   
   # Edit config.js with your real API key
   # This file will NOT be committed to Git
   ```

### 🔒 Security Features Implemented

1. **Console Log Protection**
   - API keys are not logged to browser console
   - Only API endpoints are logged for debugging

2. **Enhanced Validation**
   - Checks for placeholder values
   - Validates minimum key length
   - Prevents empty or invalid keys

3. **File Protection**
   - Comprehensive `.gitignore` patterns
   - Multiple security file extensions excluded
   - Template-based configuration system

### 🛡️ Production Security Recommendations

1. **Environment Variables**
   ```javascript
   // For production deployment
   window.AI_CONFIG = {
     apiKey: process.env.GOOGLE_API_KEY,
     apiUrl: process.env.API_URL || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent'
   };
   ```

2. **API Key Restrictions**
   - Restrict API keys to specific domains
   - Enable HTTP referrer restrictions
   - Set up API quotas and limits

3. **Monitoring**
   - Monitor API usage patterns
   - Set up alerts for unusual activity
   - Regular security audits

### 📋 Security Checklist

- [ ] API key is not in any committed files
- [ ] `config.js` contains your real API key (locally only)
- [ ] API key has proper restrictions in Google Cloud Console
- [ ] No API keys in browser console logs
- [ ] Regular API key rotation schedule
- [ ] Monitoring and alerts configured

### 🚨 What to do if API key is exposed

1. **Immediate Actions**
   - Revoke the exposed API key in Google Cloud Console
   - Generate a new API key
   - Update your local `config.js` file

2. **Investigation**
   - Check Git history for any commits containing keys
   - Review access logs in Google Cloud Console
   - Monitor for unusual API usage

3. **Prevention**
   - Review security practices
   - Update team training
   - Consider automated secret scanning

### 📞 Support

If you discover any security issues, please report them responsibly by:
1. Not posting in public issues
2. Contacting the maintainers directly
3. Providing detailed reproduction steps

Remember: Security is everyone's responsibility! 🔐