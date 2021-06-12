import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDEJcszPMHpdHA3doLIe81ty-HuJ2XMtvk",
    authDomain: "booksystem-5f35c.firebaseapp.com",
    projectId: "booksystem-5f35c",
    storageBucket: "booksystem-5f35c.appspot.com",
    messagingSenderId: "904296891980",
    appId: "1:904296891980:web:489161fc8dc2fa998616e9"
};
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;