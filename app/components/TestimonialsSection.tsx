"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CTO',
      company: 'TechCorp Industries',
      industry: 'Technology',
      certification: 'ISO 27001',
      rating: 5,
      quote: "MadreCert transformed our approach to information security. Their expertise in cloud-based security implementations is unmatched. We achieved certification 20% faster than expected and our security posture improved dramatically.",
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b287?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      results: ['35-day certification', '40% fewer security incidents', '5 new markets entered'],
    },
    {
      name: 'Michael Rodriguez',
      title: 'Quality Director',
      company: 'GreenFood Manufacturing',
      industry: 'Food & Beverage',
      certification: 'ISO 22000 + HACCP',
      rating: 5,
      quote: "The integrated approach to food safety management was exactly what we needed. MadreCert's team understood our production environment and created systems that enhanced rather than hindered our operations.",
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      results: ['60% reduction in quality incidents', '3 major retail contracts', '25% efficiency increase'],
    },
    {
      name: 'Emma Thompson',
      title: 'Operations Manager',
      company: 'EcoManufacturing Ltd',
      industry: 'Manufacturing',
      certification: 'ISO 14001 + ISO 9001',
      rating: 5,
      quote: "Outstanding service from start to finish. The dual certification approach saved us time and resources while ensuring our environmental and quality management systems work seamlessly together.",
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      results: ['30% waste reduction', '15% cost savings', '2 sustainability contracts'],
    },
    {
      name: 'Dr. James Wilson',
      title: 'CEO',
      company: 'MedDevice Solutions',
      industry: 'Medical Devices',
      certification: 'ISO 13485',
      rating: 5,
      quote: "MadreCert's deep understanding of medical device regulations was crucial to our success. They guided us through complex regulatory requirements with clarity and expertise that made the impossible seem routine.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      results: ['FDA approval accelerated', '100% audit success', '3 new product launches'],
    },
    {
      name: 'Lisa Chen',
      title: 'Plant Manager',
      company: 'AutoParts Global',
      industry: 'Automotive',
      certification: 'ISO 9001',
      rating: 5,
      quote: "The attention to detail and practical approach made all the difference. Our quality metrics improved significantly, and we're now a preferred supplier to major automotive manufacturers worldwide.",
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      results: ['50% defect reduction', '4 new OEM partnerships', '20% productivity gain'],
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from industry leaders who have 
            experienced the MadreCert difference firsthand.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Content */}
                <div className="lg:col-span-2">
                  {/* Quote Icon */}
                  <Quote className="h-12 w-12 text-brand-gold mb-6" />
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-brand-gold fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2">5.0 out of 5</span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-gray-800 mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  {/* Results */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {testimonials[currentTestimonial].results.map((result, index) => (
                      <div key={index} className="bg-brand-blue/5 rounded-lg p-3 text-center">
                        <div className="text-sm font-semibold text-brand-blue">{result}</div>
                      </div>
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].title}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="text-center lg:text-left">
                  <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-2xl p-6 text-white">
                    <h4 className="font-bold mb-4">Certification Details</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-blue-200">Standard</div>
                        <div className="font-semibold">{testimonials[currentTestimonial].certification}</div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-200">Industry</div>
                        <div className="font-semibold">{testimonials[currentTestimonial].industry}</div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-200">Company</div>
                        <div className="font-semibold">{testimonials[currentTestimonial].company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-brand-blue' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-brand-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mt-4 mb-6 line-clamp-4">
                "{testimonial.quote.substring(0, 120)}..."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-600 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}