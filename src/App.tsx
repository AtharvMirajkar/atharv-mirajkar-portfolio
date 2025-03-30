import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Toaster position="top-right" />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero darkMode={darkMode} />       
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
         <About darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <footer className={`${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-50 text-gray-600'} py-8`}>
        <div className="container mx-auto px-6 text-center">
          © 2024 Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;