import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Breakfast = ({ id, title, highlights, description, price, img }) => {
    return (
        <>
            <Grid item xs={2} sm={4} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
};

export default Breakfast;