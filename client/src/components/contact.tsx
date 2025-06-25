import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "./footer";
import Button from './button';

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

export default Contact;