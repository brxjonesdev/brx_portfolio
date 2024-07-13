import React from 'react'
import getPostsMetadata from '@/lib/getPostsMetadata'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link'
  



export default function BlogPost() {
    const blogPosts = getPostsMetadata()
    const postPreviews = blogPosts.map(post => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
        <Card key={post.slug} className="bg-transparent border-black-600 border-2 flex hover:border-mauve-500">
            <div className='flex p-5 gap-5'>
                <div className="h-full w-2 bg-mauve-500 rounded-md"/>
                <div>
                <CardTitle className="font-syne text-md text-white">{post.title}</CardTitle>
                <CardDescription className="font-inter">{post.description}</CardDescription>
                </div>
            </div>
        </Card>
        </Link>
    ))
   
    return (
        <>
        <h2 className='font-syne text-lg font-semibold'>
           Featured Blog Posts!
        </h2>
        <ul>
            {postPreviews}
        </ul>
        </>
    )
}
