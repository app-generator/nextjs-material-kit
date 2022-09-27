import React from "react";
import { getAllArticles } from "../utils/markdown";
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/jss/nextjs-material-kit/pages/components";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Button from "../components/CustomButtons/Button";
import Footer from "../components/Footer/Footer";
import classNames from "classnames";

const useStyles = makeStyles(styles);

type PostType = {
  title: string;
  description: string;
  published: string;
  image_url: string;
};

export default function BlogPage(props: { posts: PostType[] }) {
  const classes = useStyles();

  const { posts } = props;
  return (
    <div>
      <Header
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax image="/img/nextjs_header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>NextJS Blog.</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridItem xs={4}>
          <div>
            {posts.map((post, index) => (
              <Card key={index} sx={{ maxWidth: 4 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.image_url}
                    alt={post.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2">
                      Published on {post.published}
                    </Typography>
                    <Typography variant="overline" component="div">
                      {post.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="md" color="primary">
                    Read now
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </GridItem>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllArticles();
  return {
    props: {
      posts,
    },
  };
};
