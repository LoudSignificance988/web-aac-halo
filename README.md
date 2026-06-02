# Halo AAC

Browser-based Augmentative and Alternative Communication (AAC) app with cloud backup via Google and Firebase.

## Features

- **Word Grid**: Easy-to-use word buttons organized by categories
- **TTS Engines**: Google, System, ResponsiveVoice, Puter AI
- **Cloud Sync**: Sign in with Google to backup and sync across devices
- **Parent Portal**: Password-protected interface to manage word banks
- **Multiple Profiles**: Support for different users
- **Customization**: Theme colors, backgrounds, voice settings
- **Export/Import**: Local backup and restore via code

## Tech Stack

- Vanilla JavaScript (no build step needed)
- Firebase (Auth + Firestore)
- HTML5 + CSS3
- Responsive design

## Setup

1. Clone the repo
2. Open `index.html` in a web browser
3. (Optional) Deploy to GitHub Pages or any static host

## Firebase Configuration

The app uses a Firebase project for authentication and cloud sync. The `FIREBASE_CONFIG` in `app.js` contains credentials for the shared demo project.

To use your own Firebase:
1. Create a Firebase project
2. Enable Google Sign-In in Auth
3. Create a Firestore database
4. Update `FIREBASE_CONFIG` in `app.js`

## File Structure

```
.
├── index.html       # HTML template
├── app.js           # All JavaScript code
└── README.md        # This file
```

## Deployment

### GitHub Pages
1. Push to GitHub repo
2. Enable GitHub Pages in repo settings (main branch)
3. App will be live at `https://yourusername.github.io/halo-aac`

### Netlify / Vercel
Drag and drop the folder or connect your GitHub repo.

## Credits

Built on Kaelynn Partlow's AAC concept.

## License

MIT
