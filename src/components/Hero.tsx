import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Briefcase,
  GraduationCap,
  School,
  Award,
} from "lucide-react";

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-white to-gray-100"
      } pt-20`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 rounded-full text-purple-600 text-sm sm:text-base font-medium mb-4 sm:mb-6"
            >
              Full Stack Developer
            </motion.div>
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Atharv Mirajkar
              </span>
            </h1>
            <p
              className={`text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              A passionate Full Stack Developer specializing in web and mobile
              app development. With expertise in MERN Stack and React Native, I
              create seamless digital experiences across platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                Get in touch
              </motion.button>
              <motion.a
                href="https://drive.google.com/file/d/1rCxH7G4DoOGTg9l6m0nVYab1P0yVqQbp/view?usp=drive_link"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 border border-purple-500`}
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-xl p-4 sm:p-6 shadow-lg`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <Briefcase className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                  <h3
                    className={`text-base sm:text-lg font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Experience
                  </h3>
                </div>
                <div className="flex flex-col gap-1">
                  <p
                    className={`text-sm sm:text-base ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Full Stack Developer at Walstar Technologies (2024 –
                    Present)
                  </p>
                  <p
                    className={`text-sm sm:text-base ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Web Developer at Meimedian Medicare (2023 – 2024)
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-xl p-4 sm:p-6 shadow-lg`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <GraduationCap className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                  <h3
                    className={`text-base sm:text-lg font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Education
                  </h3>
                </div>
                <p
                  className={`text-sm sm:text-base ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  B.Tech in Computer Science and Engineering
                </p>
              </motion.div>

              <motion.div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-xl p-4 sm:p-6 shadow-lg`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <School className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                  <h3
                    className={`text-base sm:text-lg font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    College
                  </h3>
                </div>
                <p
                  className={`text-sm sm:text-base ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  KIT's College of Engineering
                </p>
              </motion.div>

              <motion.div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-xl p-4 sm:p-6 shadow-lg`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <Award className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                  <h3
                    className={`text-base sm:text-lg font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    CGPA
                  </h3>
                </div>
                <p
                  className={`text-sm sm:text-base ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  8.08
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl opacity-20 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
                alt="Developer"
                className="rounded-xl shadow-2xl relative w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
