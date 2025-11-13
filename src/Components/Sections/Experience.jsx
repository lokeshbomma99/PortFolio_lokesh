// src/components/sections/Experience.jsx

import React from 'react';

const Experience = () => {
    const experienceData = [
        {
            title: "Frontend Developer (Intern)",
            company: "Tech Solutions Inc.",
            date: "Jan 2024 - Present",
            description: [
                "Developed and maintained responsive user interfaces using React and Tailwind CSS.",
                "Integrated RESTful APIs for dynamic data retrieval and submission.",
                "Collaborated with design team to translate mockups into high-quality code.",
                "Participated in daily stand-ups and code reviews to ensure code quality."
            ]
        },
        // Add more experience or education entries
    ];

    return (
        <section id="experience" className="flex flex-col gap-10 pt-16">
            <header>
                <h2 className="text-4xl font-bold text-white mb-4">💼 Education</h2>
                <p className="text-white/80 text-lg">
                    Highlights of my professional journey and hands-on technical involvement.
                </p>
            </header>
            
            <div className="flex flex-col gap-8">
                {experienceData.map((job, index) => (
                    <div key={index} className="p-6 rounded-xl glassmorphic border border-white/10">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white">{job.title}</h3>
                            <span className="text-primary font-medium text-sm">{job.date}</span>
                        </div>
                        <p className="text-white/70 font-semibold mb-4">{job.company}</p>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                            {job.description.map((point, pIndex) => (
                                <li key={pIndex} className="text-sm">{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;