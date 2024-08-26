import Contacts from '../components/brx/contacts'
import AboutMe from '../components/brx/aboutme'
import Logo from '../components/brx/logo'
import Link from 'next/link'
import Post from '../components/brx/post'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/ui/card'
import BlogPosts from '../components/brx/blogposts'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../components/ui/dialog'
import Projects from '../components/brx/projects'
import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import BlossomImage from '@/public/Blossom-1.png'

export default async function Home() {
    const projects = await prisma.project.findMany()
    return (
        <>
            <section className="flex flex-wrap items-center justify-between gap-3">
                <Logo />
                <Contacts />
            </section>

            <section className="flex flex-col gap-3">
                <AboutMe />
            </section>
            <section className="flex flex-col">
                <Card className=" flex flex-wrap rounded-xl border-b-2 border-t-2 border-none border-gray-400 bg-transparent">
                    <CardHeader className="text-md px-0 font-syne font-semibold">
                        <CardTitle className="font-syne text-xl font-semibold text-white">
                            Featured Project:{' '}
                            <span className="italic text-mauve-600">
                                BlossomAI
                            </span>
                        </CardTitle>
                        <CardDescription className="font-inter italic">
                            Tech Stack Used:
                            <br /> Next.js 14, Typescript, OpenAI&apos;s GPT-3
                            API, Github API
                            <br />
                            {
                                <Link
                                    href="#"
                                    className="text-mauve-500 hover:underline"
                                >
                                    {' View the project here ->'}
                                </Link>
                            }
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=" space-y-2 px-0 font-inter font-normal text-black-900">
                        <p>
                            {`BlossomAI was made to simplify the #buildinpublic
                            movement by providing a comprehensive platform for
                            tracking your progress and sharing your journey with
                            the world whether you're building a startup or
                            working on a personal project. I made this project
                            to help me learn the App Router and how to interact
                            with OpenAI's GPT-3 API.`}
                        </p>
                    </CardContent>
                </Card>
                <div className="my-6 h-1 w-full rounded-lg bg-mauve-600"></div>
                <Projects projects={projects} />
            </section>


            <section className="">
                <BlogPosts />
            </section>

            <section></section>
        </>
    )
}
