"use client";

import styles from './GlobalScale.module.scss';

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
    <section className={styles.section}>
      <div className={styles.gridBg}></div>

      <div className={styles.glowContainer}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            METRICS
          </div>
          <h2 className={styles.title}>
            Global Scale
          </h2>
          <div className={styles.divider}>
            <div className={`${styles.dividerLine} ${styles.left}`}></div>
            <div className={styles.dividerDot}></div>
            <div className={`${styles.dividerLine} ${styles.right}`}></div>
          </div>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={styles.statCard}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={styles.statGridPattern}></div>
              <div className={styles.statCategory}>{stat.category}</div>
              <div className={styles.statBorder}></div>
              <div className={styles.statCorner}></div>

              <div className={styles.statContent}>
                <div className={styles.statNumberWrapper}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statGlow}></div>
                </div>
                
                <p className={styles.statLabel}>{stat.label}</p>
              </div>

              <div className={styles.statHoverGlow}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
