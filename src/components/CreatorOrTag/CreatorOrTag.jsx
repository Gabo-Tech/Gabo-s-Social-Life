import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Typography, CircularProgress, Grid, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Posts/Post/Post';
import { getPostsByCreator, getPostsBySearch } from '../../actions/PostAction';
import useStyles from './CreatorOrTagStyles';

export default function CreatorOrTag(){
  const user = JSON.parse(localStorage.getItem('profile'));
  const { name } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const location = useLocation();
  const classes = useStyles();
  useEffect(() => {
    if (location.pathname.startsWith('/tags')) {
      dispatch(getPostsBySearch({ tags: name }));
    } else {
      dispatch(getPostsByCreator(name));
    }
  }, []);
  if (!posts.length && !isLoading) return 'No posts';
  return (
    <div>
      <Typography className={classes.text} variant="h2">{!location.pathname.startsWith('/tags') ?  name : `#${name}`}</Typography>
      {!location.pathname.startsWith('/tags') ?  (<Typography className={classes.text} variant="h3">{user.result.email}</Typography>) : null}
      <Divider style={{ margin: '20px 0 50px 0' }} />
      {isLoading ? <CircularProgress /> : (
        <Grid container alignItems="stretch" spacing={3}>
          {posts?.map((post) => (
            <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};