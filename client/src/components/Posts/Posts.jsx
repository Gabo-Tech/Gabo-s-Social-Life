import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './PostsStyles';

export default function Posts({ setCurrentId }){
  const posts = useSelector((state) => state.posts);
  console.log("This is posts type: ",typeof posts, "This is posts: ", posts);
  const classes = useStyles();

  return (
    posts ==0 || !posts || posts == undefined ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};