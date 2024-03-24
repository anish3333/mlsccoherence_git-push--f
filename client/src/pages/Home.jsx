import React from 'react'
import Hero from '../components/Hero/Hero'
import ProfileCard from '../components/Card/ProfileCard'
import Faq from '../components/FAQ/Faq'
import Footer from '../components/Footer/Footer'
import Card2 from '../components/Card/Card2'

function Home() {
    return (
        <div className='bg-gray-200'>
            <div>
                <Hero />
            </div>

            <div className='my-4'>
                <div className='flex m-2 flex-wrap justify-between'>
                    <Card2 name="Mayuresh Chavan" title="Team leader" />
                    <Card2 name="Anish Awasti" title="Member 1 " />

                    <Card2 name="Soham Aversekar" title="Member 2" />
                    <Card2 name="Sarvesh Yogi" title="Member 3" />
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home