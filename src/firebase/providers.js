import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config"

export const signInWithGoogle = async() => {
    const googleProvider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult(result);

        const { displayName, email, photoURL, uid } = result.user;


        return{
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        // const errorCode = error.code;
        const errorMessage = error.message;


        return{
            ok: false,
            errorMessage
        }
    }
}