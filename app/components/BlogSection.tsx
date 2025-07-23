"use client";

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of ISO Certification: Digital Transformation and Remote Auditing',
      excerpt: 'Explore how digital technologies are revolutionizing the certification process and what it means for organizations seeking ISO compliance in the modern era.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Dr. Sarah Mitchell',
      authorRole: 'Lead Auditor',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Digital Transformation',
      tags: ['ISO 9001', 'Remote Auditing', 'Technology'],
    },
    {
      id: 2,
      title: 'ISO 27001 in the Age of AI: Protecting Information in Smart Organizations',
      excerpt: 'Learn how artificial intelligence is changing the landscape of information security and how ISO 27001 frameworks are adapting to protect data in AI-driven environments.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Michael Chen',
      authorRole: 'Cybersecurity Expert',
      date: 'January 12, 2025',
      readTime: '6 min read',
      category: 'Information Security',
      tags: ['ISO 27001', 'AI Security', 'Data Protection'],
    },
    {
      id: 3,
      title: 'Sustainable Manufacturing: How ISO 14001 Drives Environmental Excellence',
      excerpt: 'Discover how leading manufacturers are leveraging ISO 14001 to achieve sustainability goals while maintaining operational efficiency and competitive advantage.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Emma Rodriguez',
      authorRole: 'Environmental Consultant',
      date: 'January 10, 2025',
      readTime: '10 min read',
      category: 'Environmental Management',
      tags: ['ISO 14001', 'Sustainability', 'Manufacturing'],
    },
  ];

  const categories = ['All', 'Digital Transformation', 'Information Security', 'Environmental Management', 'Quality Management'];

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
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest trends, best practices, and expert insights 
            in the world of ISO certification and quality management.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-brand-blue text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-brand-blue/10 hover:text-brand-blue'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    {/* <Calendar className="h-4 w-4" /> */}
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-blue transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                      <div className="text-gray-500 text-xs">{post.authorRole}</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-brand-blue hover:text-brand-blue-dark p-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Featured Article */}
        <motion.div
          className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-brand-gold text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Featured Article
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Complete Guide to ISO Certification: Everything You Need to Know in 2025
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                A comprehensive guide covering the entire ISO certification journey, from initial assessment 
                to maintaining compliance. Includes practical tips, common pitfalls, and expert recommendations.
              </p>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-blue-200">
                  {/* <Calendar className="h-4 w-4" /> */}
                  <span className="text-sm">January 18, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">15 min read</span>
                </div>
              </div>
              <Button className="bg-brand-gold hover:bg-brand-gold-dark text-white px-6 py-3 rounded-full">
                Read Full Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-4">What You'll Learn:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100">Step-by-step certification process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100">Cost optimization strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100">Common compliance mistakes to avoid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100">Industry-specific requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 rounded-full">
            Visit Our Blog
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}