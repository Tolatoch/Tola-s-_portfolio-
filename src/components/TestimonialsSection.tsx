import React from 'react';
import { Star, Quote } from 'lucide-react';
import { portfolioData, TestimonialItem } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = portfolioData;

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F5F5F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#1F4D3A] uppercase mb-3">
            <span className="text-[#F5A623] font-black text-lg">—</span>
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F4D3A] tracking-tight leading-tight">
            Endorsements &amp; <span className="text-[#F5A623] italic font-serif font-semibold">Recommendations</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            What university professors, project collaborators, and community partners say about working with Tola.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item: TestimonialItem) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote mark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#F5A623]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#1F4D3A]/20" />
                </div>

                {/* Quote text */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author profile */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#1F4D3A]/10 text-xl flex items-center justify-center shrink-0 border border-[#1F4D3A]/20">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F4D3A]">{item.name}</h4>
                  <div className="text-xs text-slate-500 font-medium">{item.role}</div>
                  <div className="text-[11px] text-[#F5A623] font-semibold">{item.organization}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
