// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

// Your actual Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk4bEzDn5TNnXtU-YzEAUUN0Tmtf2-D_o",
  authDomain: "watch-124dc.firebaseapp.com",
  projectId: "watch-124dc",
  storageBucket: "watch-124dc.firebasestorage.app",
  messagingSenderId: "480409913849",
  appId: "1:480409913849:web:8656c444fdacf264825528"
}

// Initialize Firebase app
const app = initializeApp(firebaseConfig)

// Init Firestore DB
const db = getFirestore(app)

export {
  db,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
}
