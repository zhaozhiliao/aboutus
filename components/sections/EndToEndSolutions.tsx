"use client";

import { DollarSign, FileCheck, Truck, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: DollarSign,
    number: "01",
    title: "Direct Sourcing",
    subtitle: "Cost Efficiency",
    description:
      "With an influx of fresh listings daily, 100% of our inventory is sourced directly from individual owners. By bypassing domestic middlemen, we maximize your profit margins from the very first step.",
    highlight: "Zero Intermediary Markups",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Transparent Inspection",
    subtitle: "Risk Mitigation",
    description:
      "We treat vehicle condition as our core product. Our in-house experts conduct a meticulous 200+ point inspection. Comprehensive condition reports, accompanied by high-definition videos and photos, ensure absolute transparency—no hidden flaws, no surprises.",
    highlight: "200+ Point Inspection",
  },
  {
    icon: Truck,
    number: "03",
    title: "Hassle-Free Export & Logistics",
    subtitle: "Ease of Doing Business",
    description:
      "From export clearance and tax refunds to international freight forwarding, our dedicated team handles all bureaucratic complexities. You focus on sales; we handle the supply chain.",
    highlight: "Full-Service Logistics",
  },
];

export default function EndToEndSolutions() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* 动态背景网格 */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#009B3F 1px, transparent 1px), linear-gradient(90deg, #009B3F 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* 背景光晕 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            COMPLETE SOLUTION
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            End-to-End Solutions
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            
Guazi eliminates the friction of cross-border trade by offering a comprehensive, one-stop solution from vehicle sourcing to port delivery.
          </p>
        </div>

        {/* 解决方案卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-gray-800 hover:border-primary/50 transition-all duration-500 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* 顶部装饰光带 */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

              {/* 背景渐变效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 编号 - 大号水印 */}
              <div className="absolute top-4 right-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                {solution.number}
              </div>

              <div className="relative space-y-6">
                {/* 图标和编号 */}
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-primary/20">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-primary/60 text-sm font-bold tracking-wider">
                    STEP {solution.number}
                  </div>
                </div>

                {/* 标题和副标题 */}
                <div className="space-y-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-primary-light transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                    <span className="text-xs font-semibold text-primary tracking-wide">
                      {solution.subtitle}
                    </span>
                  </div>
                </div>

                {/* 描述 */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {solution.description}
                </p>

                {/* 高亮特性 */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-800 group-hover:border-primary/30 transition-colors duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm font-semibold text-primary-light">
                    {solution.highlight}
                  </span>
                </div>
              </div>

              {/* 底部光晕 */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* 底部 CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <p className="text-gray-500 text-sm mb-6">
            Ready to streamline your automotive import business?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 group"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
