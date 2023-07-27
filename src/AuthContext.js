import { useContext, createContext, useEffect,useState } from "react";
import { GoogleAuthProvider,signInWithPopup, signOut, onAuthStateChanged, updateCurrentUser
} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState({});
    const googleSignIn =()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    };
    const logOut=()=>{
        signOut(auth)
    }


     useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        console.log(currentUser)
        });
        return()=>{
            unsubscribe();
        }
     },[])
    return(
        <AuthContext.Provider value={{googleSignIn, user, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth=()=>{
    return useContext(AuthContext)
}