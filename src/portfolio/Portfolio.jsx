import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Tahina from '../assets/Tahina.png'
import kontiki from '../assets/kontiki.png'
import dashboard from '../assets/dashboard.png'
import img1 from '../assets/img1.jpg'

// Simuler Framer Motion avec des animations CSS personnalisées
const MotionDiv = ({ children, className = '', initial = {}, animate = {}, transition = {}, whileHover = {}, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const getAnimationClass = () => {
        if (initial.opacity === 0 && animate.opacity === 1) {
            return isVisible ? 'animate-fadeIn' : 'opacity-0';
        }
        if (initial.y && animate.y === 0) {
            return isVisible ? 'animate-slideUp' : 'transform translate-y-8 opacity-0';
        }
        if (initial.x && animate.x === 0) {
            return isVisible ? 'animate-slideRight' : 'transform -translate-x-8 opacity-0';
        }
        if (initial.scale && animate.scale === 1) {
            return isVisible ? 'animate-scaleIn' : 'transform scale-95 opacity-0';
        }
        return '';
    };

    return (
        <div 
            className={`${className} ${getAnimationClass()} transition-all duration-700 ease-out`} 
            {...props}
        >
            {children}
        </div>
    );
};

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const projects = [
        {
            title: "Data warehouse",
            description: "Tableau de bord interactif pour visualiser des données en temps réel avec des graphiques dynamiques et des KPIs. Services d'emailing pour faciliter une prise de décision.",
            tech: ["React", "Django", "PostgreSQL"],
            image: dashboard,
            github: "#",
            demo: "#"
        },
        {
            title: "Site web officiel de Kontiki Service",
            description: "Site web professionnel pour présenter les services de l'entreprise avec une interface moderne et responsive.",
            tech: ["React.js", "Tailwind CSS"],
            image: kontiki,
            github: "#",
            demo: "https://kontikiservice.com/"
        },
        {
            title: "Plateforme pour le chœur",
            description: "Une plateforme pour que les membres du chœur envoient les programmes et gèrent les activités.",
            tech: ["Next.js", "Django", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
            github: "https://github.com/razafindramonjy23/Choral_stk",
            demo: "https://kontikiservice.com/"
        },
    ];

    const programmingLanguages = [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ];

    const developmentTechs = [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ];

    const databases = [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ];

    const tools = [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ];

    const name = "Tahina";

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                @keyframes slideRight {
                    from { 
                        opacity: 0; 
                        transform: translateX(-30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateX(0); 
                    }
                }
                @keyframes scaleIn {
                    from { 
                        opacity: 0; 
                        transform: scale(0.9); 
                    }
                    to { 
                        opacity: 1; 
                        transform: scale(1); 
                    }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
                .animate-slideUp { animation: slideUp 0.8s ease-out; }
                .animate-slideRight { animation: slideRight 0.8s ease-out; }
                .animate-scaleIn { animation: scaleIn 0.8s ease-out; }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-pulse-custom { animation: pulse 2s ease-in-out infinite; }
                .animate-rotate-slow { animation: rotate 10s linear infinite; }
                .stagger-1 { animation-delay: 0.1s; }
                .stagger-2 { animation-delay: 0.2s; }
                .stagger-3 { animation-delay: 0.3s; }
                .stagger-4 { animation-delay: 0.4s; }
                .stagger-5 { animation-delay: 0.5s; }
            `}</style>
            
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

                {/* Header */}
                <MotionDiv 
                    initial={{ y: -50, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full flex justify-between items-center px-6 py-4 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50"
                >
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-600 shadow-md hover:scale-110 transition-transform duration-300 animate-pulse-custom">
                        <img
                            src={Tahina}
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Menu */}
                    <div className="flex items-center bg-gray-800/90 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg space-x-6">
                        <a href="#about" className="text-cyan-400 font-medium hover:scale-110 transition-transform">About</a>
                        <a href="#projects" className="hover:text-cyan-400 transition hover:scale-110">Projects</a>
                        <a href="#contact" className="hover:text-cyan-400 transition hover:scale-110">Contact</a>
                    </div>

                    {/* Bouton dark mode */}
                    <button
                        onClick={toggleDarkMode}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/80 text-gray-400 hover:text-white shadow-lg transition hover:scale-110 animate-float"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <Sun className="w-5 h-5 animate-rotate-slow" /> : <Moon className="w-5 h-5" />}
                    </button>
                </MotionDiv>

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                    <div className="container mx-auto text-center">
                        {/* Photo de profil */}
                        <MotionDiv 
                            initial={{ scale: 0, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }}
                            className="mb-8"
                        >
                            <img
                                src={Tahina}
                                alt="Profile"
                                className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-lg hover:scale-110 transition-transform duration-300 animate-float"
                            />
                        </MotionDiv>

                        {/* Titre */}
                        <MotionDiv 
                            initial={{ y: 50, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            className="stagger-1"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                Salut, je suis{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse-custom">
                                    {name}
                                </span>
                            </h1>
                        </MotionDiv>

                        <MotionDiv 
                            initial={{ y: 30, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            className="stagger-2"
                        >
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                                Développeur Full-Stack junior passionné par la création d'expériences web modernes et performantes
                            </p>
                        </MotionDiv>

                        {/* Boutons */}
                        <MotionDiv 
                            initial={{ y: 30, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            className="flex justify-center space-x-4 mb-12 stagger-3"
                        >
                            <a
                                href="#contact"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse-custom"
                            >
                                Me contacter
                            </a>
                            <a
                                href="#projects"
                                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                Voir mes projets
                            </a>
                        </MotionDiv>

                        {/* Icônes sociales */}
                        <MotionDiv 
                            initial={{ y: 30, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            className="flex justify-center space-x-6 stagger-4"
                        >
                            <a href="https://github.com/razafindramonjy23" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-125 animate-float">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/fanomezantsoa-tahina-razafindramonjy-890517260/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-125 animate-float">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="razafindramonjytahina@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-125 animate-float">
                                <Mail className="w-6 h-6" />
                            </a>
                        </MotionDiv>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 px-6">
                    <div className="container mx-auto">
                        <MotionDiv 
                            initial={{ y: 50, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <h2 className="text-4xl font-bold text-center mb-16">
                                À propos de moi
                            </h2>
                        </MotionDiv>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                            <MotionDiv 
                                initial={{ x: -50, opacity: 0 }} 
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                    Développeur Full-Stack avec 1 an d'expérience, je me spécialise dans la création d'applications web modernes et performantes. Ma passion pour les nouvelles technologies me pousse à toujours apprendre et innover.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                    J'aime transformer des idées complexes en solutions simples et élégantes, en mettant l'accent sur l'expérience utilisateur et les performances.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["React", "JavaScript", "Node.js", "Python"].map((tech, index) => (
                                        <span
                                            key={tech}
                                            className={`px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-110 transition-transform animate-slideUp stagger-${index + 1}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </MotionDiv>
                            <MotionDiv 
                                initial={{ x: 50, opacity: 0 }} 
                                animate={{ x: 0, opacity: 1 }}
                                className="relative"
                            >
                                <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-xl transform rotate-3 animate-float"></div>
                                <img
                                    src={img1}
                                    alt="Développement"
                                    className="absolute top-0 left-0 w-full h-80 object-cover rounded-lg shadow-xl transform -rotate-3 hover:scale-105 hover:rotate-0 transition-all duration-300"
                                />
                            </MotionDiv>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-20 px-6">
                    <div className="container mx-auto">
                        <MotionDiv 
                            initial={{ y: 50, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                COMPÉTENCES TECHNIQUES
                            </h2>
                        </MotionDiv>

                        {/* Programming Languages */}
                        <div className="mb-16">
                            <MotionDiv 
                                initial={{ y: 30, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
                                    Langages de programmation
                                </h3>
                            </MotionDiv>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                {programmingLanguages.map((lang, index) => (
                                    <MotionDiv
                                        key={index}
                                        initial={{ scale: 0, opacity: 0 }} 
                                        animate={{ scale: 1, opacity: 1 }}
                                        className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 stagger-${index + 1}`}
                                    >
                                        <img
                                            src={lang.logo}
                                            alt={lang.name}
                                            className="w-16 h-16 mx-auto mb-4 hover:scale-125 hover:rotate-12 transition-transform duration-500 animate-float"
                                        />
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                            {lang.name}
                                        </h4>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>

                        {/* Development Technologies */}
                        <div className="mb-16">
                            <MotionDiv 
                                initial={{ y: 30, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
                                    Technologies de développement
                                </h3>
                            </MotionDiv>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                                {developmentTechs.map((tech, index) => (
                                    <MotionDiv
                                        key={index}
                                        initial={{ y: 30, opacity: 0 }} 
                                        animate={{ y: 0, opacity: 1 }}
                                        className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 stagger-${index + 1}`}
                                    >
                                        <img
                                            src={tech.logo}
                                            alt={tech.name}
                                            className="w-12 h-12 mx-auto mb-3 hover:scale-125 transition-transform duration-300 animate-pulse-custom"
                                        />
                                        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                            {tech.name}
                                        </h4>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>

                        {/* Databases */}
                        <div className="mb-16">
                            <MotionDiv 
                                initial={{ y: 30, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
                                    Bases de données
                                </h3>
                            </MotionDiv>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                {databases.map((db, index) => (
                                    <MotionDiv
                                        key={index}
                                        initial={{ scale: 0, opacity: 0 }} 
                                        animate={{ scale: 1, opacity: 1 }}
                                        className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 stagger-${index + 1}`}
                                    >
                                        <img
                                            src={db.logo}
                                            alt={db.name}
                                            className="w-16 h-16 mx-auto mb-4 hover:scale-125 hover:rotate-12 transition-transform duration-300 animate-float"
                                        />
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                            {db.name}
                                        </h4>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div>
                            <MotionDiv 
                                initial={{ y: 30, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
                                    Outils et autres
                                </h3>
                            </MotionDiv>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                                {tools.map((tool, index) => (
                                    <MotionDiv
                                        key={index}
                                        initial={{ y: 30, opacity: 0 }} 
                                        animate={{ y: 0, opacity: 1 }}
                                        className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 stagger-${index + 1}`}
                                    >
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            className="w-16 h-16 mx-auto mb-4 hover:scale-125 transition-transform duration-300 animate-pulse-custom"
                                        />
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                            {tool.name}
                                        </h4>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 px-6">
                    <div className="container mx-auto">
                        <MotionDiv 
                            initial={{ y: 50, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <h2 className="text-4xl font-bold text-center mb-16">
                                Mes Projets
                            </h2>
                        </MotionDiv>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <MotionDiv
                                    key={index}
                                    initial={{ y: 50, opacity: 0 }} 
                                    animate={{ y: 0, opacity: 1 }}
                                    className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 stagger-${index + 1}`}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs hover:scale-110 transition-transform"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex space-x-4">
                                            <a
                                                href={project.github}
                                                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110"
                                            >
                                                <Github className="w-4 h-4 mr-1" />
                                                Code
                                            </a>
                                            <a
                                                href={project.demo}
                                                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-1" />
                                                Demo
                                            </a>
                                        </div>
                                    </div>
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 px-6">
                    <div className="container mx-auto text-center">
                        <MotionDiv 
                            initial={{ y: 50, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <h2 className="text-4xl font-bold mb-8">Travaillons ensemble</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                                Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter !
                            </p>
                        </MotionDiv>

                        <MotionDiv 
                            initial={{ y: 30, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}
                            className="flex justify-center space-x-8 mb-12 stagger-1"
                        >
                            <a
                                href="mailto:razafindramonjytahina@gmail.com"
                                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-105 animate-float"
                            >
                                <Mail className="w-6 h-6" />
                                <span>razafindramonjytahina@gmail.com</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/fanomezantsoa-tahina-razafindramonjy-890517260/"
                                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-105 animate-float"
                            >
                                <Linkedin className="w-6 h-6" />
                                <span>LinkedIn</span>
                            </a>
                        </MotionDiv>

                        <MotionDiv 
                            initial={{ scale: 0, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }}
                            className="stagger-2"
                        >
                            <a
                                href="mailto:alex@exemple.com"
                                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 animate-pulse-custom"
                            >
                                Envoyer un message
                            </a>
                        </MotionDiv>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-6">
                    <div className="container mx-auto text-center">
                        <MotionDiv 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                        >
                            <p className="text-gray-600 dark:text-gray-400">
                                © 2025 Tahina. Fait avec ❤️ et React.
                            </p>
                        </MotionDiv>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;