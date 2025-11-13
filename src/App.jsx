// src/App.jsx (Main Portfolio Layout)

import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/Sections/About';
import Skills from './Components/Sections/Skills';
import Projects from './Components/Sections/Projects';
import Experience from './Components/Sections/Experience';
import Contact from './Components/Sections/Contact';
import { ToastContainer, toast } from 'react-toastify';
import Education from './Components/Sections/Education';

const App = () => {
    return (
        // The main layout wrapper
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-950 font-display">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-[1100px] flex-1">
                              <ToastContainer/>

                        <Header />
                        
                        <main className="flex flex-col gap-20 sm:gap-28 md:gap-32">
                            <Hero />
                            
                            <About />
                            <Skills />
                            <Projects />
                            <Education />
                            <Contact />
                        </main>

                        <footer className="mt-24 py-8 border-t border-white/10 text-center text-white/50 text-sm">
                            © 2025 Lokesh Bomma — Built with ❤️ using React.js.
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;