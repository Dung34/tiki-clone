import React from 'react'

const SideBar = ({ listItems, title }) => {
    return (
        <div className='bg-white rounded-lg mx-5 py-4 px-4'>
            <p className={`font-bold ml-2 mb-2 ${title === "" ? "hidden" : ""}`}>{title}</p>
            <div className=''>
                {listItems.map((listItem, index) => (
                    <div key={listItem.name} className='px-4 py-2 flex flex-row gap-3 items-center justify-start rounded-lg hover:bg-gray-100'>
                        <img src={listItem.image} alt={listItem.name} className='size-8 rounded-lg' />
                        <p className='text-[14px] font-sans'>{listItem.label}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SideBar
