import React from 'react'
import { Link } from 'react-router-dom';
import Faq from '../FAQ/Faq';
import Dialog1 from '../Form/Dialog1';
import heroimg from '../../assets/istockphoto-1408387701-612x612.jpg'

function Hero() {
    return (
        <div>
            <main className="dark:bg-gray-800 bg-gray-200 relative overflow-hidden h-screen">
                <header className="h-24 sm:h-32 flex items-center z-30 w-full">
                    <div className="container mx-auto px-6 flex items-center justify-between">
                        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                            SocialPulse
                        </div>
                        <div className="flex items-center">
                            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                                <div className='mx-2'>
                                    <Dialog1 linkText={"Sign In"} />
                                </div>
                                <div className='mx-2'>
                                    <Dialog1 linkText={"Sign Up"} />
                                </div>

                            </nav>
                            <button className="lg:hidden flex flex-col ml-4">
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                                </span>
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                                </span>
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                                </span>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="bg-gray-300 dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                    <div className="container mx-auto px-6 flex relative py-16">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                            </span>
                            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                Get Your
                                <span className="text-5xl sm:text-7xl">
                                    Analytics
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                            </p>
                            <div className="flex mt-8">
                                <Link to="/main" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                    Get started
                                </Link>
                                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                            <img src={heroimg} className='rounded-full' />
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Hero;