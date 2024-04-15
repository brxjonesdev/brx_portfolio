import React from 'react'
import Project from '../../components/brx/project'
import Link from 'next/link'
import CurrentEvents from '@/components/brx/whatsnew'

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
            <CurrentEvents>
                <h1 className="font-syne text-xl font-semibold ">
                    {`What I'm working on now:`}
                </h1>
                <p className="font-inter text-sm ">
                    {`I'm currently working on a project called BlossomAI. It's a platform that makes #buildinpublic easier by providing a platform for tracking your progress and sharing it with the world.`}
                </p>
                <div className="mt-4 w-full  text-right">
                    <Link href="#">
                        <p className="font-inter text-sm underline-offset-2 hover:underline">
                            {` View Project ->`}
                        </p>
                    </Link>
                </div>
            </CurrentEvents>
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
