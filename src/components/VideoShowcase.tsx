"use client";

import { useRef, useEffect, useState } from "react";

const VIDEOS = [
  { src: "/videos/video-1.mp4", client: "Phoenix" },
  { src: "/videos/video-2.mp4", client: "Photo EVO" },
  { src: "/videos/video-3.mp4", client: "KnowHonesty" },
  { src: "/videos/video-4.mp4", client: "SpecTool" },
];

function PhoneMockup({ src, client, index }: { src: string; client: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Phone frame */}
      <div className="relative mx-auto w-[200px] sm:w-[220px] lg:w-[240px]">
        {/* Phone bezel */}
        <div className="bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl shadow-black/30">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />

          {/* Screen */}
          <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[9/16]">
            <video
              ref={videoRef}
              src={src}
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />

            {/* Play overlay on hover */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center group cursor-pointer"
              onClick={() => {
                if (videoRef.current) {
                  if (videoRef.current.paused) {
                    videoRef.current.play().catch(() => {});
                  } else {
                    videoRef.current.pause();
                  }
                }
              }}
            >
              <svg
                className="w-12 h-12 text-white opacity-0 group-hover:opacity-80 transition-opacity"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Client label */}
        <p className="text-center text-sm text-gray-500 mt-4 font-medium">{client}</p>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="bg-bloom-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-bloom-green">
            Content That Stops the Scroll
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Short form video that captures attention and drives results. Here is a look at some of the content we have created for our clients.
          </p>
        </div>

        <div className="flex justify-center gap-6 lg:gap-10 flex-wrap lg:flex-nowrap">
          {VIDEOS.map((video, i) => (
            <PhoneMockup key={video.src} src={video.src} client={video.client} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
