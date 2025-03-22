'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const images = [
  '/Virgile 1.png',
  '/Virgile 2.png',
  '/Virgile 3.png'
];

const images2 = [
  '/Multislot 1.png',
  '/Multislot 2.mp4'
];



export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const [currentIndex2, setCurrentIndex2] = useState(0);

  const nextSlide2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
  };

  const prevSlide2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex - 1 + images2.length) % images2.length);
  };


  return (
    <>
    
    <div className="flex flex-col justify-center items-center m-9">
      <div className="flex flex-col h-10 justify-center items-center mb-4">
        Enzo Rolandin Portfolio 
        <Link href="#about-me">About me</Link>
        </div>
        <div className="flex w-full">
          
        <div className="w-1/12"></div>
        <div className="flex flex-col items-center  h-auto w-full rounded-xl border-2  border-white p-5 space-y-5">
          <div className="my-5 font-bold ">Durandall - 2024</div>
         Durandall is a project to build an shopping website with a huge database, i trained my prisma skills and Tailwind with Next to build an elegant website
          
        <div className="relative h-full w-full">
      {/* Carousel Wrapper */}
      <div className="relative h-[40rem] overflow-hidden rounded-lg ">
      {images2.map((src, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex2 ? 'opacity-100' : 'opacity-0'}`}>
            {src.endsWith('.mp4') ? (
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button onClick={prevSlide2} className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 p-2 bg-white/30 rounded-full hover:bg-white/50">
        &#9664;
      </button>
      <button onClick={nextSlide2} className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 p-2 bg-white/30 rounded-full hover:bg-white/50">
        &#9654;
      </button>
    </div>
        </div>
    
        <div className="w-1/12"></div>
        </div>
        <div className="flex w-full">
          
        <div className="w-1/12"></div>
        <div className="flex flex-col items-center  h-auto w-full rounded-xl border-2  border-white p-5 space-y-5">
          <div className="my-5 font-bold ">Durandall - 2024</div>
         Durandall is a project to build an shopping website with a huge database, i trained my prisma skills and Tailwind with Next to build an elegant website
          
        <div className="relative h-full w-full">
      {/* Carousel Wrapper */}
      <div className="relative h-[40rem] overflow-hidden rounded-lg ">
        {images.map((src, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={src}
              alt={`Virgile ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 p-2 bg-white/30 rounded-full hover:bg-white/50">
        &#9664;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 p-2 bg-white/30 rounded-full hover:bg-white/50">
        &#9654;
      </button>
    </div>
        </div>
    
        <div className="w-1/12"></div>
        </div>
        <div className="flex w-full">
          
          <div className="w-1/12"></div>
          <div className="flex flex-col items-center  h-auto w-full rounded-xl border-2 border-t-0 border-white p-5 space-y-5">
            <div className="my-5 font-bold ">CertiFi - 2023</div>
            certifiyou.org was a complete working website, a easy solution to build smart contract for 100% secure diplomas, and certificates, with a whitelist solution. The creator was able to design with picture text an NFT, and let someone mint it as a diploma or other things. Now the database is down but i will be able to relaunch it.
            <Image
        src="/CertiFi 1.png"
        width={1500}
        height={1500}
        alt="Picture of the author"
        className="mt-6  h-[40rem]"
      />
          </div>
      
          <div className="w-1/12"></div>
          </div>
          <div id="about-me" className="relative w-full"></div>
    </div>
        
  
    </>
  );
}
