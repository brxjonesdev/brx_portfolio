import fs from 'fs';
import matter from 'gray-matter';

const getPostsMetadata = () => {
  try {
    const posts = fs.readdirSync('brx_posts/');
    const MDFiles = posts.filter(post => post.endsWith('.md'));

    const blogPosts = MDFiles.map(file => {
      try {
        const fileContents = fs.readFileSync(`brx_posts/${file}`, 'utf8');
        const matterResult = matter(fileContents);
        return {
          title: matterResult.data.title,
          date: matterResult.data.date,
          description: matterResult.data.description,
          slug: file.replace(/\.md$/, '')
        };
      } catch (error) {
        console.error(`Error reading or parsing file ${file}:`, error);
        return null; // Return null for files that cannot be processed
      }
    }).filter(post => post !== null); // Filter out any null entries

    return blogPosts;
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return []; // Return an empty array if the directory cannot be read
  }
};

export default getPostsMetadata;
