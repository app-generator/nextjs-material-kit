import * as path from "path";
import * as fs from "fs";
import matter from "gray-matter";

export async function getAllArticles() {
  const articles = fs.readdirSync(path.join(process.cwd(), "blog"));

  return articles.reduce((allArticles, articleSlug) => {
    // get parsed data from markdown files in the "blog" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), "blog", articleSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
        published: data.published.toString(),
      },
      ...allArticles,
    ];
  }, []);
}
