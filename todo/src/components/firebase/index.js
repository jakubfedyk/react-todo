import firebase from 'firebase'

var config = {
    apiKey: "",
    authDomain: "creat-b33cf.firebaseapp.com",
    databaseURL: "https://creat-b33cf.firebaseio.com",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
firebase.initializeApp(config);
export const database = firebaseApp.database();