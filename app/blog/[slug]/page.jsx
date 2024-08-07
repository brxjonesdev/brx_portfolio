import React from 'react'
import fs from 'fs'
import path from 'path'
import Markdown from 'react-markdown'
import matter from 'gray-matter'
import getPostsMetadata from '@/lib/getPostsMetadata'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

export const getPostsContent = (slug) => {
    const folder = path.join(process.cwd(), 'brx_posts')
    const file = `${folder}/${slug}.md`

    try {
        const content = fs.readFileSync(file, 'utf8')
        const matterResult = matter(content)
        return matterResult
    } catch (error) {
        console.error(`Error reading file ${file}:`, error)
        return { error: 'File not found or could not be read.' }
    }
}

export const generateStaticParams = async () => {
    const posts = getPostsMetadata()
    return posts.map((post) => ({
        params: {
            slug: post.slug,
        },
    }))
}

export default function Page(props) {
    const slug = props.params.slug
    const post = getPostsContent(slug)

    if (post.error) {
        return (
            <Card className="bg-mauve-500">
                <CardHeader>
                    <CardTitle className="font-syne">Error</CardTitle>
                </CardHeader>
                <CardContent className="font-inter italic">
                    {post.error}
                </CardContent>
            </Card>
        )
    }

    return (
        <>
            <Card className="bg-mauve-500">
                <CardHeader>
                    <CardTitle className="font-syne">
                        {post.data.title}
                    </CardTitle>
                    <CardDescription className="font-inter italic text-black-400">
                        {post.data.description}
                    </CardDescription>
                </CardHeader>
            </Card>
            <article className="prose prose-zinc prose-invert mb-8 min-w-full font-inter prose-headings:font-syne prose-headings:text-mauve-500">
                <Markdown>{post.content}</Markdown>
            </article>
        </>
    )
}
