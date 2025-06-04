import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';



export const AuthContext = createContext()


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
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth , (currentUser)=>{
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
        logOut
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;