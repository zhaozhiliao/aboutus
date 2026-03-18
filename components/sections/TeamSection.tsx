"use client";

import Image from "next/image";
import styles from './TeamSection.module.scss';

const teams = [
  {
    region: "Central Asia",
    members: [
      {
        name: "Birzan",
        role: "Regional Manager",
        email: "birzan@guazi.com",
        whatsapp: "+86 138 0000 0001",
        avatar: "/images/team/1.jpeg",
      },
      {
        name: "Shanshan Zhao",
        role: "Account Executive",
        email: "shanshan.zhao@guazi.com",
        whatsapp: "+86 138 0000 0002",
        avatar: "/images/team/2.jpeg",
      },
      {
        name: "Zhoufan Wang",
        role: "Logistics Coordinator",
        email: "zhoufan.wang@guazi.com",
        whatsapp: "+86 138 0000 0003",
        avatar: "/images/team/3.jpeg",
      },
    ],
  },
  {
    region: "Africa",
    members: [
      {
        name: "Guanglin Yang",
        role: "Regional Manager",
        email: "guanglin.yang@guazi.com",
        whatsapp: "+86 138 0000 0004",
        avatar: "/images/team/4.jpeg",
      },
      {
        name: "Lianlong Shan",
        role: "Account Executive",
        email: "lianlong.shan@guazi.com",
        whatsapp: "+86 138 0000 0005",
        avatar: "/images/team/1.jpeg",
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.gridBg}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            ON-GROUND SUPPORT
          </div>
          <h2 className={styles.title}>
            Meet Our Regional Experts
          </h2>
          <div className={styles.divider}>
            <div className={`${styles.dividerLine} ${styles.left}`}></div>
            <div className={styles.dividerDot}></div>
            <div className={`${styles.dividerLine} ${styles.right}`}></div>
          </div>
        </div>

        <div className={styles.regionsGrid}>
          {teams.map((team, teamIndex) => (
            <div key={teamIndex} className={styles.region}>
              <h3>{team.region}</h3>
              
              <div className={styles.teamGrid}>
                {team.members.map((member, memberIndex) => (
                  <div key={memberIndex} className={styles.memberCard}>
                    <div className={styles.avatar}>
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className={styles.name}>{member.name}</div>
                    <div className={styles.role}>{member.role}</div>
                    <div className={styles.location}>{member.email}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
