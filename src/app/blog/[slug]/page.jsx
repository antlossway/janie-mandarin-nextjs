import { getBlogPosts, getPostByName } from '@/lib/posts'
import React from 'react'
import formatDate from '@/lib/formatDate'
import ReactMarkdown from 'react-markdown'
import BackToList from '@/app/components/BackToList'

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL)

export async function generateStaticParams() {
  const posts = await getBlogPosts() //deduped
  if(!posts) return []

  return posts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata ({params}) {
  const {slug} = params
  const post = await getPostByName(slug)

  if(!post) {
    return {
      title: "Post Not Found"
    }
  }

  return {
    title: post.title,
    date: formatDate(post.date),
    description: post.description,
    tag: post.tag
  }
}
export default async function BlogPost({params}) {
  const {slug} = params
  // const posts = await getBlogPosts()
  // const post = posts.find(post => post.slug === slug )

  const post = await getPostByName(slug)
  if (!post) return (
    <p>post does not exists</p>
  )

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
      <BackToList />
    </main>
    )
}
