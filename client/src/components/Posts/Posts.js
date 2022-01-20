import React from 'react';
import Post from './Post/Post.js'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress,LinearProgress } from '@material-ui/core';
import useStyles from './styles'



const Posts = ({ setCurrentId }) =>{
    const { posts , isLoading} = useSelector((state) => state.posts);
    const classes = useStyles();

    if(!posts.length && !isLoading) return 'No posts';

    return (
        isLoading?<LinearProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3} >
          { posts.map((post) =>(
              <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
              <Post post={post} setCurrentId={setCurrentId} />              
              </Grid>

          ))}
        </Grid>
        )
    

    );
}

export default Posts;