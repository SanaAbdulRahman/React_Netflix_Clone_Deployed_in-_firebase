import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../services/firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("AuthCotext : auth:", auth);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  function signUp(email, password) {
    //console.log("Email:", email, "Password : ", password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User created:", userCredential);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
    setDoc(doc(db, "users", email), {
      favShows: [],
    });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
