import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./Components/AuthProvider";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

function App() {
  const { isDark } = useContext(AuthContext);
  return (
    <div
      className={`font-poppins duration-300 transition-all ease-in-out ${
        isDark ? "bg-[#edf0f1]" : "bg-[#131313]"
      } ${isDark ? "text-[#131313]" : "text-[#edf0f1]"}`}
    >
      <ToastContainer />
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
