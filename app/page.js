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
import Projects from '../components/brx/projects'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'


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
                <Card className="flex flex-wrap rounded-xl border-b-2 border-t-2 border-none border-gray-400 bg-transparent">
                    <CardHeader className="text-md px-0 font-syne font-semibold">
                        <CardTitle className="font-syne text-xl font-semibold text-white">
                            Featured Project:{' '}
                            <span className="italic text-mauve-600">
                                Beatmap
                            </span>
                        </CardTitle>
                        <CardDescription className="font-inter italic">
                            Tech Stack Used:
                            <br /> Next.js, TypeScript, Genius API, Dagre, React
                            Flow
                            <br />
                            {
                                <Link
                                    href="https://beatmap-brxjonesdev.netlify.app/"
                                    className="text-mauve-500 hover:underline"
                                >
                                    {' View the project here ->'}
                                </Link>
                            }
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 px-0 font-inter font-normal text-black-900">
                        <p>
                            {`Beatmap visualizes the connections between songs, artists, producers, and writers, helping users explore the creative networks behind the music they love.`}
                        </p>
                        <p>
                            {`Building Beatmap enhanced my skills in graph visualization with React Flow and Dagre, and allowed me to integrate the Genius API to provide rich song metadata.`}
                        </p>
                        <p>
                            {`Beatmap celebrates the artistry and collaboration in music, making it easier for fans to discover the stories and people behind their favorite tracks.`}
                        </p>
                    </CardContent>
                </Card>

                <div className="my-6 h-1 w-full rounded-lg bg-mauve-600"></div>
                <h2 className='font-syne text-xl font-semibold text-white mb-6'>My other works.</h2>
                <Projects projects={projects} />
            </section>

            {/* <section className="">
                <BlogPosts />
            </section> */}
            <div className="my-6 h-1 w-full rounded-lg bg-mauve-600"></div>
            <section className="flex flex-col gap-3">
                <Card className="bg-white/5 border-none font-syne text-white">
                    <CardHeader>
                        <CardTitle>You're probably thinking....</CardTitle>
                        <CardDescription className="font-inter text-purple-300">This guy is pretty cool! I want his resume! 🥰 i'm already ahead of you 😎 </CardDescription>
                
                    </CardHeader>
                    <CardFooter>
                        <a href='/braxtonjonesresume.pdf' download className='w-full' >
                        <Button className="w-full bg-white text-black-100 hover:bg-purple-400">
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </Button>
                        </a>
                    </CardFooter>
                </Card>
            </section>
        </>
    )
}
