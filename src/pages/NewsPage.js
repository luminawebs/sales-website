// src/pages/NewsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, Grid, Box } from '@mui/material';

function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the mock API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setArticles(response.data))
      .catch(error => console.error("Error fetching articles:", error));
  }, []);

  return (
    <Container maxWidth="lg" sx={{padding: '2rem 0' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        News Articles
      </Typography>
      <Grid container spacing={4}>
        {articles.map(article => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" sx={{ minHeight: 120 }} >
                  {article.title}
                </Typography>
                <Typography variant="h6" component="h2">
                <Box
            component="img"
            src="https://via.placeholder.com/400"
            alt="Sales Site Hero"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
                </Typography>
                
                <Typography variant="body2" color="textSecondary">
                  {article.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NewsPage;