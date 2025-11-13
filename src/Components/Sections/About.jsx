// src/components/sections/About.jsx (CORRECTED UI)

import React from 'react';
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
        initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}>
        <section id="about" className="flex flex-col gap-10 pt-16">
            <header>
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            </header>
            
            <div className="flex flex-col gap-10">
                {/* --- 1. Main Profile & Text Block --- */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 text-white/80 text-lg">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <div 
                            className="size-32 rounded-full border-4 border-primary/50"
                            style={{ 
                                backgroundImage: 'url("./profile.jpeg")', 
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center',
                                // Optional: to replicate the greenish border glow effect
                                boxShadow: '0 0 10px rgba(74, 222, 128, 0.5)'
                            }}
                        >
                            {/*  */}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-white mb-1">Lokesh Bomma</h3>
                        <p className="text-white/80 text-base">
                            I'm a passionate Front-End Developer and a final year BCA student, currently exploring 
                            the depths of React, Node, and modern JavaScript frameworks to build beautiful and 
                            functional web applications.
                        </p>
                        <p className="text-primary font-medium text-base mt-2">
                            BCA 6th Semester Student (Fresher)
                        </p>
                    </div>
                </div>

                {/* --- 2. Stat Cards (Matching the exact design layout) --- */}
                <div className="grid sm:grid-cols-3 gap-6 pt-4">
                    
                    {/* Card 1: Projects Completed */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-end min-h-[140px]">
                        <h4 className="text-4xl font-black text-white mb-2">5+</h4>
                        <p className="text-white/70 text-sm">Projects Completed</p>
                    </div>

                    {/* Card 2: Tech Stack */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-end min-h-[140px]">
                        <h4 className="text-4xl font-black text-white mb-2">8+</h4>
                        <p className="text-white/70 text-sm">Tech Stack</p>
                    </div>

                    {/* Card 3: Current Focus */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-end min-h-[140px]">
                        <h4 className="text-4xl font-black text-white mb-2">React</h4>
                        <p className="text-white/70 text-sm">Current Focus</p>
                    </div>
                </div>
            </div>
        </section>
        </motion.div>
    );
};

export default About;