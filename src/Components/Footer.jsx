import { useContext } from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Footer = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <footer
      className={`border-t ${isDark ? "bg-[#AAADB2]" : "bg-[#202126]"}   py-8`}
    >
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <div className="">
          <p className="text-4xl mb-10">Obsidian</p>
          <div className="list-none mb-10">
            <li className="mb-3">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-3">
              <Link to="/add-product">Add Product</Link>
            </li>
            <li className="mb-3">
              <Link to="/my-cart">My Cart</Link>
            </li>
          </div>
          <div className="flex items-center gap-8">
            <BsFacebook className="text-3xl"></BsFacebook>
            <BsTwitter className="text-3xl"></BsTwitter>
            <BsInstagram className="text-3xl"></BsInstagram>
            <BsYoutube className="text-3xl"></BsYoutube>
          </div>
        </div>
        <div className="space-y-4">
          <p className="capitalize text-2xl">Subscribe us to Explore more</p>
          <div className="flex items-center">
            <input
              className="outline-none bg-transparent border rounded-md px-5 py-3 rounded-e-none border-e-0"
              type="email"
              name=""
            />
            <button className="border p-3 rounded-md rounded-s-none">
              Subscribe
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" name="" id="" />{" "}
            <p>By Clicking the box, You are accepting our Terms</p>
          </div>
        </div>
      </div>
      <p className="text-xl text-center">&copy; 2023 Obsidian</p>
    </footer>
  );
};

export default Footer;
