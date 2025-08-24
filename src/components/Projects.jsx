import React from 'react';
import { Github, ExternalLink, Star, Figma } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Lanka Greenovation Platform',
      description:
        'E-commerce platform for biotech products with admin-controlled product listings, image upload functionality, and efficient data handling for smooth product management and user experience.',
      image:
        'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Multer'],
      github: 'https://github.com/Aathithya13',
      demo: 'https://lankagreenovation.com/',
      featured: true,
    },
    {
      title: 'Care and Cure Hospital Management',
      description:
        'Enterprise-level hospital management system developed during Infosys internship. Includes Doctor Directory, Patient Profiles, Appointment Calendar, Billing, and Report Generation modules.',
      image:
        '/careAndCure.png',
      technologies: ['Java 17', 'Spring Boot', 'MySQL', 'Thymeleaf', 'JWT'],
      github: 'https://github.com/Aathithya13',
      demo: '#',
      featured: true,
    },
     {
      title: 'Hostel Leave Application System',
      description:
        'Full-stack leave management system for students with user-friendly interface for leave submission and tracking, secure backend with JWT authentication, and efficient MongoDB data storage.',
      image:
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/Aathithya13',
      demo: '#',
      featured: true,
    },
    {
      title: 'Alumni Association Platform',
      description:
        'A comprehensive full-stack platform for alumni engagement built with MERN stack. Features include user registration, donation portals, networking hubs, and job listings with intuitive design for community building.',
      image:
        '/Alumni.png',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/Aathithya13',
      demo: '#',
      featured: false,
    },
    
   
    
    {
      title: 'Bite Buzz - Food Ordering App',
      description:
        'Comprehensive UI/UX design for a food ordering application with nearly 50 pages. Focused on user flow, interface design, and interactive prototypes to enhance user engagement.',
      image:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research'],
      github: '#',
      demo: 'https://www.figma.com/design/985mIiPLmqPPKALyojHITB/projects-AB?node-id=0-1&t=XESmUpbalUw5N3cb-1',
      featured: false,
      isDesign: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills
              in full-stack development and UI/UX design
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {project.featured && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2">
                    <div className="flex items-center justify-center text-white text-sm font-medium">
                      <Star className="h-4 w-4 mr-2" />
                      Featured Project
                    </div>
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.isDesign ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition-colors"
                      >
                        <Figma className="h-5 w-5" />
                        <span>Design</span>
                      </a>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span>Code</span>
                      </a>
                    )}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Aathithya13"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
