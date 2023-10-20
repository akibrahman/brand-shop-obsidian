import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#131313] border-t text-white p-4">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <p>&copy; 2023 Obsidian</p>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
          <li>
            <Link to="/my-cart">My Cart</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
