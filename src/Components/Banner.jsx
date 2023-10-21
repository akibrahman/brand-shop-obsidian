import { useLoaderData } from "react-router-dom";

const Banner = () => {
  const brands = useLoaderData();
  return (
    <div className="border rounded-lg flex items-center justify-between w-[90%] mx-auto p-20 mt-10">
      <div className="">
        <p className="text-8xl font-semibold leading-[100px] italic">
          <span className={`text-orange-400`}>New</span> <br /> Collection{" "}
          <br />{" "}
          <span>
            <span className={`text-orange-400`}>50%</span> off
          </span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {brands.map((brand) => (
          <img
            className="w-40 bg-[#202126] p-4 rounded-lg"
            key={brand._id}
            src={brand.BrandImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
