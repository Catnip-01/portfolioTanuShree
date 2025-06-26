import { motion } from "framer-motion";
import { section, h2, div, map } from "framer-motion/client";


const projectsData = [
    {
        title: 'Hand Gesture Controlled Drone System',
        description: 'Developed a hand gesture controlled drone system, trained over 8000 images with over 95% accuracy for object detection.',
        tags: ['Python', 'Object Detection', 'YOLO v8', 'ROS', 'Computer Vision'],
        link: 'https://github.com/tanu-04/your-drone-repo' // Placeholder: Please update with your actual GitHub link if available
    },
    {
        title: 'Awaaz-AI',
        description: 'Developed a chatbot platform providing legal assistance and trauma support for women, assisting over 500 users by leveraging AI and NLP for secure and empathetic interactions.',
        tags: ['Google Cloud Services', 'Google Gemini', 'AI', 'NLP', 'Chatbot'],
        link: 'https://awaaz-ai.vercel.app/' // Assuming this is the correct link from your original code
    },
    {
        title: 'Color Space Optimization',
        description: 'A project focused on optimizing color spaces, likely involving image processing techniques.',
        tags: ['K-Means clustering', 'Python', 'matplotlib', 'Image Processing'],
        link: 'https://github.com/tanu-04/your-color-space-optimization-repo' // Placeholder: Please update with your actual GitHub link if available
    },
    {
        title: 'Carpool Website',
        description: 'A web-based application for carpooling, likely involving user management, route planning, and ride sharing functionalities.',
        tags: ['Web Development', 'Carpool', 'Frontend', 'Backend'], // Assuming typical web dev technologies
        link: 'https://github.com/tanu-04/your-carpool-website-repo' // Placeholder: Please update with your actual GitHub link if available
    },
    {
        title: 'Anomaly Detection System',
        description: 'Developed a system for identifying unusual patterns or outliers in data.',
        tags: ['Machine Learning', 'Anomaly Detection', 'Data Analysis'],
        link: 'https://github.com/tanu-04/your-anomaly-detection-repo' // Placeholder: Please update with your actual GitHub link if available
    },
    {
        title: 'Recommendation System: Collaborative Filtering',
        description: 'Implemented a recommendation system using collaborative filtering techniques to suggest items or content to users.',
        tags: ['Machine Learning', 'Recommendation Systems', 'Collaborative Filtering'],
        link: 'https://github.com/tanu-04/your-recommendation-system-repo' // Placeholder: Please update with your actual GitHub link if available
    }
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
        <p className="text-base mb-4 text-neutral-light-text-secondary">{description}</p>
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
            {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-xs mt-2 dark:text-gray-500 light:text-slate-400">Scroll →</div> */}
        </div>
    </section>
);

export default Projects;