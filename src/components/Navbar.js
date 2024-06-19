import React from 'react';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className="relative z-10 flex justify-between h-16 px-6 items-center">
      <h1 className="text-white text-3xl md:text-4xl font-bold font-oswald">DAMAC</h1>
      <IoMenu className="text-white text-3xl md:hidden" />
      <button className="hidden md:inline-block bg-transparent border-2 border-[#17ABFF] text-[#17ABFF] font-bold py-2 px-4 rounded-lg transition duration-300 hover:bg-[#17ABFF] hover:text-white">
        ENQUIRE NOW
      </button>
    </div>
  );
};

export default Navbar;
