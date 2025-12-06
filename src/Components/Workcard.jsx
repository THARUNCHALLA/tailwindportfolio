"use client";

import Work from "./work.jsx";
import { motion } from "framer-motion";

const projectData = [
  {
    image1: "/Assets/Ecommerce.png",
    title: "🛒 E-Commerce Platform",
    information: "A full-stack shopping platform with authentication, product catalog and checkout flow.",
    tech: ["React", "Node", "MongoDB", "Tailwind"],
    view: "https://next45.ccbp.tech",
    github: "https://github.com/your-github/ecommerce",
    id: 1,
  },
  {
    image1: "/Assets/TharunEcho.png",
    title: "🎵 Tharun Echo – Music App",
    information: "A modern music web app with curated tracks, playlists, and immersive UI.",
    tech: ["React", "Tailwind", "Audio API"],
    view: "https://tharuvibe.netlify.app",
    github: "https://github.com/your-github/tharun-echo",
    id: 2,
  },
  {
    image1: "/Assets/Emoji.png",
    title: "🎮 Emoji Memory Game",
    information: "A fast-paced React game designed to boost memory and pattern recognition.",
    tech: ["React", "Game Logic", "CSS"],
    view: "https://emoji45.ccbp.tech",
    github: "https://github.com/your-github/emoji-game",
    id: 3,
  },
];

const WorkCard = () => {
  return (
    <section id="project" className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-100 transition-colors duration-500 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-white dark:text-gray-900"
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <Work key={project.id} user={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkCard;
