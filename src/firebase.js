import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAu2dC0FsKbpHqyQL-tBDhaksl7By1hJLk",
    authDomain: "firechatonew.firebaseapp.com",
    projectId: "firechatonew",
    storageBucket: "firechatonew.appspot.com",
    messagingSenderId: "228542820495",
    appId: "1:228542820495:web:34f62cda6697d7acf940fa"
}).auth();