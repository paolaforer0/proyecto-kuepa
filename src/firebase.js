import firebase from 'firebase';

  var firebaseConfig = {

    apiKey: "AIzaSyB4xbDX3SZ0iRNqe8Y_g6EBWb6QEnQ9I24",

    authDomain: "proyecto-andrea-dd524.firebaseapp.com",

    projectId: "proyecto-andrea-dd524",

    storageBucket: "proyecto-andrea-dd524.appspot.com",

    messagingSenderId: "1086733966102",

    appId: "1:1086733966102:web:c66e26fa0258264b8c4e37",

    measurementId: "G-C4EDQ42KTB"

  };

  // Initialize Firebase

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;