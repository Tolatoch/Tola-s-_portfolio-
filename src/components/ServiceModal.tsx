import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/portfolioData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onContactClick }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1F4D3A] text-[#F5A623] flex items-center justify-center font-bold text-xl shadow-md">
            ✦
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-[#F5A623]">Service Overview</div>
            <h3 id="service-modal-title" className="text-2xl font-bold text-[#1F4D3A]">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Detailed features */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Focus Areas</h4>
          <ul className="space-y-2.5">
            {service.detailedFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#1F4D3A] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables */}
        <div className="mb-8 p-4 rounded-2xl bg-[#F5F5F5] border border-slate-200/60">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Standard Deliverables</h4>
          <div className="flex flex-wrap gap-2">
            {service.deliverables.map((deliv, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-[#1F4D3A] border border-slate-200/80 shadow-xs"
              >
                {deliv}
              </span>
            ))}
          </div>
        </div>

        {/* Action button */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1F4D3A] text-white hover:bg-[#16392B] rounded-full text-sm font-bold shadow-md transition-all"
          >
            <span>Inquire About This</span>
            <ArrowRight className="w-4 h-4 text-[#F5A623]" />
          </button>
        </div>
      </div>
    </div>
  );
};
