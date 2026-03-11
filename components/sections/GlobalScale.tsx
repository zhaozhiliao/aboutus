"use client";

const stats = [
  {
    number: "3M+",
    label: "Vehicles Listed Annually",
    category: "INVENTORY",
  },
  {
    number: "300K+",
    label: "Vehicles Transacted Annually",
    category: "TRANSACTIONS",
  },
  {
    number: "100%",
    label: "Direct from Individual Owners",
    category: "AUTHENTICITY",
  },
  {
    number: "100K+",
    label: "Dealerships Served Globally",
    category: "PARTNERS",
  },
  {
    number: "200+",
    label: "Points of Rigorous Inspection",
    category: "QUALITY",
  },
  {
    number: "4,000+",
    label: "Global Shipping Routes",
    category: "LOGISTICS",
  },
  {
    number: "10K+",
    label: "Staff Around the World",
    category: "TEAM",
  },
];

export default function GlobalScale() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* 动态背景网格 */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#009B3F 1px, transparent 1px), linear-gradient(90deg, #009B3F 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* 背景光晕 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            METRICS
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Global Scale
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* 数据网格 - 增强风格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px] bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 p-[2px] rounded-3xl backdrop-blur-sm shadow-2xl shadow-primary/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md p-8 lg:p-10 hover:from-black/80 hover:to-black/60 transition-all duration-500 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* 悬停时的背景网格效果 */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{
                backgroundImage: 'linear-gradient(#009B3F 1px, transparent 1px), linear-gradient(90deg, #009B3F 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>

              {/* 顶部分类标签 */}
              <div className="absolute top-3 left-3 text-[10px] font-bold text-primary/40 tracking-widest group-hover:text-primary/60 transition-colors duration-300">
                {stat.category}
              </div>

              {/* 左侧发光边框 */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/0 via-primary to-primary/0 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top shadow-lg shadow-primary/50"></div>
              
              {/* 右下角装饰 */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative text-center space-y-4 pt-4">
                {/* 超大数字 - 带发光效果 */}
                <div className="relative">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_20px_rgba(0,155,63,0.3)] group-hover:drop-shadow-[0_0_30px_rgba(0,155,63,0.5)]">
                    {stat.number}
                  </div>
                  {/* 数字下方的微光 */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary/20 blur-sm group-hover:w-32 group-hover:bg-primary/40 transition-all duration-500"></div>
                </div>
                
                {/* 标签 */}
                <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300 leading-tight font-medium px-2">
                  {stat.label}
                </p>
              </div>

              {/* 悬停时的光晕效果 */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
