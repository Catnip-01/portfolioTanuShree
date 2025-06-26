import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './themeToggle';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [ { name: 'Projects', href: '#projects' }, { name: 'Skills', href: '#skills' }, { name: 'Education', href: '#education' }, { name: 'Contact', href: '#contact' }];
    return (
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} className="fixed top-0 left-0 right-0 z-50 p-4 shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-neutral-obj/80 dark:shadow-neutral-900/50 light:bg-white/80 light:shadow-slate-300/40">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="#hero" className="text-pale-gold text-2xl font-bold rounded-md px-2 py-1 transition duration-300 ease-in-out hover:scale-105">SP</a>
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => <motion.a key={item.name} href={item.href} className="text-pale-gold hover:text-slate-900 dark:hover:text-white transition duration-300 font-medium relative group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{item.name}<span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pale-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></motion.a>)}
                    {/* <ThemeToggle /> */}
                </div>
                <div className="md:hidden flex items-center">
                    {/* <ThemeToggle /> */}
                    <button onClick={() => setIsOpen(!isOpen)} className="text-pale-gold focus:outline-none ml-4"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}</svg></button>
                </div>
            </div>
            <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden mt-4 space-y-4 px-4 pb-4">{navItems.map((item) => <motion.a key={item.name} href={item.href} className="block text-pale-gold hover:text-slate-900 dark:hover:text-white transition duration-300 font-medium py-2 rounded-md" onClick={() => setIsOpen(false)} whileHover={{ x: 5 }}>{item.name}</motion.a>)}</motion.div>}</AnimatePresence>
        </motion.nav>
    );
};

export default Header;