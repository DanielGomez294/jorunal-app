import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {FirebaseAuth} from "./config"

export const signInWithGoogle = async() => {
    const googleProvider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult(result);

        console.log(credentials);
    } catch (error) {
        console.log(error);
        
    }
}