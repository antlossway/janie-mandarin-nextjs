import Image from 'next/image'
import React from 'react'
import ContactForm from './ContactForm'

export default function Footer() {
  return (
    <div className='container bg-hero-bg-color py-10'>
      <section className="wrapper flex flex-col items-center justify-center gap-10 sm:flex-row sm:items-start sm:justify-around ">
          <Image className='rounded-full object-cover border border-whitesmoke-100 '
                width={100}
                height={100}
                // fill={true}
                src="/janie-photo.webp"
                alt="profile photo" />

          <ContactForm />
          <div className='flex flex-col gap-2 text-sm'>
            <span>Email address: janiechinese@gmail.com</span>
            <span>Wechat number: janie-chen-mandarin</span>
          </div>

      </section>

    </div>
  )
}
