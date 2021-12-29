import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './News.css';

const News = (props) => {
    const { title, description, urlToImage, url} = props.article;
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={urlToImage}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={url}>
                    <Button size="small" variant="contained" >
                    Details...
                    </Button>
                    </a>
                </CardActions>
            </Card>
        </>
    );
};

export default News;