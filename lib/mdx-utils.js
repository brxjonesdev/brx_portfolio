import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const root = path.join(process.cwd(), 'app', 'content')

export const getPostBySlug = async (slug) => {
    const cleanSlug = slug.replace(/\.mdx$/, '')
    const filePath = path.join(root, `${cleanSlug}.mdx`)
    const postContent = fs.readFileSync(filePath, 'utf8')

    const { frontmatter, content } = await compileMDX({
        source: postContent,
        options: { parseFrontmatter: true },
    })

    return { meta: { ...frontmatter, slug: cleanSlug }, content }
}

export const getAllPosts = async () => {
    const files = fs.readdirSync(root)

    let posts = []

    for (const file of files) {
        const { meta } = await getPostBySlug(file)
        posts.push(meta)
    }
    return posts
}
