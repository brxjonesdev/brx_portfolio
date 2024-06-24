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
                    {`Some of my projects:`}
                </h1>
                <div className="flex flex-col gap-3">
                    <Project
                        name="BlossomAI"
                        description="BlossomAI simplifies the #buildinpublic movement by providing a comprehensive platform for tracking your progress and sharing your journey with the world whether you're building a startup or working on a personal project."
                        link="https://blossom-ai-rose.vercel.app/"
                        techStack={[
                            'Next.js',
                            'Typescript',
                            'TailwindCSS',
                            'Supabase',
                            'OpenAI',
                            'Github API',
                        ]}
                    />
                    <Project
                        name={'Aspire'}
                        description="Aspire is a versatile platform designed for users to create, manage, and share their wishlists with ease and convenience."
                        link="https://aspire-brx.netlify.app/"
                        techStack={[
                            'Next.js',
                            'Typescript',
                            'TailwindCSS',
                            'Supabase',
                            'Rust'
                        ]}
                    />
                     <Project
                    name="Audiophile"
                    description="Audiophile is a sleek and modern e-commerce platform dedicated to selling high-end audio equipment."
                    link="https://audiophile-brx.netlify.app/"
                    techStack={[
                        'React',
                        'Node/Express',
                        'Zustand',
                        'Sanity.io',
                    ]}
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
                    {posts
                    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
                    .map((post) => (
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
