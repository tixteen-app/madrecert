"use client";

import { motion } from 'framer-motion';
import { FileText, Search, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function HowItWorksSection() {
  const steps = [
    {
      icon: FileText,
      title: 'Apply & Assessment',
      description: 'Submit your application and we conduct an initial assessment of your current systems and requirements.',
      details: ['Document review', 'Gap analysis', 'Scope definition', 'Timeline planning'],
      duration: '5-7 days',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
    },
    {
      icon: Search,
      title: 'Audit Process',
      description: 'Our certified auditors conduct thorough on-site or remote audits to evaluate your management systems.',
      details: ['Stage 1 audit', 'Stage 2 audit', 'Evidence review', 'Findings report'],
      duration: '10-15 days',
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Upon successful completion, we issue your ISO certificate and provide ongoing support.',
      details: ['Certificate issuance', 'Digital badges', 'Registration', 'Marketing materials'],
      duration: '3-5 days',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
    },
    {
      icon: CheckCircle,
      title: 'Ongoing Support',
      description: 'Continuous support with surveillance audits and guidance to maintain your certification.',
      details: ['Annual surveillance', 'Recertification', '24/7 support', 'Updates & guidance'],
      duration: 'Ongoing',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
    },
  ];

  return (
    <section className="py-20 bg-white">
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
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined certification process is designed to be efficient, thorough, 
            and tailored to your organization's specific needs.
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 transform -translate-y-1/2"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Icon Circle */}
                  <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center z-20">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{step.description}</p>
                    
                    {/* Duration Badge */}
                    <div className="inline-block bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {step.duration}
                    </div>

                    {/* Details */}
                    <div className={`${step.lightColor} rounded-lg p-4`}>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 -right-4 z-30">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden mb-16 space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative flex gap-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-20 w-0.5 h-16 bg-gray-200"></div>
              )}

              {/* Icon */}
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center relative`}>
                  <step.icon className="h-10 w-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <div className="inline-block bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {step.duration}
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <div className={`${step.lightColor} rounded-lg p-4`}>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Certification Journey?
          </h3>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of companies worldwide who trust MadreCert for their ISO certification needs. 
            Start your application today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3 rounded-full">
              Start Application
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue px-8 py-3 rounded-full">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}