"use client";

import HeroContent from "../sub/HeroContent";

function Hero() {
  return (
    <div id="about-me" className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover rotate-180 absolute top-[-340px] left-0 z-[1]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
}

export default Hero;