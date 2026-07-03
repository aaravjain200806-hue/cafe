"use client";

import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
  // Default: playing = true (music ON जब website खुले)
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;
    audio.loop   = true;

    // पहले auto-play try करो
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // Browser ने block किया → पहले user gesture पर unlock
        setIsPlaying(false); // UI को sync में रखो

        const unlock = () => {
          audio.play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
          window.removeEventListener("click",      unlock);
          window.removeEventListener("scroll",     unlock);
          window.removeEventListener("keydown",    unlock);
          window.removeEventListener("touchstart", unlock);
        };

        window.addEventListener("click",      unlock, { once: true });
        window.addEventListener("scroll",     unlock, { once: true });
        window.addEventListener("keydown",    unlock, { once: true });
        window.addEventListener("touchstart", unlock, { once: true });
      });
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/background-music.mp3" preload="auto" />

      {/* एकमात्र Music Control Button — bottom-right fixed */}
      <button
        id="music-toggle-btn"
        onClick={toggle}
        aria-label={isPlaying ? "Music बंद करें" : "Music चालू करें"}
        title={isPlaying ? "Music बंद करें" : "Music चालू करें"}
        style={{
          position:        "fixed",
          bottom:          "30px",
          right:           "30px",
          zIndex:          1000,
          width:           "48px",
          height:          "48px",
          borderRadius:    "50%",
          border:          `1px solid ${isPlaying ? "rgba(212,160,23,0.6)" : "rgba(212,160,23,0.25)"}`,
          background:      isPlaying ? "rgba(212,160,23,0.18)" : "#1a1510",
          color:           isPlaying ? "rgba(212,160,23,1)" : "rgba(253,246,227,0.45)",
          cursor:          "pointer",
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          transition:      "all 0.3s ease",
          boxShadow:       isPlaying
                             ? "0 0 18px rgba(212,160,23,0.25), 0 4px 20px rgba(0,0,0,0.5)"
                             : "0 4px 20px rgba(0,0,0,0.5)",
        }}
      >
        {isPlaying ? (
          /* Volume ON icon — animated pulse rings */
          <svg viewBox="0 0 24 24" fill="none" width="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" opacity="0.9"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        ) : (
          /* Volume OFF / Muted icon */
          <svg viewBox="0 0 24 24" fill="none" width="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        )}
      </button>
    </>
  );
}