import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const data = useLoaderData();
  const brand = useParams();
  const navigate = useNavigate();
  return (
    <div className="bg-[#131313] text-white">
      <div className="pt-10 w-[90%] mx-auto flex items-center gap-3">
        <AiOutlineArrowLeft
          onClick={() => {
            navigate(-1);
          }}
          className="text-xl bg-orange-400 w-9 h-9 rounded-full p-2 cursor-pointer"
        ></AiOutlineArrowLeft>
        <p className="text-2xl">
          Products of{" "}
          <span className="text-orange-400 font-semibold border px-3 py-1 rounded-full">
            {brand.brand.charAt(0).toUpperCase() + brand.brand.slice(1)}
          </span>
        </p>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-6 pb-20 mt-10">
        {data.map((product) => (
          <div key={product._id} className="bg-[#24252A] border p-3 rounded-lg">
            <img
              className="mb-5 mx-auto w-3/4 h-[200px] rounded-md"
              src={product.image}
              alt=""
            />
            <div className="">
              <p className="text-2xl text-center mb-5 border border-orange-400 rounded-full py-1">
                {product.name}
              </p>
              <p>
                Price:{" "}
                <span className="font-semibold text-orange-400 text-xl">
                  ${product.price}
                </span>
              </p>
              <p>
                Brand:{" "}
                {product.brandName.charAt(0).toUpperCase() +
                  product.brandName.slice(1)}
              </p>
              <p>Type: {product.type}</p>

              <p>Rating: {product.rating}/5.0</p>
            </div>
            <div className="flex justify-end gap-3">
              <Link to={`/edit-product/${product._id}`}>
                <HiPencil className="bg-orange-600 h-9 w-9 p-2 font-bold rounded-full active:scale-75 duration-300 cursor-pointer"></HiPencil>
              </Link>
              <Link to={`/product/${product._id}`}>
                {" "}
                <BsArrowRight className="bg-orange-600 h-9 w-9 p-2 font-bold rounded-full active:scale-75 duration-300 cursor-pointer"></BsArrowRight>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
