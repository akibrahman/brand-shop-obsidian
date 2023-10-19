import { useLoaderData, useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";

const DetailsProduct = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const {
    _id: productID,
    name,
    image,
    brandName,
    price,
    type,
    shortDes,
    rating,
  } = data;
  const addToCart = () => {
    const thisProduct = {
      productID,
      name,
      image,
      brandName,
      price,
      type,
      shortDes,
      rating,
    };
    fetch("http://localhost:5000/addtocart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(thisProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className="bg-[#24252A] flex text-white gap-8">
        <div className="w-1/2 h-[calc(100vh-76px)] relative">
          <img className="w-full h-full" src={image} alt="" />
          <AiOutlineArrowLeft
            onClick={() => {
              navigate(-1);
            }}
            className="absolute left-5 top-5 text-xl bg-orange-400 w-9 h-9 rounded-full p-2 cursor-pointer text-white"
          ></AiOutlineArrowLeft>
        </div>
        <div className="border-t-2 border-orange-400 py-10 w-1/2 h-[calc(100vh-76px)] overflow-y-scroll">
          <p className="text-2xl font-semibold">
            Product Name:{" "}
            <span className="text-orange-400 text-3xl font-bold border-2 rounded-full px-5 py-2 ml-2">
              {name}
            </span>
          </p>
          <div className="mt-10 text-xl space-y-2">
            <p>
              Type:{" "}
              <span className="border-l-2 border-orange-400 pl-3 ml-3 rounded-md text-orange-400 font-semibold">
                {type}
              </span>
            </p>
            <p>
              Brand:{" "}
              <span className="border-l-2 border-orange-400 pl-3 ml-3 rounded-md text-orange-400 font-semibold">
                {brandName}
              </span>
            </p>
            <div className="pt-5 flex items-center justify-between pr-2">
              <p className="text-3xl text-orange-400 font-bold">${price}</p>
              <button
                onClick={addToCart}
                className="capitalize text-xl bg-orange-400 hover:bg-orange-500 duration-300 px-4 py-2 rounded-lg active:scale-75"
              >
                Add to Cart
              </button>
            </div>
            <p className="pt-5">
              Rating:{" "}
              <span className="text-orange-400 text-2xl border-2 rounded-full border-orange-400 p-1 mx-2">
                {rating}
              </span>{" "}
              Out of 5.0
            </p>
            <p className="pt-7">Description:</p>
            <p className=" border-l-2 border-orange-400 pl-3 ml-3 rounded-md text-orange-400 font-semibold text-base w-[90%]">
              {shortDes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;