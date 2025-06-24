/* src/App.jsx */
import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONTEXT & HOOK ---
// In a real multi-file app, this would be in 'src/context/ThemeProvider.jsx' and 'src/hooks/useTheme.js'

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark'); // <-- This line
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);


// --- DATA ---
// Populated from your resume

const projectsData = [
    { title: 'Awaaz-AI', description: 'A chatbot platform offering legal and trauma support for women, featuring a fine-tuned Gemini model and secure, anonymous social sharing.', tags: ['MERN', 'Google Cloud', 'JWT', 'Gemini'], link: 'https://github.com' },
    { title: 'Online Clipboard', description: 'A MERN stack application to efficiently manage, retrieve, and share text snippets with access codes and one-click copying.', tags: ['MERN', 'MongoDB', 'Node.js'], link: 'https://github.com' },
    { title: 'Resume Maker', description: 'A dynamic resume-building website that generates downloadable PDFs from user inputs, drastically reducing creation time.', tags: ['React', 'CSS', 'JavaScript', '@react-pdf/renderer'], link: 'https://github.com' },
    { title: 'Gesture Controlled Drone', description: 'A drone controlled by hand gestures, using a custom-trained YOLOv8 model and the Robot Operating System (ROS).', tags: ['Python', 'YOLOv8', 'ROS', 'OpenCV'], link: 'https://github.com' },
];

const skillsData = [
    { name: 'React', icon: '⚛️' }, { name: 'Node.js', icon: '🟢' }, { name: 'MongoDB', icon: '🍃' }, { name: 'JavaScript', icon: '📜' }, { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' }, { name: 'C++', icon: 'C++' }, { name: 'Tailwind CSS', icon: '🎨' }, { name: 'Git', icon: '🐙' }, { name: 'REST APIs', icon: '📡' },
];

const educationDetails = [
    { degree: 'B.E. Computer Science', institution: 'Ramaiah Institute of Technology', years: '2020 - 2024', description: 'CGPA - 8.52' },
    { degree: 'Upper Secondary Graduation', institution: 'Kendriya Vidyalaya DRDO', years: '2020', description: 'Percentage - 93.0%' },
];


// --- REUSABLE UI COMPONENTS ---

const Button = ({ children, onClick, type = 'button', disabled = false }) => (
    <motion.button type={type} onClick={onClick} disabled={disabled} className="w-full bg-pale-gold px-8 py-3 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed dark:text-neutral-bg light:text-slate-900" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.button>
);

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <motion.button onClick={toggleTheme} className="p-2 rounded-full shadow-md focus:outline-none transition-colors duration-300 dark:bg-neutral-bg dark:text-pale-gold dark:shadow-md light:bg-white light:text-slate-700 light:shadow-slate-300/50" whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }}>
            {theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
        </motion.button>
    );
};

// --- LAYOUT COMPONENTS ---

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [ { name: 'Projects', href: '#projects' }, { name: 'Skills', href: '#skills' }, { name: 'Education', href: '#education' }, { name: 'Contact', href: '#contact' }];
    return (
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} className="fixed top-0 left-0 right-0 z-50 p-4 shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-neutral-obj/80 dark:shadow-neutral-900/50 light:bg-white/80 light:shadow-slate-300/40">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="#hero" className="text-pale-gold text-2xl font-bold rounded-md px-2 py-1 transition duration-300 ease-in-out hover:scale-105">SP</a>
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => <motion.a key={item.name} href={item.href} className="text-pale-gold hover:text-slate-900 dark:hover:text-white transition duration-300 font-medium relative group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{item.name}<span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pale-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></motion.a>)}
                    <ThemeToggle />
                </div>
                <div className="md:hidden flex items-center">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-pale-gold focus:outline-none ml-4"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}</svg></button>
                </div>
            </div>
            <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden mt-4 space-y-4 px-4 pb-4">{navItems.map((item) => <motion.a key={item.name} href={item.href} className="block text-pale-gold hover:text-slate-900 dark:hover:text-white transition duration-300 font-medium py-2 rounded-md" onClick={() => setIsOpen(false)} whileHover={{ x: 5 }}>{item.name}</motion.a>)}</motion.div>}</AnimatePresence>
        </motion.nav>
    );
};

const Footer = () => (
    <motion.footer className="w-full py-6 text-center border-t dark:border-neutral-700 light:border-slate-200 dark:text-gray-400 light:text-slate-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Shantanu Pandey. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="https://github.com/Shantanu-Pandey03" target="_blank" rel="noopener noreferrer" className="hover:text-pale-gold transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.68-.206.68-.458 0-.226-.007-.756-.01-1.112-2.782.603-3.37-1.341-3.37-1.341-.454-1.153-1.11-1.463-1.11-1.463-.907-.619.069-.607.069-.607 1.004.072 1.532 1.03 1.532 1.03.89 1.529 2.336 1.088 2.906.833.09-.645.349-1.088.635-1.336-2.22-.253-4.555-1.113-4.555-4.949 0-1.09.389-1.981 1.029-2.675-.103-.253-.446-1.272.098-2.646 0 0 .84-.268 2.75 1.025A9.395 9.395 0 0112 6.05c.85.006 1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.373.202 2.393.099 2.646.64.694 1.028 1.584 1.028 2.675 0 3.844-2.339 4.693-4.566 4.945.359.309.678.92.678 1.855 0 1.337-.012 2.417-.012 2.747 0 .254.21.549.686.457C21.13 20.2 24 16.446 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" /></svg></a>
                <a href="https://linkedin.com/in/shantanu-pandey-03" target="_blank" rel="noopener noreferrer" className="hover:text-pale-gold transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.518V14.77c0-1.408-.025-3.221-1.965-3.221-1.967 0-2.27 1.538-2.27 3.116v5.787H9.176V9.296h3.372v1.545h.048c.47-.892 1.61-1.83 3.326-1.83C19.782 9.006 20 10.978 20 14.156v6.296zM5.597 7.747c-1.2 0-2.167-.954-2.167-2.164 0-1.196.967-2.165 2.167-2.165 1.198 0 2.165.969 2.165 2.165 0 1.21-.967 2.164-2.165 2.164zM7.34 9.296H3.82V20.45h3.52V9.296z" /></svg></a>
            </div>
        </div>
    </motion.footer>
);


// --- SECTION COMPONENTS ---

const Hero = () => (
    <section id="hero" className="h-screen w-screen flex items-center justify-center snap-start relative px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12">
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1">
                <h1 className="text-pale-gold text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-xl">Hi, I'm <span className="text-inherit">Shantanu Pandey</span></h1>
                <p className="text-lg sm:text-xl leading-relaxed mb-8">A passionate MERN stack developer crafting elegant and efficient web applications.</p>
                <div className="max-w-xs mx-auto md:mx-0"><a href="#contact"><Button>Get in Touch</Button></a></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.4 }} className="flex-1 flex justify-center items-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-pale-gold">
                    <img src="../../public/AmbuPortfolio.jpeg" alt="Developer Profile Placeholder" className="w-full h-full object-cover" />
                </div>
            </motion.div>
        </div>
    </section>
);

const ProjectCard = ({ title, description, tags, link }) => (
    <motion.div className="flex-none w-[90%] sm:w-80 md:w-96 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer dark:bg-neutral-obj dark:border dark:border-neutral-700 light:bg-white light:border light:border-slate-200 snap-center" whileHover={{ y: -8, scale: 1.02 }} onClick={() => window.open(link, '_blank')}>
        <h3 className="text-pale-gold text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-base mb-4 dark:text-gray-300 light:text-slate-700">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">{tags.map((tag) => <span key={tag} className="text-sm px-3 py-1 rounded-full border dark:text-gray-400 dark:bg-neutral-bg dark:border-neutral-700 light:text-slate-600 light:bg-slate-100 light:border-slate-300">{tag}</span>)}</div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-pale-gold hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium">View Project →</a>
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

const EducationCard = ({ degree, institution, years, description, delay }) => (
    <motion.div className="p-6 rounded-xl shadow-lg dark:bg-neutral-obj dark:border dark:border-neutral-700 light:bg-white light:border light:border-slate-200" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: delay }} whileHover={{ y: -5, scale: 1.02 }}>
        <h3 className="text-pale-gold text-2xl font-semibold mb-2">{degree}</h3>
        <p className="text-lg mb-1 text-inherit">{institution}</p>
        <p className="text-sm mb-3 dark:text-gray-400 light:text-slate-500">{years}</p>
        <p className="text-base dark:text-gray-300 light:text-slate-700">{description}</p>
    </motion.div>
);

const Education = () => (
    <section id="education" className="h-screen w-screen flex flex-col items-center justify-center snap-start relative px-4">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="text-pale-gold text-5xl font-extrabold mb-12 text-center drop-shadow-lg">Education</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">{educationDetails.map((edu, index) => <EducationCard key={index} {...edu} delay={index * 0.2} />)}</div>
    </section>
);

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = async (e) => {
        e.preventDefault(); setStatus('submitting');
        await new Promise(res => setTimeout(res, 1500));
        console.log('Form submitted:', formData);
        setStatus('success'); setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
    };
    return (
        <section id="contact" className="h-screen w-screen flex flex-col snap-start relative">
            <div className="w-full flex-grow flex flex-col items-center justify-center p-4">
                <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="text-pale-gold text-5xl font-extrabold mb-8 text-center drop-shadow-lg">Contact Me</motion.h2>
                <motion.div className="w-full max-w-2xl mx-auto p-8 rounded-xl shadow-lg dark:bg-neutral-obj dark:border dark:border-neutral-700 light:bg-white light:border light:border-slate-200" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2 }}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div><label htmlFor="name" className="block text-pale-gold text-sm font-medium mb-2">Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pale-gold dark:bg-neutral-bg dark:border dark:border-neutral-700 dark:text-white light:bg-slate-50 light:border light:border-slate-300 light:text-slate-800" placeholder="Your Name" required /></div>
                        <div><label htmlFor="email" className="block text-pale-gold text-sm font-medium mb-2">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pale-gold dark:bg-neutral-bg dark:border dark:border-neutral-700 dark:text-white light:bg-slate-50 light:border light:border-slate-300 light:text-slate-800" placeholder="your.email@example.com" required /></div>
                        <div><label htmlFor="message" className="block text-pale-gold text-sm font-medium mb-2">Message</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pale-gold resize-y dark:bg-neutral-bg dark:border dark:border-neutral-700 dark:text-white light:bg-slate-50 light:border light:border-slate-300 light:text-slate-800" placeholder="Your message..." required ></textarea></div>
                        <Button type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending...' : 'Send Message'}</Button>
                        <AnimatePresence>
                            {status === 'success' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-green-500 text-center">Message sent successfully!</motion.p>}
                            {status === 'error' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-center">Failed to send. Please try again.</motion.p>}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
            <Footer />
        </section>
    );
};


// --- MAIN APP COMPONENT ---

function App() {
  return (
    <ThemeProvider>
      {/* THEME FIX: Removed explicit bg/text colors here to allow ThemeProvider to control them. */}
      <div className="dark:bg-neutral-bg dark:text-white light:bg-slate-100 light:text-slate-800 transition-colors duration-300">
          <Header />
          <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            <Hero />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
