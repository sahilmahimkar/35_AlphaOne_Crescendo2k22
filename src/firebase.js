import * as firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJ4H06HfwDzl_HmlFrLvjiNPutNIlQX00",
  authDomain: "researchers-platform.firebaseapp.com",
  projectId: "researchers-platform",
  storageBucket: "researchers-platform.appspot.com",
  messagingSenderId: "841901292331",
  appId: "1:841901292331:web:315c0ff5e5642300d4a36e",
  measurementId: "G-B3BL8GYDRN"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db,auth};