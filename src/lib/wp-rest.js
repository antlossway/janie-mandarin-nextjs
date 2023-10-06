// wordpress rest API

import { myAxios } from "@/lib/myAxios";
import qs from "qs";
// import { postType, postsType } from "../../data";

// example query
//https://example.com/wp-json/wp/v2/posts?categories=13&per_page=100

// yoursite.com/wp-json/wp/v2/posts?orderby=date&order=desc
// the number of posts is included in reseponse HTTP header
// res.headers.get("x-wp-totalpages") || 0;

//search post by tags
//https://13.212.76.243/wp-json/wp/v2/posts?tags=4

const extractDataFromPosts = (posts, catMap) => {
  const postsData = posts.map((post) => {
    return {
      slug: post?.slug,
      title: post?.title.rendered,
      // content: post?.content.rendered,
      excerpt: post?.excerpt.rendered,
      featuredImgUrl: post?.acf.featured_image_url,
      category: catMap.get(parseInt(post?.categories[0])),
    };
  });

  return postsData;
};

export async function getAllPosts() {
  // const res = await myAxios.get("/posts?_embed");
  // const resCat: Map<number, string> = await getCategories(); // Map id => name
  const { categoryMap, categoryMapNameToId } = await getCategories(); // Map id => name

  const categoryArray = Array.from(categoryMap, ([id, slug]) => ({
    id,
    slug,
  }));

  const res = await myAxios.get("/posts?orderby=date&order=desc");
  const data = res.data;
  const posts = extractDataFromPosts(data, categoryMap);

  const totalNumOfPost = parseInt(res.headers["x-wp-total"]);
  // console.log(numOfPost);

  const result = {
    posts: posts,
    totalNumOfPost,
    categoryArray,
  };
  // console.log(result);
  return result;
}

//below is using the result of getAllPosts to extract array of categories(number)
// export async function getCategories(): Promise<number[]> {
//   const { posts, totalNumOfPost } = await getAllPosts(); //deduped

//   if (!posts) return [];

//   const categories = new Set<number>(
//     posts.map((post: postType) => post.category).flat()
//   );

//   return Array.from(categories);
// }

// change below function to arrow function due to some strange typescript error, and add named export "export { getCategories }"
// export async function getCategories(): Promise<{Map<number, string>, Map<string,number>}>
const getCategories = async () => {
  const res = await myAxios.get("/categories?_fields=id,slug");
  const data = res.data; //array of object
  // console.log(data, typeof data);

  const categoryMap = new Map(); // id to name
  const categoryMapNameToId = new Map(); // name to id
  data.forEach((item) => {
    categoryMap.set(item.id, item.slug);
    categoryMapNameToId.set(item.slug, item.id);
  });

  // console.log(categoryMap, typeof categoryMap);
  return { categoryMap, categoryMapNameToId };
};
export { getCategories };

export async function getSinglePost(slug) {
  const { categoryMap, categoryMapNameToId } = await getCategories(); // Map id => name

  const query = qs.stringify(
    {
      slug: slug,
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await myAxios.get(`/posts?${query}`);
  const post = res.data[0];
  // console.log(post);

  return {
    slug: post?.slug,
    title: post?.title.rendered,
    content: post?.content.rendered,
    excerpt: post?.excerpt.rendered,
    // featuredImgUrl: post?.acf.featured_image_url,
    category: categoryMap.get(parseInt(post?.categories[0])),
  };
}

export async function getRecentPosts(num) {
  const { posts, totalNumOfPost } = await getAllPosts(); //deduped

  if (!posts) return [];

  if (num >= totalNumOfPost) {
    return posts;
  } else {
    return posts.slice(0, num);
  }
}

export async function getPostsByCategory(category) {
  // map category name to id
  const { categoryMap, categoryMapNameToId } = await getCategories();

  const query = qs.stringify(
    {
      categories: categoryMapNameToId.get(category),
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await myAxios.get(
    `/posts?${query}&_fields=id,slug,categories,title,excerpt,acf&orderby=date&order=desc`
  );
  const data = res.data;

  // console.log(`getPostsByCategory for ${category}:`, data);

  const posts = extractDataFromPosts(data, categoryMap);

  const totalNumOfPost = parseInt(res.headers["x-wp-total"]);
  // console.log(numOfPost);

  const result = {
    posts: posts,
    totalNumOfPost,
  };
  // console.log(result);
  return result;
}

export async function getPage(slug) {
  const query = qs.stringify(
    {
      slug: slug,
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await myAxios.get(`/pages?${query}`);
  const page = res.data[0];

  return {
    slug: page?.slug,
    title: page?.title.rendered,
    content: page?.content.rendered,
  };
}
