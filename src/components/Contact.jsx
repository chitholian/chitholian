import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-red-400',
      bg: 'bg-red-400/10',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-green-400',
      bg: 'bg-green-400/10',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'in/chitholian',
      href: personalInfo.linkedin,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'chitholian',
      href: personalInfo.github,
      color: 'text-gray-300',
      bg: 'bg-gray-400/10',
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      value: '@the_chitholian',
      href: personalInfo.twitter,
      color: 'text-sky-400',
      bg: 'bg-sky-400/10',
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      value: 'Chitholian',
      href: personalInfo.facebook,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/10 via-gray-950 to-gray-950" />
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-gray-400">
            <FaMapMarkerAlt className="text-cyan-400" />
            <span>{personalInfo.location}</span>
            <span className="text-gray-600 mx-1">•</span>
            <span className="text-gray-500 text-sm">From {personalInfo.hometown}</span>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label === 'Phone' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group p-5 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-cyan-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/5 hover:-translate-y-1 flex items-center gap-4"
            >
              <div className={`p-3 rounded-xl ${method.bg} ${method.color} group-hover:scale-110 transition-transform`}>
                <method.icon size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{method.label}</p>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
          >
            <FaEnvelope />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
