
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b shadow-sm" : ""
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link
          to="/"
          className="text-xl font-bold text-miraj-red transition-transform hover:scale-105 md:text-2xl"
        >
          MIRAJ
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link to="/archive" className="nav-item">
            Archive
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <a
            href="https://x.com/MirajShafek"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item flex items-center"
          >
            Twitter
          </a>
          <Link to="/subscribe" className="nav-item">
            Subscribe
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 w-full animate-fade-in bg-background px-4 py-4 shadow-md md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              to="/archive"
              className="py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Archive
            </Link>
            <Link
              to="/about"
              className="py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="https://x.com/MirajShafek"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-lg font-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Twitter
            </a>
            <Link
              to="/subscribe"
              className="py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
