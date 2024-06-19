import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import Rectangle89 from '@/../public/assets/Rectangle89.jpeg';
import Rectangle90 from '@/../public/assets/Rectangle90.jpeg';
import Rectangle92 from '@/../public/assets/Rectangle92.jpeg';
import Rectangle93 from '@/../public/assets/Rectangle93.jpeg';

const images = [Rectangle89, Rectangle90, Rectangle92, Rectangle93];

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className='pt-14 md:px-40 md:flex md:justify-center md:items-center md:flex-col'>
      <div className='md:w-4/5 flex justify-around items-center md:justify-end md:gap-4'>
        <button className=" bg-[#00357B] border-2 border-[#00357B] text-white font-bold py-4 px-8 rounded-lg transition duration-300 hover:bg-white hover:text-[#00357B]">
          EXTERIORS
        </button>
        <button className=" bg-transparent border-2 border-[#00357B] text-[#00357B] font-bold py-4 px-8 rounded-lg transition duration-300 hover:bg-[#00357B] hover:text-white">
          INTERIORS
        </button>
      </div>
      <div className="relative w-full md:w-4/5 flex justify-center items-center mb-6 mt-6">
        <MdOutlineArrowBackIos
          color='white'
          className="absolute left-0 text-3xl cursor-pointer"
          onClick={prevImage}
        />
        <div className="flex justify-center items-center">
          <Image
            src={images[currentIndex]}
            alt="Carousel Image"
            className="transition-transform duration-500 rounded-2xl md:object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL={images[currentIndex].src}
          />
        </div>
        <MdOutlineArrowForwardIos
          color='white'
          className="absolute right-0 text-3xl cursor-pointer"
          onClick={nextImage}
        />
      </div>
      <div className="flex flex-row justify-center space-x-4">
        {images.map((image, index) => (
          <div key={index} className={`w-40 h-40 ${index === currentIndex ? 'opacity-50' : ''}`}>
            <Image
              src={image}
              alt={`Queue Image ${index}`}
              onClick={() => setCurrentIndex(index)}
              className="cursor-pointer rounded-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL={image.src}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
