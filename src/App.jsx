import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="font-poppins duration-300 transition-all ease-in-out">
      <ToastContainer />
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
