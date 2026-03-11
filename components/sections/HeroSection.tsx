"use client";

export default function HeroSection() {

  return (
    <section className="relative w-full overflow-hidden">
      {/* 头部展示区域 - 使用固定背景图 */}
      <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* 背景图片 */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000")',
          }}
        />
        
        {/* 多层渐变叠加 - 创造深度 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-primary/15" />
        
        {/* 装饰性网格 */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#009B3F 1.5px, transparent 1.5px), linear-gradient(90deg, #009B3F 1.5px, transparent 1.5px)',
          backgroundSize: '60px 60px'
        }} />
        
        {/* 动态光晕效果 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

        {/* 主要内容 - 突出重点 */}
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto w-full space-y-10 sm:space-y-16">
            
            {/* 核心价值主张 - 居中突出 */}
            <div className="text-center space-y-6 sm:space-y-8 animate-slide-up">
              {/* 标签 */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-full text-primary-light text-xs sm:text-sm font-semibold shadow-lg shadow-primary/20">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-primary-light"></span>
                </span>
                <span className="hidden sm:inline">Since 2015 · Trusted by Millions Worldwide</span>
                <span className="sm:hidden">Since 2015 · Trusted Worldwide</span>
              </div>

              {/* 主标题 */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight drop-shadow-2xl px-2">
                China's Premier
                <span className="block mt-2 sm:mt-4 bg-gradient-to-r from-primary-light via-white to-primary-light bg-clip-text text-transparent">
                  Automotive Trading Platform
                </span>
              </h1>

              {/* 核心使命 - 超大突出 */}
              <div className="max-w-4xl mx-auto px-2">
                <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/95 leading-relaxed">
                  Empowering International Dealerships
                  <span className="block mt-2 sm:mt-3 text-primary-light">
                    with China's Vast Automotive Inventory
                  </span>
                </p>
              </div>

              {/* 关键数据 - 大号展示 */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary-light mb-1 sm:mb-2 drop-shadow-lg">$4B+</div>
                  <div className="text-white/90 text-xs sm:text-base md:text-lg font-semibold">Total Funding</div>
                </div>
                <div className="hidden sm:block w-px h-16 sm:h-20 bg-primary/40"></div>
                <div className="text-center">
                  <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary-light mb-1 sm:mb-2 drop-shadow-lg">800K+</div>
                  <div className="text-white/90 text-xs sm:text-base md:text-lg font-semibold">Daily Active Users</div>
                </div>
                <div className="hidden sm:block w-px h-16 sm:h-20 bg-primary/40"></div>
                <div className="text-center">
                  <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary-light mb-1 sm:mb-2 drop-shadow-lg">50+</div>
                  <div className="text-white/90 text-xs sm:text-base md:text-lg font-semibold">Countries Served</div>
                </div>
              </div>
            </div>

            {/* 详细信息 - 三栏卡片 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 animate-slide-up px-2" style={{ animationDelay: '0.2s' }}>
              {/* 卡片1：成立背景 */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-primary/40 transition-all duration-300">
                <div className="text-primary-light text-3xl sm:text-4xl font-bold mb-2 sm:mb-3">2015</div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Founded</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Evolved into China's premier automotive trading platform, transforming the used car ecosystem
                </p>
              </div>

              {/* 卡片2：投资背景 */}
              <div className="bg-gradient-to-br from-primary/20 to-primary-dark/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/30 hover:border-primary/50 transition-all duration-300">
                <div className="text-primary-light text-3xl sm:text-4xl font-bold mb-2 sm:mb-3">💎</div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">World-Class Investors</h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  SoftBank Vision Fund, Sequoia Capital, IDG Capital, Tencent
                </p>
              </div>

              {/* 卡片3：全球愿景 */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-primary/40 transition-all duration-300 sm:col-span-2 md:col-span-1">
                <div className="text-primary-light text-3xl sm:text-4xl font-bold mb-2 sm:mb-3">🌍</div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Global Vision</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Seamless, reliable access to China's vast automotive inventory for international markets
                </p>
              </div>
            </div>

            {/* CTA 按钮组 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 animate-slide-up px-2" style={{ animationDelay: '0.3s' }}>
              <a
                href="#contact"
                className="group relative px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-primary to-primary-dark text-white text-base sm:text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/60 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative">Start Partnership</span>
                <svg className="relative w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#solutions"
                className="px-8 sm:px-12 py-4 sm:py-6 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white text-base sm:text-lg font-bold rounded-xl border-2 border-white/30 hover:border-white/60 transition-all duration-300 hover:scale-105 text-center"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
