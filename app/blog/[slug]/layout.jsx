import Link from 'next/link'
import React from 'react'


export const generateStaticParams = async () => {
    const posts = getPostsMetadata()
    return posts.map(post => ({
        params: {
            slug: post.slug
        }
    }))
}

export default function layout({children}) {
  return (
    <>
    <div>
        <Link href="/" className='font-syne hover:underline'>
           {` <- Back to Home`}
        </Link>
    </div>
    {children}
    </>
  )
}
