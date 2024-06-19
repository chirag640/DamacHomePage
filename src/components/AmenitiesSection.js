import React from 'react';
import Image from 'next/image';
import Gym from '@/../public/assets/gym.png';
import FlotingPool from '@/../public/assets/flotingPool.jpeg';
import SwimmingPool from '@/../public/assets/swimmingPool.jpeg';
import Rooms from '@/../public/assets/rooms.jpeg';
import HarbourLights from '@/../public/assets/harbourlights.png'

const amenities = [
  { image: Gym, title: 'Fully Equipped Gym' },
  { image: FlotingPool, title: 'Floating Pool' },
  { image: SwimmingPool, title: 'Swimming Pool' },
  { image: Rooms, title: '3, 4, & 5 Bedroom Rooms' },
];

const AmenitiesSection = () => {
  return (
    <section className='flex flex-col items-center py-10 text-black'>
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
                loading="lazy"
                placeholder="blur"
                blurDataURL={amenity.image.src}
              />
            </div>
            <p className="text-center text-[#00357B] font-bold text-xl font-oswald">{amenity.title}</p>
          </div>
        ))}
      </div>
      <p className='text-center w-3/4 text-[#686868] md:text-right'>*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</p>
    </section>
  );
};

export default AmenitiesSection;
