import React from "react";

const experienceData = [
  {
    role: "Associate Product Engineer",
    company: "Crediwatch",
    duration: "Feb 2024 - Present",
    projects: [
      {
        name: "Crediwatch App Website",
        tech: "ReactJS, CSS, Bootstrap, RTK, RTKQuery",
        bullets: [
          "Implemented lazy loading and advanced code-splitting techniques to reduce initial load time and improve overall application performance.",
          "Utilized Redux Toolkit Query (RTK Query) for optimized state management, efficient data fetching, and seamless API integration.",
          "Improved application speed through enhanced caching strategies, optimized asset delivery, and build-level performance tuning.",
          "Designed and maintained a scalable, modular folder structure aligned with industry best practices for long-term maintainability.",
          "Built reusable, modular, and high-quality React UI components, ensuring consistency across the application.",
          "Collaborated closely with the Backend Team to integrate APIs, solve data-related challenges, and improve system communication.",
          "Worked with the QA/Testing Team to validate features, reproduce bugs, and support end-to-end testing activities.",
          "Acted as Project Coordinator, managing cross-team communication, tracking progress, and ensuring timely delivery of project milestones.",
          "Followed Agile methodologies, participating in sprint planning, daily standups, reviews, and retrospectives to keep development aligned and efficient.",
          "Contributed to technical and functional documentation, improving team onboarding and project clarity.",
          "Supported deployment cycles by coordinating with DevOps, monitoring releases, and ensuring smooth post-deployment performance."
        ]

      },
      {
        name: "Crediwatch Report Mailers Generation",
        tech: "Handlebars.js, Node.js, Express.js, MongoDB, Tailwindcss",
        bullets: [
          "Developed dynamic and reusable email templates using Handlebars.js for automated backend-driven notifications.",
          "Retrieved and processed data from AWS S3, generating reports in PDF, Excel, and CSV formats through backend services.",
          "Implemented MongoDB aggregation pipelines to fetch, filter, and transform complex data structures efficiently.",
          "Designed and maintained scalable backend architecture using Node.js and MongoDB.",
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
