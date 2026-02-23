import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../firebase';
const Authprovider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const  Register =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const Login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const google =() =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logout =()=>{
        setLoading(true)
      return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
            console.log("current user",currentuser);
            setLoading(false)
        })

        return () =>{
            unsubscribe();
        }
    },[])


    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }

    const userInfo ={
        user,
        loading,
       Login,
       Register,
       google,
       updateUser,
       logout
       
    }

    return (
        <Authcontext.Provider value={userInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;