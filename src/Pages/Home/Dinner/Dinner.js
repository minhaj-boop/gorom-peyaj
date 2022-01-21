import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Dinner.css';

const Dinner = ({ dinner }) => {
    const { id, title, highlights, price, img } = dinner;
    return (
        <>
            <Grid className="gp-text-decoration" as={Link} to={`/checkout/${id}`} item xs={2} sm={4} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            width="100%"
                            image={img}
                            alt=""
                        />
                        <Box
                            sx={{
                                mx: 'auto',
                                textAlign: 'center',
                            }}
                        >
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {highlights}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    ${price}
                                </Typography>
                            </CardContent>
                        </Box>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
};

export default Dinner;