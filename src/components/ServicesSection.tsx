import React, { useState } from 'react';
import { Code2, Layout, Layers, ArrowRight } from 'lucide-react';
import { portfolioData, ServiceItem } from '../data/portfolioData';
import { ServiceModal } from './ServiceModal';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-7 h-7 text-[#F5A623]" />;
      case 'Layout':
        return <Layout className="w-7 h-7 text-[#F5A623]" />;
      case 'Layers':
        return <Layers className="w-7 h-7 text-[#F5A623]" />;
      default:
        return <Code2 className="w-7 h-7 text-[#F5A623]" />;
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F5F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Small label with orange dash + big title with orange italic phrase */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#1F4D3A] uppercase mb-3">
            <span className="text-[#F5A623] font-black text-lg">—</span>
            <span>Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F4D3A] tracking-tight leading-tight">
            Services <span className="text-[#F5A623] italic font-serif font-semibold">I Provide</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Delivering clean, modular code and intuitive web solutions for universities, startups, and forward-thinking engineering teams.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200/70 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#1F4D3A] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Number / Index */}
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1F4D3A] mb-3 group-hover:text-[#F5A623] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* "Learn more →" button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1F4D3A] group-hover:text-[#F5A623] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] rounded-md"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onContactClick={handleContactClick}
      />
    </section>
  );
};
