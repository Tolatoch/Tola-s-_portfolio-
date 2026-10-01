import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#16392B] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-white/10">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#F5A623] text-[#1F4D3A] font-bold text-lg flex items-center justify-center shadow-inner">
                T
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                {personal.shortName}
                <span className="text-[#F5A623]">.</span>
              </span>
            </div>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed">
              Frontend Developer &amp; Year 3 student at University of Phayao, Thailand. Designing and coding responsive digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <a href="#home" className="hover:text-[#F5A623] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#F5A623] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#F5A623] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#F5A623] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#F5A623] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#F5A623] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#F5A623] transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-[#F5A623] hover:text-[#1F4D3A] text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-[#F5A623] hover:text-[#1F4D3A] text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-full bg-white/5 hover:bg-[#F5A623] hover:text-[#1F4D3A] text-white transition-colors"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#F5A623] hover:text-[#1F4D3A] text-white transition-colors ml-2"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved. University of Phayao, Thailand.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
