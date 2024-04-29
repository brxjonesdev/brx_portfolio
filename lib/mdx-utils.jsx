const fs = require('fs')
const path = require('path')
import { compileMDX } from 'next-mdx-remote/rsc'


export const getPostBySlug = async (slug) => {
    const cleanSlug = slug.replace(/\.mdx$/, '')
    const filePath = path.join(process.cwd(), 'app/content', `${cleanSlug}.mdx`)
    const postContent =  fs.readFileSync(filePath, 'utf8')

    const { frontmatter, content } = await compileMDX({
        source: postContent,
        options: { parseFrontmatter: true },
    })

    return { meta: { ...frontmatter, slug: cleanSlug }, content }
}

export const getAllPosts = async () => {
    const files = fs.readdirSync('app/content')

    let posts = []

    for (const file of files) {
        const { meta } = await getPostBySlug(file)
        posts.push(meta)
    }
    return posts
}
