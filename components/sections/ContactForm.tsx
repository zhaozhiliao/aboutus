"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    region: "",
    targetVehicles: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* 背景网格 */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#009B3F 1px, transparent 1px), linear-gradient(90deg, #009B3F 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* 背景光晕 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-wider mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3" />
            START YOUR JOURNEY
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight mb-3 sm:mb-6 px-2">
            Ready to Scale Your Dealership?
          </h2>
          <p className="text-sm sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
            Partner with China's premier automotive ecosystem and unlock unlimited growth potential
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* 左侧：快速联系 */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Quick Contact</h3>
              
              <div className="space-y-3 sm:space-y-4">
                {/* WhatsApp 按钮 */}
                <a
                  href="https://wa.me/8613800000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-[#25D366] hover:bg-[#20BA5A] rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white/80 text-xs sm:text-sm font-medium">Instant Response</div>
                    <div className="text-white text-base sm:text-lg font-bold">WhatsApp Chat</div>
                  </div>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>

                {/* Email 按钮 */}
                <a
                  href="mailto:export@guazi.com"
                  className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white/80 text-xs sm:text-sm font-medium">Professional Inquiry</div>
                    <div className="text-white text-base sm:text-lg font-bold">Email Us</div>
                  </div>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </div>

              {/* 工作时间 */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
                <div className="flex items-center gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0"></div>
                  <span>Available 24/7 · Multilingual Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：询盘表单 */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-white placeholder-gray-500 text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-white placeholder-gray-500 text-sm sm:text-base"
                    placeholder="Company name"
                  />
                </div>

                {/* Region */}
                <div>
                  <label htmlFor="region" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">
                    Region *
                  </label>
                  <select
                    id="region"
                    name="region"
                    required
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-white text-sm sm:text-base"
                  >
                    <option value="" className="bg-gray-900">Select your region</option>
                    <option value="Central Asia" className="bg-gray-900">Central Asia</option>
                    <option value="Middle East" className="bg-gray-900">Middle East</option>
                    <option value="Africa" className="bg-gray-900">Africa</option>
                    <option value="Other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                {/* Target Vehicles */}
                <div>
                  <label htmlFor="targetVehicles" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">
                    Target Vehicles *
                  </label>
                  <textarea
                    id="targetVehicles"
                    name="targetVehicles"
                    required
                    rows={4}
                    value={formData.targetVehicles}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none text-white placeholder-gray-500 text-sm sm:text-base"
                    placeholder="Describe your target vehicles (make, model, quantity, budget...)"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30 hover:shadow-primary/50 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Submit Inquiry</span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our terms and privacy policy
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* 底部信任标识 */}
        <div className="mt-10 sm:mt-16 text-center animate-fade-in px-2" style={{ animationDelay: '400ms' }}>
          <div className="inline-flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0"></div>
            <span className="hidden sm:inline">Trusted by 100K+ dealerships · Response within 24 hours</span>
            <span className="sm:hidden">100K+ dealerships · 24h response</span>
          </div>
        </div>
      </div>
    </section>
  );
}
