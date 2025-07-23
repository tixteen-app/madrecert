"use client";

import { motion } from 'framer-motion';
import { Shield, Leaf, HardHat, Utensils, Lock, Microscope, Zap, HeartHandshake } from 'lucide-react';
import { Button } from './ui/button';

export function CertificationsSection() {
  const certifications = [
    {
      icon: Shield,
      title: 'ISO 9001',
      subtitle: 'Quality Management',
      description: 'Ensure consistent quality and customer satisfaction through effective quality management systems.',
      color: 'bg-blue-500',
      features: ['Process Improvement', 'Customer Focus', 'Continuous Enhancement'],
    },
    {
      icon: Leaf,
      title: 'ISO 14001',
      subtitle: 'Environmental Management',
      description: 'Demonstrate environmental responsibility and reduce your organization\'s environmental footprint.',
      color: 'bg-green-500',
      features: ['Environmental Compliance', 'Resource Efficiency', 'Sustainability'],
    },
    {
      icon: HardHat,
      title: 'ISO 45001',
      subtitle: 'Occupational Health & Safety',
      description: 'Protect your workforce and create safer working environments for all employees.',
      color: 'bg-orange-500',
      features: ['Workplace Safety', 'Risk Management', 'Employee Wellbeing'],
    },
    {
      icon: Utensils,
      title: 'ISO 22000',
      subtitle: 'Food Safety Management',
      description: 'Ensure food safety throughout the entire food chain from farm to fork.',
      color: 'bg-red-500',
      features: ['Food Safety', 'HACCP Integration', 'Supply Chain Control'],
    },
    {
      icon: Lock,
      title: 'ISO 27001',
      subtitle: 'Information Security',
      description: 'Protect sensitive information and manage information security risks effectively.',
      color: 'bg-purple-500',
      features: ['Data Protection', 'Cyber Security', 'Privacy Management'],
    },
    {
      icon: Microscope,
      title: 'GMP',
      subtitle: 'Good Manufacturing Practice',
      description: 'Ensure products are consistently produced and controlled according to quality standards.',
      color: 'bg-indigo-500',
      features: ['Manufacturing Standards', 'Quality Control', 'Regulatory Compliance'],
    },
    {
      icon: Zap,
      title: 'HACCP',
      subtitle: 'Hazard Analysis Critical Control Points',
      description: 'Identify and control food safety hazards at critical points in production.',
      color: 'bg-yellow-500',
      features: ['Hazard Analysis', 'Critical Control', 'Preventive Approach'],
    },
    {
      icon: HeartHandshake,
      title: 'ISO 13485',
      subtitle: 'Medical Devices Quality',
      description: 'Ensure quality management systems for medical devices meet regulatory requirements.',
      color: 'bg-pink-500',
      features: ['Medical Device Safety', 'Regulatory Compliance', 'Quality Assurance'],
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
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
            Certifications We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive ISO certification services to help your organization achieve 
            excellence and compliance with international standards.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-blue/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${cert.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{cert.title}</h3>
              <h4 className="text-brand-gold font-semibold mb-3">{cert.subtitle}</h4>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {cert.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                    <span className="text-xs text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200"
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Certification Solution?
            </h3>
            <p className="text-lg mb-6 text-blue-100">
              Our experts can help you identify the right certifications for your industry and business needs.
            </p>
            <Button className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3 rounded-full">
              Get Expert Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}