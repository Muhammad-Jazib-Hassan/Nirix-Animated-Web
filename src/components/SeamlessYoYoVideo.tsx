import React, { useRef, useState, useEffect } from "react";

interface SeamlessYoYoVideoProps {
  key?: React.Key;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
  maxTime?: number;
}

export function SeamlessYoYoVideo({ 
  className, 
  style, 
  speed = 1.0 
}: SeamlessYoYoVideoProps) {
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState<"A" | "B">("A");
  const transitioningRef = useRef<boolean>(false);

  useEffect(() => {
    const videoA = videoRefA.current;
    const videoB = videoRefB.current;
    if (!videoA || !videoB) return;

    videoA.playbackRate = speed;
    videoB.playbackRate = speed;
    videoA.loop = false;
    videoB.loop = false;

    // Trigger initial play for whichever is active
    if (active === "A" && videoA.paused) {
      videoA.play().catch(() => {});
    } else if (active === "B" && videoB.paused) {
      videoB.play().catch(() => {});
    }

    const interval = setInterval(() => {
      if (transitioningRef.current) return;

      const activeVideo = active === "A" ? videoA : videoB;
      const inactiveVideo = active === "A" ? videoB : videoA;

      if (activeVideo && activeVideo.duration && !isNaN(activeVideo.duration)) {
        const duration = activeVideo.duration;
        const fadeDuration = 0.8;
        const threshold = duration - fadeDuration;

        if (activeVideo.currentTime >= threshold) {
          transitioningRef.current = true;
          // Set inactive video to 0 and pre-play it to avoid blank frames
          inactiveVideo.currentTime = 0;
          inactiveVideo.playbackRate = speed;
          inactiveVideo.play()
            .then(() => {
              setActive(active === "A" ? "B" : "A");
              
              // Wait for the overlay transition to finish before pausing the old video
              setTimeout(() => {
                if (activeVideo) {
                  activeVideo.pause();
                  activeVideo.currentTime = 0;
                }
                transitioningRef.current = false;
              }, fadeDuration * 1000);
            })
            .catch(() => {
              transitioningRef.current = false;
            });
        }
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [active, speed]);

  const commonVideoProps = {
    muted: true,
    playsInline: true,
    preload: "auto" as const,
    style: {
      ...style,
      WebkitBackfaceVisibility: "hidden" as const,
      backfaceVisibility: "hidden" as const,
      transform: "scale(1.08) translate3d(0,0,0)", // Zooms slightly to crop out the generative watermark perfectly
    }
  };

  const src = "https://res.cloudinary.com/dowrdytcc/video/upload/v1780325518/Hailuo_Video_Animate_this_image_for_a_websi_517863046885494790_ppyevd.mp4";

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 bg-black">
      {/* Video Buffer A */}
      <video
        ref={videoRefA}
        src={src}
        {...commonVideoProps}
        className={`${className} absolute inset-0 w-full h-full transition-opacity duration-[800ms] ease-in-out ${
          active === "A" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Video Buffer B */}
      <video
        ref={videoRefB}
        src={src}
        {...commonVideoProps}
        className={`${className} absolute inset-0 w-full h-full transition-opacity duration-[800ms] ease-in-out ${
          active === "B" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
