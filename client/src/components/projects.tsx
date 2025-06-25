import { motion } from "framer-motion";
import { section, h2, div, map } from "framer-motion/client";


const projectsData = [
    { title: 'Awaaz-AI', description: 'A chatbot platform offering legal and trauma support for women, featuring a fine-tuned Gemini model and secure, anonymous social sharing.', tags: ['MERN', 'Google Cloud', 'JWT', 'Gemini'], link: 'https://awaaz-ai.vercel.app/' },
    { title: 'Online Clipboard', description: 'A MERN stack application to efficiently manage, retrieve, and share text snippets with access codes and one-click copying.', tags: ['MERN', 'MongoDB', 'Node.js'], link: 'https://onlineclippings.vercel.app/' },
    { title: 'Resume Maker', description: 'A dynamic resume-building website that generates downloadable PDFs from user inputs, drastically reducing creation time.', tags: ['React', 'CSS', 'JavaScript', '@react-pdf/renderer'], link: 'https://start-resume.vercel.app/' },
    { title: 'Gesture Controlled Drone', description: 'A drone controlled by hand gestures, using a custom-trained YOLOv8 model and the Robot Operating System (ROS).', tags: ['Python', 'YOLOv8', 'ROS', 'OpenCV'], link: 'https://github.com/Catnip-01/pluto-drone' },
];


const ProjectCard = ({ title, description, tags, link }) => (
    <motion.div
        className="flex-none w-[90%] sm:w-80 md:w-96 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer snap-center
                   bg-neutral-obj border border-neutral-obj /* Uses light object background/border by default, switches to dark */
                   "
        whileHover={{ y: -8, scale: 1.02 }}
        onClick={() => window.open(link, '_blank')}
    >
        <h3 className="text-pale-gold text-2xl font-semibold mb-3">{title}</h3>
        {/* 'text-neutral-dark-text' will be light theme text, then switch to white in dark theme */}
        {/* 'text-neutral-light-text-secondary' is used for the description's dark mode color */}
        <p className="text-base mb-4 text-neutral-dark-text dark:text-neutral-light-text-secondary">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
                <span key={tag} className="text-sm px-3 py-1 rounded-full border
                                         text-neutral-light-text-secondary border-neutral-light-text-secondary /* Light mode tag style */
                                         dark:bg-neutral-bg dark:border-neutral-700 /* Dark mode tag background and border */
                                         dark:text-gray-400 /* Dark mode tag text color */
                                         ">{tag}</span>
            ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer"
            className="text-pale-gold hover:text-neutral-dark-text /* Text color will switch */
                      transition-colors duration-300 font-medium">
            View Project →
        </a>
    </motion.div>
);


const Projects = () => (
    <section id="projects" className="h-screen w-screen flex flex-col items-center justify-center snap-start relative px-4">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="text-pale-gold text-5xl font-extrabold mb-12 text-center drop-shadow-lg">My Projects</motion.h2>
        <div className="w-full max-w-7xl relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 space-x-6 no-scrollbar">{projectsData.map((project, index) => <ProjectCard key={index} {...project} />)}</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-xs mt-2 dark:text-gray-500 light:text-slate-400">Scroll →</div>
        </div>
    </section>
);

export default Projects;