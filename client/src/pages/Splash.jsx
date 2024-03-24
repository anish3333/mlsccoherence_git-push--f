import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import background from "../assets/depositphotos_22532345-stock-photo-social-media-concept.jpg"

function Splash() {
    const text = "Weelcome to ANALYTICAL world";
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayText(prevText => prevText + text.charAt(index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100); // Adjust typing speed (milliseconds per character) as needed

        return () => clearInterval(timer);
    }, [text]);

    return (
        <div>
            <div

            >
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 3.5, duration: 0.5 }}
                    className="relative bg-gradient-to-r from-gray-800 to-gray-600 h-screen text-white overflow-hidden opacity-85 bg-transparent">
                    <div className="absolute inset-0">
                        <img src={background} className='w-full h-screen opacity-20' />
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>

                    <div className="relative z-10 flex justify-center items-center h-full text-center">
                        <h1 className="text-7xl font-bold leading-tight mb-4">{displayText}</h1>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Splash;


