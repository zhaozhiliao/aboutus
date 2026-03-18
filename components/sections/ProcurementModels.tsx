"use client";

import styles from './ProcurementModels.module.scss';

const models = [
  {
    icon: "/icons/gavel.svg",
    title: "Guazi Auction",
    description:
      "Access China's most dynamic used car auction network. Designed for volume buyers, our platform offers real-time bidding on 100k of verified vehicles monthly. Secure bulk inventory quickly and at highly competitive market rates.",
    features: [
      { icon: "/icons/trending-up.svg", text: "100K+ Monthly Listings" },
      { icon: "/icons/zap.svg", text: "Real-Time Bidding" },
      { icon: "/icons/users.svg", text: "Volume Buyer Focused" },
    ],
    badge: "HIGH VOLUME",
    theme: "dark",
  },
  {
    icon: "/icons/search.svg",
    title: "Buy it Now",
    description:
      "Looking for specific makes, models, or conditions? Leverage our direct sourcing channel. Tell us your market demands, and our procurement specialists will hand-pick and secure the exact inventory you need directly from end-users, ensuring optimal price-to-quality ratios.",
    features: [
      { icon: "/icons/target.svg", text: "Customized Selection" },
      { icon: "/icons/users.svg", text: "Dedicated Specialists" },
      { icon: "/icons/trending-up.svg", text: "Optimal Price-Quality" },
    ],
    badge: "PRECISION",
    theme: "light",
  },
];

export default function ProcurementModels() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPattern}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            FLEXIBLE MODELS
          </div>
          <h2 className={styles.title}>
            Tailored Procurement Models
          </h2>
          <div className={styles.divider}>
            <div className={`${styles.dividerLine} ${styles.left}`}></div>
            <div className={styles.dividerDot}></div>
            <div className={`${styles.dividerLine} ${styles.right}`}></div>
          </div>
          <p className={styles.subtitle}>
            Choose the procurement approach that best fits your business needs
          </p>
        </div>

        <div className={styles.grid}>
          {models.map((model, index) => (
            <div
              key={index}
              className={`${styles.card} ${model.theme === 'dark' ? styles.dark : styles.light}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {model.theme === 'dark' ? (
                <>
                  <div className={styles.cardBgPattern}></div>
                  <div className={`${styles.cardGlow} ${styles.dark}`}></div>
                </>
              ) : (
                <div className={`${styles.cardGlow} ${styles.light}`}></div>
              )}

              <div className={styles.cardTopBar}></div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${model.theme === 'dark' ? styles.dark : styles.light}`}>
                    <img src={model.icon} alt="" className={model.theme === 'dark' ? styles.iconDark : styles.iconLight} />
                  </div>
                  <div className={`${styles.cardBadge} ${model.theme === 'dark' ? styles.dark : styles.light}`}>
                    {model.badge}
                  </div>
                </div>

                <div>
                  <h3 className={`${styles.cardTitle} ${model.theme === 'dark' ? styles.dark : styles.light}`}>
                    {model.title}
                  </h3>
                  <p className={`${styles.cardDescription} ${model.theme === 'dark' ? styles.dark : styles.light}`}>
                    {model.description}
                  </p>
                </div>

                <div className={styles.features}>
                  {model.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className={`${styles.feature} ${model.theme === 'dark' ? styles.dark : styles.light}`}
                    >
                      <div className={`${styles.featureIcon} ${model.theme === 'dark' ? styles.dark : styles.light}`}>
                        <img src={feature.icon} alt="" className={model.theme === 'dark' ? styles.featureIconDark : styles.featureIconLight} />
                      </div>
                      <span className={`${styles.featureText} ${model.theme === 'dark' ? styles.dark : styles.light}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className={styles.cta}>
                  <button className={`${styles.ctaButton} ${model.theme === 'dark' ? styles.dark : styles.light}`}>
                    Learn More
                  </button>
                </div>
              </div>

              <div className={`${styles.cardBottomGlow} ${model.theme === 'dark' ? styles.dark : styles.light}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
