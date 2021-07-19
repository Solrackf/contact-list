import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDh2yAhCd1gTLPwJuKbiyQ_HF30q24U2mA",
    authDomain: "contacts-project-31a68.firebaseapp.com",
    projectId: "contacts-project-31a68",
    storageBucket: "contacts-project-31a68.appspot.com",
    messagingSenderId: "862851182659",
    appId: "1:862851182659:web:7ee49d797399b9640824f6",
    measurementId: "G-LFYKY90PDW"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore()
export {database}