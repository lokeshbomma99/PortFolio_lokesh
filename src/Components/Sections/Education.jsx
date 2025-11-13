// src/components/sections/Education.jsx

import React from 'react';
import { motion } from "framer-motion";

const Education = () => {
    // 💡 Education and Experience Data
    const timelineData = [
        {
            years: "2023 - 2026",
            title: "Bachelor of Computer Applications (BCA)",
            description: "Currently in 6th Semester. Focused on Full Stack Development.",
            type: "Education"
        },
        {
            years: "2025 - Present",
            title: "React.js Learning Path",
            description: "Self-directed learning focusing on modern React, state management with Redux, and building full-stack applications with Node.js.",
            type: "Experience"
        },
    ];

    return (
        
        <motion.section
         initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
        id="education" className="py-16 sm:py-24 max-w-5xl mx-auto">
            <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-12">
                Experience & Education
            </h2>
            
            <div className="relative">
                {/* Vertical Line for Timeline */}
                <div className="absolute left-1 bottom-2 sm:left-6 top-0 bottom-0 w-3.5 rounded-t-2xl rounded-b-2xl bg-emerald-300/30"></div>

                {timelineData.map((item, index) => (
                    <div key={index} className="mb-10 flex items-start pl-8 sm:pl-16 relative">
                        
                        {/* Timeline Dot */}
                        <div className="absolute left-0 sm:left-[15px] top-0 w-[23px] h-6 sm:w-8 sm:h-8 rounded-full bg-background-dark flex items-center justify-center z-10">
                            <div className="w-3.5 h-3.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#00ffd0]"></div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-1 w-full">
                            <p className="text-emerald-300 text-sm font-medium uppercase tracking-wider mb-1">
                                {item.years}
                            </p>
                            <h3 className="text-white text-xl font-bold">
                                {item.title}
                            </h3>
                            <p className="text-white/70 text-base">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Education;