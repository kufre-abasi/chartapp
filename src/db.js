import firebase from "firebase/compat/app";
import "firebase/compat/app"

const config = {
    apiKey: "AIzaSyCwH26NDndgSPL-0RKnazECb6yWT7EKfQw",
    authDomain: "fir-chartapp.firebaseapp.com",
    databaseURL: "https://fir-chartapp-default-rtdb.firebaseio.com",
    projectId: "fir-chartapp",
    storageBucket: "fir-chartapp.appspot.com",
    messagingSenderId: "207348647044",
    appId: "1:207348647044:web:ec99b61f69537741b7aed1"
};

const db = firebase.initializeApp(config);
export default db;