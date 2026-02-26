import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { education } from '../data/portfolio';

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

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-gray-950 relative">
      <div className="relative max-w-4xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="My academic background and qualifications"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-cyan-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/5 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 flex-shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                    <FaGraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="text-sm text-gray-400 mt-1">{edu.field}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">{edu.institution}</p>
                    {edu.period && (
                      <p className="text-xs text-gray-600 mt-1.5 flex items-center gap-1">
                        <FaCalendarAlt size={10} />
                        {edu.period}
                      </p>
                    )}
                    <p className="text-xs text-cyan-400/70 mt-2 font-medium">{edu.result}</p>
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
