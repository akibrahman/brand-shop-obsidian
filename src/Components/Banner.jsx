import { useLoaderData } from "react-router-dom";

const Banner = () => {
  const brands = useLoaderData();
  return (
    <div className="border rounded-lg flex flex-col md:flex-row gap-10 xl:gap-0 items-center justify-between w-full md:w-[90%] mx-auto p-8 md:p-10 lg:p-20 mt-10">
      <div className="">
        <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold md:leading-[70px] lg:leading-[100px] italic text-center md:text-left">
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
