import { getAuth, signInWithPopup, GoogleAuthProvider,  signOut, onAuthStateChanged, GithubAuthProvider  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.initialize";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
 
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
        .catch(error => {
            setError(error.massage)
        })
    }
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {

        })
    }
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            } 
            else{
                setUser({})
            }
        })
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        signOut(auth)
        .then(result => { })
    }
    return {
        user,
        error,
        logOut,
        signInUsingGoogle,
        signInUsingGithub
    }
};

export default useFirebase;