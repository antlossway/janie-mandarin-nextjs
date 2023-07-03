"use client"

import React, { useState } from 'react'
import FormInput from './FormInput'
import Loader from './Loader'

const inputs = [
    {
        id: "name",
        name: "name",
        label: "name",
        type: "text"
    },
    {
        id: "email",
        name: "email",
        label: "email",
        type: "email",
        required: true,
    },
    {
        id: "message",
        name: "message",
        label: "message",
        type: "textarea",
            // pattern does not work for textarea
        pattern: "\w{3,}",
        errorMessage: "Please type your message",
        required: true,
    },
]

export default function ContactForm() {
    const [formStatus, setformStatus] = useState('') //loading, sent, error
    const [sent, setSent] = useState(false)
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    })

    const reset = () => {
        //reset form field
        setValues({
            name: '',
            email: '',
            message: ''
        })

        setformStatus('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setformStatus('loading')
        // const res = await fetch('/api/sendmail', {
        //     method: 'POST',
        //     header: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         subject: `${values.name} send you a message`,
        //         message: values.message,
        //         type: "newMessage"
        //     })
        // })

        // if(res.ok) {
        //     setSent(true)
        //     setformStatus('sent')
        //     reset()
        // } else {
        //     setformStatus('error')
        // }

        // simulate delay
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setSent(true)
        reset()
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }


  return (
    <>
    <form id="contact"
        onSubmit={handleSubmit}
        className='max-w-[320px] flex flex-col items-start gap-4' >

        <h1 className='font-grand-hotel text-3xl'>Send me a message</h1>

        <div className='flex flex-col items-stretch gap-4'>
        {
            inputs.map(input => (
                <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.id]}
                    onChange={onChange} />
            ))
        }

        <button className="bg-green-500 hover:bg-green-600 transition-all active:translate-y-1 text-white px-4 py-2 rounded-md font-semibold
        disabled:bg-gray-400
        disabled:cursor-not-allowed "
        type="submit"
        disabled={formStatus === 'loading'}
         >Submit</button>
        </div>

              {/* If there was an error, notify the user */}
      {formStatus === 'error' ? (
        <div className="text-red-500">
          Oops, there was an error sending your email. Please try again.
        </div>
      ) : null}

            {/* If the form was submitted successfully, notify the user */}
      {sent && (
        // <div className="mt-4 mb-2 text-center">
        <div className="self-center">
          Thank you, I will come back to you soon!
        </div>
      )}

         {/* Send Mesage button, will be disabled while loading and show an icon with a message */}
        {formStatus === 'loading' && (
            <div className="self-center">
                <Loader />
            </div>
            )
        }
    </form>

    </>
  )
}
