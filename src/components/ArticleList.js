// ArticleList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setArticles } from '../actions';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import OrderDropdown from './OrderDropdown';

// Imagen por defecto si no se proporciona una imagen para el artículo
const defaultImage = 'https://via.placeholder.com/150';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  const fetchArticles = async (sortBy = 'date', sortOrder = 'asc') => {
    try {
      const url = `http://localhost:4000/news?sortBy=${sortBy}&sortOrder=${sortOrder}`;
  
      const response = await fetch(url);
      const data = await response.json();
  
      dispatch(setArticles(data));
    } catch (error) {
      console.error('Error al cargar artículos:', error);
    }
  };  

  useEffect(() => {
    fetchArticles();
  }, [dispatch]);

  return (
    <Container>
      <OrderDropdown onOrderChange={fetchArticles} />
      <Grid container spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} key={article.id +' '+ i}>
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
