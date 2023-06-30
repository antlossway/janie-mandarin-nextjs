"use client"

import React from 'react'
import FormInput from './FormInput'

const items = [
    {
        inputId: "name",
        label: "name",
        type: "text"
    },
    {
        inputId: "email",
        label: "email",
        type: "email"
    },
    {
        inputId: "message",
        label: "message",
        type: "textarea"
    },
]

export default function ContactForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form id="contact"
        onSubmit={handleSubmit}
        className='max-w-md flex flex-col items-start gap-4' >

        <h1 className='font-grand-hotel text-3xl'>Send me a message</h1>
        <div className='flex flex-col items-stretch gap-4'>
        {
            items.map(item => (
                <FormInput key={item.inputId} data={item} />
            ))
        }

        <button className="bg-green-500 hover:bg-green-600 transition-all active:translate-y-1 text-white px-4 py-2 rounded-md font-semibold "
         >Submit</button>
        </div>
    </form>
  )
}
