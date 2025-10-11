"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const levelColors = {
  Expert: {
    bg: "from-blue-600/20 to-cyan-600/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  Advanced: {
    bg: "from-purple-600/20 to-pink-600/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    glow: "shadow-purple-500/20",
  },
  Intermediate: {
    bg: "from-cyan-600/20 to-teal-600/20",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-[#0a0e27]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
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
            Skills & <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive technical skills across mobile development, backend integration, and modern architecture patterns
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="max-w-7xl mx-auto space-y-12">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-sm font-bold">
                    {categoryIndex + 1}
                  </span>
                  {category}
                </h3>
                <div className="h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.map((skill, skillIndex) => {
                  const levelColor = levelColors[skill.level as keyof typeof levelColors];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`group relative p-5 rounded-xl bg-gradient-to-br ${levelColor.bg} backdrop-blur-lg border ${levelColor.border} hover:shadow-xl ${levelColor.glow} transition-all cursor-pointer overflow-hidden`}
                    >
                      {/* Animated Background Gradient on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                            {skill.name}
                          </h4>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`w-2 h-2 rounded-full ${levelColor.text.replace("text-", "bg-")} group-hover:scale-150 transition-transform`}
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${levelColor.text}`}>
                            {skill.level}
                          </span>

                          {/* Skill Level Indicator */}
                          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{
                                width: skill.level === "Expert" ? "100%" :
                                       skill.level === "Advanced" ? "80%" : "60%"
                              }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                              className={`h-full bg-gradient-to-r ${levelColor.text.replace("text-blue-400", "from-blue-500 to-cyan-500").replace("text-purple-400", "from-purple-500 to-pink-500").replace("text-cyan-400", "from-cyan-500 to-teal-500")} rounded-full`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect Corners */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {Object.entries(levelColors).map(([level, colors]) => (
            <div key={level} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.text.replace("text-blue-400", "from-blue-500 to-cyan-500").replace("text-purple-400", "from-purple-500 to-pink-500").replace("text-cyan-400", "from-cyan-500 to-teal-500")}`} />
              <span className="text-sm text-gray-300">{level}</span>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Always learning and expanding my skill set to deliver cutting-edge solutions
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
          >
            See Skills in Action
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
