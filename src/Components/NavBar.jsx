import { useContext } from "react";
import { BiUser } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // 24252a
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="font-poppins bg-[#131313] text-[#edf0f1]">
      <nav className="flex items-center justify-between w-[90%] mx-auto py-3">
        <div className="">
          <p className="font-rancho text-4xl border-2 px-3 py-1 rounded-full border-orange-400">
            Obsidian
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
        <div className="">
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
                className="bg-red-500 px-3 py-1 rounded-full"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
