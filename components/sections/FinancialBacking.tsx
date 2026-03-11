"use client";

import Image from "next/image";

const investors = [
  { 
    name: "SoftBank Vision Fund", 
    logo: "/images/investors/The SoftBank Group_id5gGK-gm2_1.png",
  },
  { 
    name: "Sequoia Capital", 
    logo: "/images/investors/Sequoia Capital_idQUGorQa4_1.png",
  },
  { 
    name: "IDG Capital", 
    logo: "/images/investors/IDG_LOGO.svg.png",
  },
  { 
    name: "Tencent", 
    logo: "/images/investors/Tencent_Logo_1.png",
  },
  { 
    name: "HIKE Capital", 
    logo: "/images/investors/HIKE Capital_id0icKEsQa_0.png",
  },
  { 
    name: "Other Leading Investors", 
    logo: "/images/investors/id8cjj5tTl_1772437424047.png",
  },
];

export default function FinancialBacking() {
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
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
            </svg>
            $4 BILLION FUNDING
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            World-Class Investors
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Backed by the world's most prestigious venture capital firms and strategic investors
          </p>
        </div>

        {/* 投资方网格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {investors.map((investor, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 顶部装饰条 */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* 背景光晕 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative space-y-6">
                {/* Logo 容器 */}
                <div className="h-24 flex items-center justify-center">
                  <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={investor.logo}
                      alt={investor.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* 投资方名称 */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">
                    {investor.name}
                  </p>
                </div>
              </div>

              {/* 右下角装饰 */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* 底部总结 - 重新设计 */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-10 lg:p-12 border border-gray-800 overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(#009B3F 1px, transparent 1px), linear-gradient(90deg, #009B3F 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
            
            {/* 背景光晕 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* 左侧：金额展示 */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-wider mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  TOTAL FUNDING RAISED
                </div>
                <div className="text-6xl lg:text-7xl font-bold text-white mb-4">
                  $4B+
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-dark rounded-full mx-auto lg:mx-0"></div>
              </div>

              {/* 右侧：描述文字 */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  Empowered by <span className="text-primary-light font-bold">$4 Billion in Top-Tier Capital</span>, Guazi is your highly stable and risk-free partner in global automotive trade.
                </p>
                
                {/* 底部标签 */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6">
                  <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">
                    ✓ Financial Stability
                  </div>
                  <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">
                    ✓ Risk-Free Partnership
                  </div>
                  <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">
                    ✓ Global Trust
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
