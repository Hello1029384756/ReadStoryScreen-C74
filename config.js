import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCam86oq2XFj1J0iWzmTu5V3yJKhyaQ0bo",
  authDomain: "news-letter-app-13a65.firebaseapp.com",
  databaseURL: "https://news-letter-app-13a65.firebaseio.com",
  projectId: "news-letter-app-13a65",
  storageBucket: "news-letter-app-13a65.appspot.com",
  messagingSenderId: "1022747291527",
  appId: "1:1022747291527:web:1b541178f461c7c75c6d22",
  measurementId: "G-90S5VV5W5V"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()