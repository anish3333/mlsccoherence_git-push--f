import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import DisplayCard from '../components/Card/DisplayCard'
import Footer from '../components/Footer/Footer'

function Main() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='overflow-y-auto w-full'>

                <div className='flex flex-wrap'>
                    <DisplayCard />
                </div>
                <Footer />

            </div>

        </div>
    )
}

export default Main