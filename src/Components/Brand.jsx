import nike from "/nike.png";

const Brand = () => {
  return (
    <div className="pt-12 bg-[#131313] border-t">
      <p className="text-center text-4xl text-white">Our Brands</p>
      <div className="mt-10 rounded-md w-[70%] mx-auto bg-[#131313] grid grid-cols-3 gap-5 p-3">
        <div className="bg-[#24252A] rounded-md flex flex-col items-center py-5">
          <img className="w-44 brand-image" src={nike} alt="" />
          <p className="text-3xl font-medium text-[#ECE2BC]">Nike</p>
        </div>
        <div className="bg-[#24252A] rounded-md flex flex-col items-center py-5">
          <img className="w-44 brand-image" src={nike} alt="" />
          <p className="text-3xl font-medium text-[#ECE2BC]">Nike</p>
        </div>
        <div className="bg-[#24252A] rounded-md flex flex-col items-center py-5">
          <img className="w-44 brand-image" src={nike} alt="" />
          <p className="text-3xl font-medium text-[#ECE2BC]">Nike</p>
        </div>
        <div className="bg-[#24252A] rounded-md flex flex-col items-center py-5">
          <img className="w-44 brand-image" src={nike} alt="" />
          <p className="text-3xl font-medium text-[#ECE2BC]">Nike</p>
        </div>
        <div className="bg-[#24252A] rounded-md flex flex-col items-center py-5">
          <img className="w-44 brand-image" src={nike} alt="" />
          <p className="text-3xl font-medium text-[#ECE2BC]">Nike</p>
        </div>
        <div className="bg-[#24252A] rounded-md flex flex-col items-center py-5">
          <img className="w-44 brand-image" src={nike} alt="" />
          <p className="text-3xl font-medium text-[#ECE2BC]">Nike</p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
