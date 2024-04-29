import React from 'react'
import Project from '../../components/brx/project'
import Link from 'next/link'
import CurrentEvents from '@/components/brx/whatsnew'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function page() {
    return (
        <>
            <div className="flex flex-col gap-2 font-inter">
                <Link href="/">
                    <p className="text-black-700 hover:text-black-600">{`<- Home`}</p>
                </Link>
                <h1 className="font-syne text-2xl font-semibold">
                    All of my projects 💜
                </h1>
            </div>
            <Card className="bg-lavender-600 border-none">
                <CardHeader>
                    <CardTitle className="font-syne text-3xl font-medium ">{`What I'm working on now:`}</CardTitle>
                </CardHeader>
                <CardContent className="text-md font-inter leading-relaxed ">
                    {`
               I'm currently working on my newest project, Chaery. It's a platform for keeping track of things in your relationship and staying on the same page emotionally and logistically with your significant other. It makes it easier to maintain a budget, plan more dates, and most importantly (to me) decide where you are eating.
                    `}
                </CardContent>
                <CardFooter className="">
                    <Button asChild className='w-full bg-black-400 hover:bg-black-600'>
                    <Link href="https://github.com/Braxton-Jones/chaery">
                        <p className="font-inter text-sm underline-offset-2 hover:underline">
                            {` View Project on Github ->`}
                        </p>
                    </Link>
                    </Button>
                </CardFooter>
            </Card>

            <section className="flex flex-col gap-3">
                <Project
                    name="BlossomAI"
                    description="Makes #buildinpublic easier by providing a platform for tracking your progress and sharing it with the world."
                    link="https://blossom-ai-rose.vercel.app/"
                />
                <Project
                    name="Audiophile"
                    description="An e-commerce platform for high-end audio equipment."
                    link="https://audiophile-brx.netlify.app/"
                />
                <Project
                    name="Matchanym"
                    description="A little wordgame I made where you match synonyms."
                    link="https://matchanym-game.netlify.app/"
                />
                <Project
                    name="Paytrak"
                    description="Create and track invoices for your clients."
                    link="https://braxton-markdown-app.netlify.app/"
                />
                <Project
                    name="Textflow"
                    description="A writing app that helps you focus on your writing by removing all distractions."
                    link="https://invoice-app-brx.netlify.app/"
                />
            </section>
        </>
    )
}
