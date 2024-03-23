import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
                    className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden opacity-85 bg-transparent">
                    <div className="absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
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


