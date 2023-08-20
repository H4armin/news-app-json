import React, { Component } from 'react'
import { Box, color} from '@mui/system';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Typography } from '@mui/material';
import HeroBannerImage from '../img/earth_moon_transit_121207_1280x720.jpg';

var date = new Date();
var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
var date_time = current_date+" "+current_time;	

export class HeroBanner extends Component {


    constructor() {
        super();
        this.state = {
            article : [],
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines/sources?country=in&apiKey=878cac41599a4cf18545f9494aabdd24";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({article:parsedData.sources[0]})
        console.log(parsedData.sources)
    }

  render() {
    return (
      <>
<Box sx={{ color : '#FFFFFF'}} position="relative">
<img src={HeroBannerImage} alt="hero-banner"  style={{width:'100%' , height:'2%' ,marginTop : '-1%'}}/>

    <Box sx = {{marginTop : '-20%' , marginLeft : '3%'}}>
    <Typography color="#FFFFFF" fontWeight="600" fontSize="16px"> <span style={{ padding:'5px', backgroundColor : '#ff4336'}}>{this.state.article.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sam Cooper&nbsp;&nbsp;&diams; &nbsp;&nbsp;{date_time}</Typography>
    
    
    <Grid container>
      <Grid xs={5}>
      <Typography fontWeight={700} sx={{ fontSize: '25px'}} mb="23px" mt="30px">
      {this.state.article.description}
    </Typography>
      </Grid>
    </Grid>
    <Typography fontSize="17px" fontFamily="sans-serif" color='black' lineHeight="35px">
          <a style={{color:'#fff'}} href={this.state.article.url} target="blank">Read More About This News...</a>
    </Typography>
</Box>
  
  
</Box>
</>
    );
  }
}

export default HeroBanner