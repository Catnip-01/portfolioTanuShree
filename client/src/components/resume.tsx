// src/Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from './button'; // Assuming Button.jsx is in the same directory or common components folder

const Resume = () => (
    <section id="resume" className="h-screen w-screen flex flex-col items-center justify-center snap-start relative px-4">
        <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-pale-gold text-5xl font-extrabold mb-8 text-center drop-shadow-lg"
        >
            My Resume
        </motion.h2>
        <motion.div
            className="w-full max-w-2xl mx-auto p-8 rounded-xl shadow-lg
                       bg-neutral-obj border border-neutral-obj /* Uses light object background/border by default, switches to dark */
                       text-center text-white /* Uses text color that switches with theme */
                       "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <p className="text-lg mb-6">
                Prefer to have a detailed overview of my professional journey and skills?
                Download my full resume in PDF format.
            </p>
            {/* Replace '/Shantanu_Pandey_Resume.pdf' with the actual path to your resume file in the public folder */}
            <a href="/ShantanuPandeyResume.pdf" download="Shantanu_Pandey_Resume.pdf">
                <Button>Download Resume</Button>
            </a>
        </motion.div>
    </section>
);

export default Resume;
