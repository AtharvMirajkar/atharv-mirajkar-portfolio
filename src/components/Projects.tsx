import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';

const projects = [
  {
    title: "GiftWave",
    description: "A dynamic gift card creator with customizable templates, animations, and real-time preview. Users can create, customize, and share digital gift cards.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80",
    tags: ["React", "Redux", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/AtharvMirajkar/gift-wave",
    demo: "https://gift-wave.onrender.com/",
    isPrivate: true
  },
  {
    title: "Website Builder",
    description: "A powerful website builder that allows users to create and customize landing pages using templates. Features live preview and section-by-section editing.",
    image: "https://img.freepik.com/free-vector/landing-page-design-process-concept_52683-27799.jpg?t=st=1743332102~exp=1743335702~hmac=ef1ef17183d0af56f950357123bd41b3ea99d1abddde3cc23b78e31f299a602d&w=996",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    github: "https://github.com/AtharvMirajkar/website-builder",
    demo: "https://website-builder-vg4j.onrender.com/",
    isPrivate: true
  },
  {
    title: "Restaurant Management System",
    description: "A comprehensive restaurant management platform with role-based access control. Features include menu management, order tracking, inventory control, and financial reporting. Supports multiple user roles including chef, waiter, manager, and owner.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS", "Framer Motion"],
    github: "#",
    // demo: "https://restaurant.example.com",
    isPrivate: true
  },
  {
    title: "School ERP",
    description: "School ERP is a comprehensive platform designed to streamline school management processes. It provides a centralized system for managing academic and administrative tasks, enhancing efficiency for administrators, faculty, and students.",
    image: "https://plus.unsplash.com/premium_photo-1720503965220-10ea698bf0aa?auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    github: "#",
    demo: "https://school-erp-admin.vercel.app/",
    isPrivate: true
  },
];

interface ProjectsProps {
  darkMode: boolean;
}

const Projects = ({ darkMode }: ProjectsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleGithubClick = (project: typeof projects[0], e: React.MouseEvent) => {
    if (project.isPrivate) {
      e.preventDefault();
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          } px-4 py-4 shadow-lg rounded-lg flex items-center space-x-3 max-w-xs`}
        >
          <Github className="text-purple-600" size={22} />
          <p>This repository is private. Please reach out to Atharv for access.</p>
        </motion.div>
      ), {
        duration: 3000,
      });
    }
  };

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`} id="projects">
      <div className="container mx-auto px-6">
        <motion.h2 
          className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl overflow-hidden shadow-lg group cursor-pointer`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
               onClick={() => {
    if (project.title === "Restaurant Management System") {
      toast.success('The website is under development. The link will be available soon!', {
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
        },
      });
    } else {
      window.open(project.demo, '_blank');
    }
  }}             
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-white p-2 rounded-full bg-gray-900/50 hover:bg-gray-900"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGithubClick(project, e);
                    }}
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-white p-2 rounded-full bg-gray-900/50 hover:bg-gray-900"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode 
                          ? 'bg-gray-800 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;