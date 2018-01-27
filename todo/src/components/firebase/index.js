import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAuhNX-gc3dWASBgwi-HTkJ-BhFtRsG-kc",
    authDomain: "personal-8e150.firebaseapp.com",
    databaseURL: "https://personal-8e150.firebaseio.com",
    projectId: "personal-8e150",
    storageBucket: "personal-8e150.appspot.com",
    messagingSenderId: "133273874234"
};

const firebaseApp = firebase.initializeApp(config);

export const database = firebaseApp.database();