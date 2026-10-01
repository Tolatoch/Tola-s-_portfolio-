import React from 'react';
import { GraduationCap, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData, TimelineItem } from '../data/portfolioData';

export const EducationExperienceSection: React.FC = () => {
  const { education, experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#1F4D3A] uppercase mb-3">
            <span className="text-[#F5A623] font-black text-lg">—</span>
            <span>My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F4D3A] tracking-tight leading-tight">
            Education &amp; <span className="text-[#F5A623] italic font-serif font-semibold">Experience</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Academic foundations at University of Phayao paired with hands-on frontend development experience.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#1F4D3A] text-[#F5A623] flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">Academic Background</span>
                <h3 className="text-2xl font-bold text-[#1F4D3A]">Education</h3>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1F4D3A]/20 space-y-10">
              {education.map((item: TimelineItem, index: number) => (
                <div key={index} className="relative group">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#1F4D3A] group-hover:border-[#F5A623] transition-colors" />

                  {/* Year Tag */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F5A623]/15 text-[#1F4D3A] mb-2 font-mono">
                    <Calendar className="w-3 h-3 text-[#F5A623]" />
                    {item.year}
                  </span>

                  {/* Title & Organization */}
                  <h4 className="text-lg sm:text-xl font-bold text-[#1F4D3A] group-hover:text-[#F5A623] transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-sm font-semibold text-slate-600 mb-3">
                    {item.organization}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Highlights / Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="space-y-1.5 mt-2">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4D3A] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#F5A623] text-[#1F4D3A] flex items-center justify-center shadow-md">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F4D3A]">Work &amp; Leadership</span>
                <h3 className="text-2xl font-bold text-[#1F4D3A]">Experience</h3>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#F5A623]/40 space-y-10">
              {experience.map((item: TimelineItem, index: number) => (
                <div key={index} className="relative group">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#F5A623] group-hover:border-[#1F4D3A] transition-colors" />

                  {/* Year Tag */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#1F4D3A]/10 text-[#1F4D3A] mb-2 font-mono">
                    <Calendar className="w-3 h-3 text-[#1F4D3A]" />
                    {item.year}
                  </span>

                  {/* Title & Organization */}
                  <h4 className="text-lg sm:text-xl font-bold text-[#1F4D3A] group-hover:text-[#F5A623] transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-sm font-semibold text-slate-600 mb-3">
                    {item.organization}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Highlights / Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="space-y-1.5 mt-2">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
