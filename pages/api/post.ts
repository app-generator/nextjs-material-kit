import {getAllArticles} from "../../utils/markdown";

export default async function handler(req, res) {
  const {page} = req.query;

  const articles = await getAllArticles(page);

  articles
      .map((post) => post)
      .sort((a, b) => {
        if (a.published > b.published) return 1;
        if (a.published < b.published) return -1;

        return 0;
      });

  const posts = articles.map((post) => {
    return {
      ...post,
      published: new Date(post.published).toDateString(),
    };
  });

  res.status(200).json(posts);
}
