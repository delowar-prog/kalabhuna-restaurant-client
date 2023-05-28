import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
const auth = getAuth(app);
const [user, setUser]=useState('')
const [loading, setLoading]=useState(true)

const registerUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const loginUserWithPass=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const googleProvider=new GoogleAuthProvider()
const loginWithGoogle=()=>{
    return signInWithPopup(auth, googleProvider)
}

const logoutUser=()=>{
    setLoading(true)
    return signOut(auth)
}
//set Observer
useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        return unSubscribe()
    }
},[auth])

const authInfo={
    user,
    loading,
    registerUser,
    loginUserWithPass,
    logoutUser,
    loginWithGoogle
}
  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider