"use client";

import { useEffect, useRef } from "react";
import { Play } from "lucide-react";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video autoplay failed:", err));
    }
  }, []);

  return (
    <section className="relative py-12 lg:py-16 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* 视频容器 - 紧凑布局 */}
        <div className="relative">
          <div className="relative rounded-xl overflow-hidden shadow-xl shadow-primary/20 border-2 border-primary/30">
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
