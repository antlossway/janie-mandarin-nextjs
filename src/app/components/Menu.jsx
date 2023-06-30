"use client"

import { useGlobalContext } from '@/context/GlobalContext'
import Link from 'next/link'
import React from 'react'

import { menuItems } from '../data'

const hoverClass = "hover:decoration-2 hover:underline hover:underline-offset-8 hover:decoration-wavy hover:decoration-orange-400 "
const activeClass = "decoration-2 underline underline-offset-8 decoration-wavy decoration-green-500 "


export default function Menu() {
    const {activePage,setActivePage} = useGlobalContext()
  return (

    <nav className='hidden md:flex sm:flex-row items-center justify-center gap-14' aria-label='main'>
        {menuItems.map(item => (
            <Link
             className={ activePage === item.name ? `${hoverClass} ${activeClass}` : hoverClass }
             key={item.id}
             href={item.url}
             onClick={() => setActivePage(item.name)}>
                <span className='capitalize font-lato font-medium '>{item.name}</span>
            </Link>
        ))}

        <Link className="bg-green-500 hover:bg-green-600 transition-all active:translate-y-1 text-white px-4 py-2 rounded-md font-semibold"
         href="#contact">Contact me</Link>
    </nav>

  )
}
