import { motion, delay } from "framer-motion";
import { div, h3, section, h2, map } from "framer-motion/client";

const skillsData = [
    { name: 'React', icon: '⚛️' }, { name: 'Node.js', icon: '🟢' }, { name: 'MongoDB', icon: '🍃' }, { name: 'JavaScript', icon: '📜' }, { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' }, { name: 'C++', icon: 'C++' }, { name: 'Tailwind CSS', icon: '🎨' }, { name: 'Git', icon: '🐙' }, { name: 'REST APIs', icon: '📡' },
];

const SkillCard = ({ name, icon, delay }) => (
    <motion.div className="flex flex-col items-center p-6 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer dark:bg-neutral-obj dark:border dark:border-neutral-700 light:bg-white light:border light:border-slate-200" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay }} whileHover={{ y:-5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"}}>
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-lg font-medium text-inherit">{name}</h3>
    </motion.div>
);

const Skills = () => (
    <section id="skills" className="h-screen w-screen flex flex-col items-center justify-center snap-start relative px-4">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="text-pale-gold text-5xl font-extrabold mb-12 text-center drop-shadow-lg">My Skills</motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">{skillsData.map((skill, index) => <SkillCard key={skill.name} {...skill} delay={index * 0.08} />)}</div>
    </section>
);

export default Skills;