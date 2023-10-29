import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Component } from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';


const commonStyles = {
    bgcolor: 'background.paper',
    m: 2,
    borderColor: 'text.primary',
    borderTop : '3px solid',
    marginTop : '-3%',
    marginRight : '19%',
    width: '100rem',
    height: '5rem',
  };


export class LandingNewsItem extends Component {
  render() {

    let {category, title , description , imgUrl , newsUrl} = this.props    

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ ...commonStyles }} />
        </Box>
        <Grid container spacing={2}>
            <Grid xs={5}>
                <Typography sx={{fontSize : 50 , marginLeft:'15%'}} component="div">
                        {category} <br/>
                    <Button size="small">See All<ArrowOutwardIcon sx={{fontSize:'small'}}/></Button>
                </Typography>
            </Grid>
            <Grid xs={3} style = {{marginLeft:'-10%'}}>
                <Card sx={{ maxWidth: '85%' , marginLeft : '15%' }}>
                    <CardContent>
                    
                    <Typography sx={{fontSize : 20 }} component="div">
                        {title}...
                    </Typography>
                    <Typography sx={{ mb: 1.5 , marginTop : '20px' , marginBottom :'0px'}} color="text.secondary">
                        {description}...
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small"><a style={{color:'black'}} href= {newsUrl}>Read More</a></Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid xs={3}>
                <Card sx={{ maxWidth: '100%', marginLeft: '5%' , maxHeight:'100%' }}>
                    <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image= {imgUrl}
                    />
                </Card>
            </Grid>
        </Grid>
        </Box>
    )
  }
}

export default LandingNewsItem
