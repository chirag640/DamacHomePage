"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMenu } from 'react-icons/io5';
import BookWith from '@/../public/assets/bookwith.png';
import AreaStartsFrom from '@/../public/assets/areastartsfrom.png';
import HandOverOn from '@/../public/assets/handoveron.png';
import PaymentPlan from '@/../public/assets/paymentplan.png';
import HarbourLights from '@/../public/assets/harbourlights.png';
import Gym from '@/../public/assets/gym.png';
import FlotingPool from '@/../public/assets/flotingPool.jpeg';
import SwimmingPool from '@/../public/assets/swimmingPool.jpeg';
import Rooms from '@/../public/assets/rooms.jpeg';

export default function Home() {
  const [visibleSlides, setVisibleSlides] = useState([0, 1]); // Initially show the first two slides
  const [slideTransition, setSlideTransition] = useState(false);
  const slides = [
    { image: BookWith, title: 'BOOK WITH', subtitle: 'ONLY 20%' },
    { image: AreaStartsFrom, title: 'Area Starts From', subtitle: '700 sqmt' },
    { image: HandOverOn, title: 'Hand Over On', subtitle: 'Q2 2027' },
    { image: PaymentPlan, title: 'Payment Plan', subtitle: 'Easy 70/30' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideTransition(true);
      setTimeout(() => {
        setVisibleSlides((prevVisibleSlides) => {
          const nextIndex = (prevVisibleSlides[1] + 1) % slides.length;
          return [prevVisibleSlides[1], nextIndex];
        });
        setSlideTransition(false);
      }, 500); // Match this duration with the CSS transition duration
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const amenities = [
    { image: FlotingPool, title: 'Floating Pools' },
    { image: Rooms, title: 'Spacious Cabins Like Rooms' },
    { image: SwimmingPool, title: 'Sea Facing Swimming Pools' },
    { image: Gym, title: 'Gymnasium & Fitness' },
  ];


  return (
    <main>
      <div className="relative md:px-40 md:pt-10 h-screen overflow-hidden">
        {/* Background Image and Gradient */}
        <div className="absolute inset-0 bg-hero-pattern bg-right bg-cover">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C2546] to-[#188DF9] opacity-75"></div>
        </div>
        {/* Navbar */}
        <div className="relative z-10 flex justify-between h-16 px-6 items-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold font-oswald">DAMAC</h1>
          <IoMenu className="text-white text-3xl md:hidden" />
          <button className="hidden md:inline-block bg-transparent border-2 border-[#17ABFF] text-[#17ABFF] font-bold py-2 px-4 rounded-lg transition duration-300 hover:bg-[#17ABFF] hover:text-white">
            ENQUIRE NOW
          </button>
        </div>
        {/* Main Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-baseline mt-16 px-6 md:px-6 md:pt-20">
          {/* Left Side Text */}
          <div className="flex flex-col items-start md:w-1/2">
            <p className="text-[#FCFCFC] text-4xl md:text-6xl font-bold font-oswald">
              Harbour Lights
            </p>
            <p className="text-[#FCFCFC] text-4xl md:text-6xl font-bold font-oswald">
              DE{' '}
              <span className="text-[#17ABFF] text-4xl md:text-6xl font-bold font-oswald">
                GRESOGONO
              </span>
            </p>
            {/* First Line and Text */}
            <div className="flex items-center mt-16 md:mt-36">
              <div className="h-10 w-1 bg-[#17ABFF]"></div>
              <p className="ml-2 text-white text-base md:text-lg font-bold bg-black bg-opacity-35 p-2">
                Rental Returns of UPTO 11%
              </p>
            </div>
            {/* Second Line and Text */}
            <div className="flex items-center mt-4">
              <div className="h-10 w-1 bg-[#17ABFF]"></div>
              <p className="ml-2 text-white text-base md:text-lg font-bold bg-black bg-opacity-35 p-2">
                Capital Appreciation of UPTO 32%**
              </p>
            </div>
          </div>
          {/* Right Side Card */}
          <div className="w-4/5 relative z-20 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl my-16 mx-8 md:mx-0 md:ml-auto md:w-1/2 flex flex-col justify-center items-center">
            <div className="w-3/4 my-10 flex flex-col">
              <p className="text-lg md:text-xl text-white mb-2">PRICING STARTS FROM</p>
              <p className="text-5xl md:text-6xl text-white font-bold mb-2">$ 425,000</p>
              <p className="text-xl md:text-2xl text-white font-bold mb-4">AED 1.3 Million</p>
              <button className="bg-[#17ABFF] text-white font-bold py-2 px-4 rounded-lg mt-4 h-16 w-full transition duration-300 hover:bg-white hover:text-[#17ABFF]">
                GET A PRESENTATION
              </button>
            </div>
            <div className="w-full h-0.5 bg-black bg-opacity-50 my-2"></div>
            <p className="text-[#ffffff98] text-base pb-4 text-center">
              Get an Expert’s Presentation of Real <br /> Estate in Dubai for Life and investment
            </p>
          </div>
        </div>
      </div>
      {/* Responsive Section with Carousel for Mobile */}
      <section className="md:px-40 flex flex-col md:flex-row justify-between items-center pt-16 bg-[#F4F9FF]">
        <div className="carousel-container flex justify-around items-center w-full md:flex-row md:space-x-4 md:hidden">
          {visibleSlides.map((index) => (
            <div key={index} className={`slide flex justify-center items-center flex-col transition-transform duration-500 ${slideTransition ? 'transform -translate-x-full' : ''} md:transform-none`}>
              <Image src={slides[index].image} alt={slides[index].title} />
              <p>{slides[index].title}</p>
              <p>{slides[index].subtitle}</p>
              <div className="w-10 h-0.5 bg-black bg-opacity-50 my-2"></div>
            </div>
          ))}
        </div>
        {/* Static display for larger screens */}
        <div className="hidden md:flex justify-around items-center w-full space-x-4">
          {slides.map((slide, index) => (
            <div key={index} className="flex justify-center items-center flex-col">
              <Image src={slide.image} alt={slide.title} />
              <p>{slide.title}</p>
              <p>{slide.subtitle}</p>
              <div className="w-10 h-0.5 bg-black bg-opacity-50 my-2"></div>
            </div>
          ))}
        </div>
      </section>

      <section className='flex justify-center items-center flex-col pt-14 px-4'>
          <Image src={HarbourLights}/>
          <p className='text-4xl font-bold mt-6 text-[#00357B] font-oswald'>Features & Amenities</p>
          <p className='w-4/5 md:w-1/2 text-center text-xl my-5 font-poppins tracking-normal font-medium'>Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pl-10 md:pl-20 py-10">
        {amenities.map((amenity, index) => (
          <div key={index} className="w-3/4 flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-2xl rounded-2xl p-4 shadow-lg">
            <div className="image-container mb-4">
              <Image
                className="w-32 h-32 rounded-full border-4 border-[#D9D9D9]"
                src={amenity.image}
                alt={amenity.title}
              />
            </div>
            <p className="text-center text-[#00357B] font-bold text-xl font-oswald">{amenity.title}</p>
          </div>
        ))}
      </div>
      <p className='text-center w-3/4 text-[#686868] md:text-right'>*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</p>
      </section>
    </main>
  );
}
