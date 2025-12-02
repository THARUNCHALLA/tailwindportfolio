"use client";

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

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
<section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-700 transition-colors duration-500">
   <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto space-y-12"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-400">Tharun Challa</span>
          </h3>
          <div className="text-gray-200 text-lg md:text-xl">
            <Typewriter
              options={{
                strings: [
                  "I’m a passionate Full Stack Developer with 1.10+ years of experience creating robust web and mobile applications. I specialize in building responsive, high-performance solutions using the MERN stack and modern front-end technologies.",
                  "I love solving real-world problems through code, crafting seamless user experiences, and continuously exploring new tools and frameworks. Collaboration and innovation drive me to deliver impactful projects that users love.",
                  "I enjoy building interactive and visually appealing web applications that leave a lasting impression on users and clients alike.",
                  "I am constantly learning new technologies and best practices to stay ahead in the ever-evolving world of web development, ensuring my projects are modern, scalable, and efficient."
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-6">My Toolkit</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map(({ label, icon }, idx) => (
              <SkillCard key={label} label={label} icon={icon} delay={idx * 0.1} />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">Tools & Platforms</h4>
          <p className="text-gray-200 text-md md:text-lg">Visual Studio Code, Git, GitHub, Bitbucket, Postman</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">What Drives Me</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <MotivationCard icon="🎨" title="Crafting Elegant UI" text="Designing intuitive, beautiful interfaces with a focus on user experience and detail." />
            <MotivationCard icon="⚡" title="Performance & Scalability" text="Building fast, scalable backends and optimized frontends for a seamless experience." />
            <MotivationCard icon="🚀" title="Continuous Learning" text="Always exploring new technologies and best practices to stay ahead in the tech world." />
            <MotivationCard icon="🤝" title="Collaboration" text="Working closely with cross-functional teams to bring ideas to life and deliver impactful products." />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const SkillCard = ({ label, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.1, y: -5, boxShadow: "0px 10px 25px rgba(0,0,0,0.3)" }}
    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg cursor-pointer hover:bg-gray-700 transition-all duration-300"
  >
    <img src={icon} alt={label} className="w-12 h-12 mb-2" />
    <span className="text-white text-sm md:text-base font-medium">{label}</span>
  </motion.div>
);

const MotivationCard = ({ icon, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="p-5 bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:bg-gray-700 transition-all duration-300"
  >
    <div className="flex items-center space-x-3 mb-2">
      <div className="text-2xl">{icon}</div>
      <h5 className="font-semibold text-white text-md md:text-lg">{title}</h5>
    </div>
    <p className="text-gray-200 text-sm md:text-base">{text}</p>
  </motion.div>
);

export default About;
