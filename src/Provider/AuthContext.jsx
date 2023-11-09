import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import auth from "../authentication.config";
import axios from "axios";


export const userContext = createContext(null);
// eslint-disable-next-line
const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createEmailPasswordUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createGoogleUser = () => {
        const provider = new GoogleAuthProvider();
        setLoader(true);
        return signInWithPopup(auth, provider);

    }

    const loggedinUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user




                setUser(user);
                setLoader(false);

            } else {
                // User is signed out
                // ...
                setLoader(true);
            }
        }
        )
    }, []);

    const signUp = () => {
        signOut(auth).then(() => {
            setUser(null);
            setLoader(false)
        }).catch(() => {

        });
    }


    const authInfo = {
        user,
        loader,
        createEmailPasswordUser,
        createGoogleUser,
        loggedinUser,
        signUp,
    }

    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;