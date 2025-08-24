import React from 'react';
import { Code, Database, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'JavaScript', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Server,
      skills: ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'Spring Framework', 'Hibernate'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'MySQL Workbench', 'MongoDB Compass'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git', 'VS Code', 'Eclipse', 'Postman', 'Figma', 'Thymeleaf', 'Log4j'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const certifications = [
    'Microsoft Certified: Azure Fundamentals',
    'Data Structures and Algorithms using Java – Infosys Springboard',
    'Programming using Java – Infosys Springboard',
    'Java Programming Fundamentals – Infosys Springboard',
    'Data Structures and Algorithms using Java – NPTEL',
    'MongoDB Essentials (MongoDB)'
  ];

  return (
    <section id="skills" className="py-20 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to build modern web applications
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} text-white rounded-lg mb-4`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
