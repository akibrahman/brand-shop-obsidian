import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="font-poppins">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
