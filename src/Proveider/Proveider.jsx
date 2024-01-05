import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)
const Auth = getAuth(app)
const Proveider = ({ children }) => {
const [user, setUser]=useState();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const loginuser=(email,password)=>{
       return signInWithEmailAndPassword(Auth,email,password)
    }
 const logout=()=>{
   return signOut(Auth)
 }
    const ubdateUser=(name, photo)=>{
      return updateProfile(Auth.currentUser,{
        displayName:name,
        photoURL:photo
        })
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(Auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            return ()=>{
                subscribe()
            }
        })
    }, [])

    const AuthInfo = { user,createUser,ubdateUser,logout,loginuser }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Proveider;