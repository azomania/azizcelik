import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BarChart3, ShoppingBag } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Smartphone className="w-12 h-12 text-blue-500" />,
      title: "Connect Your SmartFridge",
      description: "Link your SmartFridge to the mobile app for seamless monitoring and control"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
      title: "Track Your Inventory",
      description: "Get real-time updates on your food items and their expiration dates"
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-blue-500" />,
      title: "Smart Shopping Lists",
      description: "Receive personalized shopping recommendations based on your consumption patterns"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SmartFridge makes food management simple and efficient with these easy steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg text-center relative z-10">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <div className="w-12 h-0.5 bg-blue-200"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;