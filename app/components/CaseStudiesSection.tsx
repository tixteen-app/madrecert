"use client";

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Award, Users } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      company: 'TechCorp Industries',
      industry: 'Technology',
      certification: 'ISO 27001',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      challenge: 'TechCorp needed to secure sensitive client data and comply with international security standards to expand into European markets.',
      solution: 'Our experts implemented a comprehensive information security management system tailored to their cloud-based infrastructure.',
      results: {
        timeToComplete: '35 days',
        improvement: '40% reduction in security incidents',
        outcome: 'Successfully entered 5 new European markets',
        savings: '$2.5M in potential data breach costs avoided'
      },
      testimonial: "MadreCert's expertise was invaluable. They understood our cloud-first approach and helped us implement security controls that actually enhanced our operations rather than slowing them down.",
      author: 'Sarah Chen, CTO'
    },
    {
      company: 'GreenFood Manufacturing',
      industry: 'Food & Beverage',
      certification: 'ISO 22000 + HACCP',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      challenge: 'A growing food manufacturer needed to meet international food safety standards to supply major retail chains.',
      solution: 'We conducted comprehensive gap analysis and implemented integrated food safety management systems across all production lines.',
      results: {
        timeToComplete: '42 days',
        improvement: '60% reduction in quality incidents',
        outcome: 'Secured contracts with 3 major retail chains',
        savings: '25% increase in production efficiency'
      },
      testimonial: "The integrated approach to ISO 22000 and HACCP implementation was game-changing. Our food safety culture improved dramatically, and we're now a preferred supplier.",
      author: 'Michael Rodriguez, Quality Director'
    },
    {
      company: 'EcoManufacturing Ltd',
      industry: 'Manufacturing',
      certification: 'ISO 14001 + ISO 9001',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      challenge: 'A traditional manufacturer needed to reduce environmental impact while maintaining quality standards for sustainability-focused clients.',
      solution: 'We implemented dual certification approach, integrating environmental management with existing quality systems.',
      results: {
        timeToComplete: '50 days',
        improvement: '30% reduction in waste generation',
        outcome: 'Won 2 major sustainability-focused contracts',
        savings: '15% reduction in operational costs'
      },
      testimonial: "The dual certification approach was brilliant. Instead of two separate systems, we got one integrated solution that drives both quality and environmental performance.",
      author: 'Emma Thompson, Operations Manager'
    }
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
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how organizations across industries have transformed their operations 
            and achieved remarkable results with our certification services.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <ImageWithFallback
                    src={study.image}
                    alt={`${study.company} case study`}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-xl font-bold">{study.company}</div>
                    <div className="text-blue-100">{study.industry}</div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="bg-brand-gold text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {study.certification}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {study.company}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                    <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-sm font-semibold">
                      {study.certification}
                    </span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-brand-blue" />
                      <span className="text-sm font-semibold text-brand-blue">Time to Complete</span>
                    </div>
                    <div className="font-bold text-gray-900">{study.results.timeToComplete}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-600">Improvement</span>
                    </div>
                    <div className="font-bold text-gray-900">{study.results.improvement}</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-600">Outcome</span>
                    </div>
                    <div className="font-bold text-gray-900">{study.results.outcome}</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-semibold text-orange-600">Savings</span>
                    </div>
                    <div className="font-bold text-gray-900">{study.results.savings}</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <blockquote className="text-gray-800 italic mb-4">
                    "{study.testimonial}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{study.author}</div>
                      <div className="text-sm text-gray-600">{study.company}</div>
                    </div>
                  </div>
                </div>

                <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Join these industry leaders and discover how MadreCert can help your organization 
              achieve certification excellence and drive measurable business results.
            </p>
            <Button size="lg" className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3 rounded-full">
              Start Your Journey Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}