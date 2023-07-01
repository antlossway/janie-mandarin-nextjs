import { myAxios } from "./myAxios"
import { uploadUrl } from "./url"
import formatDate from "./formatDate"

export function getCoverUrl(coverUrl) {
    if (!coverUrl) {
        //default-blog-cover.jpg is hosted on frontend site
        coverUrl = "/default-blog-cover.jpg"
    } else {
        coverUrl = uploadUrl + coverUrl
    }
    // console.log("debug getCoverUrl: ", coverUrl)
    return coverUrl
}


export async function getBlogPosts() {
//"http://127.0.0.1:1337/api/articles"

    const res = await myAxios.get('/articles?populate=*')
    const posts = res.data.data

    // console.log("debug original post: ", posts[0].attributes.category.data.attributes.name)
    // console.log("debug original cover: ", posts[0].attributes.cover.data)
  // console.log(posts[0].attributes.blocks)

  // console.log(posts[0].attributes.cover.data.attributes.formats.small.url)
  //   console.log(posts[0].attributes.cover.data.attributes.alternativeText)

    const postsData = posts.map(post => {

        // update image path to strapi upload url,otherwise next.js will try to find image on frontend site and can not find it
        const content = post.attributes.content.replace(/\/uploads/g, `${uploadUrl}/uploads/`)

        return {
            id: post?.id,
            title: post?.attributes?.title || "blog title",
            description: post?.attributes?.description || "blog description",
            slug: post?.attributes?.slug,
            coverUrl: getCoverUrl(post?.attributes?.cover?.data?.attributes?.formats?.small?.url),
            coverAlt: post?.attributes?.cover?.data?.attributes?.alternativeText || "cover photo",
            content: content,
            date: formatDate(post.attributes.updatedAt),
            tag: post?.attributes?.category?.data?.attributes?.name,
        }
    })

    // console.log("debug after processed postsData: ", postsData[0])

    return postsData

}

export async function getPostByName(slug) {
    const posts = await getBlogPosts()
    const post = posts.find(post => post.slug === slug )

    if (!post) return undefined

    return post
}

export async function getBlogTags() {
    const posts = await getBlogPosts() //deduped

    if (!posts) return []

    const tags = new Set(posts.map(post => post.tag).flat())

    // return Array.from(tags).map(tag => {tag})
    return Array.from(tags)
}