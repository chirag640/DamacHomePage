import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import BookWith from '@/../public/assets/bookwith.png'
import AreaStartsFrom from '@/../public/assets/areastartsfrom.png'
import HandOverOn from '@/../public/assets/handoveron.png'
import PaymentPlan from '@/../public/assets/paymentplan.png'
export default function Home() {
  return (
    <main className=''>
      <section className="relative h-screen overflow-hidden md:px-40 md:pt-10 lg:px-40 lg:pt-10">
        {/* Background Image and Gradient */}
        <div className="absolute inset-0 bg-hero-pattern bg-right bg-cover">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C2546] to-[#188DF9] opacity-75"></div>
        </div>
        {/* Navbar */}
        <div className="relative z-10 flex justify-between h-16 px-6 items-center md:px-8 lg:px-8">
          <h1 className="text-white text-3xl md:text-4xl font-bold font-oswald">DAMAC</h1>
          <IoMenu className="text-white text-3xl md:hidden" />
          <button className="hidden md:inline-block bg-transparent border-2 border-[#17ABFF] text-[#17ABFF] font-bold py-2 px-4 rounded-lg transition duration-300 hover:bg-[#17ABFF] hover:text-white">
            ENQUIRE NOW
          </button>
        </div>
        {/* Main Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-baseline mt-16 px-6 md:px-8 lg:px-8 md:pt-20 lg:pt-20">
          {/* Left Side Text */}
          <div className="flex flex-col items-start md:w-1/2 lg:w-1/2">
            <p className="text-[#FCFCFC] text-4xl md:text-5xl lg:text-6xl font-bold font-oswald">
              Harbour Lights
            </p>
            <p className="text-[#FCFCFC] text-4xl md:text-5xl lg:text-6xl font-bold font-oswald">
              DE{" "}
              <span className="text-[#17ABFF] text-4xl md:text-5xl lg:text-6xl font-bold font-oswald">
                GRESOGONO
              </span>
            </p>
            {/* First Line and Text */}
            <div className="flex items-center mt-16 md:mt-20 lg:mt-36">
              <div className="h-8 w-1 bg-[#17ABFF] md:h-10 lg:h-10"></div>
              <p className="ml-2 text-white text-base md:text-lg lg:text-lg font-bold bg-black bg-opacity-35 p-2">
                Rental Returns of UPTO 11%
              </p>
            </div>
            {/* Second Line and Text */}
            <div className="flex items-center mt-4">
              <div className="h-8 w-1 bg-[#17ABFF] md:h-10 lg:h-10"></div>
              <p className="ml-2 text-white text-base md:text-lg lg:text-lg font-bold bg-black bg-opacity-35 p-2">
                Capital Appreciation of UPTO 32%**
              </p>
            </div>
          </div>
          {/* Right Side Card */}
          <div className="w-4/5 relative z-20 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl my-16 mx-8 md:mx-0 md:ml-auto md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center">
            <div className='w-3/4 my-10 flex flex-col'>
              <p className="text-lg md:text-xl lg:text-xl text-white mb-2">PRICING STARTS FROM</p>
              <p className="text-5xl md:text-5xl lg:text-6xl text-white font-bold mb-2">$ 425,000</p>
              <p className="text-xl md:text-xl lg:text-2xl text-white font-bold mb-4">AED 1.3 Million</p>
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
      <section className='md:px-40  flex justify-between items-center'>
        <div className='flex justify-center items-center flex-col'>
          <Image src={BookWith}></Image>
          <p>BOOK WITH</p>
          <p>ONLY 20%</p>
          <div className="w-10 h-0.5 bg-black bg-opacity-50 my-2"></div>
        </div>
        <div className='flex justify-center items-center flex-col'>
        <Image src={AreaStartsFrom}></Image>
          <p>Area Starts From</p>
          <p>ONLY 20%</p>
          <div className="w-10 h-0.5 bg-black bg-opacity-50 my-2"></div>
        </div>
        <div className='flex justify-center items-center flex-col'>
        <Image src={HandOverOn}></Image>
          <p>Hand Over On</p>
          <p>ONLY 20%</p>
          <div className="w-10 h-0.5 bg-black bg-opacity-50 my-2"></div>
        </div>
        <div className='flex justify-center items-center flex-col'>
        <Image src={PaymentPlan}></Image>
          <p>Payment Plan</p>
          <p>ONLY 20%</p>
          <div className="w-10 h-0.5 bg-black bg-opacity-50 my-2"></div>
        </div>
      </section>
    </main>
  );
}
