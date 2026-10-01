import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section for indicator
      const sections = ['home', 'services', 'about', 'skills', 'projects', 'experience', 'testimonials', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#1F4D3A] text-white shadow-xl shadow-[#1F4D3A]/20 backdrop-blur-md'
              : 'bg-[#1F4D3A] text-white shadow-lg'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo: circle + "Tola." */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] rounded-full"
            aria-label="Tola Toch Home"
          >
            <div className="w-9 h-9 rounded-full bg-[#F5A623] text-[#1F4D3A] font-bold text-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-inner">
              T
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center">
              {portfolioData.personal.shortName}
              <span className="text-[#F5A623]">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-[#F5A623] font-semibold bg-white/10'
                      : 'text-white/85 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action: Theme toggle + White Contact Me button */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-white/80 hover:text-[#F5A623] transition-colors rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-[#F5A623]" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-bold bg-white text-[#1F4D3A] hover:bg-[#F5A623] hover:text-[#1F4D3A] rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
            >
              <span>Contact Me</span>
              <div className="w-5 h-5 rounded-full bg-[#1F4D3A] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight className="w-3 h-3 text-[#F5A623]" />
              </div>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#F5A623] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 bg-[#1F4D3A] border border-white/10 text-white rounded-3xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#F5A623]/20 text-[#F5A623] font-semibold'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#F5A623] text-[#1F4D3A] font-bold text-center rounded-full shadow-md"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <div className="text-center text-xs text-white/60 pt-1">
                  University of Phayao · Thailand
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
