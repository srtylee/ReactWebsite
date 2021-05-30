import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'; 

var firebaseConfig = {
    apiKey: "AIzaSyDWAcu9uJbcE5FGVxSuiHbpT6AS9cgI8Hg",
    authDomain: "hacker-ca020.firebaseapp.com",
    projectId: "hacker-ca020",
    storageBucket: "hacker-ca020.appspot.com",
    messagingSenderId: "605289721782",
    appId: "1:605289721782:web:3ff15727de1ad9674c1b17"
  };
 
  firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth;
export const firestore = firebase.firestore;

export default firebaseConfig;
