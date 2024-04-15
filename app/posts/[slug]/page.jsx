import { getPostBySlug } from '@/lib/mdx-utils'
import Link from 'next/link'
import { useMDXComponents } from '@/mdx-component'
export default async function Page({ params }) {
    const { meta, content } = await getPostBySlug(params.slug)
    console.log(meta)
    return (
        <>
            <div className="flex flex-col gap-2 font-inter">
                <div className="flex gap-4">
                    <Link href="/">
                        <p className="text-sm text-black-700">{`Home`}</p>
                    </Link>
                    <Link href="/posts">
                        <p className="text-sm text-black-700">{`All posts`}</p>
                    </Link>
                </div>
                <div>
                    <h1 className="font-syne text-2xl font-semibold">
                        {meta.title}
                    </h1>
                    <p className="text-sm">Published @ {meta.date}</p>
                </div>
            </div>
            <section className="flex flex-col gap-3 font-inter">
                <div className="prose max-w-none text-white">
                  {content}
                  </div>
            </section>
        </>
    )
}
