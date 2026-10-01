import React, { useState } from 'react';
import { portfolioData, SkillItem } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Core' | 'Frameworks' | 'Tools'>('All');

  const categories: ('All' | 'Core' | 'Frameworks' | 'Tools')[] = ['All', 'Core', 'Frameworks', 'Tools'];

  const filteredSkills = activeCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F5F5F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#1F4D3A] uppercase mb-3">
            <span className="text-[#F5A623] font-black text-lg">—</span>
            <span>Skills &amp; Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F4D3A] tracking-tight leading-tight">
            Tools &amp; <span className="text-[#F5A623] italic font-serif font-semibold">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Proficient in modern frontend architecture, component patterns, and visual styling systems.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-200/70 rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] ${
                  activeCategory === cat
                    ? 'bg-[#1F4D3A] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#1F4D3A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Circular Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredSkills.map((skill: SkillItem) => {
            // SVG Circle Math for Progress Ring
            const radius = 38;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

            return (
              <div
                key={skill.name}
                className="group bg-white rounded-3xl p-6 text-center border border-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between"
              >
                {/* Circular Percentage Ring Container */}
                <div className="relative w-28 h-28 my-2 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="text-slate-100"
                      strokeWidth="7"
                      stroke="currentColor"
                      fill="transparent"
                    />
                    {/* Active Accent Ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="text-[#F5A623] transition-all duration-1000 ease-out"
                      strokeWidth="7"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                    />
                  </svg>

                  {/* Percentage in Center */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#1F4D3A] font-mono tabular-nums group-hover:scale-110 transition-transform">
                      {skill.percentage}%
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold tracking-wide uppercase">
                      {skill.level}
                    </span>
                  </div>
                </div>

                {/* Skill Name */}
                <div className="mt-3">
                  <h3 className="text-base font-bold text-[#1F4D3A] group-hover:text-[#F5A623] transition-colors">
                    {skill.name}
                  </h3>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {skill.category}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
