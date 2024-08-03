import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

import Link from 'next/link'

export default function AboutMe() {
    return (
        // <div className="flex flex-col gap-1 text-white">
        //     <h2 className="text-md font-syne font-semibold text-white">
        //         {`About Me:`}
        //     </h2>
        //     <p className="text-md font-inter font-normal text-black-900 ">
        //         Hey! I&apos;m Braxton Jones, a full-stack React web developer with several years of project experience.
        //     </p>

        // </div>
        <Card className="rounded-xl border-2 border-black-400 bg-transparent">
            <CardHeader className="">
                <CardTitle className="font-syne text-xl font-semibold text-white">
                    {`Hello, I'm Braxton Jones.`}
                </CardTitle>
                {/* <CardDescription className="italic font-inter">
                    Full-stack React web developer
                </CardDescription> */}
            </CardHeader>
            <CardContent className="space-y-2 font-inter font-normal leading-6 text-black-900">
                <p>
                    {`I'm a full-stack React web developer with several years of project experience. I have a passion for creating beautiful, user-friendly interfaces and am always looking for new ways to improve my skills. In my time as a developer, I have worked on a variety of projects, each one helping me to grow and learn new things.`}
                </p>
                <p>
                    {`Currently, I'm working on an exciting project called Muse, a platform designed to help artists interact with fans, sell music and merch, and promote themselves. I'm building Muse using Next.js 14, TailwindCSS, Typescript, and a variety of other technologies. You can follow along with my progress here -> `}
                    <Link href="https://muse-ten-henna.vercel.app/" className='italic text-mauve-600 hover:underline'>
                     Muse
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}
