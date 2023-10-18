import { BsArrowRight } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Products = () => {
  const data = useLoaderData();
  const brand = useParams();
  return (
    <div className="bg-[#131313] text-white">
      <p className="text-2xl w-[90%] mx-auto pt-10">
        Products of{" "}
        <span className="text-orange-400 font-semibold border px-3 py-1 rounded-full">
          {brand.brand.charAt(0).toUpperCase() + brand.brand.slice(1)}
        </span>
      </p>
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
              <BsArrowRight className="bg-orange-600 h-9 w-9 p-2 font-bold rounded-full active:scale-75 duration-300 cursor-pointer"></BsArrowRight>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
