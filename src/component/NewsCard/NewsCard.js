import React, { Component } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NewsItem from './NewsItem'
import Spinner from '../etc/Spinner'
import { Grid } from '@mui/material'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import businessNews from '../NewsCard/BuisnessNews.json'
import entertainment from '../NewsCard/EntertainmentNews.json'
import general from '../NewsCard/GeneralNews.json'
import health from './HealthNews.json'
import science from './scienceNews.json'
import sports from './sportsNews.json'
import technology from './TechnologyNews.json'

const dataSources = {
    business: businessNews,
    entertainment: entertainment,
    general: general,
    health: health,
    science: science,
    sports: sports,
    technology: technology,
};

export class NewsCard extends Component {

    constructor() {
        super();
        this.state = {
            article: [],
            loading: false,
            currentPage: 1, // Current page
            itemsPerPage: 10, // Number of items per page
        };
    }

    loadData = () => {
        const { currentPage, itemsPerPage } = this.state;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const parsedData = dataSources[this.props.category];

        if (parsedData) {
            this.setState({
                article: parsedData.articles.slice(startIndex, endIndex),
                totalArticles: parsedData.totalResults,
                loading: false,
            });
        } else {
            console.error("Invalid category");
        }
    }

    async componentDidMount() {
        this.loadData();
    }

    prevPageData = async () => {
    //     let url = `https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=popularity&apiKey=878cac41599a4cf18545f9494aabdd24&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData.articles)

    //     this.setState({
    //         page : this.state.page - 1,
    //         article : parsedData.articles,
    //         loading : false
    //     })
        if (this.state.currentPage > 1) {
            this.setState(
                { currentPage: this.state.currentPage - 1, loading: true },
                this.loadData
            );
        }
    }

    nextPageData = async () => {
        const { currentPage, totalArticles, itemsPerPage } = this.state;
    const maxPage = Math.ceil(totalArticles / itemsPerPage);
    
    if (currentPage < maxPage) {
        this.setState(
            { currentPage: currentPage + 1, loading: true },
            this.loadData
        );
    }
    }

    render() {
        return (
            <>
                <Grid container sx={{ marginLeft: '1%' }}>
                    {
                        this.state.loading ?
                            <Stack direction={'row'}>
                                <Spinner />
                            </Stack>
                            : this.state.article.map((elm) => {
                                return <Grid item md={3} key={elm.url} mt={3}>
                                    <NewsItem title={elm.title ? elm.title.slice(0, 30) : ""} description={elm.description ? elm.description.slice(0, 85) : ""} imgUrl={elm.urlToImage ? elm.urlToImage : "LOGO"} newsUrl={elm.url} />
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