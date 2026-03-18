"use client";

import { useRef, useEffect } from "react";
import styles from './VideoShowcase.module.scss';

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play was prevented:", error);
      });
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
