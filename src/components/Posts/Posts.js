import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ food }) => {
  const classes = useStyles();

  // if (!posts.length && !isLoading) return 'No posts';

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {food?.map((food) => (
        <Grid key={food.recipes.recipe_id} item xs={12} sm={12} md={6} lg={3}>
          <Post food={food} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
