"use client";

import Image from "next/image";
import styles from './Testimonials.module.scss';

const testimonials = [
  {
    focus: "Bulk Inventory & Auction Efficiency",
    region: "Central Asia",
    quote: "Guazi Auction has been a game-changer for our business. Having access to thousands of verified vehicles every month allows us to bid and secure bulk inventory quickly at highly competitive market rates. What impresses me most is the platform's efficiency and transparency. There are no surprises when the cars arrive. It is a trustworthy platform that perfectly supports our rapid expansion.",
    author: "Alexei Petrov",
    title: "Import Director, Kazakhstan Auto Group",
    badge: "VOLUME BUYER",
    avatar: "/images/avatars/businessman (1).png",
  },
  {
    focus: "Streamlined Logistics & Fulfillment",
    region: "Africa",
    quote: "Guazi's one-stop solution has completely removed this headache for our operations in Africa. From the moment we purchase a vehicle, their dedicated team handles all the bureaucratic complexities, documentation, and international shipping. We can focus entirely on local sales and growing our dealership, knowing Guazi has the entire fulfillment process under control.",
    author: "Joseph Okonkwo",
    title: "Managing Director, Lagos Premium Motors",
    badge: "LOGISTICS",
    avatar: "/images/avatars/businessman (2).png",
  },
  {
    focus: "Transparent Inspection & Risk Control",
    region: "Global",
    quote: "Their rigorous 200-point inspection process is simply the best I have seen in the industry. Before making any payment, we can browse condition reports, complete with high-definition photos and videos that highlight every single detail. We've imported dozens of cars through them, and the quality is exactly as described. This builds lasting B2B trust.",
    author: "Marcus Chen",
    title: "Procurement Manager, Global Auto Solutions",
    badge: "QUALITY",
    avatar: "/images/avatars/businessman (3).png",
  },
  {
    focus: "Team Support & After-Sales Service",
    region: "Middle East",
    quote: "As an importer, having a dedicated regional account manager who understands our specific market makes a huge difference. Whether we have a question about documentation or need a quick update on logistics, the response is immediate and highly professional. It feels less like a traditional buyer-seller transaction and much more like a true strategic partnership.",
    author: "Ahmed Al-Mansouri",
    title: "CEO, Dubai Auto Trading",
    badge: "PARTNERSHIP",
    avatar: "/images/avatars/businessman (4).png",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPattern}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            CLIENT SUCCESS STORIES
          </div>
          <h2 className={styles.title}>
            Partner Testimonials
          </h2>
          <div className={styles.divider}>
            <div className={`${styles.dividerLine} ${styles.left}`}></div>
            <div className={styles.dividerDot}></div>
            <div className={`${styles.dividerLine} ${styles.right}`}></div>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <blockquote className={styles.quote}>
                "{testimonial.quote}"
              </blockquote>

              <div className={styles.author}>
                <div className={styles.avatar}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statValue}>100K+</div>
            <div className={styles.statLabel}>Dealerships</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statLabel}>Satisfaction</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>50+</div>
            <div className={styles.statLabel}>Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
