"use client";

import Image from "next/image";
import styles from './Certifications.module.scss';

const certifications = [
  { 
    name: "ISO 9001 Quality Management", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Export License", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Quality Certification", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "International Standards Compliance", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Customs Clearance Authorization", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Vehicle Inspection Certificate", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Business License", 
    image: "/images/certs/certificate.png"
  },
  { 
    name: "Tax Registration Certificate", 
    image: "/images/certs/certificate.png"
  },
];

const highlights = [
  {
    icon: "/icons/shield.svg",
    title: "Fully Compliant",
    description: "International export standards"
  },
  {
    icon: "/icons/award.svg",
    title: "Certified Excellence",
    description: "Quality control protocols"
  },
  {
    icon: "/icons/check-circle.svg",
    title: "Verified Operations",
    description: "Transparent processes"
  },
];

export default function Certifications() {
  return (
    <section className={styles.section}>
      <div className={styles.gridBg}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            CERTIFIED & COMPLIANT
          </div>
          <h2 className={styles.title}>
            Certifications & Compliance
          </h2>
          <div className={styles.divider}>
            <div className={`${styles.dividerLine} ${styles.left}`}></div>
            <div className={styles.dividerDot}></div>
            <div className={`${styles.dividerLine} ${styles.right}`}></div>
          </div>
        </div>

        <div className={styles.highlightsGrid}>
          {highlights.map((highlight, index) => (
            <div key={index} className={styles.highlightCard}>
<img src={highlight.icon} alt="" className={styles.highlightIcon} />
              <div className={styles.highlightTitle}>{highlight.title}</div>
              <p className={styles.highlightDescription}>{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.scrollContainer}>
          <div className={styles.certsGrid}>
            {certifications.concat(certifications).map((cert, index) => (
              <div key={index} className={styles.certCard}>
                <div className={styles.certImage}>
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
