import React, { Component } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NewsItem from './NewsItem'
import Spinner from './etc/Spinner'
import { Grid } from '@mui/material'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export class NewsCard extends Component {

    constructor() {
        super();
        this.state = {
            article : [],
            loading : false,
            page: 1
        }
    }
    
    async componentDidMount(){
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=popularity&apiKey=9f54de8953a84aa5ba09037569be979f&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({article:parsedData.articles , totalArticles:parsedData.totalResults , loading:false})
        console.log(parsedData.articles)
    }

    prevPageData = async () => {
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=popularity&apiKey=9f54de8953a84aa5ba09037569be979f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData.articles)

        this.setState({
            page : this.state.page - 1,
            article : parsedData.articles,
            loading : false
        })
    }

    nextPageData = async () => {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }else{
            let url = `https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=popularity&apiKey=9f54de8953a84aa5ba09037569be979f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData.articles)

            this.setState({
                page : this.state.page + 1,
                article : parsedData.articles,
                loading : false
            })
        }
    }

  render() {
    return (
      <>
        <Grid container sx = {{marginLeft:'1%'}}>
            {
                this.state.loading ? 
                <Stack direction={'row'}>
                    <Spinner />
                </Stack>
                : this.state.article.map((elm)=>{
                    return <Grid item md={3}  key={elm.url} mt = {3}>
                    <NewsItem title = {elm.title?elm.title.slice(0,30):""} description = {elm.description?elm.description.slice(0, 85):""} imgUrl = {elm.urlToImage?elm.urlToImage:"LOGO"} newsUrl = {elm.url}/>
                  </Grid>
                })
            }

        <Stack spacing={169} direction="row" sx={{marginLeft : '6px'}}>
            <Button variant="text" disabled = {this.state.page <= 1} onClick = {this.prevPageData} ><ArrowBackIosOutlinedIcon></ArrowBackIosOutlinedIcon>Prev</Button>
            <Button variant="text" onClick = {this.nextPageData} >Next<ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon></Button>
        </Stack>
        </Grid>
      </>
    );
  }
}

export default NewsCard