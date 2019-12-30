import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCs-h3NNmEr7B2sXVoqbmtv2cAg1NboD2Q",
    authDomain: "eventos-30208.firebaseapp.com",
    databaseURL: "https://eventos-30208.firebaseio.com",
    projectId: "eventos-30208",
    storageBucket: "eventos-30208.appspot.com",
    messagingSenderId: "946842527360",
    appId: "1:946842527360:web:fd21dfe925110e983da865"
};

export default firebase.initializeApp(firebaseConfig);