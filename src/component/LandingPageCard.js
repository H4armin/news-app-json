import React, { Component } from 'react'
import { Grid } from '@mui/material'
import LandingPageItem from './LandingPageItem';


export class NewsCard extends Component {

    constructor() {
        super();
        this.state = {
            article : [],
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=technology%20AND%20sports&sortBy=relevancy&apiKey=9f54de8953a84aa5ba09037569be979f&page=1&pageSize=4";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({article:parsedData.articles , totalArticles:parsedData.totalResults , loading:false})
        console.log(parsedData.articles)
    }
  

  render() {
    return (
      <>
        <Grid container sx = {{marginTop:'6%'}}>
            {
               this.state.article.map((elm)=>{
                console.log(elm.source.name);
                    return <Grid item md={2} sx = {{marginLeft : '5%'}} key={elm.url} mt = {3}>
                    <LandingPageItem name = {elm.source.name} title = {elm.title.slice(0,55)} description = {elm.description.slice(0,105)} newsUrl = {elm.url}/>
                  </Grid>
                })
            }
        </Grid>
      </>
    );
  }
}

export default NewsCard