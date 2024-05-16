import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = () => {
    return async (dispatch) => {
        dispatch( checkingCredentials() );
        console.log("checking authentication");
    };
}


export const startgoogleSignIn = () => {
    return async (dispatch) => {
        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) )

            // delete result.ok;
        dispatch( login( result ) );
    };
}
