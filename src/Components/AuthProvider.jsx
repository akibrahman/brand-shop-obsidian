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
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [bg, setBg] = useState("#131313");
  const [textC, setTextC] = useState("#edf0f1");
  const [isDark, setIsDark] = useState(true);
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
  useEffect(() => {
    if (isDark) {
      setBg("#131313");
      setTextC("#edf0f1");
    }
    if (!isDark) {
      setBg("#edf0f1");
      setTextC("#131313");
    }
  }, [isDark]);
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
        bg,
        textC,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
