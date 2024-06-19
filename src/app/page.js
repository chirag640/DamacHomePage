"use client"
import React from 'react';
import MainSection from '../components/MainSection.js';
import MobileCarousel from '../components/MobileCarousel.js';
import DesktopSlides from '../components/DesktopSlides.js';
import AmenitiesSection from '../components/AmenitiesSection.js';
import FeaturesSection from '../components/FeaturesSection.js';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <main>
      <MainSection />
      <section className="md:px-40 flex flex-col md:flex-row justify-between items-center pt-16 bg-[#F4F9FF]">
        <MobileCarousel />
        <DesktopSlides />
      </section>
      <AmenitiesSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
