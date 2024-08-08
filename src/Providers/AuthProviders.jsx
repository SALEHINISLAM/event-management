import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import { auth, database } from "../Firebase/firebase.config";
  import { GoogleAuthProvider } from "firebase/auth";
  import PropTypes from 'prop-types';
  import { ref, set } from "firebase/database";
  
  export const AuthContext=createContext(null);
  const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const createUser = async (email, password, fullName) => {
      setLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: fullName,
        });
        await set(ref(database, "user", user.uid), {
          fName: fullName,
          email: email,
        });
        setUser(user);
        setLoading(false);
        return userCredential;
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    //create user end
    const signIn = async (email, password) => {
      setLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userCredential.user);
        setLoading(false);
        return userCredential;
      } catch (err) {
        setLoading(false);
        throw err;
      }
    };
    //signIn end
    const signInWithGoogle = async () => {
      setLoading(true);
      const googleProvider = new GoogleAuthProvider();
      try {
        const res = await signInWithPopup(auth, googleProvider);
        const user=res.user;
        const userRef=ref(database,"users/"+user.uid);
        await set(userRef,{
  fName:user.displayName,
  email: user.email,
        })
        setUser(user)
        setLoading(false);
        return res.user;
      } catch (err) {
        setLoading(false);
        throw err;
      }
    };
    //sign in with google end
    const logOut = async () => {
      setLoading(true);
      try {
        await signOut(auth);
        setUser(null);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        throw err;
      }
    };
    //logout end
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("user in state changed");
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      signInWithGoogle,
      logOut,
    };
  
    return <div>
      <AuthContext.Provider value={authInfo}>
          {
              children
          }
      </AuthContext.Provider>
    </div>;
  };
  AuthProviders.propTypes={
      children: PropTypes.node.isRequired, 
  }
  export default AuthProviders;