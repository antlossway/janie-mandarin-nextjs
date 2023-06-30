import React from 'react'

export default function FormInput({data}) {

  return (

    <div className='flex flex-col items-stretch'>
        <label htmlFor={data.inputId}>{data.label}</label>
        {
            data.type === 'textarea' ?
            <textarea id={data.inputId} required
                    cols="25"
                    rows="4"
                    className='bg-form-input-bg px-4 py-2 rounded-sm outline-none'>
                    </textarea>
            :
            <input type={data.type} id={data.inputId} required
                className='bg-form-input-bg px-4 py-2 rounded-sm outline-none'/>
        }
    </div>
  )
}
