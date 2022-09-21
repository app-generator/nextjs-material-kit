import * as path from 'path'
import * as fs from 'fs';
import * as matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'

const articlesPath = path.join(process.cwd(), 'blog')

export async function getSlug() {
    const paths = sync(`${articlesPath}/*.md`)

    return paths.map((path) => {
        // holds the paths to the directory of the article
        const pathContent = path.split('/')
        const fileName = pathContent[pathContent.length - 1]
        const [slug, _extension] = fileName.split('.')

        return slug
    })
}

export async function getArticleFromSlug(slug) {
    const articleDir = path.join(articlesPath, `${slug}.md`)
    const source = fs.readFileSync(articleDir)
    const { content, data } = matter(source)

    return {
        content,
        frontmatter: {
            slug,
            excerpt: data.excerpt,
            title: data.title,
            publishedAt: data.publishedAt,
            readingTime: readingTime(source).text,
            ...data,
        },
    }
}

export async function getAllArticles() {
    const articles = fs.readdirSync(path.join(process.cwd(), 'blog/articles'))

    return articles.reduce((allArticles, articleSlug) => {
        // get parsed data from markdown files in the "blog" dir
        const source = fs.readFileSync(
            path.join(process.cwd(), 'blog', articleSlug),
            'utf-8'
        )
        const { data } = matter(source)

        return [
            {
                ...data,
                slug: articleSlug.replace('.md', ''),
                readingTime: readingTime(source).text,
            },
            ...allArticles,
        ]
    }, [])
}


