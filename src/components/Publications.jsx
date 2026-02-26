import { motion } from 'framer-motion';
import { FaFileAlt, FaGithub, FaExternalLinkAlt, FaBook } from 'react-icons/fa';
import { publications, interests } from '../data/portfolio';

export default function Publications() {
  return (
    <section className="py-24 px-4 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900/30 via-gray-950 to-gray-950" />
      <div className="relative max-w-4xl mx-auto">
        {/* Publications */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Research & Publications</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Academic contributions to the field</p>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </motion.div>

        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-cyan-400/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-400/10 text-purple-400 flex-shrink-0">
                  <FaFileAlt size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-2">{pub.title}</h3>
                  <p className="text-sm text-gray-400 mb-1">{pub.venue}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FaBook size={10} />
                      {pub.publisher}
                    </span>
                    <span>•</span>
                    <span>{pub.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={pub.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <FaExternalLinkAlt size={12} /> DOI
                    </a>
                    {pub.springerLink && (
                      <a
                        href={pub.springerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                      >
                        <FaBook size={12} /> Springer
                      </a>
                    )}
                    <a
                      href={pub.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      <FaGithub size={14} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Interests */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-6 text-center">Areas of Interest</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <motion.span
                key={interest}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: 'spring' }}
                className="px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700/50 text-sm text-gray-300 hover:text-cyan-400 hover:border-cyan-400/20 transition-all duration-300"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
