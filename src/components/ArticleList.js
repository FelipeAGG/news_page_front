// ArticleList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setArticles } from '../actions';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

// Imagen por defecto si no se proporciona una imagen para el artículo
const defaultImage = 'https://via.placeholder.com/150';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:4000/news');
        const data = await response.json();

        dispatch(setArticles(data));
      } catch (error) {
        console.error('Error al cargar artículos:', error);
      }
    };
    fetchArticles();
  }, [dispatch]);

  return (
    <Container>
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={article.img || defaultImage}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Author: {article.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {new Date(article.date.$date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  type: {article.type}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticleList;
