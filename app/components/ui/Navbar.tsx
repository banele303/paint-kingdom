"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"


import Link from "next/link";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="">
      <div>
        <div
          className={
            scrolled
              ? "scrolled  bg-white items-center  mx-auto md:left-[10rem]  rounded-md w-full md:w-4/5  z-50 top-5 md:top-10  fixed drop-shadow-lg pt-[1.3rem] pb-[1.3rem] "
              : "z-50  bg-white top-5 md:top-10 mx-auto  md:left-[10rem] rounded-md w-full  md:w-4/5  fixed drop-shadow-lg  py-[1rem]  "
          }
        >
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center md:pl-6 realtive ">
              <Link href="/">
              <Image src="/painting/logo.png" alt="logo" width={130} height={50} />
              </Link>
         

             
              {/* <Image src="/kitchenr.logo.jpeg" alt="logo" className="py-[1rem] absolute w-[5rem] md:w-[9rem] h-[10rem] md:h-[18rem]" width={200} height={50} /> */}
             
            </div>
            <div className="hidden md:flex pr-4">
              <ul className="hidden md:flex ">
                <li className=" py-3  text-[17px] font-Poppins  px-6  border-5 border-sky-900 cursor-pointer text-gray-800  font-bold">
                  <Link href="/about-us">About</Link>
                </li>
               
                
                <li className=" py-3 px-6 border-5 border-sky-900  text-[17px] font-Poppins cursor-pointer text-gray-800 font-bold">
                  <Link href="/painting-services">Painting</Link>
                </li>
                <li className=" py-3 px-6 border-5 border-sky-900  text-[17px] font-Poppins cursor-pointer text-gray-800 font-bold">
                  <Link href="/bath-kitchen">Water Profing </Link>
                </li>
                <li className=" py-3 px-6 border-5 border-sky-900  text-[17px] font-Poppins cursor-pointer text-gray-800 font-bold">
                  <Link href="/welding-services">Welding</Link>
                </li>
                <li className=" py-2 px-6  border-5 border-sky-900 cursor-pointer text-[17px] font-Poppins text-slate-200 font-bold">
                  <a href="tel:+27 74 684 5729" className="lg:flex">
                  <Button variant="destructive"> Call Now +27 78 872 4501</Button>
            
          </a>
                </li>
              </ul>
              
            </div>
            <div className="md:hidden mr-4" onClick={handleClick}>
              {!nav ? (
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>
             
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

              )}
            </div>
          </div>

          <ul
            className={
              !nav
                ? "hidden"
                : "scrolled absolute w-[250px] bg-white px-8 top-[5rem] right-[1rem] border-none rounded-md"
            }
          >
            <li className="  py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-gray-800 font-bold">
            <Link href="/about-us">About</Link>
            </li>
            
            <li className=" py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-gray-800 font-bold">
            <Link href="/pressure-washing">Painting</Link>
            </li>
            <li className=" py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-gray-800 font-bold">
            <Link href="/bath-kitchen">Water Profing </Link>
            </li>
            <li className=" py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-gray-800 font-bold">
              <Link href="/welding-services">Wellding</Link>
            </li>

            <div className="flex flex-col my-4">
            <li className=" py-2 px-6  border-5 border-sky-900 cursor-pointer text-[17px] font-Poppins text-slate-200 font-bold">
                  <a href="tel:+27 74 684 5729" className="lg:flex">
                  <Button variant="destructive"> Call Now +27 78 872 4501</Button>
            
          </a>
                </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;