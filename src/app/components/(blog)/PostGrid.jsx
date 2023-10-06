import React from "react";
import PostCard from "./PostCard";

const PostGrid = ({ posts, totalNumOfPost }) => {
  return (
    <div className="mx-auto grid grid-cols-12 gap-4 sm:gap-10">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="max-w-xs sm:max-w-none col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-3"
        >
          <PostCard key={post.slug} post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
