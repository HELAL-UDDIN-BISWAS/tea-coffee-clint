import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)
const Auth = getAuth(app)
const Proveider = ({ children }) => {
    const [user, setUser] = useState();
    const [loding, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const loginuser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const googleSign=()=>{
       return signInWithPopup(Auth,provider)
    }
    const logout = () => {
        return signOut(Auth)
    }
    const ubdateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(Auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(Auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
            return () => {
                subscribe()
            }
        })
    }, [])

    const AuthInfo = { user, createUser, ubdateUser, logout, loginuser, loding, googleSign }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Proveider;