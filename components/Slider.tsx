"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
 const [currentSlide, setCurrentSlide] = useState(0);
 
//  useEffect(() => {
//   const interval = setInterval(
//     () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0: prev+1)),
//     4000
//   );
//   return () => clearInterval(interval);
//  });


  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Text Container */}
       <div className="flex-1 lg:h-full  flex flex-col items-center justify-center gap-8 bg-fuchsia-50 text-red-500 font-bold">
         <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl lg:text-7xl ">
           {data[currentSlide].title}
         </h1>
         <button className="bg-red-500 text-white py-4 px-8">Order now</button>
       </div>
      {/* Image Container */}
      <div className="w-full flex-1 lg:h-full relative">
        <Image alt="" src={data[currentSlide].image} fill className="object-cover"/> 
      </div>
    </div>
  )
}

export default Slider