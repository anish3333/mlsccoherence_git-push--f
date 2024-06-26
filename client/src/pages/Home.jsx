import React from 'react'
import Hero from '../components/Hero/Hero'
import ProfileCard from '../components/Card/ProfileCard'
import Faq from '../components/FAQ/Faq'
import Footer from '../components/Footer/Footer'
import Card2 from '../components/Card/Card2'
import Sarvesh from '../assets/sarvesh.jpeg'
import Soham from '../assets/soham.jpeg'
import Anish from '../assets/anish.jpeg'
import Mayuresh from '../assets/mayuresh.jpeg'

function Home() {
    return (
        <div className='bg-gray-200'>
            <div>
                <Hero />
            </div>

            <div className='my-4'>
                <div className='flex m-2 flex-wrap justify-between'>
                    <Card2 pic={Mayuresh} name="Mayuresh Chavan" title="Team leader" />
                    <Card2 pic={Anish} name="Anish Awasti" title="Member 1 " />

                    <Card2 pic={Soham} name="Soham Aversekar" title="Member 2" />
                    <Card2 pic={Sarvesh} name="Sarvesh Yogi" title="Member 3" />
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home