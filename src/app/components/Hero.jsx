import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    // <div id="hero" className='h-[calc(100vh-80px)] bg-cover bg-center'
    //     style={{backgroundImage: "url(/Hero-bg.png)" }}>
    <div
      id="hero"
      className="container sm:h-[calc(100vh-80px)] bg-gradient-to-b from-hero-bg-color/40 to-hero-bg-color  "
    >
      <section className="wrapper sm:h-[calc(100vh-80px)] p-2 flex flex-col items-center justify-center gap-6 sm:flex-row text-white">
        <div className=" gap-12 flex flex-col items-center">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-green-500">
            {/* using clamp in tailwind.config.js to fluidly change font size */}
            <h1 className="font-lato text-intro-clamp text-center font-extrabold sm:text-left">
              <span className="font-grand-hotel font-medium text-white">
                Learn to speak real,
              </span>
              <br />
              <span className="uppercase">Everday Mandarin </span>
              <br />
              <span className="uppercase">with confidence</span>
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center font-noto-sans text-center text-darkgrey/80 ">
            <span className="text-2xl sm:text-3xl tracking-[0.1em]">
              Wǒ yào shuō zhōng wén
            </span>
            <h2 className=" tracking-[0.5em] text-4xl font-medium sm:text-6xl">
              我要说中文
            </h2>
          </div>

          <Image
            width={500}
            height={100}
            src="/feature-list.png"
            alt="feature list"
          />
        </div>

        <Image
          className="rounded-full object-cover border border-whitesmoke-100 "
          width={300}
          height={300}
          // fill={true}
          src="/profile-photo.png"
          // src="/janie-photo.webp"
          alt="profile photo"
        />
      </section>
    </div>
  );
}
