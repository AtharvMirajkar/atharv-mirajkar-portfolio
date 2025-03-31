import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        darkMode 
          ? 'bg-gray-900/80 backdrop-blur-sm' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.h1>
          <div className="flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={darkMode ? 'text-white' : 'text-gray-600'}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.a
              href="https://github.com/atharvmirajkar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className={`${darkMode ? 'text-white' : 'text-gray-600'} hover:text-purple-600`}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/atharvmirajkar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className={`${darkMode ? 'text-white' : 'text-gray-600'} hover:text-purple-600`}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:atharvmirajkar3@gmail.com"
              whileHover={{ scale: 1.2 }}
              className={`${darkMode ? 'text-white' : 'text-gray-600'} hover:text-purple-600`}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;