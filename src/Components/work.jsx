import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Work = ({ user }) => {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={900}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#38bdf8"
      glarePosition="all"
      className="rounded-2xl"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        {/* Image */}
        <div className="h-48 overflow-hidden rounded-t-2xl">
          <img
            src={user.image1}
            alt={user.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">
            {user.title}
          </h3>

          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {user.information}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {user.tech.map((item, i) => (
              <span
                key={i}
                className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <a
              href={user.view}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md"
            >
              View
            </a>

            <a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition"
            >
              <FaGithub /> Code
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Work;
