import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationExperienceSection } from './components/EducationExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-900 text-slate-100' : 'bg-[#F5F5F5] text-slate-800'} transition-colors duration-300 font-sans`}>
      {/* 1. Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero darkMode={darkMode} />

        {/* 3. Marquee Strip */}
        <MarqueeStrip />

        {/* 4. Services Section */}
        <ServicesSection />

        {/* 5. About Me Section */}
        <AboutSection />

        {/* 6. Skills / Tools Section */}
        <SkillsSection />

        {/* 7. Projects Section */}
        <ProjectsSection />

        {/* 8. Education & Experience Timeline */}
        <EducationExperienceSection />

        {/* 9. Testimonials Section */}
        <TestimonialsSection />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
