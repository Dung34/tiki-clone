import React from 'react'
import features from "../data/features.json"
const TopFeatures = () => {
    return (
        <div className='flex flex-row p-4 gap-2 rounded-lg bg-white'>
            {features.map((feature, index) => (
                <div key={feature.name} className='flex flex-1 flex-col items-center justify-start gap-3'>
                    <img src={feature.image} alt={feature.name} className='size-[44px] rounded-lg' />
                    <p className='text-[14px] font-sans font-semibold'>{feature.label}</p>
                </div>
            ))}
        </div>
    )
}

export default TopFeatures
