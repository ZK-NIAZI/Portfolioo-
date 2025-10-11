"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden bg-[#0f1420]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
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
            Work <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey building innovative mobile applications and delivering exceptional user experiences
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent md:transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12 md:space-y-20">
            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                      className="relative"
                    >
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-md animate-pulse" />
                      {/* Dot */}
                      <div className={`relative w-4 h-4 rounded-full border-4 ${
                        exp.current ? "bg-green-500 border-green-400" : "bg-blue-500 border-blue-400"
                      }`} />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"} ml-12 md:ml-0`}
                  >
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 hover:border-blue-500/30 transition-all group">
                      {/* Current Badge */}
                      {exp.current && (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 text-green-400 text-sm font-semibold rounded-full mb-4 ${
                            isLeft ? "md:float-right md:ml-4" : "md:float-left md:mr-4"
                          }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          Current Position
                        </motion.div>
                      )}

                      {/* Company */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {exp.company}
                      </h3>

                      {/* Role */}
                      <div className={`flex items-center gap-2 text-blue-400 font-semibold text-lg mb-3 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}>
                        <Briefcase className="w-5 h-5" />
                        <span>{exp.role}</span>
                      </div>

                      {/* Meta Info */}
                      <div className={`flex flex-wrap gap-4 text-gray-400 text-sm mb-4 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className={`h-px bg-gradient-to-r ${
                        isLeft ? "from-transparent via-blue-500/50 to-blue-500/50 md:to-transparent md:from-blue-500/50" : "from-blue-500/50 via-blue-500/50 to-transparent"
                      } mb-4`} />

                      {/* Achievements */}
                      <ul className={`space-y-3 ${isLeft ? "md:text-right" : ""}`}>
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                            className={`flex items-start gap-3 text-gray-300 text-sm leading-relaxed ${
                              isLeft ? "md:flex-row-reverse" : ""
                            }`}
                          >
                            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Decorative Corner */}
                      <div className={`absolute top-0 ${
                        isLeft ? "right-0" : "left-0"
                      } w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent ${
                        isLeft ? "rounded-tr-2xl" : "rounded-tl-2xl"
                      } opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>
                  </motion.div>

                  {/* Spacer for alignment on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>

          {/* End Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute left-0 md:left-1/2 bottom-0 md:transform md:-translate-x-1/2 flex items-center justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 border-4 border-[#0f1420] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 backdrop-blur-lg">
            <div className="text-4xl">💼</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Ready for New Opportunities</h3>
              <p className="text-gray-400">Open to exciting Flutter development roles and freelance projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
