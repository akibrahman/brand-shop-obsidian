import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Brand = () => {
  const data = useLoaderData();
  const { bg, textC } = useContext(AuthContext);
  return (
    <div
      style={{ backgroundColor: bg, color: textC }}
      className="pt-12 bg-[#131313] border-t"
    >
      <p className="text-center text-4xl">Our Brands</p>
      <div className="mt-10 rounded-md w-[70%] mx-auto  grid grid-cols-3 gap-5 p-3">
        {data.map((brand) => (
          <Link
            to={`/products/${brand.BrandName.toLowerCase()}`}
            key={brand._id}
          >
            <div className="bg-[#24252A] rounded-md cursor-pointer flex flex-col items-center py-8 select-none active:scale-90 duration-300">
              <img className="w-44 brand-imag" src={brand.BrandImage} alt="" />
              <p className="text-3xl font-medium text-[#ECE2BC] mt-2">
                {brand.BrandName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brand;
