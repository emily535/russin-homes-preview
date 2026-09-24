"use client";

import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const videoSource = "/videos/russin-homes/hero-loop.mp4";

export function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const explicitlyPaused = useRef(false);
  const [canUseVideo, setCanUseVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
    } catch {
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    if (
      reducedMotion.matches ||
      connection?.saveData ||
      window.matchMedia("(max-width: 767px)").matches
    )
      return;

    const frame = window.requestAnimationFrame(() => setCanUseVideo(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!canUseVideo) return;
    const video = videoRef.current;
    const hero = video?.closest(".home-hero");
    if (!video || !hero) return;

    const updatePlayback = () => {
      if (document.hidden || explicitlyPaused.current) {
        video.pause();
      } else {
        void play();
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) video.pause();
        else updatePlayback();
      },
      { threshold: 0.18 },
    );
    observer.observe(hero);
    document.addEventListener("visibilitychange", updatePlayback);
    void play();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [canUseVideo, play]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      explicitlyPaused.current = true;
      video.pause();
    } else {
      explicitlyPaused.current = false;
      void play();
    }
  };

  return (
    <>
      <div className="hero-media" aria-hidden="true">
        {canUseVideo && (
          <video
            ref={videoRef}
            className="hero-video"
            muted
            loop
            playsInline
            poster="/images/russin-homes/hero-poster.jpg"
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={videoSource} type="video/mp4" />
          </video>
        )}
      </div>
      {canUseVideo && isPlaying && (
        <button
          className="hero-video-control"
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? (
            <Pause aria-hidden="true" size={15} />
          ) : (
            <Play aria-hidden="true" size={15} />
          )}
        </button>
      )}
    </>
  );
}
