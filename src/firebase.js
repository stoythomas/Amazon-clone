import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKy-aakXK1x623UsBOb_e29yzkKHw2cik",
    authDomain: "clone-a738f.firebaseapp.com",
    databaseURL: "https://clone-a738f.firebaseio.com",
    projectId: "clone-a738f",
    storageBucket: "clone-a738f.appspot.com",
    messagingSenderId: "321125508624",
    appId: "1:321125508624:web:426352b72108445fe88c95"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth};