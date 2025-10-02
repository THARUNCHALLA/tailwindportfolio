import { FiDownload } from "react-icons/fi";
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Assets/Tharun_challa.pdf';
    link.download = 'MyResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const scrollToProjects = () => {
    const el = document.getElementById('project');
    console.log(el)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 relative z-10">
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
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </motion.figure>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full"
            >
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm font-medium">Available for work</span>
            </motion.div>
          </div>

          <h1 className="text-white text-3xl md:text-5xl font-bold max-w-xl leading-tight md:leading-snug">
            Crafting <span className="text-blue-400">digital experiences</span> that inspire and engage
          </h1>

          <p className="text-gray-300 text-lg max-w-lg">
            I'm Tharun Challa, a Frontend Developer specializing in React.js. I build fast, accessible, and responsive web applications with modern technologies.
          </p>

          <div className="flex gap-4 mt-2">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 font-semibold" onClick={handleDownload}
            >
              Download CV
              <FiDownload className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="flex items-center gap-2 border border-gray-400 hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 font-semibold"
            >
              My Work
              <FaArrowDown className="w-5 h-5" />
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
              className="absolute -bottom-5 -left-5 bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-700"
            >
              <span className="text-white font-medium">1.8+ Years Experience</span>
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
              className="absolute -top-5 -right-5 bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-700"
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