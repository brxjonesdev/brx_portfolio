import React from 'react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import github from '@/public/github.svg'
import linkedin from '@/public/linkedin.svg'
import twitterX from '@/public/twitter-x.svg'
import Image from 'next/image'

export default function Contacts() {
    return (
        <div>
            <div className="flex gap-3 font-inter">
                <Link href="https://github.com/Braxton-Jones">
                    <div className="rounded-sm bg-black-500 px-4 py-2 text-sm hover:bg-black-700 ">Github</div>
                </Link>
                <Link href="https://www.linkedin.com/in/braxtonjonesdev/">
                    <div className="rounded-sm bg-black-500 px-4 py-2 text-sm hover:bg-black-700">LinkedIn</div>
                </Link>
                <Link href="https://twitter.com/brxjonesdev">
                    <div className="rounded-sm bg-black-500 px-4 py-2 text-sm hover:bg-black-700">X</div>
                </Link>
            </div>
        </div>
    )
}
