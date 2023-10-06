import PostGrid from "@/app/components/(blog)/PostGrid";
import BackToList from "@/app/components/BackToList";
import { getPostsByCategory } from "@/lib/wp-rest";

import React from "react";

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL);

// export async function generateStaticParams() {
//   const { posts } = await getBlogPosts(); //deduped

//   if (!posts) return [];

//   const tags = new Set(posts.map((post) => post.tag).flat());

//   // return Array.from(tags).map(tag => {tag})
//   return Array.from(tags);
// }

// export async function generateMetadata({ params }) {
//   const { tag } = params;

//   return {
//     title: `posts in category ${tag}`,
//   };
// }

export default async function TagPostList({ params }) {
  const { tag } = params;
  const { posts, totalNumOfPost } = await getPostsByCategory(tag);
  if (!posts) return <p>Category `${tag}` has no articles</p>;

  return (
    <div className="wrapper mx-auto py-8 grid place-items-center gap-4">
      <h1 className="text-center text-3xl font-bold">#{tag}</h1>
      <span className="text-lg">(total {totalNumOfPost})</span>
      <div className="text-left">
        <BackToList />
      </div>

      <PostGrid posts={posts} totalNumOfPost={totalNumOfPost} />
    </div>
  );
}
