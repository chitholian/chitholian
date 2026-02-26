import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaChevronDown, FaFileAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-gray-950 to-gray-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="inline-block"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-75 animate-pulse" />
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="relative w-32 h-32 rounded-full border-2 border-gray-800 object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          <span className="text-white text-2xl">Hi, I'm </span><br/>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 font-light"
        >
          {personalInfo.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
            { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: FaTwitter, href: personalInfo.twitter, label: 'Twitter' },
            { icon: FaFacebook, href: personalInfo.facebook, label: 'Facebook' },
            { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-cyan-400 hover:bg-gray-800 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300 hover:-translate-y-1"
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800/80 border border-gray-700 text-gray-300 font-medium rounded-xl hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <FaFileAlt size={16} />
            View Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 border border-gray-700 text-gray-300 font-medium rounded-xl hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaChevronDown className="text-gray-600 text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
