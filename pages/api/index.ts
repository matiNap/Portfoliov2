require('dotenv').config();
import firebase from 'firebase';
import 'firebase/firestore';

const CONFIG_STR = process.env.FIREBASE_CONFIG;

const config = CONFIG_STR ? JSON.parse(CONFIG_STR) : {};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export default firebase.firestore;
