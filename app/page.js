import Contacts from '@/components/brx/contacts'
import AboutMe from '@/components/brx/aboutme'
import SillyLittleTrickHEhe from '@/components/brx/gimmick'
import Logo from '@/components/brx/logo'
import Project from '@/components/brx/project'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx-utils'
import Post from '@/components/brx/post'
export default async function Home() {
    const posts = await getAllPosts()
    console.log(posts)
    return (
        <>
            <section className="flex flex-wrap items-center justify-between gap-3">
                <Logo />
                <Contacts />
            </section>

            <section className="flex flex-col gap-3">
                <AboutMe />
            </section>
            <section className="flex flex-col gap-3">
                <h1 className="text-md font-syne font-semibold">
                    {`Projects I've worked on:`}
                </h1>
                <div className="flex flex-col gap-3">
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
                </div>
                <div className="w-full text-right">
                    <Link href="/projects">
                        <p className="font-inter text-sm text-white-500 underline-offset-2 hover:underline">
                            {` View all projects. ->`}
                        </p>
                    </Link>
                </div>
            </section>

            <section className="flex flex-col gap-3">
                <h1 className="text-md font-syne font-semibold">
                    Recent Posts:
                </h1>
                <div className="flex flex-col gap-3">
                    {posts.map((post) => (
                        <Post key={post.slug} post={post} />
                    ))}
                </div>
                <div className="w-full text-right">
                    <Link href="/posts">
                        <p className="font-inter text-sm text-white-500 underline-offset-2 hover:underline">
                            {` View all posts. ->`}
                        </p>
                    </Link>
                </div>
            </section>

            <section></section>
        </>
    )
}
