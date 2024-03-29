import firebase from 'firebase';

export const firebaseConfig = {
 apiKey: "AIzaSyBElRnjFpnDnwgxoiPGag51v4vgtx1e5LY",
  authDomain: "exipry-reminder-app.firebaseapp.com",
  projectId: "exipry-reminder-app",
  storageBucket: "exipry-reminder-app.appspot.com",
  messagingSenderId: "553825683924",
  appId: "1:553825683924:web:6fbdb8088697f2203b6e41"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
