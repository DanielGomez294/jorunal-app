import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        console.log("checking authentication");
    };
}


export const startgoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        console.log({result});
    };
}
