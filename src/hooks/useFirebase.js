import { getAuth, signInWithPopup, GoogleAuthProvider,  signOut, onAuthStateChanged, GithubAuthProvider  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.initialize";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
 
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(result.user)
        })
        .finally( () => setIsLoading(false))
    }
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user)
        })
        .finally( () => setIsLoading(false))
    }
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            } 
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(result => { })
        .finally( () => setIsLoading(false))
    }
    return {
        user,
        isLoading,
        logOut,
        signInUsingGoogle,
        signInUsingGithub
    }
};

export default useFirebase;