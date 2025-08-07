import React from 'react'
import categories from "../data/categories.json"
const SideBar = () => {
    return (
        <div className='bg-white rounded-lg mx-5 py-4 px-4'>
            <p className='font-bold ml-2 mb-2'>Danh mục</p>
            <div className=''>
                {categories.map((category, index) => (
                    <div key={category.name} className='px-4 py-2 flex flex-row gap-3 items-center justify-start rounded-lg hover:bg-gray-100'>
                        <img src={category.image} alt={category.name} className='size-8 rounded-lg' />
                        <p className='text-[14px] font-sans'>{category.label}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SideBar
