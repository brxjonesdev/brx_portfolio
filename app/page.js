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
import BlogPosts from '../components/brx/blogpost'
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
                <Card className=" rounded-xl border-b-2 border-t-2 border-none border-gray-400 bg-transparent">
                    {/* Featured Project BlossomaI */}
                    <CardHeader className="text-md px-0 font-syne font-semibold">
                        <CardTitle className="font-syne text-xl font-semibold text-white">
                            Featured Project:{' '}
                            <span className="italic text-mauve-600">
                                BlossomAI
                            </span>
                        </CardTitle>
                        <CardDescription className="font-inter italic">
                            Tech Stack Used:
                            <br /> Next.js 14, Typescript, OpenAI's GPT-3 API,
                            Github API
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
                            BlossomAI was made to simplify the #buildinpublic
                            movement by providing a comprehensive platform for
                            tracking your progress and sharing your journey with
                            the world whether you're building a startup or
                            working on a personal project. I made this project
                            to help me learn the App Router and how to interact
                            with OpenAI's GPT-3 API.
                        </p>
                    </CardContent>
                </Card>
                <div className="w-full text-right">
                    <Dialog>
                        <DialogTrigger className="font-inter text-sm text-teal-300 underline-offset-2 hover:underline">{` View all projects. ->`}</DialogTrigger>
                        <DialogContent className="max-w-4xl rounded-xl border-none bg-black-100 text-black-300">
                            <DialogHeader>
                                <DialogTitle
                                    className=" text-left font-syne text-2xl font-extrabold text-mauve-500
                                "
                                >
                                    All Projects
                                </DialogTitle>
                                <DialogDescription className="text-left font-inter">
                                    All of my work in one place.
                                </DialogDescription>
                                <>
                                    {/* pass projects objects to here */}
                                    <Projects projects={projects} />
                                </>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>
            <div className="my-2 h-1 w-full rounded-lg bg-mauve-600"></div>

            <section className="flex flex-col gap-3">
                <BlogPosts />
             
            </section>

            <section></section>
        </>
    )
}
