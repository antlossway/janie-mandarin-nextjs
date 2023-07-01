import PostCard from '@/app/components/(blog)/PostCard'
import BackToList from '@/app/components/BackToList'
import { getBlogPosts } from '@/lib/posts'
import Link from 'next/link'
import React from 'react'

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL)

export async function generateStaticParams() {
    const posts = await getBlogPosts() //deduped

    if (!posts) return []

    const tags = new Set(posts.map(post => post.tag).flat())

    // return Array.from(tags).map(tag => {tag})
    return Array.from(tags)
}

export async function generateMetadata({params}) {
    const {tag} = params

    return {
        title: `posts in category ${tag}`
    }
}

export default async function TagPostList({params}) {
    const {tag} = params
    const posts = await getBlogPosts()
    if(!posts) {
        return <p className='mt-10 text-center'>Sorry, no posts available for category {tag}</p>
    }

    const tagPosts = posts.filter(post => post.tag === tag)

    // console.log("posts in category: ",tag,  tagPosts)

    if (!tagPosts.length) {
        return (
            <div className='text-center'>
                <p className='mt-10'>
                    Sorry, no posts has that tag.
                </p>
                <Link href="/blog">Back to List</Link>
            </div>
        )

    }
  return (
    <main className='container py-10'>
        <div className='wrapper grid place-items-center place-content-center '>
            <h1 className='text-center text-3xl sm:text-4xl font-bold'>Posts in category #{tag}</h1>
            <ul className='m-10 mx-auto grid grid-cols-12 gap-4 sm:gap-10'>

            {tagPosts.map(post => (
                <li key={post.id} className='max-w-xs sm:max-w-none col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-3'>
                <PostCard post={post} />
                </li>

            )
            )}
            </ul>

            <BackToList />
        </div>
    </main>
  )
}
