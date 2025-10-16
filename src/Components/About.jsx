import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Profile Image */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-56 h-56 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <img
                src="/Assets/challatharun.jpg"
                alt="Tharun Challa"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-medium">MERN Stack Developer</span>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            className="w-full md:w-3/5 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Tharun Challa</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                A passionate <span className="font-semibold text-gray-800 dark:text-white">Full Stack Developer</span> with
                <span className="font-semibold text-gray-800 dark:text-white"> 1.9+ years</span> of experience building robust web and mobile applications. I love solving real-world problems through code and delivering seamless user experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">My Toolkit</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  ["React.js", "blue"],
                  ["Node.js", "green"],
                  ["Express.js", "gray"],
                  ["MongoDB", "emerald"],
                  ["Tailwind CSS", "cyan"],
                  ["TypeScript", "indigo"],
                  ["JavaScript", "yellow"],
                  ["MySQL", "teal"],
                  ["Bootstrap", "purple"],
                  ["Handlebars.js", "orange"],
                  ["HTML5 & CSS3", "rose"],
                  ["Python", "pink"]
                ].map(([label, color]) => (
                  <SkillBadge key={label} label={label} color={color} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Tools & Platforms</h4>
              <p className="text-gray-600 dark:text-gray-300">Visual Studio Code, Git, GitHub, Bitbucket</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">What Drives Me</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MotivationCard icon="🎨" title="Crafting Elegant UI" text="Designing intuitive, beautiful interfaces with a focus on user experience and detail." />
                <MotivationCard icon="⚡" title="Performance & Scalability" text="Building fast, scalable backends and optimized frontends for a seamless experience." />
                <MotivationCard icon="🚀" title="Continuous Learning" text="Always exploring new technologies and best practices to stay ahead in the tech world." />
                <MotivationCard icon="🤝" title="Collaboration" text="Working closely with cross-functional teams to bring ideas to life and deliver impactful products." />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillBadge = ({ label, color }) => {
  const colorClasses = {
    blue: 'bg-blue-400 dark:bg-blue-900 text-blue-800 dark:text-blue-300',
    green: 'bg-green-400 dark:bg-green-900 text-green-800 dark:text-green-300',
    gray: 'bg-gray-400 dark:bg-gray-900 text-gray-800 dark:text-gray-300',
    emerald: 'bg-emerald-400 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300',
    cyan: 'bg-cyan-400 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300',
    indigo: 'bg-indigo-400 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300',
    yellow: 'bg-yellow-300 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100',
    teal: 'bg-teal-400 dark:bg-teal-900 text-teal-800 dark:text-teal-300',
    purple: 'bg-purple-400 dark:bg-purple-900 text-purple-800 dark:text-purple-300',
    orange: 'bg-orange-400 dark:bg-orange-900 text-orange-800 dark:text-orange-300',
    rose: 'bg-rose-400 dark:bg-rose-900 text-rose-800 dark:text-rose-300',
    pink: 'bg-pink-400 dark:bg-pink-900 text-pink-800 dark:text-pink-300',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className={`flex items-center justify-center px-3 py-2 rounded-lg font-medium text-sm transition-colors duration-300 shadow-sm ${colorClasses[color] || 'bg-gray-300 text-gray-800'}`}
    >
      {label}
    </motion.div>
  );
};

const MotivationCard = ({ icon, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
  >
    <div className="flex items-center space-x-3 mb-2">
      <div className="text-2xl">{icon}</div>
      <h5 className="font-semibold text-gray-800 dark:text-white">{title}</h5>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
  </motion.div>
);

export default About;
