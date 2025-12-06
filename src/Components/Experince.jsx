import React from "react";

const experienceData = [
  {
    role: "Associate Product Engineer",
    company: "Crediwatch",
    duration: "Feb 2024 - Present",
    projects: [
      {
        name: "Crediwatch App Website",
        tech: "ReactJS, CSS, Bootstrap, Redux",
        bullets: [
          "Implemented lazy loading of React components and advanced code-splitting strategies, reducing load times.",
          "Enhanced state management using Redux Toolkit Query.",
          "Optimized caching strategies and asset delivery.",
          "Maintained a scalable folder structure following best practices.",
          "Developed reusable React components with a modular design."
        ]
      },
      {
        name: "Crediwatch Report Mailers Generation",
        tech: "Handlebars.js, Node.js, Express.js, MongoDB",
        bullets: [
          "Developed dynamic and reusable email templates using Handlebars.js.",
          "Retrieved data from AWS S3 and generated reports in PDF, Excel, and CSV formats.",
          "Integrated MongoDB aggregation pipelines to fetch and transform complex data structures."
        ]
      }
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-100 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 text-white dark:text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        {experienceData.map((exp, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-gray-300 dark:text-gray-700 mb-6">{exp.company} | {exp.duration}</p>

            {exp.projects.map((proj, pIdx) => (
              <div key={pIdx} className="mb-6 pl-4 border-l-4 border-blue-500">
                <h4 className="text-xl font-medium">{proj.name}</h4>
                <p className="italic text-gray-400 dark:text-gray-600 mb-2">{proj.tech}</p>
                <ul className="list-disc ml-6 space-y-1 text-gray-200 dark:text-gray-800">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
