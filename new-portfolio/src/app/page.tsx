"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen" style={{ backgroundColor: "var(--color-bg-primary)" }}>
        {/* Hero Section - Modern Bento Grid */}
        <section id="hero" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
          {/* Animated Grid Background */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
              style={{
                backgroundImage: `linear-gradient(to right, var(--color-accent) 1px, transparent 1px), linear-gradient(to bottom, var(--color-accent) 1px, transparent 1px)`,
                opacity: 0.1
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, var(--color-bg-primary), transparent, transparent)`
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
              {/* Main Card - Name & Title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="col-span-12 lg:col-span-7 row-span-2 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-cyan-600/10 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
              >
                {/* Animated Gradient Orb */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-green-400 font-medium">Available for Hire</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none"
                  >
                    <span className="text-white">I'm </span>
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {personalInfo.name.split(" ")[0]}
                    </span>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-gray-400 mb-6"
                  >
                    {personalInfo.role}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg text-gray-400 max-w-2xl mb-8"
                  >
                    {personalInfo.tagline}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <a
                      href="#projects"
                      className="group px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
                    >
                      View Work
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="#contact"
                      className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all"
                    >
                      Contact Me
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="col-span-6 lg:col-span-5 bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-white/10 rounded-3xl p-6 md:p-8 hover:scale-105 transition-transform"
              >
                <div className="text-6xl mb-4">📊</div>
                <div className="text-5xl md:text-6xl font-black text-white mb-2">5+</div>
                <div className="text-gray-400 font-medium">Apps Delivered</div>
                <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="col-span-6 lg:col-span-5 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border border-white/10 rounded-3xl p-6 md:p-8 hover:scale-105 transition-transform"
              >
                <div className="text-6xl mb-4">💼</div>
                <div className="text-5xl md:text-6xl font-black text-white mb-2">2</div>
                <div className="text-gray-400 font-medium">Companies Worked</div>
                <div className="mt-4 flex gap-2">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex-1 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                  ))}
                </div>
              </motion.div>

              {/* Social Links Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="col-span-12 lg:col-span-7 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group flex-1 min-w-[200px]"
                  >
                    <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    <div>
                      <div className="text-sm text-gray-500">GitHub</div>
                      <div className="text-white font-semibold">@{personalInfo.github.split('/').pop()}</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 px-6 py-4 bg-blue-600/10 border border-blue-500/30 rounded-2xl hover:bg-blue-600/20 transition-all group flex-1 min-w-[200px]"
                  >
                    <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <div>
                      <div className="text-sm text-gray-500">LinkedIn</div>
                      <div className="text-white font-semibold">Connect</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 px-6 py-4 bg-purple-600/10 border border-purple-500/30 rounded-2xl hover:bg-purple-600/20 transition-all group flex-1 min-w-[200px]"
                  >
                    <Mail className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="text-white font-semibold">Say Hello</div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>

              {/* Location/Status Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="col-span-12 lg:col-span-5 bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:scale-105 transition-transform"
              >
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">📍</div>
                  <div className="text-2xl font-bold text-white mb-2">{personalInfo.location}</div>
                  <div className="text-gray-400 font-medium mb-4">Based in Pakistan</div>
                  <div className="flex items-center gap-2 text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold">Open to Remote Work</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center mt-16"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2"
                >
                  <div className="w-1 h-3 bg-white/50 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Services Section */}
        <Services />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Contact & Education Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
