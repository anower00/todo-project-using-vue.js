import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6JjAvRIC8oVo0LCvKPnpk2qd1cRZiLBU",
    authDomain: "todo-project-e55c6.firebaseapp.com",
    databaseURL: "https://todo-project-e55c6.firebaseio.com",
    projectId: "todo-project-e55c6",
    storageBucket: "todo-project-e55c6.appspot.com",
    messagingSenderId: "646697711649"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  db.settings({timestampsInSnapshots: true});

  export default db;
