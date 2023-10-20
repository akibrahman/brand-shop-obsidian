import { useContext } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from "./AuthProvider";

const Review = () => {
  const { bg, textC } = useContext(AuthContext);
  return (
    <div style={{ backgroundColor: bg, color: textC }} className="py-16">
      <div className="w-[70%] mx-auto">
        <p className="text-center text-4xl">Our Reviews</p>
        <div className="pt-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            modules={[Autoplay, Scrollbar]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            scrollbar={{ hide: false }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="mb-10">
              <div className="w-[500px] border rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://simgbb.com/avatar/j9BFVZzGK22g.jpg"
                    alt=""
                  />
                  <p>Akib Rahman</p>
                </div>
                <p className="mt-8">
                  Absolutely love this brand shop! The quality of their products
                  is top-notch, and their customer service is exceptional. I
                  have been a loyal customer for years and have never been
                  disappointed. If you are looking for style and reliability,
                  this brand shop is the way to go!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <div className="w-[500px] border rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://simgbb.com/avatar/j9BFVZzGK22g.jpg"
                    alt=""
                  />
                  <p>Akib Rahman</p>
                </div>
                <p className="mt-8">
                  Absolutely love this brand shop! The quality of their products
                  is top-notch, and their customer service is exceptional. I
                  have been a loyal customer for years and have never been
                  disappointed. If you are looking for style and reliability,
                  this brand shop is the way to go!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <div className="w-[500px] border rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://simgbb.com/avatar/j9BFVZzGK22g.jpg"
                    alt=""
                  />
                  <p>Akib Rahman</p>
                </div>
                <p className="mt-8">
                  Absolutely love this brand shop! The quality of their products
                  is top-notch, and their customer service is exceptional. I
                  have been a loyal customer for years and have never been
                  disappointed. If you are looking for style and reliability,
                  this brand shop is the way to go!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <div className="w-[500px] border rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://simgbb.com/avatar/j9BFVZzGK22g.jpg"
                    alt=""
                  />
                  <p>Akib Rahman</p>
                </div>
                <p className="mt-8">
                  Absolutely love this brand shop! The quality of their products
                  is top-notch, and their customer service is exceptional. I
                  have been a loyal customer for years and have never been
                  disappointed. If you are looking for style and reliability,
                  this brand shop is the way to go!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
