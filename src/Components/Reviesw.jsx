import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import Rating from "react-rating";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Review = () => {
  return (
    <div className="py-16">
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
          >
            <SwiperSlide className="mb-10">
              <div className="w-[500px] border rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.ibb.co/XSzp58n/t5.jpg"
                    alt=""
                  />
                  <p>John Smith</p>
                  <Rating
                    className="mt-1"
                    initialRating={45}
                    readonly
                    emptySymbol={
                      <AiOutlineStar className="text-xl text-orange-400"></AiOutlineStar>
                    }
                    fullSymbol={
                      <AiTwotoneStar className="text-xl text-orange-400"></AiTwotoneStar>
                    }
                  />
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
                    src="https://i.ibb.co/t4hGzTd/t7.jpg"
                    alt=""
                  />
                  <p>Willium Lounix</p>
                  <Rating
                    className="mt-1"
                    initialRating={4.4}
                    readonly
                    emptySymbol={
                      <AiOutlineStar className="text-xl text-orange-400"></AiOutlineStar>
                    }
                    fullSymbol={
                      <AiTwotoneStar className="text-xl text-orange-400"></AiTwotoneStar>
                    }
                  />
                </div>
                <p className="mt-8">
                  I had an amazing experience shopping at this brand shop. Their
                  product range is not only stylish but also of the highest
                  quality. The customer service was exceptional, and the staff
                  was incredibly helpful. Excellect experiance
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <div className="w-[500px] border rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.ibb.co/wrdCqYX/t3.jpg"
                    alt=""
                  />
                  <p>Mark Beilium</p>
                  <Rating
                    className="mt-1"
                    initialRating={4.7}
                    readonly
                    emptySymbol={
                      <AiOutlineStar className="text-xl text-orange-400"></AiOutlineStar>
                    }
                    fullSymbol={
                      <AiTwotoneStar className="text-xl text-orange-400"></AiTwotoneStar>
                    }
                  />
                </div>
                <p className="mt-8">
                  Exceptional experience shopping with this brand shop! Their
                  products are not only stylish but also of remarkable quality.
                  The customer service is top-notch, making every visit a
                  delight. I highly recommend this brand shop for its impeccable
                  range and service.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <div className="w-[500px] border rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.ibb.co/CKSD3Sj/t10.webp"
                    alt=""
                  />
                  <p>Lary Pai</p>
                  <Rating
                    className="mt-1"
                    initialRating={4.5}
                    readonly
                    emptySymbol={
                      <AiOutlineStar className="text-xl text-orange-400"></AiOutlineStar>
                    }
                    fullSymbol={
                      <AiTwotoneStar className="text-xl text-orange-400"></AiTwotoneStar>
                    }
                  />
                </div>
                <p className="mt-8">
                  This brand shop has become my go-to for all my fashion needs.
                  The quality and style of their products are unmatched, and
                  their customer service is exceptional. I am consistently
                  impressed with the unique selections and how they keep up with
                  the latest trends.
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
