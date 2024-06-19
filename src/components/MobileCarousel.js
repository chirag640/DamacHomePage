import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BookWith from '@/../public/assets/bookwith.png';
import AreaStartsFrom from '@/../public/assets/areastartsfrom.png';
import HandOverOn from '@/../public/assets/handoveron.png';
import PaymentPlan from '@/../public/assets/paymentplan.png';

const MobileCarousel = () => {
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
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
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
  );
};

export default MobileCarousel;
