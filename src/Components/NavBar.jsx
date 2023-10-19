import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  // 24252a
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
          <Link to="/login">
            {" "}
            <button className="bg-orange-400 px-3 py-1 rounded-full">
              LogIn
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
