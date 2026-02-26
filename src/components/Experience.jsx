import { motion } from 'framer-motion';
import { FaBriefcase, FaExternalLinkAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '../data/portfolio';

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

export { SectionHeading };

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-gray-950 to-gray-950" />
      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey building enterprise software solutions"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-blue-500/50 to-transparent md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-cyan-400 border-4 border-gray-950 z-10 shadow-lg shadow-cyan-400/50" />

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-10 md:ml-0 md:w-1/2 group">
                <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-cyan-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                        >
                          {exp.company} <FaExternalLinkAlt size={10} />
                        </a>
                      ) : (
                        <span className="text-sm text-gray-400">{exp.company}</span>
                      )}
                    </div>
                    {exp.current && (
                      <span className="px-2 py-1 text-xs font-medium bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20 flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FaBriefcase size={10} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt size={10} />
                      {exp.companyLocation}
                    </span>
                  </div>

                  {/* Two column layout for responsibilities and tech */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Responsibilities</h4>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400/50 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-xs rounded-md bg-gray-800/80 text-gray-500 border border-gray-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
