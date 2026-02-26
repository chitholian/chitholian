import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>© {new Date().getFullYear()}</span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium">
            {personalInfo.shortName}
          </span>
          <span>• Built with</span>
          <FaHeart className="text-red-400 text-xs" />
          <span>and React</span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: FaGithub, href: personalInfo.github },
            { icon: FaLinkedin, href: personalInfo.linkedin },
            { icon: FaTwitter, href: personalInfo.twitter },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
