// src/components/sections/Skills.jsx

import React from 'react';
import { skillsData } from '../../data/PortfolioData';
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <motion.section
         initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
        
        id="skills" className="flex flex-col gap-10 pt-16">
            <header>
                <h2 className="text-4xl font-bold text-white mb-4">🛠️ Technical Skills</h2>
                <p className="text-white/80 text-lg">
                    A comprehensive overview of the technologies and tools I utilize to build modern, scalable web applications.
                </p>
            </header>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {skillsData.map((category, index) => (
                    <div key={index} className="p-6 rounded-xl glassmorphic border border-white/30 hover:bg-emerald-300/10 transition-colors">
                        <h3 className="text-xl font-semibold text-emerald-300  mb-4">{category.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, sIndex) => (
                                <span key={sIndex} className="px-3 py-1 text-sm bg-white/10 text-white rounded-lg hover:bg-primary/30 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;