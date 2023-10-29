import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Component } from 'react';

export class NewsItem extends Component {
  render() {

    let {title , description , imgUrl , newsUrl} = this.props

    return (
        <Card sx={{ maxWidth: '85%', marginLeft: '5%' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image= {imgUrl}
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize : '20px' , fontWeight: 'bold'}} component="div">
            {title}...
          </Typography>
          <Typography sx={{fontSize : '15px'}} color="text.secondary">
            {description}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href= {newsUrl} target = '_blank'>Learn More</Button>
        </CardActions>
      </Card>
    )
  }
}

export default NewsItem
