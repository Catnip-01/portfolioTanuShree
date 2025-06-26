import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Footer from "./footer";
import Button from './button';

const Contact = () => {
    // FIX: Initialize formData keys to match input 'name' attributes
    const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
    const [status, setStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const SERVICE_ID = 'service_m9rj186';
        const TEMPLATE_ID = 'template_76omgcu';
        const PUBLIC_KEY = 'QZuFpMbatlzzFGfpK';

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);

            setStatus('success');
            // FIX: Clear form with matching keys
            setFormData({ user_name: '', user_email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        } finally {
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
        <section id="contact" className="h-screen w-screen flex flex-col snap-start relative">
            <div className="w-full flex-grow flex flex-col items-center justify-center p-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-pale-gold text-5xl font-extrabold mb-8 text-center drop-shadow-lg"
                >
                    Contact Me
                </motion.h2>
                <motion.div
                    className="w-full max-w-2xl mx-auto p-8 rounded-xl shadow-lg  bg-neutral-obj border border-neutral-700"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-pale-gold text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name" // Matches formData.user_name
                                value={formData.user_name} // Uses formData.user_name
                                onChange={handleChange}
                                className="w-full p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pale-gold  bg-neutral-bg  border  border-neutral-700  text-white light:bg-slate-50  "
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-pale-gold text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email" // Matches formData.user_email
                                value={formData.user_email} // Uses formData.user_email
                                onChange={handleChange}
                                className="w-full p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pale-gold  bg-neutral-bg  border  border-neutral-700  text-white light:bg-slate-50  "
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-pale-gold text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message" // Matches formData.message
                                value={formData.message} // Uses formData.message
                                onChange={handleChange}
                                rows="4"
                                className="w-full p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pale-gold resize-y  bg-neutral-bg  border  border-neutral-700  text-white light:bg-slate-50  "
                                placeholder="Your message..."
                                required
                            ></textarea>
                        </div>
                        <Button type="submit" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </Button>
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-green-500 text-center"
                                >
                                    Message sent successfully!
                                </motion.p>
                            )}
                            {status === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-500 text-center"
                                >
                                    Failed to send. Please try again.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
            
        </section>
    );
};

export default Contact;
