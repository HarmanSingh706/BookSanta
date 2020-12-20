import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBjGywWswscwqVYUPLcr8pFjTeMzDkeltU",
    authDomain: "booksanta-84d39.firebaseapp.com",
    projectId: "booksanta-84d39",
    storageBucket: "booksanta-84d39.appspot.com",
    messagingSenderId: "546135590405",
    appId: "1:546135590405:web:75bfd6922030cf037e7e6c"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore();