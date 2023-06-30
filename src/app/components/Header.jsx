"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Menu from './Menu'
import { menuItems } from '../data'
import Link from 'next/link'

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMobileMenu = () => {
        setShowMobileMenu(prev => !prev)
    }

    const hoverClass = "hover:decoration-2 hover:underline hover:underline-offset-8 hover:decoration-wavy hover:decoration-orange-400 "

  return (
    // white will extend the full screen wide
    // height of header is around 80px
        <header className='container bg-white sticky top-0 z-10 h-20 '>
            <section className="wrapper h-full p-4 flex justify-between items-center ">

                <Image
                    width={100}
                    height={50}
                    src="/Logo.png"
                    alt="logo"
                    />
                <div>
                    {/* hamberger icon */}
                    <button id="hamburger-btn" className="text-3xl md:hidden cursor-pointer"
                       onClick={toggleMobileMenu} >
                        &#9776;
                    </button>
                </div>

                {/* menu only show in bigger screen */}
                <Menu />

            </section>

            {/* click any empty area of the mobile-menu will close the menu */}
            <section id="mobile-menu" className={showMobileMenu ? "absolute top-0 right-0 bg-black w-2/3 text-4xl flex flex-col justify-center origin-top animate-open-menu"
            : 'hidden' }
                onClick={toggleMobileMenu}>
                {/* close button */}
                <button className="text-5xl self-end px-6"
                   onClick={toggleMobileMenu} >
                    &times;
                </button>

                <nav className="flex flex-col min-h-screen items-center py-8 gap-10" aria-label='mobile'>
                    {menuItems.map(item => (
                        <Link
                            className={ hoverClass }
                            key={item.id}
                            href={item.url}>
                            <span className='capitalize font-lato font-medium '>{item.name}</span>
                        </Link>
                    ))}

                    <Link className="bg-green-500 hover:bg-green-600 transition-all active:translate-y-1 text-white px-4 py-2 rounded-md font-semibold"
            href="/#contact">Contact me</Link>
                </nav>

            </section>
        </header>

  )
}