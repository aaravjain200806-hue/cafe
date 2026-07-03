"use client";

import CustomCursor         from "@/app/components/CustomCursor";
import SmoothScrollProvider from "@/app/components/SmoothScrollProvider";
import Navigation           from "@/app/components/Navigation";
import AudioPlayer          from "@/app/components/AudioPlayer";
import QuickLinks           from "@/app/components/QuickLinks";
import VideoScrollHero      from "@/app/sections/VideoScrollHero";
import Story                from "@/app/sections/Story";
import FoodMenu             from "@/app/sections/FoodMenu";
import Testimonials         from "@/app/sections/Testimonials";
import InstagramGallery     from "@/app/sections/InstagramGallery";
import Location             from "@/app/sections/Location";
import Footer               from "@/app/sections/Footer";

export default function Home() {

  return (
    <>
      {/* ── Premium custom cursor (desktop only) ── */}
      <CustomCursor />

      {/* ── Background music player ── */}
      <AudioPlayer />

      <SmoothScrollProvider>
        {/* Fixed navigation */}
        <Navigation />

        <main>
          {/* 1. Hero — video + parallax + split-text entrance */}
          <VideoScrollHero />

          {/* 2. Quick-action strip */}
          <QuickLinks />

          {/* 3. Our Story */}
          <Story />

          {/* 4. Full Food Menu */}
          <FoodMenu />

          {/* 5. Reviews */}
          <Testimonials />

          {/* 6. Instagram gallery */}
          <InstagramGallery />

          {/* 7. Address + map */}
          <Location />

          {/* 8. Footer */}
          <Footer />
        </main>
      </SmoothScrollProvider>
    </>
  );
}