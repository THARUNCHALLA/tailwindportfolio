"use client";

import Work from "./work";
import { motion } from "framer-motion";

const projectData = [
    {
        image1:"/Assets/Ecommerce.png",
        title: "🛒 Ecommerce Website",
        information: "Essentially, eCommerce websites are designed to connect the right customers with products and services that can be traded over the internet. everyone is prospering from eCommerce. username: rahul and password: rahul@2021",
        view: "https://next45.ccbp.tech",
        id: 1
    },
    {
        image1: "/Assets/TharunEcho.png",
        title: "🎵 Tharun Echo – Music ",
        information: "Explore the musical journey of Tharun Echo, featuring original compositions, remixes, and curated playlists. Dive into a blend of genres and sonic landscapes that showcase a passion for music production and sound design", 
        view: "https://tharuvibe.netlify.app",
        id: 2
    },
    {
        image1: "/Assets/Emoji.png",
        title: "🎮 Emoji Game",
        information: "In Emoji Game, you can test your knowledge of emojis as you try to match them together! Everyone uses emojis when texting, and it's important to know which one to use for the best communication.",
        view: "https://emoji45.ccbp.tech",
        id: 3
    },
];

const WorkCard = () => {
  return (
    <section className="bg-gradient-to-b from-gray-700 to-gray-600 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((each, index) => (
            <motion.div
              key={each.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 25px rgba(0,0,0,0.3)" }}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700"
            >
              <Work user={each} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkCard;
