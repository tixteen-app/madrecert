"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    certification: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Global Headquarters',
      details: ['123 Certification Plaza', 'London EC1A 1BB, United Kingdom'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['+44 20 7123 4567', '+1 (555) 123-4567'],
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@madrecert.com', 'support@madrecert.com'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM GMT', '24/7 Emergency Support Available'],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  ];

  const certificationOptions = [
    'ISO 9001 - Quality Management',
    'ISO 14001 - Environmental Management',
    'ISO 45001 - Occupational Health & Safety',
    'ISO 22000 - Food Safety Management',
    'ISO 27001 - Information Security',
    'ISO 13485 - Medical Devices',
    'GMP - Good Manufacturing Practice',
    'HACCP - Hazard Analysis Critical Control Points',
    'Multiple Certifications',
    'Not Sure - Need Consultation'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your certification journey? Our experts are here to guide you 
            through every step of the process. Contact us today for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h4>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="+44 20 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="certification">Certification of Interest</Label>
                    <select
                      id="certification"
                      name="certification"
                      value={formData.certification}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    >
                      <option value="">Select a certification</option>
                      {certificationOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell us about your certification needs, current systems, timeline, and any specific questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white py-3 rounded-full"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${info.bgColor} p-3 rounded-lg flex-shrink-0`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-80 bg-gray-200 relative">
                {/* Placeholder for Google Map */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-blue/20 to-brand-blue/10">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Interactive Map</h4>
                    <p className="text-gray-600 text-sm">
                      123 Certification Plaza<br />
                      London EC1A 1BB, United Kingdom
                    </p>
                    <Button className="mt-4 bg-brand-blue hover:bg-brand-blue-dark text-white">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-r from-brand-gold to-brand-gold-dark rounded-xl p-6 text-white text-center">
              <h4 className="font-bold mb-2">Need Immediate Assistance?</h4>
              <p className="text-orange-100 mb-4 text-sm">
                Our certification experts are available for urgent consultations
              </p>
              <Button className="bg-white text-brand-gold hover:bg-gray-100">
                Call Now: +44 20 7123 4567
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}