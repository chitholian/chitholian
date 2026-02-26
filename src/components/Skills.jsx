import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-500 max-w-lg mx-auto">{subtitle}</p>
      <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
    </motion.div>
  );
}

function SkillBar({ name, level, delay, color }) {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
          {name}
        </span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{
            background: color
              ? `linear-gradient(90deg, ${color}, ${color}cc)`
              : 'linear-gradient(90deg, #22d3ee, #3b82f6)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function TechBadge({ name, color, delay }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3, type: 'spring' }}
      className="px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700/50 text-sm text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-default"
      style={{ borderColor: `${color}20`, backgroundColor: `${color}08` }}
    >
      <span style={{ color: color }}>{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-950 relative">
      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          title="Tech Stack"
          subtitle="Languages, frameworks, and tools I work with"
        />

        {/* Languages with progress bars */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Programming Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.languages.map((lang, index) => (
              <SkillBar
                key={lang.name}
                name={lang.name}
                level={lang.level}
                delay={index * 0.08}
              />
            ))}
          </div>
        </motion.div>

        {/* Frameworks with progress bars */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            Frameworks & Libraries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.frameworks.map((fw, index) => (
              <SkillBar
                key={fw.name}
                name={fw.name}
                level={fw.level}
                delay={index * 0.08}
                color={fw.color}
              />
            ))}
          </div>
        </motion.div>

        {/* Additional Skills with progress bars */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Databases, Platforms & More
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.additional.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.08}
                color={skill.color}
              />
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <div>
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-white mb-6 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Tools & Infrastructure
          </motion.h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool, index) => (
              <TechBadge key={tool.name} name={tool.name} color={tool.color} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
