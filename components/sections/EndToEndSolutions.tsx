"use client";

import styles from './EndToEndSolutions.module.scss';

const solutions = [
  {
    icon: "/icons/dollar-sign.svg",
    number: "01",
    title: "Direct Sourcing",
    description:
      "With an influx of fresh listings daily, 100% of our inventory is sourced directly from individual owners. By bypassing domestic middlemen, we maximize your profit margins from the very first step.",
    highlight: "Zero Intermediary Markups",
  },
  {
    icon: "/icons/file-check.svg",
    number: "02",
    title: "Transparent Inspection",
    description:
      "We treat vehicle condition as our core product. Our in-house experts conduct a meticulous 200+ point inspection. Comprehensive condition reports, accompanied by high-definition videos and photos, ensure absolute transparency—no hidden flaws, no surprises.",
    highlight: "200+ Point Inspection",
  },
  {
    icon: "/icons/truck.svg",
    number: "03",
    title: "Hassle-Free Export & Logistics",
    description:
      "From export clearance and tax refunds to international freight forwarding, our dedicated team handles all bureaucratic complexities. You focus on sales; we handle the supply chain.",
    highlight: "Full-Service Logistics",
  },
];

export default function EndToEndSolutions() {
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
            COMPLETE SOLUTION
          </div>
          <h2 className={styles.title}>
            End-to-End Solutions
          </h2>
          <div className={styles.divider}>
            <div className={`${styles.dividerLine} ${styles.left}`}></div>
            <div className={styles.dividerDot}></div>
            <div className={`${styles.dividerLine} ${styles.right}`}></div>
          </div>
          <p className={styles.subtitle}>
            Guazi eliminates the friction of cross-border trade by offering a comprehensive, one-stop solution from vehicle sourcing to port delivery.
          </p>
        </div>

        <div className={styles.grid}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={styles.topBar}></div>
              <div className={styles.bgGradient}></div>
              <div className={styles.watermark}>{solution.number}</div>

              <div className={styles.content}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <img src={solution.icon} alt="" className={styles.icon} />
                  </div>
                  <div className={styles.stepLabel}>
                    STEP {solution.number}
                  </div>
                </div>

                <div className={styles.titleSection}>
                  <h3 className={styles.cardTitle}>
                    {solution.title}
                  </h3>
                </div>

                <p className={styles.description}>
                  {solution.description}
                </p>

                <div className={styles.highlight}>
                  <div className={styles.highlightDot}></div>
                  <span className={styles.highlightText}>
                    {solution.highlight}
                  </span>
                </div>
              </div>

              <div className={styles.bottomGlow}></div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Ready to streamline your automotive import business?
          </p>
          <a href="#contact" className={styles.ctaButton}>
            <span>Get Started Today</span>
            <img src="/icons/arrow-right.svg" alt="" className={styles.ctaIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}
