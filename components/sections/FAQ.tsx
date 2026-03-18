"use client";

import { useState } from "react";
import styles from './FAQ.module.scss';

const faqs = [
  {
    question: "Can I request a specific vehicle not listed on your platform?",
    answer:
      "Absolutely! Our Direct Sourcing service is designed for this exact need. Simply contact our procurement specialists with your specific requirements (make, model, year, condition, quantity), and we'll leverage our extensive network to hand-pick and secure the exact inventory you need directly from individual owners across China.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept secure international bank transfers (T/T) for all transactions. For your protection and ours, we maintain official bank records of all payments. All transaction details, including currency (USD/CNY), payment terms, and deadlines, are clearly outlined in your commercial invoice. We also support Letter of Credit (L/C) for large-volume orders.",
  },
  {
    question: "How does your 200-point inspection process work?",
    answer:
      "Every vehicle undergoes our rigorous 200+ point inspection by certified technicians before listing. We thoroughly check engine performance, transmission, safety features, interior/exterior condition, electrical systems, and accident/flood history. You receive a comprehensive condition report with high-definition photos and videos highlighting every detail—complete transparency, no hidden flaws.",
  },
  {
    question: "What shipping methods do you offer?",
    answer:
      "We provide flexible shipping solutions including Container (20ft/40ft) and Ro-Ro (Roll-on/Roll-off) services to major ports worldwide. Average delivery time is 30-45 days depending on destination. Our dedicated logistics team handles all export clearance, customs documentation, tax refunds, and international freight forwarding—you focus on sales, we handle the supply chain.",
  },
  {
    question: "What if there's a discrepancy with my purchase?",
    answer:
      "We stand behind our vehicles with transparent policies and dedicated support. If there's any discrepancy between the vehicle received and our listing description, contact your regional account manager immediately. Our team will investigate the issue thoroughly and work to resolve it promptly and fairly, ensuring your satisfaction and maintaining our B2B trust.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer:
      "Yes! Our multilingual customer support team is available 24/7 to assist with any questions before, during, or after your purchase. Whether you need help with documentation, logistics updates, or technical questions, our regional specialists (covering Central Asia, Middle East, and Africa) provide immediate and highly professional responses in your preferred language.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <div className={styles.bgPattern}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            COMMON QUESTIONS
          </div>
          <h2 className={styles.title}>
            Frequently Asked Questions
          </h2>
          <div className={styles.divider}>
            <div className={`${styles.dividerLine} ${styles.left}`}></div>
            <div className={styles.dividerDot}></div>
            <div className={`${styles.dividerLine} ${styles.right}`}></div>
          </div>
        </div>

        {/* FAQ 手风琴 */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={styles.question}
              >
                <h3>{faq.question}</h3>
                <img 
                  src="/icons/chevron-down.svg" 
                  alt="" 
                  className={`${styles.icon} ${openIndex === index ? styles.open : ''}`} 
                />
              </button>

              <div className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}>
                <div className={styles.answerContent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomTip}>
          <p className={styles.tipText}>
            Still have questions?
          </p>
          <a href="#contact" className={styles.contactButton}>
<img src="/icons/help-circle.svg" alt="" className={styles.buttonIcon} />
            <span>Contact Our Team</span>
          </a>
        </div>
      </div>
    </section>
  );
}
