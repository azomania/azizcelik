import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Briefcase } from 'lucide-react';

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: <Home className="w-12 h-12 text-blue-500" />,
      title: "Busy Families",
      description: "Parents juggling work and home life who need help managing their kitchen efficiently"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-500" />,
      title: "Working Professionals",
      description: "Time-conscious individuals looking to minimize food waste and maintain a well-organized kitchen"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Shared Living Spaces",
      description: "Roommates and shared households wanting to better coordinate their food storage and shopping"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Is It For?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SmartFridge is designed for anyone who wants to make their kitchen management smarter and more efficient.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;