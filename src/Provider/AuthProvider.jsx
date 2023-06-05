import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUserWithPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleProvider = new GoogleAuthProvider()
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    //set Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            //get & set into localstorage
            if (currentUser) {
                axios.post(`http://localhost:5000/jwt`, {
                    email: currentUser.email
                }).then(data => {
                        localStorage.setItem('access_token', data.data.token)
                        setLoading(false)
                    })
            }else{
                localStorage.removeItem('access_token')
            }
            
        })
        return () => {
            return unSubscribe()
        }
    }, [auth])

    const authInfo = {
        user,
        loading,
        registerUser,
        loginUserWithPass,
        logoutUser,
        loginWithGoogle,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider