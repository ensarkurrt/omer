import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDMoJDBKyWfrz3Xeab4-vhuA3UoECP6e3Y',
  authDomain: 'hakan-proje.firebaseapp.com',
  projectId: 'hakan-proje',
  storageBucket: 'hakan-proje.appspot.com',
  messagingSenderId: '741683604740',
  appId: '1:741683604740:web:dc5c52c293aa4f2bb63451',
};

// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

const auth = firebase.default.auth();

export { auth };
