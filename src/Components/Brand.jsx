import { Link, useLoaderData } from "react-router-dom";

const Brand = () => {
  const data = useLoaderData();
  return (
    <div className="pt-12">
      <p className="text-center text-4xl">Our Brands</p>
      <div className="mt-10 rounded-md w-[70%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
        {data.map((brand) => (
          <Link
            to={`/products/${brand.BrandName.toLowerCase()}`}
            key={brand._id}
          >
            <div className="bg-[#3739475e] border rounded-md cursor-pointer flex flex-col items-center py-8 select-none active:scale-90 duration-300">
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
