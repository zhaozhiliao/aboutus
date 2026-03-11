"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    focus: "Bulk Inventory & Auction Efficiency",
    region: "Central Asia",
    quote: "Guazi Auction has been a game-changer for our business. Having access to thousands of verified vehicles every month allows us to bid and secure bulk inventory quickly at highly competitive market rates. What impresses me most is the platform's efficiency and transparency. There are no surprises when the cars arrive. It is a trustworthy platform that perfectly supports our rapid expansion.",
    author: "Alexei Petrov",
    title: "Import Director, Kazakhstan Auto Group",
    badge: "VOLUME BUYER",
    avatar: "/images/avatars/businessman (1).png",
  },
  {
    focus: "Streamlined Logistics & Fulfillment",
    region: "Africa",
    quote: "Guazi's one-stop solution has completely removed this headache for our operations in Africa. From the moment we purchase a vehicle, their dedicated team handles all the bureaucratic complexities, documentation, and international shipping. We can focus entirely on local sales and growing our dealership, knowing Guazi has the entire fulfillment process under control.",
    author: "Joseph Okonkwo",
    title: "Managing Director, Lagos Premium Motors",
    badge: "LOGISTICS",
    avatar: "/images/avatars/businessman (2).png",
  },
  {
    focus: "Transparent Inspection & Risk Control",
    region: "Global",
    quote: "Their rigorous 200-point inspection process is simply the best I have seen in the industry. Before making any payment, we can browse condition reports, complete with high-definition photos and videos that highlight every single detail. We've imported dozens of cars through them, and the quality is exactly as described. This builds lasting B2B trust.",
    author: "Marcus Chen",
    title: "Procurement Manager, Global Auto Solutions",
    badge: "QUALITY",
    avatar: "/images/avatars/businessman (3).png",
  },
  {
    focus: "Team Support & After-Sales Service",
    region: "Middle East",
    quote: "As an importer, having a dedicated regional account manager who understands our specific market makes a huge difference. Whether we have a question about documentation or need a quick update on logistics, the response is immediate and highly professional. It feels less like a traditional buyer-seller transaction and much more like a true strategic partnership.",
    author: "Ahmed Al-Mansouri",
    title: "CEO, Dubai Auto Trading",
    badge: "PARTNERSHIP",
    avatar: "/images/avatars/businessman (4).png",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #009B3F 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-wider">
            <Star className="w-3 h-3 fill-current" />
            CLIENT SUCCESS STORIES
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight px-2">
            Partner Testimonials
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Trusted by leading automotive importers across the globe
          </p>
        </div>

        {/* 评价网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-primary/30 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 顶部装饰条 */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

              {/* 背景引号 */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Quote className="w-20 sm:w-32 h-20 sm:h-32 text-primary" />
              </div>

              <div className="relative space-y-4 sm:space-y-6">
                {/* 顶部标签和评分 */}
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="inline-block px-2.5 sm:px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary tracking-wider mb-2 sm:mb-3">
                      {testimonial.badge}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-tight">
                      {testimonial.focus}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {testimonial.region}
                    </p>
                  </div>
                  <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-current" />
                    ))}
                  </div>
                </div>

                {/* 引用图标 */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* 评价 */}
                <blockquote className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* 分隔线 */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-primary/30 transition-colors duration-500"></div>

                {/* 客户信息 */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300 bg-white flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {testimonial.author}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* 底部光晕 */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* 底部统计 */}
        <div className="mt-10 sm:mt-16 text-center animate-fade-in px-2" style={{ animationDelay: '400ms' }}>
          <div className="inline-flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0"></div>
            <span className="hidden sm:inline">Trusted by 100K+ dealerships worldwide</span>
            <span className="sm:hidden">100K+ dealerships · 98% satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
