import React from "react";
import Image from "next/image";
// import parseHTML from "html-react-parser";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        className="relative h-full bg-white dark:bg-stone-300 rounded-lg shadow-md
      flex flex-col items-center gap-4 text-center
    "
      >
        {/* post featured image */}
        <figure className="relative w-full h-[200px] overflow-hidden">
          <Image
            className="object-cover object-center"
            src={post.featuredImgUrl}
            alt="post image"
            fill
          />
        </figure>

        {/* post title and excerpt */}
        <div
          className="w-full p-4 flex-1
        flex flex-col items-center gap-2 text-center"
        >
          <h1 className="text-2xl">{post.title}</h1>
          {/* <div className="text-normal max-w-[30ch]">
            {parseHTML(post.excerpt)}
          </div> */}
        </div>

        {/* category */}
        <span className="self-start p-4  font-medium text-xs uppercase italic text-purple-500 ">
          {post.category}
        </span>
      </div>
    </Link>
  );
};

export default PostCard;
