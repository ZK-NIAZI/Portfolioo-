"use client";

import { motion } from "framer-motion";
import { Smartphone, Apple, Monitor, Settings, Database, Palette, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

const iconMap = {
  Smartphone: Smartphone,
  Apple: Apple,
  Monitor: Monitor,
  Settings: Settings,
  Database: Database,
  Palette: Palette,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-[#0f1420]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Services I <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            From concept to deployment, I provide comprehensive mobile development services tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isFeatured = service.featured;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative p-8 rounded-2xl backdrop-blur-lg border transition-all cursor-pointer overflow-hidden ${
                  isFeatured
                    ? "bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/30"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:shadow-xl hover:shadow-white/10"
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full"
                    >
                      POPULAR
                    </motion.div>
                  </div>
                )}

                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-cyan-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-cyan-600/10 group-hover:to-blue-600/10 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`mb-6 w-16 h-16 rounded-xl flex items-center justify-center ${
                      isFeatured
                        ? "bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50"
                        : "bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-500/30"
                    } group-hover:shadow-2xl transition-shadow`}
                  >
                    {Icon && <Icon className="w-8 h-8 text-white" />}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-cyan-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 backdrop-blur-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Have a Custom Project in Mind?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects. Let's discuss how I can help bring your mobile app vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow inline-flex items-center justify-center gap-2"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                View Portfolio
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
