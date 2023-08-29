import Image from "next/image";
import React from "react";

export default function Introduction() {
  return (
    <div
      id="introduction"
      className=" container py-10 bg-mintcream dark:bg-darkmintcream dark:text-white/80 "
    >
      <section className="wrapper p-4 py-6 flex flex-col justify-between items-start sm:flex-row gap-10">
        <div id="intro-left" className="flex-1">
          <h2 className="font-lato text-4xl text-center mb-6">Who am I</h2>
          <Image
            width={769}
            height={511}
            src="/intro-img.png"
            alt="photo of Janie and student"
          />
        </div>

        <div
          id="intro-right"
          className="flex-1 font-lato text-lg max-w-[50ch] [&>*:is(p)]:mb-4"
        >
          <h2 className="font-lato text-4xl mb-4">
            <span className="font-grand-hotel">Hello! </span>I'm Janie Chen
          </h2>
          <p>
            I am a professional Chinese teacher with a passion to share my love
            for Chinese language(mandarin) and culture!
          </p>
          <p>
            I started teaching Chinese in Yangshuo (Guilin), China in 2007. In
            2009, I took a break to study "Teaching Mandarin as a second
            language" (1 year programme for teachers) in Beijing Culture and
            Language University (BLCU). After that I continued to teach in
            Yangshuo until 2014. In the following years, I have taught in Hong
            Kong and Singapore, and now in Belgium 😊!
          </p>
          <p>
            I provide 1-to-1 private tutoring online or in person if in the same
            city. My teaching mainly focus on practising daily topics as well as
            Business topics. The study plan and materials are custom tailored
            for each student.
          </p>
          <p>
            I'm open-minded about using online resources and language games or
            apps to help students review lessons and practice their skills in a
            fun and efficient way.
          </p>
          <p>
            If you want to confidently speak Chinese, I’m here to guide you,
            answering questions about anything and everything Chinese, so join
            me for learning and fun!
          </p>
        </div>
      </section>
    </div>
  );
}
