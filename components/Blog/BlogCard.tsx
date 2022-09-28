import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import Button from "../CustomButtons/Button";
import React from "react";

type PostType = {
  title: string;
  description: string;
  published: string;
  image_url: string;
  slug: string;
};

export default function BlogCard(props: { post: PostType }) {
  const { post } = props;
  return (
    <Card sx={{ maxWidth: 4, margin: 2 }} margin={4}>
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
          <Typography variant="body2">Published on {post.published}</Typography>
          <Typography variant="overline" component="div">
            {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={"/blog/" + post.slug} passHref>
          <Button size="md" color="primary">
            Read now
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
