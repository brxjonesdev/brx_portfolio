import fs from 'fs'
import matter from 'gray-matter'
const getPostsMetadata = () => {
    const posts = fs.readdirSync("brx_posts/")
    const MDFiles = posts.filter(post => post.endsWith('.md'))
    
    const blogPosts = MDFiles.map(file => {
        const fileContents = fs.readFileSync(`brx_posts/${file}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            description: matterResult.data.description,
            slug: file.replace(/\.md$/, '')
        }
       

    })
    return blogPosts
}

export default getPostsMetadata