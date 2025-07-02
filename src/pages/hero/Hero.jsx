import React from 'react'
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Server } from 'lucide-react';


const Hero = () => {
    return (
        <>
            <div className="container mx-auto text-center">
                <div className="mb-8">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                        alt="Profile"
                        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
                    />
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Salut, je suis{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Tahina
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                    Développeur Full-Stack passionné par la création d'expériences web modernes et performantes
                </p>

                <div className="flex justify-center space-x-4 mb-12">
                    <a
                        href="#contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        Me contacter
                    </a>
                    <a
                        href="#projects"
                        className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                        Voir mes projets
                    </a>
                </div>

                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero