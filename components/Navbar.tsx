"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : styles.notScrolled}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <span>G</span>
            </div>
            <span className={styles.logoText}>Guazi</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
