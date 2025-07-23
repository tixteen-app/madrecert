"use client";

import { motion } from 'framer-motion';
import { Clock, Globe, Award, Users, CheckCircle, Star, Shield, Zap } from 'lucide-react';

export function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Fast Certification Process',
      description: 'Streamlined audit process with quick turnaround times. Most certifications completed within 30-45 days.',
      stats: '30-45 Days',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Our certifications are recognized worldwide, opening doors to international markets and opportunities.',
      stats: '50+ Countries',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Expert Support Team',
      description: 'Dedicated team of certified auditors and consultants with decades of industry experience.',
      stats: '100+ Experts',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Award,
      title: 'Accredited Excellence',
      description: 'Fully accredited certification body meeting the highest international standards and requirements.',
      stats: 'ISO Accredited',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: CheckCircle,
      title: '99% Success Rate',
      description: 'Proven track record with industry-leading success rates and client satisfaction scores.',
      stats: '99% Success',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Zap,
      title: 'Competitive Pricing',
      description: 'Transparent, competitive pricing with no hidden costs. Best value in the certification industry.',
      stats: 'Best Value',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Why Choose MadreCert?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our world-class certification services, 
            expert support, and proven track record of success.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon and Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 ${benefit.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`h-7 w-7 ${benefit.color}`} />
                </div>
                <div className={`text-2xl font-bold ${benefit.color}`}>
                  {benefit.stats}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}