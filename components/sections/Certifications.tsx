"use client";

import { Award, Shield, CheckCircle } from "lucide-react";
import Image from "next/image";

const certifications = [
  { 
    name: "ISO 9001 Quality Management", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Export License", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Quality Certification", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "International Standards Compliance", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Customs Clearance Authorization", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Vehicle Inspection Certificate", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Business License", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Tax Registration Certificate", 
    image: "/images/certs/certificate.png"
  },
];

const highlights = [
  {
    icon: Shield,
    title: "Fully Compliant",
    description: "International export standards"
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description: "Quality control protocols"
  },
  {
    icon: CheckCircle,
    title: "Verified Operations",
    description: "Transparent processes"
  },
];

export default function Certifications() {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* 背景网格 */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#009B3F 1px, transparent 1px), linear-gradient(90deg, #009B3F 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题区域 - 紧凑 */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-wider">
            <Shield className="w-3 h-3" />
            CERTIFIED & COMPLIANT
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Certifications & Compliance
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Certified excellence. Fully compliant with international export standards
          </p>
        </div>

        {/* 亮点卡片 - 紧凑 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-black/60 to-black/40 rounded-xl p-4 border border-gray-800 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <highlight.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white">{highlight.title}</h3>
                  <p className="text-xs text-gray-400">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 证书展示 - 横向滚动 */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-primary/40 transition-all duration-300 flex-shrink-0 w-48 snap-start"
              >
                {/* 证书图片 */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5 border border-white/10">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* 滚动提示 */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">← Scroll to view all certifications →</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
