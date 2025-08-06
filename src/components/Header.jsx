import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
const Header = () => {
    return (
        <div>
            <div className='w-screen flex z-50 items-center justify-center py-4 bg-[#effef5]'>
                <Link>
                    <div className='flex flex-row items-center gap-2'>
                        <p className='font-sans text-[14px] font-[600] text-[rgb(0,171,86)]'>Freeship đơn từ 45k, giảm nhiều hơn cùng</p>
                        <img src={`src/assets/images/freeshipExtra.png`} className='h-4' alt="Freeship Extra" />
                    </div>
                </Link>
            </div>
            <div>
                <div>
                    <div>
                        <img src={`src/assets/images/tiki.png`} alt="Tiki" />
                        <span>Tốt & Nhanh</span>
                    </div>
                    <div>
                        <div>
                            <CiSearch />
                            <input type="text" name="" id="" />
                            <div>
                                <p>Tìm kiếm</p>
                            </div>
                        </div>
                        <div>
                            <p>điện gia dụng</p>
                            <p>xe cộ</p>
                            <p>mẹ & bé</p>
                            <p>khỏe đẹp</p>
                            <p>nhà cửa</p>
                            <p>sách</p>
                            <p>thể thao</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
