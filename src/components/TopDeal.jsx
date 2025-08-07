import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import topDeals from "../data/topdeal.json"
import { Navigation } from 'swiper/modules'
const TopDeal = () => {
    useEffect(() => {
        console.log(topDeals.length)
    }, [])
    return (
        <div className='p-4 rounded-lg bg-white'>
            <div className='flex flex-row items-center justify-between'>
                <img src={`src/assets/images/topdealsieure.png`} alt="top-deal-sieu-re" className='h-8 w-auto' />
                <p className='text-[#0a68ff] font-sans text-[14px] font-medium'>Xem tất cả</p>
            </div>
            <div className='mt-4'>
                <Swiper
                    slidesPerView={6}
                    className="w-full max-w-[1200px] flex flex-row"
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {topDeals.length > 0 && topDeals.map((topDeal, index) =>
                    (<SwiperSlide key={topDeal.name}>
                        <div className="flex flex-col items-start justify-start gap-3 border border-gray-300 rounded-lg p-3">
                            <div className="relative w-[160px] h-[220px]">
                                <img
                                    src={topDeal.image}
                                    alt={topDeal.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute top-1 left-1 px-2 py-0.5  bg-amber-700 text-white text-xs font-semibold">
                                    {topDeal.date} {/* hoặc điểm như 8.8 */}
                                </div>
                            </div>
                            <p className="text-sm text-center text-black font-medium line-clamp-2">
                                {topDeal.title}
                            </p>
                            <div className="text-yellow-400 text-[14px] -mt-2">
                                ★★★★★
                            </div>
                            <p className='text-[18px] text-red-500 font-sans font-semibold -mt-4'>
                                {topDeal.newCost} đ
                            </p>
                            <div className='-mt-3 flex flex-row gap-4'>
                                <div className='p-1 rounded-lg bg-gray-200 border-1 text-[12px]'>- {topDeal.sale}</div>
                                <p className=' text-[14px] line-through text-gray-400'>{topDeal.oldCost} đ</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default TopDeal
