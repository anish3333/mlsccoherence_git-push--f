import React from 'react'
import Hero from '../components/Hero/Hero'
import ProfileCard from '../components/Card/ProfileCard'
import Faq from '../components/FAQ/Faq'
import Footer from '../components/Footer/Footer'
import Card2 from '../components/Card/Card2'
import Sarvesh from '../assets/sarvesh.jpg'
import Soham from '../assets/soham.jpg'
import Anish from '../assets/anish.jpg'
import Mayuresh from '../assets/mayuresh.jpg'

function Home() {
    return (
        <div className='bg-gray-200'>
            <div>
                <Hero />
            </div>

            <div>
                <div className='flex m-2 flex-wrap justify-between'>
                    <Card2 pic={Mayuresh} name="Mayuresh Chavan" title="Team leader" />
                    <Card2 pic={Anish} name="Anish Awasti" title="Member 1 " />

                    <Card2 pic={Soham} name="Soham Avarsekar" title="Member 2" />
                    <Card2 pic={Sarvesh} name="Sarvesh Yogi" title="Member 3" />
                </div>
            </div>
            <div>
                <div className="font-bold text-gray-800 text-center text-2xl">Frequently asked question....</div>
                <Faq />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home