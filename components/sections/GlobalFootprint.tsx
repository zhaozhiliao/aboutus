"use client";

import { MapPin, Globe2, Clock, TrendingUp } from "lucide-react";

const regions = [
  {
    name: "Central Asia",
    countries: "Kazakhstan, Uzbekistan, Kyrgyzstan",
    vehicles: "15K+",
    icon: MapPin,
  },
  {
    name: "Middle East",
    countries: "UAE, Saudi Arabia, Jordan",
    vehicles: "12K+",
    icon: MapPin,
  },
  {
    name: "Africa",
    countries: "Nigeria, Kenya, Ghana",
    vehicles: "8K+",
    icon: MapPin,
  },
];

const highlights = [
  {
    icon: Globe2,
    number: "50+",
    label: "Countries Served",
    description: "Proven track record worldwide",
  },
  {
    icon: TrendingUp,
    number: "35K+",
    label: "Annual Exports",
    description: "Growing year over year",
  },
  {
    icon: Clock,
    number: "30-45",
    label: "Days Delivery",
    description: "Optimized fulfillment time",
  },
];

export default function GlobalFootprint() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* 动态背景网格 */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#009B3F 1px, transparent 1px), linear-gradient(90deg, #009B3F 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* 背景光晕 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-wider">
            <Globe2 className="w-3 h-3" />
            WORLDWIDE PRESENCE
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Global Footprint
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are aggressively expanding our footprint to meet the surging demand for quality vehicles in key emerging markets.
          </p>
        </div>

        {/* 关键数据 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md rounded-2xl p-6 border border-gray-800 hover:border-primary/50 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 顶部装饰条 */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300 origin-left">
                    {highlight.number}
                  </div>
                  <div className="text-xs font-semibold text-gray-400 group-hover:text-gray-300 transition-colors">
                    {highlight.label}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 group-hover:text-gray-400 transition-colors">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* 战略区域 */}
        <div className="space-y-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Strategic Focus Regions
            </h3>
            <p className="text-gray-400">
              Integrated supply chains serving key markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-800 hover:border-primary/50 transition-all duration-500 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {/* 背景装饰 */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* 区域图标 */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <region.icon className="w-24 h-24 text-primary" />
                </div>

                <div className="relative space-y-4">
                  {/* 区域名称 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <region.icon className="w-5 h-5 text-primary-light" />
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-primary-light transition-colors duration-300">
                      {region.name}
                    </h4>
                  </div>

                  {/* 国家列表 */}
                  <p className="text-sm text-gray-400 leading-relaxed pl-13">
                    {region.countries}
                  </p>

                  {/* 分隔线 */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent group-hover:via-primary/30 transition-colors duration-500"></div>

                  {/* 车辆数据 */}
                  <div className="flex items-center justify-between pl-13">
                    <span className="text-xs text-gray-500 font-medium">Annual Vehicles</span>
                    <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                      {region.vehicles}
                    </span>
                  </div>
                </div>

                {/* 底部光晕 */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
