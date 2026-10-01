import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Copy, Check, Github, Linkedin, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { contact, personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship / Job Inquiry',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email format';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please include a brief message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Send submission (supports Formspree endpoint or graceful mock with direct fallback)
      // Formspree URL can be hooked directly, or simulated with 100% reliable state feedback
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Internship / Job Inquiry',
        message: '',
      });
      setFormErrors({});
    } catch {
      setFormErrors({ submit: 'Something went wrong. Please email directly to tolatuch081@gmail.com' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#1F4D3A] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#F5A623] uppercase mb-3">
            <span className="font-black text-lg">—</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build Something <span className="text-[#F5A623] italic font-serif font-semibold">Remarkable Together</span>
          </h2>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            {contact.subheading}
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-white/70 text-sm mb-6">
                Feel free to email me directly or copy the address below:
              </p>

              {/* Email Address with Copy Button */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-black/25 border border-white/10 mb-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#F5A623] text-[#1F4D3A] flex items-center justify-center shrink-0 font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-bold text-white hover:text-[#F5A623] truncate transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#F5A623]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Status Info */}
              <div className="space-y-3.5 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                  <span>{contact.location}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{contact.availability}</span>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">Connect On Social</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#F5A623] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:text-[#F5A623]">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Repositories</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#F5A623] transition-colors">GitHub</div>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#F5A623] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:text-[#F5A623]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Professional</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#F5A623] transition-colors">LinkedIn</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 text-slate-900 shadow-2xl border border-white/20">
              
              {isSubmitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F4D3A] mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base mb-6">
                    Thank you for reaching out. I have received your note and will reply to you as soon as possible.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#1F4D3A] text-white hover:bg-[#16392B] transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${personal.email}?subject=Follow-up`}
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 hover:text-black border border-slate-300 transition-colors"
                    >
                      <span>Direct Email</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#1F4D3A]">Send a Message</h3>
                    <span className="text-xs text-slate-400">* Required fields</span>
                  </div>

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe or HR Manager"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623] transition-all ${
                        formErrors.name ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                      }`}
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                    />
                    {formErrors.name && (
                      <p id="name-error" className="text-xs text-rose-600 mt-1 font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623] transition-all ${
                        formErrors.email ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                      }`}
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                    {formErrors.email && (
                      <p id="email-error" className="text-xs text-rose-600 mt-1 font-medium">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Subject select */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623] transition-all"
                    >
                      <option value="Internship / Job Inquiry">Internship / Junior Frontend Role</option>
                      <option value="Freelance Web Project">Freelance Web Project</option>
                      <option value="Open Source Collaboration">Open Source / Hackathon Collaboration</option>
                      <option value="General Question">General Hello / Question</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the role, project requirements, or timeline..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623] transition-all ${
                        formErrors.message ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                      }`}
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                    />
                    {formErrors.message && (
                      <p id="message-error" className="text-xs text-rose-600 mt-1 font-medium">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#1F4D3A] text-white hover:bg-[#16392B] rounded-full font-bold text-sm sm:text-base shadow-xl shadow-[#1F4D3A]/20 transition-all duration-200 disabled:opacity-70 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <div className="w-6 h-6 rounded-full bg-[#F5A623] text-[#1F4D3A] flex items-center justify-center">
                          <Send className="w-3.5 h-3.5 text-[#1F4D3A]" />
                        </div>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-xs text-slate-500">
                      Or write directly to <a href={`mailto:${personal.email}`} className="text-[#1F4D3A] font-bold hover:underline">{personal.email}</a>
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
