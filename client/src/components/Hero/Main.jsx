import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import DisplayCard from '../Card/DisplayCard'
import Footer from '../Footer/Footer'

function Main() {
    return (
        <div>

            <div className='flex' >
                <div className=' '>
                    <Sidebar />
                </div>
                <div >

                    <div className='flex flex-wrap'>
                        <DisplayCard />
                        <DisplayCard />
                        <DisplayCard />
                        <DisplayCard />

                    </div>
                    <Footer />

                </div>

            </div>

        </div>
    )
}

export default Main