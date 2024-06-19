import React from 'react';
import Image from 'next/image';
import HarbourLights from '@/../public/assets/harbourlights.png';
import Navbar from './Navbar';

const MainSection = () => {
  return (
    <section className="relative md:px-40 md:pt-10 h-screen overflow-hidden">
      {/* Background Image and Gradient */}
      <div className="absolute inset-0 bg-hero-pattern bg-right bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C2546] to-[#188DF9] opacity-75"></div>
      </div>
      <Navbar/>
      <div className="relative z-10 flex flex-col md:flex-row items-baseline mt-16 px-6 md:px-6 md:pt-20">
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
          <div className="flex items-center mt-16 md:mt-36">
            <div className="h-10 w-1 bg-[#17ABFF]"></div>
            <p className="ml-2 text-white text-base md:text-lg font-bold bg-black bg-opacity-35 p-2">
              Rental Returns of UPTO 11%
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="h-10 w-1 bg-[#17ABFF]"></div>
            <p className="ml-2 text-white text-base md:text-lg font-bold bg-black bg-opacity-35 p-2">
              Capital Appreciation of UPTO 32%**
            </p>
          </div>
        </div>
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
    </section>
  );
};

export default MainSection;
