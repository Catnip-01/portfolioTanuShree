// src/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from './button'; // Assuming Button.jsx is in the same directory or a common 'components' directory

const Hero = () => (
    <section id="hero" className="h-screen w-screen flex items-center justify-center snap-start relative px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left pl-10 gap-12">
            {/* On small screens, this will be the first item (image) */}
            {/* On medium/large screens, this will be the second item (image) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.4 }} 
                className="flex-1 flex justify-center items-center md:order-2" // md:order-2 moves image to the right on md+ screens
            >
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-pale-gold">
                    {/* Ensure this image path is correct relative to where the app is served */}
                    <img src="/AmbuSpeech.jpeg" alt="Developer Profile" className="w-full h-full object-cover" />
                </div>
            </motion.div>

            {/* On small screens, this will be the second item (text content) */}
            {/* On medium/large screens, this will be the first item (text content) */}
            <motion.div 
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
                className="flex-1 md:order-1" // md:order-1 moves text to the left on md+ screens
            >
                <h1 className="text-pale-gold text-5xl sm:text-6xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-xl">Hi, I'm <span className="text-inherit">Shantanu Pandey</span></h1>
                <p className="text-lg sm:text-xl leading-relaxed mb-8">An experienced and impatient MERN vibe-coder who will get the job done in 24 hours.</p>
                <div className="max-w-xs mx-auto md:mx-0"><a href="#contact"><Button>Get in Touch</Button></a></div>
            </motion.div>
        </div>
    </section>
);

export default Hero;