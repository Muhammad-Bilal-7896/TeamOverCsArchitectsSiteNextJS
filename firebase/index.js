import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

try {
    const firebaseConfig = {
        apiKey: "AIzaSyD5-0CYCO8a-oH_9T9tofi8Su99GA62a7k",
        authDomain: "teamovercsarchitects.firebaseapp.com",
        databaseURL: "https://teamovercsarchitects-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "teamovercsarchitects",
        storageBucket: "teamovercsarchitects.appspot.com",
        messagingSenderId: "720462066948",
        appId: "1:720462066948:web:56292606a862a858920c51",
        measurementId: "G-0883K2FLYG"
    };
    // Initialize Firebase    
    firebase.initializeApp(firebaseConfig);
    // firebase.firestore().settings({timesstampsInSnapshots:true}) 
} catch (error) {
    if (!/already exists/.test(error.message)) {
        console.log(`Firebase didnt initialize correctly: ${error.message}`)
    }
}

const storage = firebase.storage();

export {
    storage,
    firebase as default
}