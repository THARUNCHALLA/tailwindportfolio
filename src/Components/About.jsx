"use client";

import React, { useState } from "react";
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
  { label: "Bootstrap", icon: "/Assets/bootstrap.jpg" },
  { label: "Handlebars.js", icon: "/Assets/HandleBarjs.jpg" },
  { label: "HTML5 & CSS3", icon: "/Assets/html5.svg" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <motion.div
        className="max-w-5xl mx-auto space-y-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Intro + Typewriter */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-400">Tharun Challa</span>
          </h3>
          <div className="text-gray-200 text-lg md:text-xl">
            <Typewriter
              options={{
                strings: [
                  "I’m a passionate Full Stack Developer with 1.10+ years of experience building robust web apps.",
                  "I specialize in React.js, Node.js, Express.js, MongoDB & modern front-end technologies.",
                  "I create fast, responsive, and visually appealing applications.",
                  "Continuous learning and innovation drive me to deliver impactful projects.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                pauseFor: 1500,
              }}
            />
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div className="space-y-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-6">My Toolkit</h4>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" variants={containerVariants}>
            {skills.map(({ label, icon }) => (
              <SkillCard key={label} label={label} icon={icon} />
            ))}
          </motion.div>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">Tools & Platforms</h4>
          <p className="text-gray-300 text-md md:text-lg">Visual Studio Code, Git, GitHub, Bitbucket, Postman</p>
        </motion.div>

        {/* Motivations */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-6">
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">What Drives Me</h4>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={containerVariants}>
            <MotivationCard icon="🎨" title="Crafting Elegant UI" text="Designing intuitive, beautiful interfaces with focus on UX and detail." />
            <MotivationCard icon="⚡" title="Performance & Scalability" text="Building fast, optimized, and scalable frontends & backends." />
            <MotivationCard icon="🚀" title="Continuous Learning" text="Exploring new technologies and best practices every day." />
            <MotivationCard icon="🤝" title="Collaboration" text="Working with teams to bring innovative ideas to life." />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// 3D Tilt Card Component
const TiltCard = ({ children }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      style={{ rotateX: tilt.y, rotateY: tilt.x }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer will-change-transform"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

// Skill Card with 3D Tilt
const SkillCard = ({ label, icon }) => (
  <TiltCard>
    <div className="flex flex-col items-center p-5 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-700">
      <img src={icon} alt={label} className="w-14 h-14 mb-2" />
      <span className="text-white text-sm md:text-base font-medium">{label}</span>
    </div>
  </TiltCard>
);

// Motivation Card with 3D Tilt
const MotivationCard = ({ icon, title, text }) => (
  <TiltCard>
    <div className="p-5 bg-gray-800 rounded-xl shadow-md transition-all duration-300 hover:bg-gray-700">
      <div className="flex items-center space-x-3 mb-2">
        <div className="text-2xl">{icon}</div>
        <h5 className="font-semibold text-white text-md md:text-lg">{title}</h5>
      </div>
      <p className="text-gray-300 text-sm md:text-base">{text}</p>
    </div>
  </TiltCard>
);

export default About;
