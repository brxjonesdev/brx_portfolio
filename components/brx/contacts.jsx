import React from 'react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import github from '@/public/github.svg'
import linkedin from '@/public/linkedin.svg'
import twitter from '@/public/twitter.svg'
import Image from 'next/image'

export default function Contacts() {
    return (
        <div>
            <div className="flex gap-3 font-inter">
                <Link href="https://github.com/brxjonesdev">
                    <div className="flex items-center justify-between gap-3 rounded-sm bg-black-500  px-4 py-2 text-sm hover:bg-black-600">
                        <Image
                            src={github}
                            alt="Github"
                            width={20}
                            height={20}
                        />
                        <p className="font-medium">Github</p>
                    </div>
                </Link>
                <Link href="https://www.linkedin.com/in/braxtonjonesdev/">
                    <div className="flex items-center justify-between gap-3 rounded-sm bg-black-500  px-4 py-2 text-sm hover:bg-black-600">
                        <Image
                            src={linkedin}
                            alt="LinkedIn"
                            width={20}
                            height={20}
                        />
                        <p className="font-medium">LinkedIn</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
