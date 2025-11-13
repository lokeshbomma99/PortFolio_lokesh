// src/components/sections/Projects.jsx

import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/PortfolioData';
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <motion.section 
         initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
        
        
        id="projects" className="flex flex-col gap-10 pt-16">
            <header>
                <h2 className="text-4xl font-bold text-white mb-4">✨ My Recent Work</h2>
                <p className="text-white/80 text-lg">
                    Showcasing projects that highlight my skills in full-stack MERN development and modern UI implementation.
                </p>
            </header>
            
            <div className="grid md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;