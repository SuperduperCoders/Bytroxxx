# 🎵 Background Music for Bytrox

## Adding Real Music

To enable actual background music instead of synthetic audio:

1. **Find an MP3 file** you want to use as background music
2. **Rename it to `track.mp3`** 
3. **Place it in this folder** (`assets/music/track.mp3`)
4. **Reload the page** - the audio player will automatically detect and use your file

## Recommended Music Sources

### Free & Legal Music (CC0 - No Attribution Required)
- **Pixabay Music**: https://pixabay.com/music/
- **Freesound**: https://freesound.org/ (filter by CC0)
- **Zapsplat**: https://www.zapsplat.com/ (free account required)
- **Free Music Archive**: https://freemusicarchive.org/

### Cyberpunk/Electronic Style Recommendations
- Search for: "cyberpunk", "synthwave", "ambient electronic", "dark synthwave"
- Look for: "loopable", "seamless", "background music"
- Duration: 2-5 minutes works well for looping

## File Requirements

- **Format**: MP3 (most compatible)
- **Size**: Under 10MB recommended for web performance  
- **Length**: 2-5 minutes (will loop automatically)
- **Quality**: 128-320 kbps is sufficient

## Audio Controls

Once you add `track.mp3`:
- The audio player will appear in the header
- Use the floating audio button (🔊) to access volume controls
- Play/Pause button will control your music file
- Volume slider affects both background music and sound effects

## Technical Notes

- The audio player falls back to synthetic Web Audio API sounds if no MP3 is found
- Your music file is loaded locally - no internet connection required after setup
- The audio respects browser autoplay policies (may require user interaction to start)

---

**Legal Reminder**: Only use music you have rights to use. When in doubt, stick to CC0/public domain sources.