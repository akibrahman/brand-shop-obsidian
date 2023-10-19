import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [AS, setAS] = useState(true);
  const [load, setLoad] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
      setLoad(false);
    });
  }, [auth, AS]);
  const createUser = (email, password) => {
    setLoad(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser = (email, password) => {
    setLoad(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoad(true);
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ load, user, auth, AS, setAS, createUser, logInUser, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
