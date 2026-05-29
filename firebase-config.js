// Firebase Configuration for Halo AAC
// Using Firebase Compat SDK for broad compatibility
// Replace these values with your Firebase project credentials from:
// https://console.firebase.google.com → Project Settings → Your apps

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase state
let firebaseApp = null;
let firebaseStorage = null;
let firebaseAuth = null;
let firebaseSyncEnabled = false;

function initFirebase() {
  if (typeof firebase === 'undefined') {
    console.warn('Firebase SDK not loaded yet');
    return false;
  }
  
  try {
    firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
    firebaseStorage = firebase.storage();
    firebaseAuth = firebase.auth();
    
    // Monitor authentication state
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        console.log('Firebase user authenticated:', user.email);
        haloGoogleUser = {
          name: user.displayName || user.email,
          email: user.email,
          picture: user.photoURL || ''
        };
        firebaseSyncEnabled = true;
        // Auto-load user data from Firebase on login
        loadUserDataFromFirebase().then(firebaseData => {
          if (firebaseData) {
            mergeFirebaseData(firebaseData);
            buildCats();
            buildGrid();
            refreshPD();
            refreshPS();
          }
        });
      } else {
        console.log('Firebase user logged out');
        firebaseSyncEnabled = false;
      }
    });
    
    console.log('Firebase initialized successfully');
    return true;
  } catch (e) {
    console.error('Firebase initialization error:', e);
    return false;
  }
}

// Save complete user data to Firebase Storage
async function saveUserDataToFirebase() {
  if (!firebaseStorage || !haloGoogleUser || !firebaseSyncEnabled) {
    console.warn('Firebase not ready or user not authenticated');
    return false;
  }

  try {
    const userDataBlob = {
      lastSyncedAt: new Date().toISOString(),
      profiles: data.profiles || {},
      currentProfile: data.currentProfile || null,
      customWords: data.customWords || {},
      removedWords: data.removedWords || {},
      wordPack: data.wordPack || 'essential',
      portalHash: data.portalHash || null,
      engine: data.engine || 'google',
      sysVoice: data.sysVoice || null,
      accent: data.accent || '#2c7be5',
      accentDark: data.accentDark || '#0b63d6',
      bg: data.bg || '#f0f2f5',
      setup: data.setup || false
    };
    
    const fileRef = firebaseStorage.ref(`users/${haloGoogleUser.email}/data.json`);
    await fileRef.putString(JSON.stringify(userDataBlob), 'raw', { 
      contentType: 'application/json',
      cacheControl: 'public, max-age=3600'
    });
    
    console.log('✓ User data synced to Firebase');
    return true;
  } catch (e) {
    console.error('Firebase sync error:', e);
    return false;
  }
}

// Load user data from Firebase Storage
async function loadUserDataFromFirebase() {
  if (!firebaseStorage || !haloGoogleUser) {
    console.warn('Firebase not ready or user not authenticated');
    return null;
  }

  try {
    const fileRef = firebaseStorage.ref(`users/${haloGoogleUser.email}/data.json`);
    
    // Get download URL and fetch the file
    const url = await fileRef.getDownloadURL();
    const res = await fetch(url);
    const content = await res.text();
    const userDataBlob = JSON.parse(content);
    
    console.log('✓ User data loaded from Firebase');
    return userDataBlob;
  } catch (e) {
    if (e.code === 'storage/object-not-found' || e.message.includes('404')) {
      console.log('ℹ No existing data in Firebase for this user (first login)');
    } else {
      console.error('Firebase load error:', e);
    }
    return null;
  }
}

// Merge Firebase data with local data (Firebase data takes priority)
function mergeFirebaseData(firebaseData) {
  if (!firebaseData) return;
  
  const keysToMerge = [
    'profiles',
    'currentProfile',
    'customWords',
    'removedWords',
    'wordPack',
    'portalHash',
    'engine',
    'sysVoice',
    'accent',
    'accentDark',
    'bg',
    'setup'
  ];
  
  keysToMerge.forEach(key => {
    if (firebaseData[key] !== undefined) {
      data[key] = firebaseData[key];
    }
  });
  
  save();
  console.log('ℹ Data merged from Firebase');
}

// Auto-save to Firebase whenever local data changes
// Call this after any data modification
async function autoSaveToFirebase() {
  if (firebaseSyncEnabled) {
    await saveUserDataToFirebase();
  }
}

// Initialize Firebase when page loads
window.addEventListener('load', () => {
  setTimeout(() => {
    if (initFirebase()) {
      console.log('Firebase SDK is ready for sync');
    }
  }, 1000);
});
