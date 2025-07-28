// "use client";

// import { Button } from './ui/button';
// import { motion } from 'framer-motion';
// import { ArrowRight, CheckCircle } from 'lucide-react';

// export function HeroSection() {
//   const stats = [
//     { number: '50+', label: 'Countries Served' },
//     { number: '15+', label: 'Years Experience' },
//   ];

//   return (
//     <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.brand.blue)_1px,_transparent_0)] [background-size:50px_50px]"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="max-w-4xl mx-auto"
//         >
//           {/* Small Header */}
//           <motion.div
//             className="text-sm mb-6 text-teal-700 font-semibold"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             MADRG APPROVED | MADRG TREASURED
//           </motion.div>

//           <motion.h1
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Welcome to Madrecert -{' '}
//             <span className="text-brand-gold">Your Global Partner</span> in Third-Party
//             Inspection & Certification !
//           </motion.h1>

//           <motion.p
//             className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             First Class Service, World Class Team
//           </motion.p>

//           <motion.div
//             className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <Button
//               size="lg"
//               className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transform transition-all duration-200 hover:scale-105 shadow-lg"
//             >
//               Explore Services
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
//             >
//               Learn More
//             </Button>
//           </motion.div>

//           {/* Trust Indicators */}
//           <motion.div
//             className="flex flex-wrap items-center justify-center gap-6 mb-8"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.0 }}
//           >
//             <div className="flex items-center gap-2 text-teal-700">
//               <CheckCircle className="h-5 w-5 text-brand-gold" />
//               <span className="text-sm font-medium">ISO 9001 Accredited</span>
//             </div>
//             <div className="flex items-center gap-2 text-teal-700">
//               <CheckCircle className="h-5 w-5 text-brand-gold" />
//               <span className="text-sm font-medium">Globally Recognized</span>
//             </div>
//             <div className="flex items-center gap-2 text-teal-700">
//               <CheckCircle className="h-5 w-5 text-brand-gold" />
//               <span className="text-sm font-medium">Fast Certification</span>
//             </div>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg mx-auto"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.2 }}
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
//               >
//                 <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-medium">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const stats = [
    { number: "50+", label: "Countries Served" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.png"
          alt="Background"
          fill
          className="object-cover"
          quality={80}
          priority
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Small Header */}
          <motion.div
            className="text-sm mb-6 text-teal-100 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            MADRG APPROVED | MADRG TREASURED
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to Madrecert -{" "}
            <span className="text-brand-gold">Your Global Partner</span> in
            Third-Party Inspection & Certification !
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8 text-teal-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            First Class Service, World Class Team
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center gap-2 text-teal-100">
              <CheckCircle className="h-5 w-5 text-brand-gold" />
              <span className="text-sm font-medium">ISO 9001 Accredited</span>
            </div>
            <div className="flex items-center gap-2 text-teal-100">
              <CheckCircle className="h-5 w-5 text-brand-gold" />
              <span className="text-sm font-medium">Globally Recognized</span>
            </div>
            <div className="flex items-center gap-2 text-teal-100">
              <CheckCircle className="h-5 w-5 text-brand-gold" />
              <span className="text-sm font-medium">Fast Certification</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-teal-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}