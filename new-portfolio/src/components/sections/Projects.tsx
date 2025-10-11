"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, Tag, X } from "lucide-react";
import { projects } from "@/lib/data";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-[#0a0e27]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
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
            Featured <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of mobile applications I've built, demonstrating expertise across various domains and technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 hover:border-blue-500/30 transition-all"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20">
                {project.image ? (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-blue-400/30">
                    {project.title.split(" ")[0]}
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent opacity-20">
                      {project.title.substring(0, 2)}
                    </div>
                  </div>
                )}

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white font-semibold"
                  >
                    View Details
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* External Link */}
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 inline-flex items-center gap-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Play Store
                  </motion.a>
                )}
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
              >
                <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0e27] border border-white/20 rounded-2xl shadow-2xl pointer-events-auto">
                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full border border-white/20 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>

                  {/* Modal Content */}
                  <div className="p-8">
                    {/* Image */}
                    <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20 mb-6 flex items-center justify-center">
                      <div className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent opacity-20">
                        {selectedProject.title.substring(0, 2)}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {selectedProject.title}
                    </h2>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-5 h-5" />
                        <span>{selectedProject.date}</span>
                      </div>
                      {selectedProject.link && (
                        <motion.a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Play Store
                        </motion.a>
                      )}
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">About the Project</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Tag className="w-5 h-5" />
                        Technologies & Features
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm rounded-lg font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-gray-400 text-sm">
                        This project showcases my expertise in Flutter development, clean architecture, and creating user-friendly mobile experiences that solve real-world problems.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Interested in seeing more projects or discussing a collaboration?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
