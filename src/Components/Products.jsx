import { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import empty from "/empty.svg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Sliders.css";

import ad1 from "/ad1.jpg";
import ad2 from "/ad2.jpg";
import ad3 from "/ad3.jpg";
import ad4 from "/ad4.jpg";

const Products = () => {
  const { isDark } = useContext(AuthContext);
  const data = useLoaderData();
  const brand = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="pt-10 w-[98%] md:w-[90%] mx-auto flex items-center gap-1 lg:gap-3">
        <AiOutlineArrowLeft
          onClick={() => {
            navigate(-1);
          }}
          className="text-xl bg-orange-400 w-9 h-9 rounded-full p-2 cursor-pointer"
        ></AiOutlineArrowLeft>
        <p className="text-lg md:text-xl lg:text-2xl">
          Products of{" "}
          <span className="text-orange-400 font-semibold border px-3 py-1 rounded-full">
            {brand.brand.charAt(0).toUpperCase() + brand.brand.slice(1)}
          </span>
        </p>
        <p className="text-lg md:text-xl lg:text-2xl">
          Total Products -{" "}
          <span className="text-orange-400">{data.length}</span>
        </p>
      </div>
      <div className="">
        <Swiper
          className="my-14"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          modules={[Scrollbar, Autoplay, Pagination, EffectCoverflow]}
          effect={"coverflow"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={2}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="">
              <img className="w-full relative" src={ad1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img className="w-full relative" src={ad2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img className="w-full relative" src={ad3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img className="w-full relative" src={ad4} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {data.length > 0 ? (
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20 mt-10 text-white">
          {data.map((product) => (
            <div
              key={product._id}
              className={` ${
                isDark ? "bg-[#AAADB2] text-[#131313]" : "bg-[#24252A]"
              } border p-3 rounded-lg`}
            >
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
                  <span
                    className={`font-semibold ${
                      isDark ? "text-orange-700" : "text-orange-400"
                    } text-xl`}
                  >
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
      ) : (
        <div className="h-[50vh] flex items-center justify-center gap-10">
          <p className="text-3xl">There is no Product under this Brand</p>
          <img className="w-[250px]" src={empty} alt="" />
        </div>
      )}
    </div>
  );
};

export default Products;
