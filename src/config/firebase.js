import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'
import { auth } from 'vuex';

const config = {
    apiKey: "AIzaSyDdhErLmi2qYrMftaB7XOONlnhZKeBiwvQ",
    authDomain: "tntt-web.firebaseapp.com",
    databaseURL: "https://tntt-web.firebaseio.com",
    projectId: "tntt-web",
    storageBucket: "tntt-web.appspot.com",
    messagingSenderId: "453315755351",
    appId: "1:453315755351:web:9cddfe0607046bf3"
  };

export default {
  init() {
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    firebase.firestore();        
  },  
  login() {
    const provider = new firebase.auth.gGoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  },
  logout() {
    firebase.auth().signOut();
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      auth.commit("onAuthStateChanged", user);
      auth.commit("onUserStatusChanged", user.uid ? true : false);
    })
  }
}