import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaFileAlt } from 'react-icons/fa';
import { projects } from '../data/portfolio';

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

const categories = ['All', ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900/50 via-gray-950 to-gray-950" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Notable projects across government, telecom, research, and academic domains"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30'
                  : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:text-white hover:border-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-cyan-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/5 hover:-translate-y-1 flex flex-col">
                  {/* Category tag */}
                  <span className="inline-block self-start px-2 py-1 mb-4 text-xs font-medium rounded-md bg-gray-800 text-gray-400">
                    {project.category}
                  </span>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Roles (if available) */}
                  {project.roles && project.roles.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">My Roles</h4>
                      <ul className="space-y-1">
                        {project.roles.slice(0, 4).map((role, i) => (
                          <li key={i} className="text-xs text-gray-500 flex items-start gap-1.5">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400/40 flex-shrink-0" />
                            {role}
                          </li>
                        ))}
                        {project.roles.length > 4 && (
                          <li className="text-xs text-gray-600">+{project.roles.length - 4} more</li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs rounded-md bg-gray-800/80 text-gray-500 border border-gray-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.link || project.paper) && (
                    <div className="flex gap-3 pt-3 border-t border-gray-800/50">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                        >
                          <FaGithub size={14} /> Code
                        </a>
                      )}
                      {project.paper && (
                        <a
                          href={project.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                        >
                          <FaFileAlt size={12} /> Paper
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
