import {getAllArticles} from "../utils/markdown";

export async function getStaticProps() {
    const articles = await getAllArticles()

    articles
        .map((article) => article.data)
        .sort((a, b) => {
            if (a.data.publishedAt > b.data.publishedAt) return 1
            if (a.data.publishedAt < b.data.publishedAt) return -1

            return 0
        })

    return {
        props: {
            posts: articles.reverse(),
        },
    }
}
