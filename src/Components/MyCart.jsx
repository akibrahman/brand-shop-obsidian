import { useContext, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";

const MyCart = () => {
  const { isDark } = useContext(AuthContext);
  const loadedData = useLoaderData();
  const [products, setProducts] = useState(loadedData);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "This product will be removed from your cart",
      icon: "warning",
      showCancelButton: true,
      background: `${!isDark ? "#111" : "#fff"}`,
      color: `${!isDark ? "#fff" : "#111"}`,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://brand-shop-server-3qi9r082v-akib-rahmans-projects.vercel.app/cartDelete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = products.filter((p) => p._id !== id);
            setProducts(remaining);
          });
        Swal.fire("Deleted!", "Your Product has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto gap-6 py-20">
        {products.map((product) => (
          <div
            key={product._id}
            className={`flex items-center gap-4 lg:gap-10 border-2 rounded-xl p-2 ${
              !isDark ? "bg-[#24252A]" : "bg-[#AAADB2]"
            }`}
          >
            <img className="w-32 h-36 rounded-xl" src={product.image} alt="" />
            <div className="flex-1">
              <p
                className={`${
                  !isDark ? "text-orange-400" : "text-orange-700"
                } text-xl`}
              >
                {product.name}
              </p>
              <p>{product.brandName}</p>
              <p>{product.type}</p>
            </div>
            <div className="flex flex-col gap-4 mr-3">
              <Link to={`/product/${product.productID}`}>
                <BsArrowRight className="bg-orange-500 w-9 h-9 rounded-full p-2 text-white"></BsArrowRight>
              </Link>
              <MdDelete
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 w-9 h-9 rounded-full p-2 text-white"
              ></MdDelete>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
