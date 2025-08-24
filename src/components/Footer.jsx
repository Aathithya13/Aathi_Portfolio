import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              <span className="text-xl font-bold">Aathithya M</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and endless Git commits</span>
            </div>
          </div>
          
          <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>© {currentYear} Aathithya M. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Full Stack Developer | CSE Student | Problem Solver
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
