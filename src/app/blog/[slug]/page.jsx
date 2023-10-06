import React from "react";
import BackToList from "@/app/components/BackToList";
import { getCategories, getSinglePost } from "@/lib/wp-rest";
import parseHTML from "html-react-parser";
import Link from "next/link";

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL);

// export async function generateStaticParams() {
//   const { posts } = await getBlogPosts(); //deduped
//   if (!posts) return [];

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const post = await getPostByName(slug);

//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }

//   return {
//     title: post.title,
//     date: formatDate(post.date),
//     description: post.description,
//     tag: post.tag,
//   };
// }
export default async function BlogPost({ params }) {
  const { slug } = params;
  // const posts = await getBlogPosts()
  // const post = posts.find(post => post.slug === slug )

  const post = await getSinglePost(slug);
  if (!post) return <p>post does not exists</p>;

  return (
    <main className="wrapper py-10">
      <article
        className="p-4 prose prose-base md:prose-lg prose-slate
      dark:bg-black/80 dark:prose-invert prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline"
      >
        <h1 className="capitalize">{post.title}</h1>
        <Link href={`/tags/${post.category}`}>
          <span className="ml-5">#{post.category}</span>
        </Link>

        {parseHTML(post.content)}
      </article>
      <BackToList />
    </main>
  );
}
