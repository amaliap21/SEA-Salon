import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="flex relative min-h-screen flex-col overflow-hidden items-center justify-start gap-[50px] lg:gap-[70px] lg:pb-28 2xl:pb-40 bg-neutral-50 z-[0]">
      <div className="flex justify-center items-center w-full px-10 pt-10 pb-24 xl:pt-20 xl:pb-40" style={{ background: "linear-gradient(180deg, #D4D4D5 65.1%, rgba(212, 212, 213, 0.00) 100%)" }}>
        <h1 className="text-black text-center font-pt_sans text-[22px] lg:text-3xl xl:text-4xl font-bold italic ">A Rising Star in the Salon Industry</h1>
      </div>

      {/* ABOUT US */}
      <div className="flex flex-col gap-5 lg:gap-10 z-[1] sm:px-20 md:px-24 lg:px-20 2xl:px-32">
        <h2 className="text-black text-center font-pt_sans text-[22px] lg:text-3xl xl:text-4xl font-bold">About Us</h2>
        <p className="text-black text-center font-pt_sans text-[16px] lg:text-lg xl:text-2xl w-5/6 lg:w-2/3 mx-auto">Welcome to SEA Salon, where beauty meets excellence. At SEA Salon, we pride ourselves on delivering outstanding services that have garnered us exceptional reviews and a rapidly growing clientele. Our commitment to quality and customer satisfaction has established us as a premier destination for all your beauty needs.</p>
      </div>

      {/* OUR TEAM */}
      <div className="flex flex-col gap-7 lg:gap-14 z-[1] py-10 xl:py-14 sm:px-20 md:px-24 lg:px-20 2xl:px-32">
        <h2 className="text-black text-center font-pt_sans text-[22px] lg:text-3xl xl:text-4xl font-bold">Our Team</h2>
        <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
          {/* Person-1 */}
          <div className="grid grid-rows place-items-center">
            <Image
              src="/ellipse-1.png"
              alt="person 1"
              width={300}
              height={300}
              className="w-[200px] h-[200px] xl:w-[275px] xl:h-[275px] z-[2] hover:cursor-pointer"
            ></Image>
            <h3 className="mt-4 lg:mt-8 xl:mt-12 text-black font-pt_sans text-[18px] lg:text-lg xl:text-2xl">John Doe</h3>
            <p className="text-black font-pt_sans text-[18px] lg:text-lg xl:text-2xl">Hair Stylist</p>
          </div>

          {/* Person-2 */}
          <div className="grid grid-rows place-items-center">
            <Image
              src="/ellipse-2.png"
              alt="person 2"
              width={300}
              height={300}
              className="w-[200px] h-[200px] xl:w-[275px] xl:h-[275px] z-[2] hover:cursor-pointer"
            ></Image>
            <h3 className="mt-4 lg:mt-8 xl:mt-12 text-black font-pt_sans text-[18px] lg:text-lg xl:text-2xl">Maria</h3>
            <p className="text-black font-pt_sans text-[18px] lg:text-lg xl:text-2xl">The Manager</p>
          </div>

          {/* Person-3 */}
          <div className="grid grid-rows place-items-center">
            <Image
              src="/ellipse-3.png"
              alt="person 3"
              width={300}
              height={300}
              className="w-[200px] h-[200px] xl:w-[275px] xl:h-[275px] z-[2] hover:cursor-pointer"
            ></Image>
            <h3 className="mt-4 lg:mt-8 xl:mt-12 text-black font-pt_sans text-[18px] lg:text-lg xl:text-2xl">Chiang Lee</h3>
            <p className="text-black font-pt_sans text-[18px] lg:text-lg xl:text-2xl">Hair Stylist</p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default About;