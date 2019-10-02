import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'
import '@firebase/functions'
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
var functions = firebase.functions();

export function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

export function logout() {
  firebase.auth().signOut();
}

export function onAuth() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {      
      return user.reload().then(() => {        
        return user.getIdTokenResult(true).then((idTokenResult) =>{          
          user.claims = idTokenResult.claims;          
          store.dispatch("onAuthStateChanged", user);
          store.dispatch("onUserStatusChanged", user.uid ? true : false);
        });
      })      
    }    
    user = user ? user : {};
    store.dispatch("onAuthStateChanged", user);
    store.dispatch("onUserStatusChanged", user.uid ? true : false);
  })
}

export {
  db,
  functions
}