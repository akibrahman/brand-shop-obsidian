import { useContext, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";

const MyCart = () => {
  const { bg, textC } = useContext(AuthContext);
  const loadedData = useLoaderData();
  const [products, setProducts] = useState(loadedData);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cartDelete/${id}`, {
          method: "DELETE",
        })
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
    <div style={{ backgroundColor: bg, color: textC }} className="">
      <div className="grid grid-cols-2 w-[80%] mx-auto gap-6 py-20">
        {products.map((product) => (
          <div
            style={{ borderColor: textC }}
            key={product._id}
            className="flex items-center gap-10 border-2 rounded-xl p-2"
          >
            <img className="w-32 h-36 rounded-xl" src={product.image} alt="" />
            <div className="flex-1">
              <p className="text-orange-400 text-xl">{product.name}</p>
              <p>{product.brandName}</p>
              <p>{product.type}</p>
            </div>
            <div className="flex flex-col gap-4 mr-3">
              <Link to={`/product/${product.productID}`}>
                <BsArrowRight className="bg-orange-500 w-9 h-9 rounded-full p-2"></BsArrowRight>
              </Link>
              <MdDelete
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 w-9 h-9 rounded-full p-2"
              ></MdDelete>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
