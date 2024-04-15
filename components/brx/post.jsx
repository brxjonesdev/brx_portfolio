import { Tienne } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

export default function Post({ post }) {
    const { title, publishedDate } = post
    return (
        <Link href={`/posts/${post.slug}`}>
            <section className="flex items-center gap-5 rounded-md border-2 border-black-200 p-4 hover:border-transparent hover:bg-black-200">
                <div className="flex h-14 w-2 items-center justify-center rounded-md bg-mauve"></div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-syne font-semibold text-mauve">
                        {title}
                    </h1>
                    <p className="font-inter text-sm italic text-white-500">
                        {post.description}
                    </p>
                    <div className="flex gap-2">
                        <p className="font-inter text-sm text-white-500">
                            Published:
                        </p>
                        <p className="font-inter text-sm text-white-500">
                            {publishedDate}
                        </p>
                    </div>
                </div>
            </section>
        </Link>
    )
}
