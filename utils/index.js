import config from "./serviceAccountKeys.json"
import {  getApps ,  initializeApp  } from "firebase/app"
import {  getFirestore } from "firebase/firestore"
import {  getStorage  } from "firebase/storage"

let app ; 
if (getApps().length < 1) {
     let  app  = initializeApp(config );
    // Initialize other firebase products here
    
}
const db =  getFirestore ( app )
const storage = getStorage ( app )


export { db , storage }  ;


