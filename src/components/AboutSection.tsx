import React, { useState } from 'react';
import { ArrowRight, Download, CheckCircle, Sparkles, MapPin, University } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { personal } = portfolioData;
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadResume = () => {
    // Simulated resume download / trigger
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
    
    // Create an accessible text summary blob for immediate download
    const resumeText = `TOLA TOCH - FRONTEND DEVELOPER
Year 3 Student, University of Phayao, Thailand
Email: tolatuch081@gmail.com
GitHub: https://github.com/tolatoch
LinkedIn: https://linkedin.com/in/tolatoch

SUMMARY
Frontend Developer and Year 3 student at University of Phayao with expertise in React, TypeScript, and Tailwind CSS. Builder of Web Flood monitoring dashboard.

EDUCATION
- B.S. in Information Technology / Computer Science (2023 - Present)
  University of Phayao, Thailand (GPA: 3.8/4.0)

TECHNICAL SKILLS
- Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3/Tailwind
- Frameworks & Libraries: React, Next.js, Vite, Leaflet GIS, Chart.js
- Tools: Git, GitHub, Figma, VS Code, Vercel

PROJECTS
1. Web Flood: Real-time hydrological water level & flood monitoring system.
2. Kwan Phayao Eco-Tourism: Modern responsive travel portal for Phayao lake.
3. DevPulse Design System: Accessible UI component library.
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Tola_Toch_Frontend_Developer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#1F4D3A] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#F5A623] uppercase mb-3">
            <span className="font-black text-lg">—</span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Passionate About <span className="text-[#F5A623] italic font-serif font-semibold">Web Craft</span>
          </h2>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            Bridging thoughtful user experience design with performant frontend architecture.
          </p>
        </div>

        {/* Content Grid: Photo in orange circle on left + Bio & Stats on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 bg-[#F5A623]/25 rounded-full blur-xl" />
              
              {/* Photo in Orange Circle */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full border-4 border-[#F5A623] shadow-2xl overflow-hidden bg-[#16392B] p-1.5">
                <img
                  src={personal.avatarImage}
                  alt={`${personal.name} - University of Phayao`}
                  className="w-full h-full rounded-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Status Pill Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#F5A623] text-[#1F4D3A] rounded-full text-xs font-extrabold shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 fill-[#1F4D3A]" />
                <span>Univ. of Phayao · Yr 3</span>
              </div>
            </div>

            {/* University Tag */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-1.5 text-white/90 text-sm font-semibold">
                <MapPin className="w-4 h-4 text-[#F5A623]" />
                <span>Phayao, Northern Thailand</span>
              </div>
              <div className="text-xs text-white/60 mt-1">
                Open to Relocation &amp; Remote Roles
              </div>
            </div>
          </div>

          {/* Bio & Stats Column */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Hello! I'm <span className="text-[#F5A623]">{personal.name}</span>
            </h3>

            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-4">
              I am currently in my 3rd year studying Computer Science / Information Technology at <strong>University of Phayao</strong> in Thailand.
            </p>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8">
              My engineering philosophy revolves around simplicity, accessibility, and high performance. I love transforming complex requirements into smooth, intuitive user interfaces. When I'm not writing React code or fine-tuning Tailwind styling, you can find me collaborating with classmates on hackathon projects or studying modern frontend tooling.
            </p>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {personal.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F5A623] font-mono tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/70 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons: Resume & Contact */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5A623] text-[#1F4D3A] hover:bg-[#e09215] font-bold text-sm sm:text-base rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Download className="w-4 h-4" />
                <span>{downloadSuccess ? 'Resume Downloaded!' : 'Download Resume'}</span>
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm sm:text-base text-white border border-white/30 hover:bg-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 text-[#F5A623]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
