"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
// import madreLogo from '../../public/palji_3.jpg';
const madreLogo = 'https://folk-dawn-94548267.figma.site/_assets/v10/66d5e82c8e9f9cdfa28edcbc542625c1cd9b1450.png';


export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      'Quality Management',
      'Environmental Management',
      'Occupational Health & Safety',
      'Food Safety Management',
      'Information Security',
      'Good Manufacturing Practice',
      'Hazard Analysis & Critical Control Points',
      'Consultation Services'
    ],
    company: [
      'About MadreCert',
      'Our Team',
      'Case Studies',
      'Careers',
      'News & Updates',
      'Contact Us',
      'Request Quote'
    ],
    resources: [
      'Industry Standards',
      'Download Center',
      'Webinars',
      'Blog',
      'FAQ',
      'Support Portal',
      'Client Login'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Data Protection',
      'Complaints Procedure',
      'Anti-Bribery Policy',
      'Quality Policy',
      'Environmental Policy'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Scroll to Top Button */}
      <motion.button
        className="absolute -top-6 right-8 bg-brand-gold hover:bg-brand-gold-dark text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="h-22 w-auto bg-white rounded-lg shadow-md">
                    <img 
                      src="https://folk-dawn-94548267.figma.site/_assets/v10/66d5e82c8e9f9cdfa28edcbc542625c1cd9b1450.png"
                      alt="MADRE Certification" 
                      className="h-[80px] w-[80px] object-contain"
                    />
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Leading global quality assurance company with over 15 years of experience 
                  helping organizations achieve excellence through internationally recognized standards.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-brand-gold flex-shrink-0" />
                    <span className="text-sm">Operating Office: B HIVE 11, B-2/11,1st Floor, Mohan Cooperative Industrial Estate, New Delhi-110044 India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-brand-gold flex-shrink-0" />
                    <span className="text-sm">+91-9125191256</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-brand-gold flex-shrink-0" />
                    <span className="text-sm">info@madrecert.com</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm hover:text-brand-gold transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm hover:text-brand-gold transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm hover:text-brand-gold transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm hover:text-brand-gold transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © 2025 MadreCert. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Professional Excellence</span>
              <span>•</span>
              <span>Global Standards</span>
              <span>•</span>
              <span>Trusted Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}