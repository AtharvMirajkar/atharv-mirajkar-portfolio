import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Database,
  Server,
  Palette,
  GitBranch,
} from "lucide-react";

interface SkillsProps {
  darkMode: boolean;
}

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "UI Frameworks",
    icon: <Palette className="w-6 h-6" />,
    skills: [
      "Tailwind CSS",
      "Material-UI",
      "Bootstrap",
      "Styled Components",
      "Framer Motion",
    ],
  },
  {
    title: "State Management",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Redux", "Redux Toolkit", "Context API"],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT",
      "Nodemailer",
      "Cron Jobs",
      "Stripe",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Tools & Others",
    icon: <GitBranch className="w-6 h-6" />,
    skills: [
      "Git",
      "GitHub",
      "Jira",
      "Postman",
      "VS Code",
      "Cursor",
      "Docker",
      "Vite",
    ],
  },
];

const Skills = ({ darkMode }: SkillsProps) => {
  return (
    <section
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
      id="skills"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`p-6 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-50 hover:bg-gray-100"
              } rounded-xl shadow-sm hover:shadow-md transition-all`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-purple-600">{category.icon}</div>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-white text-gray-700 border border-gray-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
