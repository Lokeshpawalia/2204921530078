import { useEffect, useState } from 'react';
import { fetchTopUsers } from '../Api.js';
import { Card, Typography, Grid } from '@mui/material';

export default function TopUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTopUsers().then(res => setUsers(res.data));
  }, []);

  return (
    <Grid container spacing={2}>
      {users.map(user => (
        <Grid item xs={12} md={6} lg={4} key={user.id}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2">Posts: {user.postCount}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
