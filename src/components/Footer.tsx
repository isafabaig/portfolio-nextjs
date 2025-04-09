import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-4 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6 space-y-4 md:space-y-0">

        {/* Name / Logo */}
        <div className="text-lg sm:text-xl font-semibold tracking-wide">
          <span className="text-blue-400">Safa Aamir</span> © {new Date().getFullYear()}
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-sm sm:text-base">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition duration-300 hover:text-yellow-400 "
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/isafabaig"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/safa-aamir-823b582b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
