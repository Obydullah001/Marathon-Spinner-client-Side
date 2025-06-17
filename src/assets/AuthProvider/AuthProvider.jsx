import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';





export const AuthContext = createContext()

const googleprovider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , SetLoading] = useState(true)



    const createUser =(email , password)=>{
        SetLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const updatedUser = (updatedData)=>{
        SetLoading(true);
        return updateProfile(auth.currentUser , updatedData )
    }
    const logOut = ()=>{
        SetLoading(true)
        return signOut(auth)
    }
    const googleSignIn = ()=>{
        SetLoading(true)
        signInWithPopup(auth , googleprovider )
    }

    const logInUser =(email , password)=>{
        SetLoading(true);
        return signInWithEmailAndPassword(auth , email , password)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth , (currentUser)=>{
         if (currentUser) {
        const token = currentUser.getIdToken();
        setUser({ ...currentUser, accessToken: token }); 
      } else {
        setUser(null);
      }
        setUser(currentUser)
        SetLoading(false)
       })
       return()=>{
        unsubscribe();
       }
    },[])

    const authData ={
        user,
        setUser,
        createUser,
        loading ,
        SetLoading,
        updatedUser,
        logOut,
        logInUser,
        googleSignIn
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;