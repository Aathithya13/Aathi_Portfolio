import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const internships = [
    {
      title: 'Java Developer Intern',
      company: 'Infosys Springboard',
      duration: '2 months',
      location: 'Remote',
      description:
        'Developed backend using Java 17 and Spring Boot, and built frontend interfaces with Thymeleaf for the Care and Cure Hospital App. Worked on scalable healthcare modules including patient management and billing systems.',
      technologies: ['Java 17', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      type: 'internship',
    },
    {
      title: 'Web Developer Intern',
      company: 'KEVELL CORP',
      duration: '15 days',
      location: 'Remote',
      description:
        'Developed responsive web pages and improved UI using HTML, CSS, and JavaScript, gaining practical front-end development experience with modern web standards.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      type: 'internship',
    },
    {
      title: 'UI & UX Developer Intern',
      company: 'RECCSAR PRIVATE LIMITED',
      duration: '15 days',
      location: 'Remote',
      description:
        'Created user interface designs and interactive prototypes using Figma, focusing on enhancing user experience and visual appeal for web applications.',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research'],
      type: 'internship',
    },
    {
      title: 'Networking Virtual Intern',
      company: 'Cisco',
      duration: 'Self-paced',
      location: 'Virtual',
      description:
        "Completed Cisco's virtual internship program, gaining foundational knowledge in networking protocols and Cisco tools for network administration.",
      technologies: ['Networking', 'Cisco Tools', 'Network Protocols'],
      type: 'virtual',
    },
  ];

  const workshops = [
    {
      title: 'Hands-On Workshop on Internet of Things (IoT)',
      institution: 'Kamaraj College of Engineering and Technology',
      description:
        'Gained practical experience with IoT devices and applications, learning about sensor integration and data communication.',
    },
    {
      title: 'Workshop on IoT & Robotics',
      institution: 'Subbalakshmi Lakshmipathy College of Science',
      description:
        'Explored the integration of IoT technologies with robotics systems, understanding automation and smart device development.',
    },
  ];

  const courses = [
    {
      title: 'Mastering the Art of Coding – Java Programming',
      provider: 'Amphisoft Technologies',
      description:
        'Enhanced core Java programming skills and coding techniques with hands-on projects.',
    },
    {
      title: 'Mastering Full Stack Development: MERN Stack',
      provider: 'VEI Technologies',
      description:
        'Gained comprehensive experience in MongoDB, Express.js, React.js, and Node.js development.',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Learning
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey through internships, workshops, and continuous learning experiences
            </p>
          </div>

          {/* Internships */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
              Internships
            </h3>
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {internship.title}
                      </h4>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {internship.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {internship.location}
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            internship.type === 'internship'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}
                        >
                          {internship.type === 'internship'
                            ? 'Internship'
                            : 'Virtual Program'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {internship.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <Award className="h-6 w-6 mr-3 text-purple-600" />
              Workshops
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {workshops.map((workshop, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {workshop.title}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                    {workshop.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Value Added Courses */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <Award className="h-6 w-6 mr-3 text-teal-600" />
              Value Added Courses
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h4>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                    {course.provider}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
