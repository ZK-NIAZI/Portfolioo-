"use client";

import { motion } from "framer-motion";
import { Smartphone, Layers, Server, Sparkles, Code2, Rocket } from "lucide-react";
import { about, personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-semibold">About Me</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Turning Ideas Into
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {about.intro}
          </p>
        </motion.div>

        {/* Main Content - Modern Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 lg:row-span-2 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    Who I Am
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="hidden md:block w-20 h-20 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-white/10 flex items-center justify-center"
                >
                  <Code2 className="w-10 h-10 text-blue-400" />
                </motion.div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {about.description}
              </p>

              {/* Skills Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {about.highlights.map((highlight, index) => {
                  const icons = {
                    Smartphone: Smartphone,
                    Layers: Layers,
                    Server: Server,
                  };
                  const Icon = icons[highlight.icon as keyof typeof icons];

                  return (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 flex items-center justify-center">
                        {Icon && <Icon className="w-6 h-6 text-blue-400" />}
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">{highlight.title}</h4>
                        <p className="text-sm text-gray-400">{highlight.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Stats Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-white/10 rounded-3xl p-8 hover:scale-105 transition-transform"
          >
            <div className="text-5xl mb-4">🎯</div>
            <div className="text-5xl font-black text-white mb-2">100%</div>
            <div className="text-gray-400 font-semibold mb-4">Client Satisfaction</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex-1 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-transform"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="text-5xl mb-4">⚡</div>
              <div className="text-5xl font-black text-white mb-2">Fast</div>
              <div className="text-gray-400 font-semibold">Delivery & Quality</div>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📧</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <div className="text-white font-semibold truncate">{personalInfo.email}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-green-600/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📱</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-500 mb-1">Phone</div>
                <div className="text-white font-semibold">{personalInfo.phone}</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-12 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Let's Build Something Amazing
                </h3>
                <p className="text-lg text-white/80">
                  Ready to bring your ideas to life with cutting-edge mobile solutions
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 px-8 py-4 bg-white text-black rounded-full font-black hover:shadow-xl hover:shadow-white/20 transition-all flex items-center gap-2"
              >
                Start Project
                <Rocket className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
