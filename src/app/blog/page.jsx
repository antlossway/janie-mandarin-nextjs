import React from "react";
import { getAllPosts, getCategories } from "@/lib/wp-rest";

import PostCard from "../components/(blog)/PostCard";
import Link from "next/link";
import Pagination from "../components/(blog)/Pagination";

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL);

export default async function blog() {
  const { posts, totalNumOfPost, categoryArray: tags } = await getAllPosts();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>;
  }

  return (
    <main className="container py-10">
      <div className="wrapper p-6 grid place-items-center gap-4 ">
        <h1 className="text-center text-3xl sm:text-4xl font-bold">
          Blog posts{" "}
          <span className="text-lg">(total {totalNumOfPost} posts)</span>
        </h1>

        {/* categories only shown in bigger screen */}
        <ul className="hidden place-self-start sm:flex sm:gap-4 sm:justify-between">
          {tags.map((tag) => (
            <li key={tag.id}>
              <Link href={`/tags/${tag.slug}`} className="hover:underline">
                {tag.slug}
              </Link>
            </li>
          ))}
        </ul>

        {/* grid of article card */}
        <ul className="m-10 mx-auto grid grid-cols-12 gap-4 sm:gap-10">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="max-w-xs sm:max-w-none col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-3"
            >
              <PostCard post={post} />
            </li>
          ))}
        </ul>

        {/* <Pagination paginationData={meta.pagination} /> */}
      </div>
    </main>
  );
}
