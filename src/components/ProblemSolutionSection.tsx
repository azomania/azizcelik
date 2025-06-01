import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Problem</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 mt-2 bg-red-500 rounded-full mr-2"></span>
                  <p>Food waste due to poor storage management</p>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 mt-2 bg-red-500 rounded-full mr-2"></span>
                  <p>Difficulty tracking expiration dates</p>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 mt-2 bg-red-500 rounded-full mr-2"></span>
                  <p>Inefficient grocery shopping without inventory knowledge</p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Solution</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 mt-2 bg-green-500 rounded-full mr-2"></span>
                  <p>Smart inventory tracking system</p>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 mt-2 bg-green-500 rounded-full mr-2"></span>
                  <p>Automated expiration date monitoring</p>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 mt-2 bg-green-500 rounded-full mr-2"></span>
                  <p>Intelligent shopping recommendations</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;