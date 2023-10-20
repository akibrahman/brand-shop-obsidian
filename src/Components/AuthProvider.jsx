import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import propTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [isDark, setIsDark] = useState(false);
  const [AS, setAS] = useState(true);
  const [load, setLoad] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const un = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
      setLoad(false);
    });
    return () => un();
  }, [auth, AS]);
  const createUser = (email, password) => {
    setLoad(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser = (email, password) => {
    setLoad(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoad(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    setLoad(true);
    return signInWithPopup(auth, githubProvider);
  };
  const logOut = () => {
    setLoad(true);
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        load,
        user,
        auth,
        AS,
        setAS,
        createUser,
        logInUser,
        googleLogin,
        githubLogin,
        logOut,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: propTypes.node.isRequired,
};
export default AuthProvider;
