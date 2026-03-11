"use client";

import { Gavel, Search, TrendingUp, Users, Zap, Target } from "lucide-react";

const models = [
  {
    icon: Gavel,
    title: "Guazi Auction",
    description:
      "Access China's most dynamic used car auction network. Designed for volume buyers, our platform offers real-time bidding on 100k of verified vehicles monthly. Secure bulk inventory quickly and at highly competitive market rates.",
    features: [
      { icon: TrendingUp, text: "100K+ Monthly Listings" },
      { icon: Zap, text: "Real-Time Bidding" },
      { icon: Users, text: "Volume Buyer Focused" },
    ],
    badge: "HIGH VOLUME",
    theme: "dark",
  },
  {
    icon: Search,
    title: "Direct Sourcing",
    description:
      "Looking for specific makes, models, or conditions? Leverage our direct sourcing channel. Tell us your market demands, and our procurement specialists will hand-pick and secure the exact inventory you need directly from end-users, ensuring optimal price-to-quality ratios.",
    features: [
      { icon: Target, text: "Customized Selection" },
      { icon: Users, text: "Dedicated Specialists" },
      { icon: TrendingUp, text: "Optimal Price-Quality" },
    ],
    badge: "PRECISION",
    theme: "light",
  },
];

export default function ProcurementModels() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #009B3F 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-wider">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
            </svg>
            FLEXIBLE MODELS
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Tailored Procurement Models
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the procurement approach that best fits your business needs
          </p>
        </div>

        {/* 双卡片对比布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] animate-fade-in ${
                model.theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
                  : 'bg-white border-2 border-gray-200 hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* 背景装饰 */}
              {model.theme === 'dark' ? (
                <>
                  <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(#009B3F 1px, transparent 1px), linear-gradient(90deg, #009B3F 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                </>
              ) : (
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              )}

              {/* 顶部装饰条 */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

              <div className="relative p-10 lg:p-12 space-y-8">
                {/* 顶部：图标和标签 */}
                <div className="flex items-start justify-between">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                    model.theme === 'dark' 
                      ? 'bg-gradient-to-br from-primary to-primary-dark' 
                      : 'bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20'
                  }`}>
                    <model.icon className={`w-10 h-10 ${model.theme === 'dark' ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                    model.theme === 'dark' 
                      ? 'bg-primary/20 text-primary-light border border-primary/30' 
                      : 'bg-primary/10 text-primary border border-primary/20'
                  }`}>
                    {model.badge}
                  </div>
                </div>

                {/* 标题 */}
                <div>
                  <h3 className={`text-3xl lg:text-4xl font-bold mb-4 ${
                    model.theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {model.title}
                  </h3>
                  <p className={`text-base leading-relaxed ${
                    model.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {model.description}
                  </p>
                </div>

                {/* 特性列表 */}
                <div className="space-y-4 pt-4">
                  {model.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                        model.theme === 'dark' 
                          ? 'bg-white/5 hover:bg-white/10' 
                          : 'bg-gray-50 hover:bg-primary/5'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        model.theme === 'dark' 
                          ? 'bg-primary/20' 
                          : 'bg-primary/10'
                      }`}>
                        <feature.icon className={`w-4 h-4 ${
                          model.theme === 'dark' ? 'text-primary-light' : 'text-primary'
                        }`} />
                      </div>
                      <span className={`text-sm font-medium ${
                        model.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 底部 CTA */}
                <div className="pt-4">
                  <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 ${
                    model.theme === 'dark' 
                      ? 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30' 
                      : 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-xl hover:shadow-primary/30'
                  }`}>
                    Learn More
                  </button>
                </div>
              </div>

              {/* 底部光晕 */}
              <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                model.theme === 'dark' ? 'bg-primary/30' : 'bg-primary/20'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
