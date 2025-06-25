import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Button = ({ children, onClick, type = 'button', disabled = false }) => (
    <motion.button type={type} onClick={onClick} disabled={disabled} className="w-full bg-pale-gold px-8 py-3 rounded-full text-lg font-semibold shadow-xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed dark:text-neutral-bg light:text-slate-900" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.button>
);

export default Button;