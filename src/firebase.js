import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyCJbjSlxFutfjTFLxiKkWq8dNX7PEfqjUI",
  authDomain: "listatarefasone.firebaseapp.com",
  databaseURL: "https://listatarefasone.firebaseio.com",
  projectId: "listatarefasone",
  storageBucket: "listatarefasone.appspot.com",
  messagingSenderId: "1098084185951",
  appId: "1:1098084185951:web:0d1cdc9fc865f8756e68ea",
  measurementId: "G-SGPVP1GXP4",
});

export const db = app.firestore();
//export const todosCollection = db.collection("listaTarefas");
