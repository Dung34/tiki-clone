// BannerSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const banners = [
  `src/assets/images/88freeshipmoidon.png`,
  `src/assets/images/sieuhoilamdep.png`, `src/assets/images/suaMeadow.png`,
]

export default function AutoLoopSlideBanner() {
  return (
    <div className='p-5 rounded-lg bg-white'>
      <Swiper
        slidesPerView={2}          // hiển thị 2 ảnh/lần
        spaceBetween={16}          // khoảng cách giữa ảnh
        className="w-full max-w-[1100px] flex flex-row" // giới hạn slide không dài vô tận
      >
        <SwiperSlide className=''>
          <img
            src="src/assets/images/88freeshipmoidon.png"
            alt="88freeshipmoidon"
            className="w-full h-auto rounded-lg"
          />

        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/images/sieuhoilamdep.png"
            alt="sieuhoilamdep"
            className="w-full h-auto rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
