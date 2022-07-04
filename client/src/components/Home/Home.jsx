import React, { useEffect, useState } from 'react'
//REDUX HOOK IMPORTED//
import { useDispatch } from 'react-redux'
//REDUX HOOK IMPORTED//
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { getPosts } from '../../actions/PostAction'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import Pagination from '../Pagination/Pagination';

export default function Home() {
    const [currentId, setCurrentId] = useState(null);  
    const classes = useStyles();
    //DEFINE REDUX DISPATCH
    const dispatch = useDispatch();//DISPATCH ON useEffect
    //DEFINE REDUX DISPATCH
    useEffect(()=> {
      dispatch(getPosts());
    }, [currentId, dispatch]);
  return (
    <>
       <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              {(!searchQuery && !tags.length) && (
                <Paper className={classes.pagination} elevation={6}>
                  <Pagination page={page} />
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grow> 
    </>
  )
}
