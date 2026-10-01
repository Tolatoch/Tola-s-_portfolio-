import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[92vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 text-slate-700 hover:bg-white hover:text-black shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8">
          
          {/* Image Banner */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 mb-6 border border-slate-200/60 shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 bg-[#F5A623] text-[#1F4D3A] rounded-full text-xs font-bold shadow-md">
                {project.category}
              </span>
            </div>
          </div>

          {/* Title & Category */}
          <div className="mb-4">
            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#1F4D3A] tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>

          {/* Key Features / Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Architectural Highlights</h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#1F4D3A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#F5F5F5] text-slate-700 rounded-full text-xs font-semibold border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-slate-700 hover:text-black border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold bg-[#1F4D3A] text-white hover:bg-[#16392B] shadow-md transition-all"
            >
              <span>Live Preview</span>
              <ExternalLink className="w-4 h-4 text-[#F5A623]" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
