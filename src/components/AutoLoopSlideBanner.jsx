// BannerSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import banners from "../data/banner.json"
export default function AutoLoopSlideBanner() {
  return (
    <div className='p-5 rounded-lg bg-white h-fit'>
      <Swiper
        slidesPerView={2}          // hiển thị 2 ảnh/lần
        spaceBetween={16}
        autoplay={
          {
            delay: 3000,
            disableOnInteraction: false
          }
        }        // khoảng cách giữa ảnh
        className="w-full max-w-[1100px] flex flex-row" // giới hạn slide không dài vô tận


        modules={[Navigation, Autoplay]}
        loop={true}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.name}>
            <img src={banner.image} alt={banner.name} className='w-full h-auto rounded-lg' />
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  )
}
