import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h1>The requested post does not exist</h1>
            <p>
                <Link href="/blog">&larr; Back To List</Link>
            </p>
    </main>

  )
}