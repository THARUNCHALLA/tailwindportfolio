"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Assets/Tharun_challa.pdf";
    link.download = "Tharun_challa.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const el = document.getElementById("project");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-100 transition-colors duration-500">
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 70 },
            size: { value: 3 },
            move: { enable: true, speed: 1.2 },
            links: { enable: true, distance: 150, color: "#0ea5e9", opacity: 0.4 },
            color: { value: "#0ea5e9" },
          },
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
        }}
      />

      <div className="container mx-auto px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6 lg:pr-12"
        >
          <div className="flex items-center gap-3 md:hidden">
            <motion.figure
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 shadow-xl"
            >
              <img
                src="/Assets/challaTharun.jpeg"
                alt="Tharun Challa"
                className="w-full h-full object-cover"
              />
            </motion.figure>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm
             bg-green-500/20 dark:bg-green-500/30"
            >
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-800 dark:text-green-200 text-sm font-medium">
                Available for work
              </span>
            </motion.div>

          </div>

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-50 dark:text-gray-900 text-3xl md:text-5xl font-extrabold max-w-xl leading-snug"
          >
            Building <span className="text-blue-400">modern web experiences</span> that
            impress and perform
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-300 dark:text-gray-700 text-lg max-w-lg"
          >
            <Typewriter
              options={{
                strings: [
                  "Hi! I'm Tharun Challa, a MERN Stack Developer.",
                  "I build fast, responsive, and scalable web applications.",
                  "Passionate about React.js, Node.js, and MongoDB.",
                  "I love solving real-world problems with clean code.",
                  "Continuous learning and innovation drive me forward.",
                  "I craft seamless user experiences that people enjoy.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 60,
                pauseFor: 1500,
              }}
            />
          </motion.div>

          <div className="flex gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:text-gray-50 px-6 py-3 rounded-xl shadow-2xl font-semibold transition-all duration-300"
            >
              Download CV <FiDownload className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="flex items-center gap-2 border border-gray-400 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white text-gray-200 dark:text-gray-900 px-6 py-3 rounded-xl shadow-2xl font-semibold transition-all duration-300"
            >
              My Work <FaArrowDown className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center mt-8 lg:mt-0"
        >
          <div className="relative">
            <div className="w-[320px] h-[320px] rounded-full overflow-hidden shadow-2xl border-4 border-blue-500/40 relative">
              <img
                src="/Assets/challaTharun.jpeg"
                alt="Tharun Challa"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ scale: [1, 1.07, 1], rotate: [0, 6, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -bottom-5 -left-5 bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-700 dark:hidden"
            >
              <span className="text-gray-300 font-medium">2 Years Experience</span>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.07, 1], rotate: [0, -6, 6, 0] }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -top-5 -right-5 bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-700 dark:hidden"
            >
              <span className="text-gray-300 font-medium">MERN Stack Developer</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
