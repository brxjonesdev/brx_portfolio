import { getPostBySlug } from '@/lib/mdx-utils'
import Link from 'next/link'
import { useMDXComponents } from '@/mdx-component'
import { Separator } from '@/components/ui/separator'

export default async function Page({ params }) {
    const { meta, content } = await getPostBySlug(params.slug)
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
                    <p className="text-sm">Published // {meta.date}</p>
                </div>
            </div>
            <Separator />
            <section className="flex-colfont-inter flex">
                <div
                    className="
                prose-heading
                prose
                text-white prose-headings:font-syne prose-headings:text-2xl prose-headings:text-black-800
                                prose-a:text-mauve-500 prose-a:underline prose-a:hover:text-mauve-600
                                prose-a:font-inter prose-a:text-sm
                "
                >
                    {content}
                </div>
            </section>
        </>
    )
}
