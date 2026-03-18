"use client";

import Image from "next/image";
import styles from './FinancialBacking.module.scss';

const investors = [
  { 
    name: "SoftBank Vision Fund", 
    logo: "/images/investors/The SoftBank Group_id5gGK-gm2_1.png",
  },
  { 
    name: "Sequoia Capital", 
    logo: "/images/investors/Sequoia Capital_idQUGorQa4_1.png",
  },
  { 
    name: "IDG Capital", 
    logo: "/images/investors/IDG_LOGO.svg.png",
  },
  { 
    name: "Tencent", 
    logo: "/images/investors/Tencent_Logo_1.png",
  },
  { 
    name: "HIKE Capital", 
    logo: "/images/investors/HIKE Capital_id0icKEsQa_0.png",
  },
  { 
    name: "Other Leading Investors", 
    logo: "/images/investors/id8cjj5tTl_1772437424047.png",
  },
];

export default function FinancialBacking() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPattern}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            $4 BILLION FUNDING
          </div>
          <h2 className={styles.title}>
            World-Class Investors
          </h2>
          <div className={styles.divider}>
            <div className={`${styles.dividerLine} ${styles.left}`}></div>
            <div className={styles.dividerDot}></div>
            <div className={`${styles.dividerLine} ${styles.right}`}></div>
          </div>
          <p className={styles.subtitle}>
            Backed by the world's most prestigious venture capital firms and strategic investors
          </p>
        </div>

        <div className={styles.logosGrid}>
          {investors.map((investor, index) => (
            <div
              key={index}
              className={styles.logoCard}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.logoImage}>
                <Image
                  src={investor.logo}
                  alt={investor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryTitle}>$4B+ Total Funding</div>
          <p className={styles.summaryText}>
            Empowered by <strong>$4 Billion in Top-Tier Capital</strong>, Guazi is your highly stable and risk-free partner in global automotive trade.
          </p>
        </div>
      </div>
    </section>
  );
}
