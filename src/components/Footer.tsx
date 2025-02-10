import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo / Name */}
        <div className="text-xl font-semibold">
          <span className="text-blue-400">Safa Aamir</span> © {new Date().getFullYear()}
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/isafabaig" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/safa-aamir-823b582b1/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Navigation */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-400 transition duration-300">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
