import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do what you can, with what you have, where you are.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does.",
  "It does not matter how slowly you go as long as you do not stop.",
];

const Navbar = () => {
  return (
    <div className="w-full bg-[#2C2D32] h-20 flex items-center justify-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true} // Infinite Loop
        autoplay={{
          delay: 5000, // 5 seconds per quote
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <p className="text-white text-xl text-center px-5">{quote}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Navbar;
