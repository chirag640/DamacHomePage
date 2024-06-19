import React from 'react';
import Image from 'next/image';
import BookWith from '@/../public/assets/bookwith.png';
import AreaStartsFrom from '@/../public/assets/areastartsfrom.png';
import HandOverOn from '@/../public/assets/handoveron.png';
import PaymentPlan from '@/../public/assets/paymentplan.png';

const DesktopSlides = () => {
  const slides = [
    { image: BookWith, title: 'BOOK WITH', subtitle: 'ONLY 20%' },
    { image: AreaStartsFrom, title: 'Area Starts From', subtitle: '700 sqmt' },
    { image: HandOverOn, title: 'Hand Over On', subtitle: 'Q2 2027' },
    { image: PaymentPlan, title: 'Payment Plan', subtitle: 'Easy 70/30' },
  ];

  return (
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
  );
};

export default DesktopSlides;
