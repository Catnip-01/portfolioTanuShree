/* src/App.jsx */
import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './components/footer';
import Contact from "./components/contact";
import Button from './components/button';
// import Header from "./components/header";
import Hero from './components/hero';
// import ProjectCard from './components/projectCard';
import Projects from './components/projects';
import Education from './components/education';
import Skills from './components/skills';

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
