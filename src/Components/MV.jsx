import bnr from "/logo-banner.png";

const MV = () => {
  return (
    <div className="my-16 px-10">
      <p className="text-center text-4xl">Our Goal</p>
      <div className="flex flex-col lg:flex-row-reverse items-center gap-6 mt-10">
        <img
          className="md:w-[550px] lg:w-[700px] rounded-lg"
          src={bnr}
          alt=""
        />
        <div className="">
          <p className={`text-orange-400 text-3xl mb-4`}>Our Mission :</p>
          <p className="border rounded-lg border-orange-400 p-3">
            To empower individuals to express their unique style and confidence
            through high-quality, sustainable fashion. We are dedicated to
            delivering on-trend clothing and accessories that not only make our
            customers look great but also make a positive impact on the world
            through ethical and environmentally responsible practices
          </p>
          <p className={`text-orange-400 text-3xl mb-4 mt-10`}>Our Vision :</p>
          <p className="border rounded-lg border-orange-400 p-3">
            To become a globally recognized fashion and apparel brand that leads
            the industry in sustainability and inclusivity. We aspire to be a
            catalyst for positive change in the fashion world, inspiring
            consumers and other companies to prioritize eco-conscious practices
            and embrace diversity in the pursuit of a more stylish, equitable,
            and sustainable future
          </p>
        </div>
      </div>
    </div>
  );
};

export default MV;
