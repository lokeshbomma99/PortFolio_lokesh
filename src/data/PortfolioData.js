// src/data/portfolioData.js

export const navLinks = [
    { id: 'about', title: 'About', href: '#about' },
    { id: 'skills', title: 'Skills', href: '#skills' },
    { id: 'projects', title: 'Projects', href: '#projects' },
    { id: 'education', title: 'Education', href: '#education' },
    { id: 'contact', title: 'Contact', href: '#contact' },
];

export const projectsData = [
    {
        id: 1,
        title: "Real Estate",
        description: "A modern frontend single-page application showcasing real estate properties with a smooth and responsive user interface.  Integrated Web3 Forms for handling email submissions without backend setup.    Used Toastify for user notifications to enhance user experience. Added UI animations using Framer Motion for interactive feel. Fully responsive design built with Tailwind CSS. Deployed live on Netlify for easy access.",
        tech: ["React.js, Tailwind CSS, Web3 Forms, Toastify, Framer Motion, Netlify"],
        liveUrl: "https://realestatelokesh.netlify.app/", // Update this with the deployed link later
        githubUrl: "https://github.com/lokeshbomma99/Real-estate", // Update this
        image: "/RealEstate.png", // Use actual image path
    },
    {
    id: 2,
    title: "SaaS GenAi Platform",
    description: "GenAi is a full-stack AI-powered SaaS platform that enables users to generate articles, blog titles, images, and perform advanced image editing like background and object removal. The platform integrates multiple AI APIs, provides a modern, responsive UI, and delivers seamless content and image creation experiences.",
    tech: [
        "React",
        "Tailwind CSS",
        "Clerk Authentication",
        "Prebuilt UI",
        "Neon PostgreSQL",
        "Google AI Studio API",
        "ClipDrop Image API",
        "Cloudinary",
        "ChatGPT",
        "Gemini"
    ],
    liveUrl: "https://saas-genaii.vercel.app/", 
    githubUrl: "https://github.com/lokeshbomma99/Saas-GenAi",
    image: "genai_platform_screenshot.png"
},

    // Add more projects here
];

export const skillsData = [
    { category: 'Frontend', skills: ['React.js', 'JavaScript (ES6+)',  'HTML5', 'CSS3'] },
    { category: 'Styling & UI/UX', skills: ['Tailwind CSS', 'Bootstrap', 'Material UI', 'Responsive Design'] },
    { category: 'Backend & Database', skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs',] },
    { category: 'Tools & Workflow', skills: ['Git/GitHub', 'VS Code', 'Postman', 'Vercel/Netlify'] },
];