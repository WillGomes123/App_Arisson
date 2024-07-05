import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig ={

}

if(firebase.apps.length === 0)
    {
        firebase.initializeApp(firebaseConfig)
        console.log('Conectado')
    }

const db = getDatabase();

export {db}