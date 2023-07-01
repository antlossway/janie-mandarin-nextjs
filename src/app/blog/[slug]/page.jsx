import { getBlogPosts } from '@/lib/posts'
import React from 'react'
import formatDate from '@/lib/formatDate'
import ReactMarkdown from 'react-markdown'

export default async function BlogPost({params}) {
  const {slug} = params
  const posts = await getBlogPosts()
  const post = posts.find(post => post.slug === slug )

  return (
    <main className='wrapper py-10'>
      <article className='p-4 prose prose-base md:prose-lg prose-slate dark:prose-invert prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline'>
        <h1 className='capitalize'>{post.title}</h1>
        <span>{post.date}</span>
        <ReactMarkdown>
          {post.content}
        </ReactMarkdown>
        {/* <ReactMarkdown># Hello, *world*!</ReactMarkdown> */}
      </article>
    </main>
    )
}
