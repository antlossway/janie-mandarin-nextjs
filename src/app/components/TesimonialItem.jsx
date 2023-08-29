import Image from "next/image";
import React from "react";

export default function TesimonialItem({ name, avatar, text }) {
  return (
    <figure className="p-4 flex flex-col items-center gap-4 border border-slate-100 shadow-lg rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <Image width={80} height={80} src={avatar} alt={name} />

        <span className="text-sm font-semibold text-center">{name}</span>
      </div>

      <blockquote className="flex-1 relative max-w-[35ch] bg-slate-100 dark:bg-slate-700 p-4">
        <p
          className="before:absolute
            before:top-[-1rem] before:left-[-0.5rem]
            before:content-[open-quote]
            before:font-bold before:text-4xl before:opacity-80
            before:transform
            before:translate-x-2
            before:translate-y-2
            after:content-[no-close-quote] "
        >
          {text}
        </p>
      </blockquote>
    </figure>
  );
}
