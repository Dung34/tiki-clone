import React from 'react'
import Header from '../components/Header'
import AutoLoopSlideBanner from '../components/AutoLoopSlideBanner'
import SideBar from '../components/SideBar'
import categories from "../data/categories.json"
import utilities from "../data/utilities.json"
import sellwithtiki from "../data/sellwithtiki.json"
import TopFeatures from '../components/TopFeatures'
import TopDeal from '../components/TopDeal'
const HomePage = () => {
    return (
        <div className='bg-[#f5f5fa] min-h-screen'>
            <Header />
            <div className='flex flex-row py-4'>
                <div className='flex flex-1/5 flex-col gap-4'>
                    <SideBar listItems={categories} title={"Danh mục"} />
                    <SideBar listItems={utilities} title={"Tiện ích"} />
                    <SideBar listItems={sellwithtiki} title={""} />
                </div>
                <div className='flex flex-4/5 flex-col gap-4 px-3'>
                    <AutoLoopSlideBanner />
                    <TopFeatures />
                    <TopDeal />
                </div>
            </div>
        </div>
    )
}

export default HomePage
