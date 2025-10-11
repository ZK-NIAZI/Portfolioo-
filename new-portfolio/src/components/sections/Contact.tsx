"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, GraduationCap, BookOpen, Calendar } from "lucide-react";
import { personalInfo, education } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#0a0e27]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Education Section First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Education & <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Contact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 hover:border-blue-500/30 transition-all group">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50"
            >
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>

            {/* Degree */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {education.degree}
            </h3>

            {/* University */}
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-lg mb-4">
              <BookOpen className="w-5 h-5" />
              <span>{education.university}</span>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{education.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{education.location}</span>
              </div>
            </div>

            {/* Subjects */}
            <div>
              <h4 className="text-white font-semibold mb-3">Key Subjects</h4>
              <div className="flex flex-wrap gap-2">
                {education.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm rounded-lg"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

              {/* Email */}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-blue-600/20 border border-blue-500/30 group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-medium">{personalInfo.email}</div>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${personalInfo.phone}`}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-cyan-600/20 border border-cyan-500/30 group-hover:bg-cyan-600/30 transition-colors">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-medium">{personalInfo.phone}</div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="p-3 rounded-lg bg-purple-600/20 border border-purple-500/30 group-hover:bg-purple-600/30 transition-colors">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white font-medium">{personalInfo.location}</div>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-white font-semibold mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all group"
                  >
                    <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all group"
                  >
                    <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 backdrop-blur-lg flex flex-col justify-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Whether you need a new mobile app, want to improve an existing one, or have a creative idea to discuss, I'm here to help bring it to life.
                </p>

                <div className="space-y-4">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
                  >
                    <Send className="w-5 h-5" />
                    Send Email
                  </motion.a>

                  <motion.a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                  >
                    View Resume
                  </motion.a>
                </div>

                {/* Availability Status */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 text-green-400 rounded-full text-sm font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for Projects
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
