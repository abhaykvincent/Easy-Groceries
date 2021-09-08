export const rfConfig = {
  userProfile: 'users', // root that user profiles are written to
  useFirestoreForProfile: true, // Save profile to Firestore instead of Real Time Database
  useFirestoreForStorageMeta: true, // Metadata associated with storage file uploads goes to Firestore
};

export const fbConfig = {
  apiKey: "AIzaSyAo1WDROb0yucNZVFL5zVzWfBKqc7iK_-M",
  authDomain: "easy-groceries-online.firebaseapp.com",
  projectId: "easy-groceries-online",
  databaseURL: 'https://easy-groceries-online.firebaseio.com',
  storageBucket: "easy-groceries-online.appspot.com",
  messagingSenderId: "725690312992",
  appId: "1:725690312992:web:b1f51294a195aa05134f45",
  measurementId: "G-4J57NP1FT0"
};

export const segmentId = '';

export const publicVapidKey = 'your-project-vapid-key';

export const sentryDsn = '';
