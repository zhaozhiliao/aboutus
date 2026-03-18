"use client";

import styles from './GlobalFootprint.module.scss';

const regions = [
  {
    name: "Central Asia",
    countries: "Kazakhstan, Uzbekistan, Kyrgyzstan",
    vehicles: "15K+",
  },
  {
    name: "Middle East",
    countries: "UAE, Saudi Arabia, Jordan",
    vehicles: "12K+",
  },
  {
    name: "Africa",
    countries: "Nigeria, Kenya, Ghana",
    vehicles: "8K+",
  },
];

const highlights = [
  {
    number: "50+",
    label: "Countries Served",
  },
  {
    number: "35K+",
    label: "Annual Exports",
  },
  {
    number: "30-45",
    label: "Days Delivery",
  },
];

export default function GlobalFootprint() {
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
            WORLDWIDE PRESENCE
          </div>
          <h2 className={styles.title}>
            Global Footprint
          </h2>
          <div className={styles.divider}>
            <div className={`${styles.dividerLine} ${styles.left}`}></div>
            <div className={styles.dividerDot}></div>
            <div className={`${styles.dividerLine} ${styles.right}`}></div>
          </div>
          <p className={styles.subtitle}>
            We are aggressively expanding our footprint to meet the surging demand for quality vehicles in key emerging markets.
          </p>
        </div>

        <div className={styles.highlightsGrid}>
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={styles.highlightCard}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.highlightNumber}>{highlight.number}</div>
              <div className={styles.highlightLabel}>{highlight.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.regionsGrid}>
          {regions.map((region, index) => (
            <div
              key={index}
              className={styles.regionCard}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={styles.regionName}>{region.name}</div>
              <div className={styles.regionCountries}>{region.countries}</div>
              <div className={styles.vehiclesSection}>
                <div className={styles.regionVehicles}>{region.vehicles}</div>
                <div className={styles.vehiclesLabel}>Annual Volume</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
