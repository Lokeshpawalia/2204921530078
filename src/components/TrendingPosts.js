import { useEffect, useState } from 'react';
import { fetchTrendingPosts } from '../Api';
import { Card, Typography, Grid } from '@mui/material';

export default function TrendingPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchTrendingPosts().then(res => setPosts(res.data));
  }, []);

  return (
    <Grid container spacing={2}>
      {posts.map(post => (
        <Grid item xs={12} key={post.id}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2">{post.content}</Typography>
            <Typography variant="caption">Comments: {post.commentCount}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
