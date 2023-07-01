import React from 'react'
import { getBlogPosts, getBlogTags } from '@/lib/posts'
import PostCard from '../components/(blog)/PostCard'
import Link from 'next/link'

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL)


export default async function blog() {
  const posts = await getBlogPosts()

  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available</p>
  }

  //get all categories
  const tags = await getBlogTags()
  // console.log("debug tags: ", tags)

  return (
    <main className='container py-10'>
      <div className='wrapper grid place-items-center place-content-center '>
        <h1 className='text-center text-3xl sm:text-4xl font-bold'>Blog posts (total {posts.length} posts)</h1>

        <ul className='m-10 mx-auto grid grid-cols-12 gap-4 sm:gap-10'>

          {posts.map(post => (
            <li key={post.id} className='max-w-xs sm:max-w-none col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-3'>
              <PostCard post={post} />
            </li>

          )
          )}
        </ul>

        <ul className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
        {
          tags.map((tag,index) => (
            <Link key={index} href={`/tags/${tag}`}>{tag}</Link>
          ))
        }
        </ul>


      </div>
    </main>
  )
}
