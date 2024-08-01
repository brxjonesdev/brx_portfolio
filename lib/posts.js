import { compileMDX } from 'next-mdx-remote/rsc'
export async function getPostByName(name) {
    const res = await fetch(
        `https://raw.githubusercontent.com/brxjonesdev/brxblogposts/main/${name}`,
        {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-Github-Api-Version': '2022-11-28',
            },
        }
    )
    if (!res.ok) {
        throw new Error(res.statusText)
    }
    const rawMDX = await res.text()
    if (rawMDX === '404: Not Found') return undefined

    const { frontMatter, content } = await compileMDX({
        source: rawMDX,
    })

    const id = name.replace(/\.mdx$/, '')
    const blogPostObj = {
        meta: {
            id,
            title: frontMatter.title,
            date: frontMatter.date,
            author: frontMatter.author,
        },
    }
    return blogPostObj
}

export async function getPosts() {
    const res = await fetch(
        'https://api.github.com/repos/brxjonesdev/brxblogposts/git/trees/main?recursive=1',
        {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-Github-Api-Version': '2022-11-28',
            },
        }
    )
    if (!res.ok) {
        throw new Error(res.statusText)
    }
    const repoFiles = await res.json()
    const filesArray = repoFiles.tree
        .map((obj) => obj.path)
        .filter((path) => path.endsWith('.mdx'))
    const posts = []
    for (const file of filesArray) {
        const post = await getPostByName(file)
        if (post) {
            const { meta } = post
            posts.push(meta)
        }

        return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
    }
}
