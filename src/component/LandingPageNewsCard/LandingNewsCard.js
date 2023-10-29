import React, { Component } from 'react'
import { Grid } from '@mui/material'
import LandingNewsItem from './LandingNewsItem';
import source from './LandingNewsCard.json';

export class LandingPageCard extends Component {

    constructor() {
        super();
        this.state = {
            article : [],
            page: 1
        }
    }

    async componentDidMount(){
        // let url = `https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=relevancy&apiKey=878cac41599a4cf18545f9494aabdd24&pageSize=1`;
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(`paerdfsdfsdf${data}`)

        // this.setState({article:parsedData.articles , totalArticles:parsedData.totalResults})

        // From JSON

        let parsedData = source.articles;
        let temp = [];
        if(this.props.category){
          let category = this.props.category;
          for (let i = 0; i < parsedData.length; i++) {
            if(parsedData[i].category === category){
              temp.push(parsedData[i])
            }
          }
          this.setState({article:temp , totalArticles:temp})
        }
    }

  render() {
    return (
      <>
        <Grid container sx = {{marginTop:'6%'}}>
            {
               this.state.article.map((elm)=>{
                console.log(`elemtndfsfdsdfsdfsdfsd${elm}`);
                    return <Grid item md={20} sx = {{marginLeft : '5%'}} key={elm.url} mt = {3}>
                    <LandingNewsItem category = {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}  name = {elm.source.name} title = {elm.title.slice(0,55)} description = {elm.description.slice(0,105)} newsUrl = {elm.url} imgUrl= {elm.urlToImage}/>
                  </Grid>
                })
            }
        </Grid>
      </>
    );
  }
}

export default LandingPageCard