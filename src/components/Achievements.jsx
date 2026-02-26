import { motion } from 'framer-motion';
import { FaCertificate, FaTrophy, FaLanguage } from 'react-icons/fa';
import { certificates, achievements, spokenLanguages } from '../data/portfolio';

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

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900/30 via-gray-950 to-gray-950" />
      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          title="Certifications & Achievements"
          subtitle="Professional certifications, workshops, and accomplishments"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certificates */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <FaCertificate className="text-yellow-400" />
              Certificates
            </h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-yellow-400/20 transition-all duration-300"
                >
                  <h4 className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-cyan-400/70 mt-1">{cert.period}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Workshops */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <FaTrophy className="text-amber-400" />
              Workshops & Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-amber-400/20 transition-all duration-300"
                >
                  <h4 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-cyan-400/70 mt-1">{ach.period}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{ach.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Spoken Languages */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2 justify-center">
            <FaLanguage className="text-cyan-400" size={22} />
            Languages
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {spokenLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: 'spring' }}
                className="px-6 py-4 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-cyan-400/20 transition-all duration-300 text-center min-w-[160px]"
              >
                <p className="text-sm font-semibold text-white">{lang.name}</p>
                <p className="text-xs text-cyan-400/70 mt-1">{lang.proficiency}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
