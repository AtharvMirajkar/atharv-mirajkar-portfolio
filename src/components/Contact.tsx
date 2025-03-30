import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`} id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-purple-600" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    atharvmirajkar3@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-purple-600" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    8237888033
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-purple-600" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Kolhapur, Maharashtra
                  </span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'border border-gray-300 text-gray-900'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'border border-gray-300 text-gray-900'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'border border-gray-300 text-gray-900'
                    }`}
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;