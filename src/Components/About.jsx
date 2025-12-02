import React from "react";
import { motion } from "framer-motion";

const skills = [
  { label: "React.js", icon: "/Assets/react.svg" },
  { label: "Node.js", icon: "/Assets/node.svg" },
  { label: "Express.js", icon: "/Assets/express.svg" },
  { label: "Next.js", icon: "/Assets/Nextjs.svg" },
  { label: "MongoDB", icon: "/Assets/mongodb.svg" },
  { label: "Tailwind CSS", icon: "/Assets/Tailwindcss.png" },
  { label: "TypeScript", icon: "/Assets/typescript.svg" },
  { label: "JavaScript", icon: "/Assets/javascript.svg" },
  { label: "MySQL", icon: "/Assets/mysql.svg" },
  { label: "Bootstrap", icon: "/Assets/bootstrap.svg" },
  { label: "Handlebars.js", icon: "/Assets/HandleBarjs.jpg" },
  { label: "HTML5 & CSS3", icon: "/Assets/html5.svg" },

];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Tharun Challa</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              A passionate <span className="font-semibold text-gray-800 dark:text-white">Full Stack Developer</span> with
              <span className="font-semibold text-gray-800 dark:text-white"> 1.10+ years</span> of experience building robust web and mobile applications. I love solving real-world problems through code and delivering seamless user experiences.
            </p>
          </motion.div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">My Toolkit</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map(({ label, icon }) => (
                <SkillCard key={label} label={label} icon={icon} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Tools & Platforms</h4>
            <p className="text-gray-600 dark:text-gray-300">Visual Studio Code, Git, GitHub, Bitbucket</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">What Drives Me</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <MotivationCard icon="🎨" title="Crafting Elegant UI" text="Designing intuitive, beautiful interfaces with a focus on user experience and detail." />
              <MotivationCard icon="⚡" title="Performance & Scalability" text="Building fast, scalable backends and optimized frontends for a seamless experience." />
              <MotivationCard icon="🚀" title="Continuous Learning" text="Always exploring new technologies and best practices to stay ahead in the tech world." />
              <MotivationCard icon="🤝" title="Collaboration" text="Working closely with cross-functional teams to bring ideas to life and deliver impactful products." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ label, icon }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
  >
    <img src={icon} alt={label} className="w-10 h-10 mb-2" />
    <span className="text-gray-800 dark:text-white text-sm font-medium">{label}</span>
  </motion.div>
);

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
