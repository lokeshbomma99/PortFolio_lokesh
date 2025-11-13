// src/components/sections/ProjectCard.jsx

import React, { useState } from 'react'; // 💡 useState imported
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
    // 💡 State to handle image loading error (fallback)
    const [imageError, setImageError] = useState(false);
    
    // Determine if the Live Demo link should be active
    const isLive = project.liveUrl && project.liveUrl !== '#';

    // The image source will be /RealEstate.png (from public folder)
    const imageSrc = project.image; 

    return (
        <motion.div
         initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
        
        
        className="group relative flex flex-col rounded-xl overflow-hidden border border-white/10 glassmorphic">
            
            {/* 💡 IMAGE RENDERING WITH FALLBACK LOGIC */}
            <div className="w-full aspect-video bg-gray-900 overflow-hidden">
                {imageSrc && !imageError ? (
                    // 1. Attempt to load the image
                    <img
                        src={imageSrc}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        onError={() => setImageError(true)} // Set state if image fails to load
                        loading="lazy"
                    />
                ) : (
                    // 2. Fallback UI if imagePath is missing or image fails
                    <div className="w-full h-full flex items-center justify-center text-white/50 text-center p-4 bg-gray-800">
                        <span className="text-sm font-medium text-white/70">
                            {project.title} Image Not Available
                        </span>
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm flex-grow mb-4">{project.description}</p>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 text-xs text-white/40 mb-6">
                    {project.tech.map((t, index) => (
                        <span key={index} className="px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="flex gap-4">
                        {/* Live Demo Link */}
                        <a 
                            className={`flex-1 flex items-center justify-center gap-2 h-10 px-4 text-white/70 font-bold rounded-lg text-sm transition-all ${isLive ? 'bg-white/10 hover:bg-emerald-100 hover:text-black hover:opacity-90 shadow-glow-primary' : 'bg-gray-700/50 text-white/50 cursor-not-allowed'}`} 
                            href={isLive ? project.liveUrl : '#'} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => !isLive && e.preventDefault()}
                        >
                            Live Demo
                        </a>
                        
                        {/* GitHub Code Link */}
                        <a 
                            className="flex-1 flex items-center justify-center gap-2 h-10 px-4 border border-white/50 text-white font-bold rounded-lg text-sm hover:bg-white/10 transition-colors" 
                            href={project.githubUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Code
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;