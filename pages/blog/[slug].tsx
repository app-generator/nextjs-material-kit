import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import React from "react";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { Box, Typography } from "@material-ui/core";
import { serialize } from "next-mdx-remote/serialize";
import Button from "../../components/CustomButtons/Button";
import Parallax from "../../components/Parallax/Parallax";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/jss/nextjs-material-kit/pages/components";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export const PostPage = (props: { frontMatter; mdxSource }) => {
  const { frontMatter, mdxSource } = props;
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{frontMatter.title} | My blog</title>
      </Head>
      <Parallax image="/img/nextjs_header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>{frontMatter.title}</h1>
                <Typography variant="body2">{frontMatter.published}</Typography>
                <Typography variant="body2">
                  {frontMatter.description}
                </Typography>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Box
          sx={{
            p: 24,
          }}
        >
          <div>
            <MDXRemote
              {...mdxSource}
              components={{ Image, Typography, Button }}
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("blog"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("blog/", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
