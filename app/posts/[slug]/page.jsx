import { getPostBySlug } from '@/lib/mdx-utils'
import Link from 'next/link'
export default async function Page({ params }) {
    const { meta, content } = await getPostBySlug(params.slug)
    console.log(meta)
    return (
        <section className="w-full border-2">
            <div>
                <Link href="/">Back to home</Link>
            </div>
            <h1>{meta.title}</h1>
            <p>{meta.publishedDate}</p>
            {/* <article>{content}</article> */}
        </section>
    )
}
