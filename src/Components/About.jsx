import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-2/5 flex justify-center group">
            <div className="relative w-56 h-56 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <img 
                src="/Assets/challatharun.jpg"
                alt="Tharun Challa" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-medium">Full Stack Developer</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Tharun Challa</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                A passionate <span className="font-semibold text-gray-800 dark:text-white">Full Stack Developer</span> with 
                <span className="font-semibold text-gray-800 dark:text-white"> 1.5+ years</span> of experience building robust web and mobile applications. 
                I love solving real-world problems through code and delivering seamless user experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">My Toolkit</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <SkillBadge label="React.js" color="blue" />
                <SkillBadge label="Node.js" color="green" />
                <SkillBadge label="Express.js" color="gray" />
                <SkillBadge label="MongoDB" color="emerald" />
                <SkillBadge label="Tailwind CSS" color="cyan" />
                <SkillBadge label="TypeScript" color="indigo" />
                <SkillBadge label="JavaScript" color="yellow" />
                <SkillBadge label="MySQL" color="teal" />
                <SkillBadge label="Bootstrap" color="purple" />
                <SkillBadge label="Handlebars.js" color="orange" />
                <SkillBadge label="HTML5 & CSS3" color="rose" />
                <SkillBadge label="Python" color="pink" />
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Tools & Platforms</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Visual Studio Code, Git, GitHub, Bitbucket
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">What Drives Me</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MotivationCard 
                  icon="🎨" 
                  title="Crafting Elegant UI" 
                  text="Designing intuitive, beautiful interfaces with a focus on user experience and detail." 
                />
                <MotivationCard 
                  icon="⚡" 
                  title="Performance & Scalability" 
                  text="Building fast, scalable backends and optimized frontends for a seamless experience." 
                />
                <MotivationCard 
                  icon="🚀" 
                  title="Continuous Learning" 
                  text="Always exploring new technologies and best practices to stay ahead in the tech world." 
                />
                <MotivationCard 
                  icon="🤝" 
                  title="Collaboration" 
                  text="Working closely with cross-functional teams to bring ideas to life and deliver impactful products." 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBadge = ({ label, color }) => {
  return (
    <div className={`flex items-center justify-center px-3 py-2 rounded-lg bg-${color}-100 dark:bg-${color}-900 text-${color}-700 dark:text-${color}-300 font-medium text-sm transition-colors`}>
      {label}
    </div>
  );
};

const MotivationCard = ({ icon, title, text }) => {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all">
      <div className="flex items-center space-x-3 mb-2">
        <div className="text-2xl">{icon}</div>
        <h5 className="font-semibold text-gray-800 dark:text-white">{title}</h5>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
    </div>
  );
};

export default About;
