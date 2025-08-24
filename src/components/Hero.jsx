import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile circle */}
          <div className="mb-8">
  <img
    src="/aathi2.jpg"   // replace with your photo path
    alt="Profile"
    className="w-32 h-32 mx-auto mb-8 rounded-full object-cover shadow-xl"
  />

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Aathithya M
              </span>
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer & CSE Student
            </p>

            {/* Bio */}
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Fourth-year CSE student passionate about web development with strong skills in 
              Java, JavaScript, React.js, and the MERN stack. Currently exploring Spring Framework 
              and building innovative web solutions.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </button>

            <a
              href="/Aathithya_Software_Engineer.pdf"
              download="Aathithya_Resume.pdf"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/Aathithya13"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aathithya-m-78a919280"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:aathi22004@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll down arrow */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
