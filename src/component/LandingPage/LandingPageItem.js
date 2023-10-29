import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Component } from 'react';
import { Box } from '@mui/system';
import '../../App.css';

export class NewsItem extends Component {
  render() {

    let {name , description , title , newsUrl} = this.props


    return (

            <Card sx={{ minWidth: 320 , minHeight: 320 , marginLeft : '2%' }}>
                <CardContent>
                <Typography sx={{ fontSize: 16 , fontWeight: 500 , marginBottom : '25px'}} color="text.secondary" gutterBottom>
                    <span style={{ padding:'5px',  backgroundColor: '#292929', color:'#fff'}}>{name}</span>
                </Typography>
                <Typography sx={{fontSize : 20}} component="div">
                    {title}...
                </Typography>
                <Typography sx={{ mb: 1.5 , marginTop : '20px' , marginBottom :'0px'}} color="text.secondary">
                    {description}...
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small"><a style={{color:'black'}} target = "blank" href= {newsUrl}>Read More</a></Button>
                </CardActions>
            </Card>
    )
  }
}

export default NewsItem
