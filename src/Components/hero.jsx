"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { FiDownload } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { useRef } from "react";

const RotatingSphere = ({ imgSrc }) => {
  const meshRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.002;
  });

  const texture = new THREE.TextureLoader().load(imgSrc);

  return (
    <Sphere args={[1.2, 64, 64]} ref={meshRef}>
      <meshStandardMaterial attach="material" map={texture} />
    </Sphere>
  );
};

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Assets/Tharun_ch.pdf";
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
    <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
      {/* Particles Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: { enable: true, distance: 150, color: "#0ea5e9", opacity: 0.3 },
            color: { value: "#0ea5e9" },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
      />

      <div className="container mx-auto px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 relative z-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6 lg:pr-12"
        >
          <div className="flex items-center gap-3">
            <motion.figure
              whileHover={{ scale: 1.05 }}
              className="w-14 h-14 rounded-lg overflow-hidden border-2 border-blue-500 shadow-lg"
            >
              <img
                src="/Assets/tharunchalla.jpg"
                alt="Tharun Challa"
                className="w-full h-full object-cover"
              />
            </motion.figure>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full"
            >
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm font-medium">
                Available for work
              </span>
            </motion.div>
          </div>

          <h1 className="text-white text-3xl md:text-5xl font-bold max-w-xl leading-snug">
            Building <span className="text-blue-400">modern web experiences</span> that
            impress and perform
          </h1>

          <div className="text-gray-200 text-lg max-w-lg">
            <Typewriter
              options={{
                strings: [
                  "Hi! I'm Tharun Challa, a MERN Stack Developer.",
                  "I specialize in React.js, Node.js & MongoDB.",
                  "I create fast, responsive, and scalable web apps.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="flex gap-4 mt-4">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 font-semibold"
            >
              Download CV <FiDownload className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="flex items-center gap-2 border border-gray-400 hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 font-semibold"
            >
              My Work <FaArrowDown className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center mt-8 lg:mt-0"
        >
          <div className="relative">
            <div className="w-[320px] h-[320px] rounded-full overflow-hidden shadow-2xl border-4 border-blue-500/30 relative">
              <img
                src="/Assets/tharunchalla.jpg"
                alt="Tharun Challa"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-5 -left-5 bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700"
            >
              <span className="text-white font-medium">1.10+ Years Experience</span>
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-5 -right-5 bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700"
            >
              <span className="text-white font-medium">React Specialist</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
