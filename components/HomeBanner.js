"use client"
import React, { useState, useRef, useEffect } from "react"
import BannerSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@components/Navbar"

function HomeBanner() {
  var setting = {
    speed: 500,
    slidesToShow: 1,
    initialSlide: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    arrow: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="text-center relative w-full mx-auto overflow-hidden md:h-screen">
      <Navbar />
      <div className="text-center">
        
      <BannerSlider {...setting} className="z-0">
  {/* <div>
    <Image
      src="/home-page/home-banner-1.jpg"
      className="w-full h-auto z-0"
      width={800}
      height={150}
      alt=""
      priority
    />
  </div> */}
  <div className="relative overflow-hidden">
    <Image
      src="/home-page/home-banner-1.jpg"
      className="w-full lg:h-auto h-[500px] z-0"
      width={800}
      height={150}
      alt=""
      priority
    />
    <p className="text-white lg:text-6xl text-3xl font-bold z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">Client-Centric Problem Solving</p>
          </div>
          <div className="relative overflow-hidden">
    <Image
      src="/home-page/home-banner-3.jpg"
      className="w-full lg:h-auto h-[500px] z-0"
      width={800}
      height={150}
      alt=""
      priority
    />
    <p className="text-white lg:text-6xl text-3xl font-bold z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">Unlocking Abundance</p>
          </div>
          <div className="relative overflow-hidden">
    <Image
      src="/home-page/home-banner-2.jpg"
      className="w-full lg:h-auto h-[500px] z-0"
      width={800}
      height={150}
      alt=""
      priority
    />
    <div className="text-white lg:text-6xl text-3xl font-bold z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"><p>Rooted in India,</p><p className="mt-4">Gloabl in Practice.</p></div>
  </div>



</BannerSlider>

      </div>
    </section>
  )
}

export default HomeBanner