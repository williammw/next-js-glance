import admin from 'firebase-admin'
// import firebase from 'firebase'
import serviceAccount from './serviveAccountKey.json';
// const admin = require('firebase-admin');
// admin.initializeApp();



if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // databaseURL: "YOUR_DB_URL"
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}


export default admin.firestore();
