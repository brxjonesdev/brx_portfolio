import React from 'react'
import fs from 'fs'
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
  } from "@/components/ui/card"
  


const getPostsContent = (slug) => {
    const folder = 'brx_posts/'
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult = matter(content)
    return matterResult
}
export default function page(props) {
    const slug = props.params.slug
    const post = getPostsContent(slug)
  return (
    <>
    <Card className="bg-mauve-500">
        <CardHeader>
            <CardTitle className="font-syne">{post.data.title}</CardTitle>
            <CardDescription className="font-inter italic text-right">{post.data.date}</CardDescription>
        </CardHeader>
    </Card>
    <article className='prose prose-zinc prose-invert font-inter mb-8  prose-headings:text-mauve-500 prose-headings:font-syne'>
        <Markdown>{post.content}</Markdown>
    </article>
    </>
  )
}
