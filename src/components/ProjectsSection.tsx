import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Eye } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Web App' | 'Landing Page' | 'UI'>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories: ('All' | 'Web App' | 'Landing Page' | 'UI')[] = ['All', 'Web App', 'Landing Page', 'UI'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F5F5F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#1F4D3A] uppercase mb-3">
            <span className="text-[#F5A623] font-black text-lg">—</span>
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F4D3A] tracking-tight leading-tight">
            Featured <span className="text-[#F5A623] italic font-serif font-semibold">Projects</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Real-world applications, responsive web portals, and design systems crafted with clean code and modern tooling.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] ${
                  selectedCategory === cat
                    ? 'bg-[#1F4D3A] text-white shadow-md shadow-[#1F4D3A]/20 scale-105'
                    : 'bg-white text-slate-600 hover:text-[#1F4D3A] border border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                {cat}
                {cat === 'All' && ` (${portfolioData.projects.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Screenshot Container with Category Tag */}
                <div
                  className="relative aspect-video sm:aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#1F4D3A] inline-flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </span>
                  </div>

                  {/* Category Pill Tag (Warm Orange) */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 bg-[#F5A623] text-[#1F4D3A] rounded-full text-xs font-extrabold shadow-md tracking-wide">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  {/* Title */}
                  <h3
                    onClick={() => setActiveProject(project)}
                    className="text-xl sm:text-2xl font-bold text-[#1F4D3A] mb-3 group-hover:text-[#F5A623] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-[#F5F5F5] text-slate-600 rounded-md text-xs font-medium border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-xs text-slate-400 font-medium">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Green Arrow Button linking to Live Demo & Detail Modal */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-bold text-slate-500 hover:text-[#1F4D3A] transition-colors focus:outline-none"
                >
                  View Case Study
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {/* Green button with arrow */}
                  <button
                    onClick={() => setActiveProject(project)}
                    className="w-10 h-10 rounded-full bg-[#1F4D3A] text-white hover:bg-[#16392B] flex items-center justify-center transition-all duration-200 transform group-hover:scale-105 shadow-md shadow-[#1F4D3A]/20"
                    aria-label={`Open details for ${project.title}`}
                    title="Open Details & Demo"
                  >
                    <ArrowUpRight className="w-5 h-5 text-[#F5A623]" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
