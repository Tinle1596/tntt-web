import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDdhErLmi2qYrMftaB7XOONlnhZKeBiwvQ",
    authDomain: "tntt-web.firebaseapp.com",
    databaseURL: "https://tntt-web.firebaseio.com",
    projectId: "tntt-web",
    storageBucket: "tntt-web.appspot.com",
    messagingSenderId: "453315755351",
    appId: "1:453315755351:web:9cddfe0607046bf3"
  };

const firebaseApp = firebase.initializeApp(config)
const firestore = firebaseApp.firestore()

firestore.settings({timestampsInSnapshots: true})

export default firestore