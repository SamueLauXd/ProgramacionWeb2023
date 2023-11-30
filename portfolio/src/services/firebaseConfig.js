// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from 'firebase/firestore'

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCtdMTZLMBZxqd1kYSCLzVX6Wuu8eiV4oA',
  authDomain: 'program-web-89a1e.firebaseapp.com',
  projectId: 'program-web-89a1e',
  storageBucket: 'program-web-89a1e.appspot.com',
  messagingSenderId: '1078267383055',
  appId: '1:1078267383055:web:7a73762e3463bb22a5027a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app)

const querySnapshot = await getDocs(collection(db, "projects"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
