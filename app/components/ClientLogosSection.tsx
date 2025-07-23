"use client";

import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
// import madreLogo from 'figma:asset/66d5e82c8e9f9cdfa28edcbc542625c1cd9b1450.png';
// import madreLogo from '../../public/palji_3.jpg';
const madreLogo = 'https://folk-dawn-94548267.figma.site/_assets/v10/66d5e82c8e9f9cdfa28edcbc542625c1cd9b1450.png';



export function ClientLogosSection() {
  // All client logos now use the MADRE logo
  const clients = [
    { name: 'MADRE Certification', logo: "clinets/client-1.png" },
    { name: 'TechCorp Solutions', logo: "clinets/client-2.jpg" },
    { name: 'Global Manufacturing', logo: "clinets/client-3.jpg" },
    { name: 'EcoSolutions Ltd', logo: "clinets/client-4.jpg" },
    { name: 'MedDevice Industries', logo: "clinets/client-5.png" },
    { name: 'FoodSafe Corporation', logo: "clinets/client-6.png" },
    { name: 'AutoParts International', logo: "clinets/client-7.jpg" },
    { name: 'PharmaX Group', logo:  "clinets/client-8.jpg" },
    // { name: 'BuildCorp Engineering', logo: madreLogo },
    // { name: 'InfoSec Professional', logo: madreLogo },
    // { name: 'QualityFirst Systems', logo: madreLogo },
  ];

  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies worldwide who have achieved certification excellence with MadreCert
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling Container */}
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [`0%`, `-${clients.length * 12}%`],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0  rounded-lg p-6    duration-300 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-32 h-[70px] flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}