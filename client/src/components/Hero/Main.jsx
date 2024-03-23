import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import DisplayCard from '../Card/DisplayCard'
import Footer from '../Footer/Footer'

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