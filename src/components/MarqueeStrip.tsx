import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const MarqueeStrip: React.FC = () => {
  const items = portfolioData.marqueeItems;
  // Duplicate array to ensure seamless infinite looping
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative py-8 overflow-hidden select-none">
      {/* Tilted orange ribbon */}
      <div className="bg-[#F5A623] text-[#1F4D3A] py-3.5 sm:py-4 -rotate-1.5 shadow-md shadow-[#F5A623]/20 flex items-center border-y-2 border-[#1F4D3A]/10">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="inline-flex items-center gap-6 text-sm sm:text-base font-extrabold tracking-wider uppercase">
              <span>{item}</span>
              <span className="text-[#1F4D3A] text-lg font-black" aria-hidden="true">✳</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
