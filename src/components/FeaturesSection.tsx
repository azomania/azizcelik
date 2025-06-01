import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BarChart2, Bell, ShoppingCart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone className="w-12 h-12 text-blue-500" />,
      title: "Mobile App Integration",
      description: "Control your SmartFridge from anywhere using our intuitive mobile application"
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-blue-500" />,
      title: "Smart Analytics",
      description: "Track your food consumption patterns and get personalized insights"
    },
    {
      icon: <Bell className="w-12 h-12 text-blue-500" />,
      title: "Expiration Alerts",
      description: "Receive timely notifications about food items nearing expiration"
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-500" />,
      title: "Automated Shopping Lists",
      description: "Get smart shopping recommendations based on your inventory"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Features for Modern Living
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of food storage with our innovative features designed to make your life easier
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;