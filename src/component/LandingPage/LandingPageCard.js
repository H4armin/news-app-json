import React, { Component } from 'react'
import { Grid } from '@mui/material'
import LandingPageItem from './LandingPageItem';
import source from '../LandingPage/LandingPageCard.json'

export class NewsCard extends Component {

    constructor() {
        super();
        this.state = {
            article : [],
            page: 1
        }
    }

    async componentDidMount(){

      // From API

        // let url = "https://newsapi.org/v2/everything?q=technology%20AND%20sports&sortBy=relevancy&apiKey=878cac41599a4cf18545f9494aabdd24&page=1&pageSize=4";
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // this.setState({article:parsedData.articles , totalArticles:parsedData.totalResults , loading:false})
        // console.log(parsedData.articles)

        // From JSON

        let parsedData = source
        this.setState({article:parsedData.articles , totalArticles:parsedData.totalResults , loading:false})
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