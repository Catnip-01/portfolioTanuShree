// src/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => (
    <motion.footer
        id="footer" /* Add an ID for navigation/snapping */
        className="w-full py-16 text-center border-t snap-start relative /* Added snap-start and py-16 for height */
                   border-neutral-light-text-secondary /* Light mode border */
                   text-neutral-light-text-secondary /* Light mode text */
                   dark:border-neutral-700 /* Dark mode border */
                   dark:text-gray-400 /* Dark mode text */
                   "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
    >
        <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Tanu Shree Kumawat. All rights reserved.</p>
            <br />
            <p>Social Links:</p>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="https://github.com/tanu-04" target="_blank" rel="noopener noreferrer" className="hover:text-pale-gold transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.68-.206.68-.458 0-.226-.007-.756-.01-1.112-2.782.603-3.37-1.341-3.37-1.341-.454-1.153-1.11-1.463-1.11-1.463-.907-.619.069-.607.069-.607 1.004.072 1.532 1.03 1.532 1.03.89 1.529 2.336 1.088 2.906.833.09-.645.349-1.088.635-1.336-2.22-.253-4.555-1.113-4.555-4.949 0-1.09.389-1.981 1.029-2.675-.103-.253-.446-1.272.098-2.646 0 0 .84-.268 2.75 1.025A9.395 9.395 0 0112 6.05c.85.006 1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.373.202 2.393.099 2.646.64.694 1.028 1.584 1.028 2.675 0 3.844-2.339 4.693-4.566 4.945.359.309.678.92.678 1.855 0 1.337-.012 2.417-.012 2.747 0 .254.21.549.686.457C21.13 20.2 24 16.446 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/tanu-shree-kumawat-1a1183253/" target="_blank" rel="noopener noreferrer" className="hover:text-pale-gold transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.518V14.77c0-1.408-.025-3.221-1.965-3.221-1.967 0-2.27 1.538-2.27 3.116v5.787H9.176V9.296h3.372v1.545h.048c.47-.892 1.61-1.83 3.326-1.83C19.782 9.006 20 10.978 20 14.156v6.296zM5.597 7.747c-1.2 0-2.167-.954-2.167-2.164 0-1.196.967-2.165 2.167-2.165 1.198 0 2.165.969 2.165 2.165 0 1.21-.967 2.164-2.165 2.164zM7.34 9.296H3.82V20.45h3.52V9.296z" />
                    </svg>
                </a>
                <a href="https://leetcode.com/u/tanu_shree04/" target="_blank" rel="noopener noreferrer" className="hover:text-pale-gold transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
                    </svg>
                </a>
            </div>
        </div>
    </motion.footer>
);

export default Footer;