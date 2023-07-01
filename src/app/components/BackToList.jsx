import Link from 'next/link'
import React from 'react'

export default function BackToList() {
  return (
    <Link href="/blog" className=' hover:underline'>
        &larr; Back To List
    </Link>
  )
}
