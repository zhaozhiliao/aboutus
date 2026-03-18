"use client";

import styles from './HeroSection.module.scss';

export default function HeroSection() {

  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <div 
          className={styles.bgImage}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000")',
          }}
        />
        
        <div className={styles.gradientOverlay1} />
        <div className={styles.gradientOverlay2} />
        
        <div className={styles.gridPattern} />
        
        <div className={styles.glow1} />
        <div className={styles.glow2} />

        <div className={styles.mainContent}>
          <div className={styles.container}>
            
            <div className={styles.valueProposition}>
              <div className={styles.badge}>
                <span className={styles.badgeTextFull}>Since 2015 · Trusted by Millions Worldwide</span>
                <span className={styles.badgeTextShort}>Since 2015 · Trusted Worldwide</span>
              </div>

              <h1 className={styles.title}>
                China's Premier
                <span className={styles.titleGradient}>
                  Automotive Trading Platform
                </span>
              </h1>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statValue}>$4B+</div>
                  <div className={styles.statLabel}>Total Funding</div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>800K+</div>
                  <div className={styles.statLabel}>Daily Active Users</div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>50+</div>
                  <div className={styles.statLabel}>Countries Served</div>
                </div>
              </div>

              <div className={styles.intro}>
                <div className={styles.introCard}>
                  <p>
                    Founded in 2015, Guazi has evolved into China's premier automotive trading platform. By connecting millions of buyers and sellers, we have fundamentally transformed the used car ecosystem in China. Today, over 800,000 users engage with our platform daily to buy, sell, and trade vehicles.
                  </p>
                  <p>
                    Backed by approximately $4 billion in funding from world-class investors—including <span className={styles.highlight}>SoftBank Vision Fund</span>, <span className={styles.highlight}>Sequoia Capital</span>, <span className={styles.highlight}>IDG Capital</span>, and <span className={styles.highlight}>Tencent</span>—and recognized by leading tier-one media, Guazi brings unparalleled scale and reliability to the global market.
                  </p>
                  <div className={styles.introDivider}>
                    <h3 className={styles.missionTitle}>Our Mission</h3>
                    <p>
                      While our roots began with enabling every family to own a better car, our global vision is to empower international dealerships and importers. We provide seamless, reliable, and cost-effective access to China's vast automotive inventory, driving your business success in local markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardYear}>2015</div>
                <h3 className={styles.cardTitle}>Founded</h3>
                <p className={styles.cardText}>
                  Evolved into China's premier automotive trading platform, transforming the used car ecosystem
                </p>
              </div>

              <div className={`${styles.card} ${styles.cardPrimary}`}>
                <h3 className={styles.cardTitle}>World-Class Investors</h3>
                <p className={`${styles.cardText} ${styles.cardTextBright}`}>
                  SoftBank Vision Fund, Sequoia Capital, IDG Capital, Tencent
                </p>
              </div>

              <div className={`${styles.card} ${styles.cardFull}`}>
                <h3 className={styles.cardTitle}>Global Vision</h3>
                <p className={styles.cardText}>
                  Seamless, reliable access to China's vast automotive inventory for international markets
                </p>
              </div>
            </div>

            <div className={styles.cta}>
              <a href="#contact" className={styles.ctaPrimary}>
                <span className={styles.ctaShine}></span>
                <span className={styles.ctaText}>Start Partnership</span>
                <svg className={styles.ctaIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#solutions" className={styles.ctaSecondary}>
                Explore Solutions
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
