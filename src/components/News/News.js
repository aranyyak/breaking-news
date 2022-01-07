import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './News.css';
import DetailsIcon from '@mui/icons-material/Details';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    btn: {
      background: 'linear-gradient(45deg, blue 30%, violet 90%)',
      border: '10px solid black',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      height: 40,
      padding: '0 30px',
      color: 'yellow'
    }
  });

const News = (props) => {
    const classes = useStyles();

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
                    <Button 
                    className={classes.btn}
                    href={url} 
                    size="small" 
                    variant="contained" 
                    startIcon={<DetailsIcon/>}
                    >
                    Details...
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default News;