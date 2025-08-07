import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHouse } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import SearchBar from './SearchBar';
const Header = () => {
    const [tabSelected, setTabSelected] = useState("home")
    return (
        <div className='bg-white'>
            <div className='w-screen flex z-50 items-center justify-center py-4 bg-[#effef5]'>
                <Link>
                    <div className='flex flex-row items-center gap-2'>
                        <p className='font-sans text-[14px] font-[600] text-[rgb(0,171,86)]'>Freeship đơn từ 45k, giảm nhiều hơn cùng</p>
                        <img src={`src/assets/images/freeshipExtra.png`} className='h-4' alt="Freeship Extra" />
                    </div>
                </Link>
            </div>
            <div>
                <div className='flex flex-row w-screen items-center gap-6 px-[60px] pt-2'>
                    <div>
                        <img className='w-[96px]' src={`src/assets/images/tiki.png`} alt="Tiki" />
                        <span className='text-blue-600 font-semibold'>Tốt & Nhanh</span>
                    </div>
                    <div className='flex flex-1 flex-col pt-4'>
                        <div>
                            <SearchBar />
                        </div>
                        <div className='flex flex-row gap-3 text-gray-400 py-2'>
                            <p>điện gia dụng</p>
                            <p>xe cộ</p>
                            <p>mẹ & bé</p>
                            <p>khỏe đẹp</p>
                            <p>nhà cửa</p>
                            <p>sách</p>
                            <p>thể thao</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 items-start'>
                        <div className='flex flex-row items-center gap-3'>
                            <button className={`${tabSelected === "home" ? "text-blue-500 hover:bg-blue-200" : "text-gray-500 hover:bg-gray-100"} px-3 py-1 rounded-lg flex flex-row gap-3 font-semibold items-center`}>
                                <FaHouse className='size-4' />
                                <p>Trang chủ</p>
                            </button>
                            <button className={`${tabSelected === "account" ? "text-blue-500 hover:bg-blue-200" : "text-gray-500 hover:bg-gray-100"} px-3 py-1 rounded-lg flex flex-row gap-3 font-semibold items-center`}>
                                <FaRegUserCircle className='size-4' />
                                <p>Tài khoản</p>
                            </button>
                            <button className='text-blue-400 px-3 py-1 rounded-lg hover:bg-blue-200 border-1 border-gray-200'>
                                <FaShoppingCart className='size-4' />
                            </button>
                        </div>
                        <div className='flex flex-row gap-1 items-center'>
                            <CiLocationOn className='size-4 font-semibold' />
                            <p className='text-gray-400'>Giao đến: </p>
                            <a href="https://www.google.com/maps/place/Ho%C3%A0n+Ki%E1%BA%BFm,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0304066,105.8438861,15z/data=!3m1!4b1!4m6!3m5!1s0x3135abbf59d8f429:0x7830a3dfd6e566a1!8m2!3d21.0272662!4d105.8554513!16s%2Fm%2F03m3vn7?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D"
                                className='text-black font-medium'>Q.Hoàn kiếm, P.Hàng Trống, Hà Nội</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='text-gray-200 my-4' />
            <div className='flex flex-row px-[60px] gap-4 items-center'>
                <div className='flex flex-row items-center gap-4'>
                    <p className='text-blue-400 font-medium'>Cam kết</p>
                    <div className='flex flex-row gap-1'>
                        <img src={`src/assets/images/100hangthat.png`} alt="100hangthat" className='size-5' />
                        <p className='text-[12px] font-sans text-[#27272a]'>100% hàng thật</p>
                    </div>

                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className='flex flex-row items-center gap-2'>
                    <img src={`src/assets/images/freeshipmoidon.png`} alt="freeshipmoidon" className='size-5' />
                    <p className='text-[12px] font-sans text-[#27272a]'>Freeship mọi đơn</p>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className='flex flex-row items-center gap-2'>
                    <img src={`src/assets/images/hoan200neuhanggia.png`} alt="hoan200neuhanggia" className='size-5' />
                    <p className='text-[12px] font-sans text-[#27272a]'>Hoàn 200% nếu hàng giả</p>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className='flex flex-row items-center gap-2'>
                    <img src={`src/assets/images/30ngaytrahang.png`} alt="30ngaytrahang" className='size-5' />
                    <p className='text-[12px] font-sans text-[#27272a]'>30 ngày trả hàng</p>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className='flex flex-row items-center gap-2'>
                    <img src={`src/assets/images/giaonhanh2h.png`} alt="giaonhanh2h" className='size-5' />
                    <p className='text-[12px] font-sans text-[#27272a]'>Giao nhanh 2h</p>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className='flex flex-row items-center gap-2'>
                    <img src={`src/assets/images/giasieure.png`} alt="giasieure" className='size-5' />
                    <p className='text-[12px] font-sans text-[#27272a]'>Giá siêu rẻ</p>
                </div>
            </div>
            <hr className='text-gray-200 my-4' />
        </div>
    )
}

export default Header
