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
import blossom_1 from '../../public/Blossom-1.png'
import blossom_2 from '../../public/Blossom-2.png'
import chaery_1 from '../../public/Chaery-1.png'
import chaery_2 from '../../public/Chaery-2.png'
import matchanym_1 from '../../public/Matchanym-1.png'
import matchanym_2 from '../../public/Matchanym-2.png'

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
            <Card className="border-none bg-lavender-600">
                <CardHeader>
                    <CardTitle className="font-syne text-3xl font-medium ">{`What I'm working on now:`}</CardTitle>
                </CardHeader>
                <CardContent className="text-md font-inter leading-relaxed ">
                {
    `I'm working on an open-source alternative to budgeting apps called MisoMoney, which allows for various methods of budgeting such as zero dollar and envelope. Additionally, I'm developing a learning platform called StudioSuede, focused on teaching synthesis techniques.`
}

                </CardContent>
                <CardFooter className="flex gap-4 md:flex-row flex-col" >
                    <Button
                        asChild
                        className="w-full bg-black-400 hover:bg-black-600"
                    >
                        <Link href="https://github.com/brxjonesdev/miso_money">
                            <p className="font-inter text-sm underline-offset-2 hover:underline">
                                View <span className="font-semibold text-lavender">MisoMoney</span> on Github -{'>'}
                            </p>
                        </Link>
                        </Button>
                        <Button
                        asChild
                        className="w-full bg-black-400 hover:bg-black-600"
                    >
                        <Link href="https://studiosuede.netlify.app/">
                            <p className="font-inter text-sm underline-offset-2 hover:underline">
                                View <span className="font-semibold text-lavender">StudioSuede</span> on Github -{'>'}
                            </p>
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

            <section className="flex flex-col gap-3">
                <Project
                    name="Chaery"
                    description="Chaery helps couples stay connected and aligned on their financial goals, events and daily chores. Chaery enhances relationships by offering a dedicated platform for couples to manage and plan their future together."
                    link="https://chaery.vercel.app/"
                />
                <Project
                    name={'Aspire'}
                    description="Aspire is a versatile platform designed for users to create, manage, and share their wishlists with ease and convenience."
                    link="https://aspire-brx.netlify.app/"
                />

                <Project
                    name={'Crave'}
                    description="Using a turn-based voting system, Crave is a fun and interactive platform for friends to decide where to eat."
                    link="https://eatimatum.netlify.app/"
                />
                <Project
                    name="BlossomAI"
                    description="BlossomAI simplifies the #buildinpublic movement by providing a comprehensive platform for tracking your progress and sharing your journey with the world whether you're building a startup or working on a personal project."
                    link="https://blossom-ai-rose.vercel.app/"
                />
                <Project
                    name="Audiophile"
                    description="Audiophile is a sleek and modern e-commerce platform dedicated to selling high-end audio equipment."
                    link="https://audiophile-brx.netlify.app/"
                />

                <Project
                    name="Matchanym"
                    description="Matchanym is an engaging and educational word game where players match synonyms. It's a fun way to expand your vocabulary and challenge your linguistic skills."
                    link="https://matchanym-game.netlify.app/"
                />

                <Project
                    name="Paytrak"
                    description="Paytrak simplifies the process of creating and tracking invoices for your clients."
                    link="https://braxton-markdown-app.netlify.app/"
                />

                <Project
                    name="Textflow"
                    description="Textflow is a minimalist writing app designed to help you focus solely on your writing by removing all distractions. It's the perfect tool for writers looking to boost their productivity."
                    link="https://invoice-app-brx.netlify.app/"
                />
            </section>
        </>
    )
}
