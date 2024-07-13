import Link from 'next/link'
import React from 'react'

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
