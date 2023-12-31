import { useContext } from "react";
import { BiMoon, BiUser } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import logo from "/logo.png";

const NavBar = () => {
  const { isDark, setIsDark, user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((e) => console.log(e));
  };
  const handleMode = () => {
    setIsDark(!isDark);
  };
  return (
    <div className="font-poppins select-none">
      <nav className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 lg:justify-between w-[90%] mx-auto py-3">
        <div className="">
          <p className="font-rancho text-4xl border-2 px-3 py-1 rounded-full border-orange-400 flex items-center gap-3">
            Obsidian
            <img className="w-10 h-10" src={logo} alt="" />
          </p>
        </div>
        <div className="flex items-center gap-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/add-product">
            <p>Add Product</p>
          </NavLink>
          <NavLink to="/my-cart">
            <p>My Cart</p>
          </NavLink>
        </div>
        <div className="flex items-center gap-5">
          {!user ? (
            <Link to="/login">
              {" "}
              <button className="bg-orange-400 px-3 py-1 rounded-full">
                Log In
              </button>
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <p>{user.displayName ? user.displayName : "No Name"}</p>
              {user.photoURL ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <BiUser></BiUser>
              )}
              <button
                onClick={handleLogOut}
                className="bg-red-500 px-3 py-1 rounded-full text-white"
              >
                Log Out
              </button>
            </div>
          )}
          {!isDark ? (
            <BiMoon
              onClick={handleMode}
              className="text-2xl cursor-pointer"
            ></BiMoon>
          ) : (
            <BsSun
              onClick={handleMode}
              className="text-2xl cursor-pointer"
            ></BsSun>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
