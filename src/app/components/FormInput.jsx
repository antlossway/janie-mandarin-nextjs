import React, { useState } from 'react'

export default function FormInput(props) {
  const [focused, setFocused] = useState(false)

  const {id, label, type, errorMessage, onChange, ...inputProps} = props

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (

    <div className='flex flex-col items-stretch'>
        <label htmlFor={id}>{label}</label>
        {
            type === 'textarea' ?
            <textarea id={id}
                    cols="25"
                    rows="4"
                    className='bg-form-input-bg px-4 py-2 rounded-sm outline-none'
                    {...inputProps}
                    onChange={onChange}  >
                    </textarea>
            :
            <input type={type} id={id}
                className='bg-form-input-bg px-4 py-2 rounded-sm outline-none'
                {...inputProps}
                onChange={onChange}
            />

        }
        <span className="text-sm hidden invalid">{errorMessage}</span>
    </div>
  )
}
