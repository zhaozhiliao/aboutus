"use client";

import { Mail, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";

const teams = [
  {
    region: "Central Asia",
    members: [
      {
        name: "Birzan",
        role: "Regional Manager",
        email: "birzan@guazi.com",
        whatsapp: "+86 138 0000 0001",
        avatar: "/images/team/1.jpeg",
      },
      {
        name: "Shanshan Zhao",
        role: "Account Executive",
        email: "shanshan.zhao@guazi.com",
        whatsapp: "+86 138 0000 0002",
        avatar: "/images/team/2.jpeg",
      },
      {
        name: "Zhoufan Wang",
        role: "Logistics Coordinator",
        email: "zhoufan.wang@guazi.com",
        whatsapp: "+86 138 0000 0003",
        avatar: "/images/team/3.jpeg",
      },
    ],
  },
  {
    region: "Africa",
    members: [
      {
        name: "Guanglin Yang",
        role: "Regional Manager",
        email: "guanglin.yang@guazi.com",
        whatsapp: "+86 138 0000 0004",
        avatar: "/images/team/4.jpeg",
      },
      {
        name: "Lianlong Shan",
        role: "Account Executive",
        email: "lianlong.shan@guazi.com",
        whatsapp: "+86 138 0000 0005",
        avatar: "/images/team/1.jpeg",
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* 背景网格 */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#009B3F 1px, transparent 1px), linear-gradient(90deg, #009B3F 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* 背景光晕 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-wider">
            <MapPin className="w-3 h-3" />
            ON-GROUND SUPPORT
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Meet Our Regional Experts
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Multilingual cross-border trade specialists supporting your procurement needs 24/7
          </p>
        </div>

        {/* 按区域分组的团队 */}
        <div className="space-y-16">
          {teams.map((team, teamIndex) => (
            <div
              key={teamIndex}
              className="animate-fade-in"
              style={{ animationDelay: `${teamIndex * 200}ms` }}
            >
              {/* 区域标题 */}
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {team.region}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4"></div>
              </div>

              {/* 团队成员卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="group relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                    style={{ animationDelay: `${(teamIndex * 200) + (memberIndex * 100)}ms` }}
                  >
                    {/* 顶部装饰条 */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                    {/* 背景装饰 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative space-y-6">
                      {/* 头像 */}
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white group-hover:text-primary-light transition-colors duration-300">
                            {member.name}
                          </h4>
                          <p className="text-sm text-gray-400">{member.role}</p>
                        </div>
                      </div>

                      {/* 分隔线 */}
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent group-hover:via-primary/30 transition-colors duration-500"></div>

                      {/* 联系方式 */}
                      <div className="space-y-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/link"
                        >
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/link:bg-primary/30 transition-colors">
                            <Mail className="w-4 h-4 text-primary-light" />
                          </div>
                          <span className="text-sm text-gray-300 group-hover/link:text-white transition-colors truncate">
                            {member.email}
                          </span>
                        </a>

                        <a
                          href={`https://wa.me/${member.whatsapp.replace(/\s/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/link"
                        >
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/link:bg-primary/30 transition-colors">
                            <MessageCircle className="w-4 h-4 text-primary-light" />
                          </div>
                          <span className="text-sm text-gray-300 group-hover/link:text-white transition-colors">
                            {member.whatsapp}
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* 底部光晕 */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 底部提示 */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            <span>Available 24/7 · Multilingual support · Direct communication</span>
          </div>
        </div>
      </div>
    </section>
  );
}
