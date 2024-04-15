import React from 'react'
import { getAllPosts } from '@/lib/mdx-utils'
import Post from '@/components/brx/post'
import Link from 'next/link'

export default async function PostPage() {
    const posts = await getAllPosts()
    return (
        <>
            <div className="flex flex-col gap-2 font-inter">
                <Link href="/">
                    <p className="text-black-700 hover:text-black-600">{`<- Home`}</p>
                </Link>
                <h1 className="font-syne text-2xl font-semibold">
                    Recent writings: 💜
                </h1>
            </div>
            <section className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    {posts.map((post) => (
                        <Post key={post.slug} post={post} />
                    ))}
                </div>
            </section>
        </>
    )
}
