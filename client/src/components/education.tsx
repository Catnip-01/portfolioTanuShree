import { motion, delay } from "framer-motion";
import { section, h2, div, map } from "framer-motion/client";

const educationDetails = [
    { degree: 'B.E. - Computer Science and Engineering', institution: 'Ramaiah Institute of Technology, Bengaluru', years: 'CGPA - 9.1', description: '' },
    { degree: 'Upper Secondary Graduation', institution: 'A\'s Steward Morris School, Bhilwara, Rajasthan', years: 'Percentage - 92.0', description: '' },
];

const EducationCard = ({ degree, institution, years, description, delay }) => (
    <motion.div className="p-6 rounded-xl shadow-lg bg-neutral-obj border border-neutral-700" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: delay }} whileHover={{ y: -5, scale: 1.02 }}>
        <h3 className="text-pale-gold text-2xl font-semibold mb-2">{degree}</h3>
        <p className="text-lg mb-1 text-inherit">{institution}</p>
        <p className="text-sm mb-3 text-gray-400 ">{years}</p>
        <p className="text-base text-gray-300 ">{description}</p>
    </motion.div>
);

const Education = () => (
    <section id="education" className="h-screen w-screen flex flex-col items-center justify-center snap-start relative px-4">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="text-pale-gold text-5xl font-extrabold mb-12 text-center drop-shadow-lg">Education</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">{educationDetails.map((edu, index) => <EducationCard key={index} {...edu} delay={index * 0.2} />)}</div>
    </section>
);

export default Education;