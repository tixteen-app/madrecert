// "use client";

// import { motion } from 'framer-motion';
// import { Globe, Users, Clock } from 'lucide-react';
// import { Button } from './ui/button';
// import { ImageWithFallback } from './figma/ImageWithFallback';

// export function AboutSection() {
//   const features = [
//     {
//       icon: Globe,
//       title: 'Global Reach',
//       description: 'Operating in over 50 countries with local expertise and international standards.',
//     },
//     {
//       icon: Users,
//       title: 'Expert Team',
//       description: 'Certified auditors and consultants with decades of industry experience.',
//     },
//     {
//       icon: Clock,
//       title: 'Fast Process',
//       description: 'Streamlined certification process with quick turnaround times.',
//     },
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
//             About MadreCert
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Leading the industry in quality assurance services with unmatched expertise 
//             and commitment to excellence.
//           </p>
//         </motion.div>

//         {/* Main Content */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//               Your Trusted Partner in <span className="text-brand-gold">Global Excellence</span>
//             </h3>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               For over 15 years, MadreCert has been at the forefront of quality assurance services, 
//               helping organizations worldwide achieve and maintain the highest standards of quality, 
//               safety, and environmental responsibility.
//             </p>
//             <p className="text-gray-600 mb-8 leading-relaxed">
//               Our team of certified auditors and industry experts work closely with your organization 
//               to ensure seamless implementation of management systems that drive continuous improvement 
//               and business excellence.
//             </p>
//             <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-3 rounded-full">
//               Learn More About Us
//             </Button>
//           </motion.div>

//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="rounded-2xl overflow-hidden shadow-2xl">
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//                 alt="Business team meeting"
//                 className="w-full h-96 object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-6 -right-6 bg-brand-gold text-white p-6 rounded-2xl shadow-lg">
//               <div className="text-2xl font-bold">15+</div>
//               <div className="text-sm">Years of Excellence</div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Features Grid */}
//         <motion.div
//           className="grid md:grid-cols-3 gap-8"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-4">
//                 <feature.icon className="h-8 w-8 text-brand-blue" />
//               </div>
//               <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from 'framer-motion';
import { Globe, Users, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operating in over 50 countries with local expertise and international standards.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified auditors and consultants with decades of industry experience.',
    },
    {
      icon: Clock,
      title: 'Fast Process',
      description: 'Streamlined certification process with quick turnaround times.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
            About MadreCert
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leading the industry in quality assurance services with unmatched expertise 
            and commitment to excellence.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in <span className="text-brand-gold">Global Excellence</span>
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a certification body offering local and international businesses of all sectors and sizes, third party certification audits to ISO 9001:2015 Quality Management Systems, ISO 14001: Environmental Management Systems, and ISO 45001 Occupational Health and Safety Management Systems, ISO 22000 Food Safety Management System, HACCP, GMP, ISO 13485, and ISO 27001.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you need to gain new ISO Certification, require on-going support with your current certificates, or need support transitioning to a new revision, our team at Auva is here to support your business through the certification process.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Gaining ISO Certification can be demanding of your time and resources. Our approach aims to make the certification process as simple as possible so you can concentrate on your business. We perform inspections, assessments, deliver qualification and training services, and provide certificate amendment advice with the objective of awarding your business the certification you need.
            </p>

            <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-3 rounded-full">
              Learn More About Us
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Business team meeting"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-gold text-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-brand-blue" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
