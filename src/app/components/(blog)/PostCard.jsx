import Image from 'next/image'
import React from 'react'
import { uploadUrl } from '@/lib/url'
import Link from 'next/link'

export default function PostCard({post}) {
  const {title, description, slug,coverUrl, coverAlt} = post

  return (
    // to make each card same height, need to use h-full
    <Link href={`/blog/${slug}`}  >
      <div className='h-full
       bg-white rounded-lg shadow-md
       flex flex-col items-center gap-4 text-center'>
            <figure className='relative w-full h-[200px] overflow-hidden '>
              <Image className='object-cover object-center '
                  fill={true}
                  // width={400}
                  // height={200}
                  src={coverUrl}
                  alt={coverAlt}
                  />
            </figure>
          <div className='w-full p-4 flex flex-col items-center gap-2 text-center'>
            <h2 className='text-3xl '>{title}</h2>
            <p className="text-normal max-w-[30ch] flex-1">
              {description}
            </p>
          </div>
      </div>
      </Link>
  )
}
