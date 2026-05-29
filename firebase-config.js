// Firebase Configuration for Halo AAC
// Using Firebase Modular SDK v9+
// Your actual Firebase project credentials

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getStorage, ref, uploadString, getBytes, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB79mC7YqkZeNvdowRFkbBfu53PV2Qo7pk",
  authDomain: "halo-add.firebaseapp.com",
  projectId: "halo-add",
  storageBucket: "halo-add.firebasestorage.app",
  messagingSenderId: "144851220987",
  appId: "1:144851220987:web:bd57adec75e2daafea335e",
  measurementId: "G-4SYHLHX63S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

let firebaseSyncEnabled = false;

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('✓ Firebase user authenticated:', user.email);
    haloGoogleUser = {
      name: user.displayName || user.email,
      email: user.email,
      picture: user.photoURL || ''
    };
    firebaseSyncEnabled = true;
    updateGoogleUI();
    
    // Auto-load user data from Firebase on login
    loadUserDataFromFirebase().then(firebaseData => {
      if (firebaseData) {
        mergeFirebaseData(firebaseData);
        buildCats();
        buildGrid();
        refreshPD();
        refreshPS();
        setStatus('✓ Synced from cloud');
      }
    });
  } else {
    console.log('ℹ Firebase user logged out');
    firebaseSyncEnabled = false;
  }
});

// Save complete user data to Firebase Storage
async function saveUserDataToFirebase() {
  if (!storage || !haloGoogleUser || !firebaseSyncEnabled) {
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
    
    const fileRef = ref(storage, `users/${haloGoogleUser.email}/data.json`);
    await uploadString(fileRef, JSON.stringify(userDataBlob, null, 2), 'raw', { 
      contentType: 'application/json'
    });
    
    console.log('✓ Synced to Firebase');
    return true;
  } catch (e) {
    console.error('Firebase sync error:', e);
    return false;
  }
}

// Load user data from Firebase Storage
async function loadUserDataFromFirebase() {
  if (!storage || !haloGoogleUser) {
    return null;
  }

  try {
    const fileRef = ref(storage, `users/${haloGoogleUser.email}/data.json`);
    
    // Get download URL and fetch the file
    const url = await getDownloadURL(fileRef);
    const res = await fetch(url);
    const content = await res.text();
    const userDataBlob = JSON.parse(content);
    
    console.log('✓ Loaded from Firebase');
    return userDataBlob;
  } catch (e) {
    if (e.code === 'storage/object-not-found' || e.message.includes('404')) {
      console.log('ℹ First login - no previous data in cloud');
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
