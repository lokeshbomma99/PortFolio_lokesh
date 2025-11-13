// src/components/Hero.jsx

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

// --- Configuration ---
const LOOPING_TITLES = [
    "Front-End Developer",
    "React.js Enthusiast",
    "Crafting Interactive Web Experiences",
];

const MAIN_TITLE = "Hi, I'm Lokesh Bomma 👋"; // Main title is now static

const TYPING_DELAY_LOOP = 100;
const DELETING_DELAY = 50;
const PAUSE_DELAY = 1500;
const FADE_IN_DURATION = 1500; // 1.5 seconds for the fade-in effect


// 1. Component for the Main Title (Smooth Fade-In)
const FadeInText = ({ text, duration }) => {
    // State to control visibility and trigger the transition
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Start the fade-in after a short delay (e.g., 100ms)
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <h1 
            className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em]"
            // Apply inline style for the transition duration
            style={{ 
                opacity: isVisible ? 1 : 0, 
                transition: `opacity ${duration / 700}s ease-in-out` // Convert ms to seconds
            }}
        >
            {text}
        </h1>
    );
};


// 2. Component for the looping subtitles (Types, pauses, deletes, and loops)
const TypewriterLooper = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const [hasStarted, setHasStarted] = useState(false);

    // Add a delay before the looping text starts, so it begins *after* the main title fades in
    useEffect(() => {
        const startDelay = FADE_IN_DURATION + 300; // Wait for fade-in to finish + small pause
        const timer = setTimeout(() => setHasStarted(true), startDelay);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!hasStarted) return; // Wait for initial delay

        const fullText = LOOPING_TITLES[titleIndex];
        let timer;

        if (isDeleting) {
            // Deleting
            if (charIndex > 0) {
                timer = setTimeout(() => {
                    setCurrentText(fullText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                }, DELETING_DELAY);
            } else {
                // Done deleting, switch to typing the next title
                setIsDeleting(false);
                setTitleIndex((prevIndex) => (prevIndex + 1) % LOOPING_TITLES.length);
            }
        } else {
            // Typing
            if (charIndex < fullText.length) {
                timer = setTimeout(() => {
                    setCurrentText(fullText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                }, TYPING_DELAY_LOOP);
            } else {
                // Done typing, pause before deleting
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, PAUSE_DELAY);
            }
        }

        return () => clearTimeout(timer);
    }, [titleIndex, charIndex, isDeleting, hasStarted]);

    // Blinking cursor class for the looping text
    const cursorClass = "inline-block border-r-4 border-emerald-300 animate-pulse h-8 lg:h-12 ml-1";

    return (
        <h2 className="text-white/80 text-xl md:text-3xl lg:text-4xl font-normal leading-tight tracking-[-0.033em] min-h-[50px]">
            {currentText}
            {hasStarted && <span className={cursorClass}> </span>}
        </h2>
    );
};


// 3. Main Hero Component
const Hero = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    // 💡 2. Click Handler Function
    const handleDownload = () => {
        // Prevent multiple clicks while loading
        if (isDownloading) return;

        setIsDownloading(true);

        // --- Simulate Loading Time (e.g., 2000ms or 2 seconds) ---
        setTimeout(() => {
            // 💡 3. Start Actual Download Here
            // यह URL आपके Resume फ़ाइल का सार्वजनिक पथ होना चाहिए (e.g., public/resume/Lokesh_Bomma_Resume.pdf)
            const resumeUrl = './Lokesh_Bomma_Resume.pdf'; 
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = resumeUrl;
            
            // This forces the browser to download the file instead of opening it
            link.setAttribute('download', 'Resume.pdf'); 
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // 💡 4. Stop Loading
            setIsDownloading(false);
        }, 2000); // 2000ms = 2 seconds loading duration
    };
    return (
        <motion.section
        initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 0.8, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
        
        id="hero" className="mt-16 sm:mt-24">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex flex-col gap-8 flex-1 text-center lg:text-left">
                    <div className="flex flex-col gap-2">
                        
                        {/* 💡 1. Main Title - Fade-In Effect */}
                        <FadeInText text={MAIN_TITLE} duration={FADE_IN_DURATION} />
                        
                        {/* 💡 2. Subtitle - LOOPS, TYPES, AND DELETES */}
                        <TypewriterLooper />
                        
                    </div>
                    
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <a href="#projects" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl h-12 px-6 bg-emerald-300 shadow-[0_0_12px_#00ffd0] text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-emerald-100 transition-all shadow-glow-primary">
                            <span className="truncate">View Projects</span>
                        </a>
                       <button 
                            onClick={handleDownload} // Attach the handler
                            disabled={isDownloading} // Disable button while loading
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl h-12 px-6 border border-emerald-300 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors 
                                        relative group 
                                        hover:bg-emerald-100/10" // Base styles
                        >
                            {/* Loading Spinner/Icon */}
                            {isDownloading ? (
                                <div className="flex items-center gap-2">
                                    {/* Tailwind Spinner (You may need to add this keyframe in tailwind.config.js) */}
                                    <svg className="animate-spin h-5 w-5 text-emerald-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="truncate">Loading...</span>
                                </div>
                            ) : (
                                <span className="truncate">Download Resume</span>
                            )}
                        </button>
                    </div>
                </div>
                {/* Image Placeholder */}
                <div 
                    className="w-full max-w-sm lg:max-w-md xl:max-w-lg aspect-square bg-center bg-no-repeat bg-contain" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCfrPC0RJlpVHwCbZ6IZKtZaskJYzJGYH4WDXuYZv079Hfi1cvD9xZjrrZ4ghUhU32QCspin1hl6ZmLz54NdNqGrqIOm5OjvRQfdiYlBEhOAuQd7L33CYJluMfaABMjvjSpa1eqpH25hJ-rvEbCroQQHf7Kp5QedKVSHLYU62o9zf3ojdTZcsnaY-pCnNUVkx81NUUBIKLlvCp9NusbT6_RK4-AfFTkyQxrj1yDurvzdRUCMINgGkA7bjbMau9DKFynyrLYPS3tk7H")' }}
                ></div>
            </div>
        </motion.section>
    );
};

export default Hero;
