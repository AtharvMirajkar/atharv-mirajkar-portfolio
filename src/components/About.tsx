import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  return (
    <section
      className={`py-16 sm:py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
      id="about"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications & Achievements
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className={`${
              darkMode ? "bg-gray-900" : "bg-white"
            } rounded-2xl shadow-xl p-6 sm:p-8`}
          >
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Award className="text-purple-600 w-7 h-7 sm:w-6 sm:h-6" />
                    <h3
                      className={`text-base sm:text-xl font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Microsoft Certified Azure Fundamentals (AZ900)
                    </h3>
                  </div>
                  <motion.a
                    href="https://www.credly.com/badges/5bfed78d-3b33-437a-bc2a-e401cec22548/linked_in?t=ruuyuj"
                    className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="hidden sm:inline">View</span>{" "}
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                </div>
                <p
                  className={`ml-8 sm:ml-9 text-sm sm:text-base ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Validated expertise in cloud concepts, Azure services,
                  security, privacy, pricing, and support.
                </p>
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Award className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                    <h3
                      className={`text-base sm:text-xl font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Google Cloud Skill Boost Profile
                    </h3>
                  </div>
                  <motion.a
                    href="https://www.cloudskillsboost.google/public_profiles/6ec7e7f3-4729-45ae-8a8b-1912980e901c"
                    className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="hidden sm:inline">View</span>{" "}
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                </div>
                <p
                  className={`ml-8 sm:ml-9 text-sm sm:text-base ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Comprehensive training and hands-on experience with Google
                  Cloud Platform services and solutions.
                </p>
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                  <h3
                    className={`text-base sm:text-xl font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Google Cloud Arcade Achievements
                  </h3>
                </div>
                <p
                  className={`ml-8 sm:ml-9 text-sm sm:text-base ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Participated actively in Google Cloud Arcade events, achieving
                  digital badges and cultivating hands-on expertise. Earned
                  exclusive Google Cloud swag items through demonstrated
                  proficiency and engagement.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
