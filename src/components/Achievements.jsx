import React from 'react';
import { Trophy, Code, Star, Award, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Minitechnovision 2K25',
      description: 'Department-wise Runner-Up',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      category: 'Competition'
    },
    {
      title: 'Top Coders Event',
      description: 'Secured 4th place',
      icon: Code,
      color: 'from-blue-500 to-purple-500',
      category: 'Competition'
    },
    {
      title: 'HackerRank Java',
      description: '5★ Gold Badge',
      icon: Star,
      color: 'from-green-500 to-teal-500',
      category: 'Certification'
    }
  ];

  const codingStats = [
    {
      platform: 'LeetCode',
      achievement: '250+ Problems Solved',
      icon: Code,
      color: 'from-orange-500 to-red-500'
    },
    {
      platform: 'GeeksforGeeks',
      achievement: '100+ Problems Solved',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      platform: 'HackerRank',
      achievement: '5★ Java Gold Badge',
      icon: Award,
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Achievements & Recognition
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recognition for my dedication to competitive programming and technical excellence
            </p>
          </div>

          {/* Competition Achievements */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Competition & Awards
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${achievement.color} text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <achievement.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {achievement.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                    {achievement.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Coding Statistics */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Competitive Programming Stats
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {codingStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} text-white rounded-lg mb-4`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.platform}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
              <Trophy className="h-5 w-5 mr-2" />
              <span className="font-medium">Continuously growing and learning! 🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
