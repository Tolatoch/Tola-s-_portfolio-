import React from 'react';
import { ArrowRight, Code, Sparkles, Layout, MapPin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const { personal, hero } = portfolioData;

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#1F4D3A]/5 to-[#F5A623]/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro Copy & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* "Hello There!" Tag in dashed box */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dashed border-[#F5A623] bg-[#F5A623]/10 text-[#1F4D3A] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-ping" />
              <span>{hero.tag}</span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center gap-1 text-slate-600 font-normal">
                <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                University of Phayao
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F4D3A] tracking-tight leading-[1.12] mb-6">
              I'm <span className="text-[#F5A623] italic font-serif underline decoration-[#F5A623]/40 underline-offset-4 font-semibold">{personal.name}</span>,
              <br />
              Frontend Developer <span className="text-slate-700 font-bold block sm:inline">based in Thailand</span>
            </h1>

            {/* Short 2-line intro */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              Year 3 student at <strong>University of Phayao</strong> crafting accessible, high-performance web applications and fluid UI component systems. Ready for impactful frontend internship &amp; junior roles.
            </p>

            {/* Buttons: "View My Portfolio" (green + orange arrow) and "Hire Me" (outlined) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group inline-flex items-center justify-between gap-3 px-6 py-3.5 bg-[#1F4D3A] text-white hover:bg-[#16392B] rounded-full font-bold text-sm sm:text-base shadow-lg shadow-[#1F4D3A]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
              >
                <span>{hero.primaryCta}</span>
                <span className="w-7 h-7 rounded-full bg-[#F5A623] text-[#1F4D3A] flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:scale-110 shadow-sm">
                  <ArrowRight className="w-4 h-4 text-[#1F4D3A]" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-sm sm:text-base text-[#1F4D3A] border-2 border-[#1F4D3A] hover:bg-[#1F4D3A] hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
              >
                <span>{hero.secondaryCta}</span>
              </button>
            </div>

            {/* Trust markers: Academic affiliation & Open to work */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#1F4D3A]" />
                <span>B.S. Information Technology (Year 3)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Available for Internship &amp; Full-time</span>
              </div>
            </div>
          </div>

          {/* Right Column: Photo inside orange blob + rotating badge + floating labels */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Organic Orange Blob Shape Background */}
              <div
                className="absolute inset-0 bg-[#F5A623] opacity-90 rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] transform transition-all duration-1000 scale-95 shadow-2xl shadow-[#F5A623]/30"
                style={{
                  animation: 'spinSlow 30s linear infinite alternate',
                }}
              />

              {/* Second subtle blob layer */}
              <div
                className="absolute inset-2 bg-[#1F4D3A]/10 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] transform scale-100 -rotate-6 pointer-events-none"
              />

              {/* Developer Photo Container */}
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[45%_55%_65%_35%_/_48%_48%_52%_52%] overflow-hidden border-4 border-white shadow-xl bg-slate-100">
                <img
                  src={personal.avatarImage}
                  alt={`${personal.name} - Frontend Developer from University of Phayao`}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Rotating Circular "HIRE ME" Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                  {/* Rotating Circular SVG Text */}
                  <svg
                    className="w-full h-full animate-spin-slow"
                    viewBox="0 0 120 120"
                  >
                    <path
                      id="circlePath"
                      d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                      fill="none"
                    />
                    <text className="text-[10.5px] font-bold uppercase tracking-[0.22em] fill-[#1F4D3A]">
                      <textPath href="#circlePath" startOffset="0%">
                        ★ HIRE ME ★ FRONTEND DEV ★ 2026 ★
                      </textPath>
                    </text>
                  </svg>
                  {/* Inner center button */}
                  <div
                    onClick={() => scrollToSection('#contact')}
                    className="absolute w-12 h-12 rounded-full bg-[#1F4D3A] text-white flex items-center justify-center cursor-pointer shadow-md hover:scale-110 hover:bg-[#F5A623] hover:text-[#1F4D3A] transition-all duration-200"
                    title="Hire Tola Toch"
                  >
                    <Sparkles className="w-5 h-5 text-[#F5A623]" />
                  </div>
                </div>
              </div>

              {/* Floating Label 1: "Frontend Developer" */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-3 sm:-left-6 z-20 animate-float-slow">
                <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 text-xs sm:text-sm font-bold text-[#1F4D3A]">
                  <div className="w-8 h-8 rounded-xl bg-[#1F4D3A] text-white flex items-center justify-center">
                    <Code className="w-4 h-4 text-[#F5A623]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold tracking-wide uppercase">Specialization</div>
                    <div>Frontend Developer</div>
                  </div>
                </div>
              </div>

              {/* Floating Label 2: "UI Engineer" */}
              <div className="absolute top-1/2 -right-4 sm:-right-8 z-20 animate-float-reverse">
                <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 text-xs sm:text-sm font-bold text-[#1F4D3A]">
                  <div className="w-8 h-8 rounded-xl bg-[#F5A623] text-[#1F4D3A] flex items-center justify-center">
                    <Layout className="w-4 h-4 text-[#1F4D3A]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold tracking-wide uppercase">Expertise</div>
                    <div>UI Engineer</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
