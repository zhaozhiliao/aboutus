"use client";

import { useState } from "react";
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    region: "",
    targetVehicles: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.gridBg}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            START YOUR JOURNEY
          </div>
          <h2 className={styles.title}>
            Ready to Scale Your Dealership?
          </h2>
          <div className={styles.divider}>
            <div className={`${styles.dividerLine} ${styles.left}`}></div>
            <div className={styles.dividerDot}></div>
            <div className={`${styles.dividerLine} ${styles.right}`}></div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <img src="/icons/message-square.svg" alt="" className={styles.iconImage} />
              </div>
              <div className={styles.contactText}>
                <h3>WhatsApp</h3>
                <p>+86 138 0000 0000</p>
              </div>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <img src="/icons/mail.svg" alt="" className={styles.iconImage} />
              </div>
              <div className={styles.contactText}>
                <h3>Email</h3>
                <p>export@guazi.com</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company">Company *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="region">Region *</label>
                <select
                  id="region"
                  name="region"
                  required
                  value={formData.region}
                  onChange={handleChange}
                >
                  <option value="">Select your region</option>
                  <option value="Central Asia">Central Asia</option>
                  <option value="Middle East">Middle East</option>
                  <option value="Africa">Africa</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="targetVehicles">Target Vehicles *</label>
                <textarea
                  id="targetVehicles"
                  name="targetVehicles"
                  required
                  rows={4}
                  value={formData.targetVehicles}
                  onChange={handleChange}
                  placeholder="Describe your target vehicles (make, model, quantity, budget...)"
                />
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              <img src="/icons/send.svg" alt="" className={styles.submitIcon} />
              <span>Submit Inquiry</span>
            </button>
          </form>
        </div>

        <div className={styles.trust}>
          <p>Trusted by 100K+ dealerships worldwide</p>
        </div>
      </div>
    </section>
  );
}
