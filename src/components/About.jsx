import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      year: '2022 - 2026',
      institution: 'Kamaraj College of Engineering & Technology',
      degree: 'B.E (Computer Science & Engineering)',
      grade: 'CGPA: 8.82 (Up to 6th Sem)',
      icon: GraduationCap
    },
    {
      year: '2022',
      institution: 'P.K.N. Matric Hr. Sec. School',
      degree: 'Higher Secondary (HSLC)',
      grade: '87.67%',
      icon: Award
    },
    {
      year: '2020',
      institution: 'P.K.N. Matric Hr. Sec. School',
      degree: 'Secondary School (SSLC)',
      grade: '80.4%',
      icon: Award
    }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
  <img
    src="/develp.avif"   // replace with your image path
    alt="Profile"
    className="w-full h-full object-cover rounded-2xl"
  />
</div>

            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I'm a fourth-year Computer Science Engineering student with a strong foundation in 
                web development technologies. My journey in programming started with Java and has 
                evolved to encompass full-stack development using modern frameworks like React.js, 
                Node.js, and Spring Boot.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I'm passionate about creating innovative web solutions and have hands-on experience 
                with the MERN stack, microservices architecture, and database management. Currently 
                exploring advanced concepts in Spring Framework and continuously improving my 
                problem-solving skills through competitive programming.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Tamil Nadu, India</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Available for internships & projects</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">250+ LeetCode problems solved</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Educational Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex-shrink-0">
                      <edu.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 dark:bg-gray-600 dark:text-blue-300 px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.institution}</p>
                      <p className="text-sm font-medium text-green-600">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
