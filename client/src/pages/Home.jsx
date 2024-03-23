import React from 'react'
import Hero from '../components/Hero/Hero'
import ProfileCard from '../components/Card/ProfileCard'
import Faq from '../components/FAQ/Faq'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <div className='bg-gray-200'>
            <div>
                <Hero />
            </div>

            <div>
                <div className='flex m-2'>
                    <ProfileCard />

                    <ProfileCard />
                </div>
                <div className='flex m-2'>
                    <ProfileCard />
                    <ProfileCard />
                </div>
            </div>
            <div>
                <Faq />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home