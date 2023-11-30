import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../services/firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";

export function AuthContextProvider({ children }) {
    //Creating, login, and setting uer state
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return unsuscribe
    }, [])

    const login = async (userData) => {
        const { email, password } = userData
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            if (userCredential) {
                <Navigate to='/dashboard'/>
            }
        } catch (error) {
            console.error(error)
            if (error.code === 'auth/email-already-in-use') {
                const userCredential = await signInWithEmailAndPassword(auth, email, password)
                if (userCredential) {
                    <Navigate to='/dashboard'/>
                }
            }
        }
    }

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}