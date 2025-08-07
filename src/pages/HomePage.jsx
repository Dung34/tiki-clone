import React from 'react'
import Header from '../components/Header'
import AutoLoopSlideBanner from '../components/AutoLoopSlideBanner'

const HomePage = () => {
    return (
        <div className='bg-[#f5f5fa] min-h-screen'>
            <Header />
            <div className='flex flex-row py-4'>
                <div className='flex flex-1/5'>Side bar</div>
                <div className='flex flex-4/5'>
                    <AutoLoopSlideBanner />
                </div>
            </div>
        </div>
    )
}

export default HomePage
