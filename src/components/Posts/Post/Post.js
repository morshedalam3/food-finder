import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import useStyles from "./styles";

const Post = ({ food }) => {
  // const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const { image_url, title } = food.recipes;
  console.log(image_url);

  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia
        className={classes.media}
        image={
          image_url ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{title}</Typography>
      </div>
      {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div className={classes.overlay2} name="edit">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(post._id);
            }}
            style={{ color: 'white' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        )} */}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {/* {post.tags.map((tag) => `#${tag} `)} */}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {title}
      </Typography>
      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          {post.message.split(" ").splice(0, 20).join(" ")}...
        </Typography> */}
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )} */}
      </CardActions>
    </Card>
  );
};

export default Post;
