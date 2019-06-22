import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'
import store from '../store/index'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdhErLmi2qYrMftaB7XOONlnhZKeBiwvQ",
  authDomain: "tntt-web.firebaseapp.com",
  databaseURL: "https://tntt-web.firebaseio.com",
  projectId: "tntt-web",
  storageBucket: "tntt-web.appspot.com",
  messagingSenderId: "453315755351",
  appId: "1:453315755351:web:9cddfe0607046bf3"
});

var db = firebaseApp.firestore();
firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

export function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

export function logout() {
  firebase.auth().signOut();
}

export function onAuth() {
  firebase.auth().onAuthStateChanged(user => {
    user = user ? user : {};
    store.dispatch("onAuthStateChanged", user);
    store.dispatch("onUserStatusChanged", user.uid ? true : false);
  })
}

export {
  db  
}