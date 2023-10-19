import { BsArrowRight } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const data = useLoaderData();
  return (
    <div className="bg-[#131313] text-white">
      <div className="grid grid-cols-2 w-[80%] mx-auto gap-6 py-20">
        {data.map((product) => (
          <div
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
              <BsArrowRight className="bg-orange-500 w-9 h-9 rounded-full p-2"></BsArrowRight>
              <MdDelete className="bg-red-500 w-9 h-9 rounded-full p-2"></MdDelete>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
// {
//   "_id": "6530a14df7e7e0be8810c335",
//   "productID": "652ff096b14330ef9a7501b2",
//   "name": "Adidas Shoe 1",
//   "image": "https://i.ibb.co/7RDmX2Q/adidas1.jpg",
//   "brandName": "adidas",
//   "price": "1899",
//   "type": "Shoe",
//   "shortDes": "This is a Adidas Shoe.",
//   "rating": "4.5"
//   },
