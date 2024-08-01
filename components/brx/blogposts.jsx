import React from 'react'
import getPostsMetadata from '@/lib/getPostsMetadata'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function BlogPost() {
    const blogPosts = getPostsMetadata()
    const postPreviews = blogPosts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
                <Card
                    key={post.slug}
                    className="flex w-full border-2 border-black-600 bg-transparent hover:border-mauve-500"
                >
                    <div className="flex gap-5 p-5">
                        <div className="h-full min-w-2 rounded-md bg-mauve-500" />
                        <div className='space-y-2'>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-md font-syne text-white">
                                    {post.title}
                                </CardTitle>
                                <CardDescription className="font-inter font-bold text-mauve-600">
                                    {post.date}
                                </CardDescription>
                            </div>

                            <CardDescription className="font-inter">
                                {post.description}
                            </CardDescription>
                        </div>
                    </div>
                </Card>
            </Link>
        ))

    return (
        <>
            <h2 className="mb-4 font-syne text-lg font-semibold">
                Featured Blog Posts!
            </h2>
            <section className="flex flex-wrap gap-5">{postPreviews}</section>
        </>
    )
}
