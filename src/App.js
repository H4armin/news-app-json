import './App.css';
import Navbar from './component/Navbar/Navbar';
import { HeroBanner } from './component/HeroBanner/HeroBanner';
import LandingPage from './component/LandingPage/LandingPage';
import { Routes, Route } from "react-router-dom";
import NewsCard from './component/NewsCard/NewsCard';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element = {<><HeroBanner /><LandingPage/></>}></Route>
        <Route path='/business' element = {<NewsCard category = "business"/>}></Route>
        <Route path='/entertainment' element = {<NewsCard category = "entertainment"/>}></Route>
        <Route path='/general' element = {<NewsCard category = "general"/>}></Route>
        <Route path='/health' element = {<NewsCard category = "health"/>}></Route>
        <Route path='/science' element = {<NewsCard category = "science"/>}></Route>
        <Route path='/sports' element = {<NewsCard category = "sports"/>}></Route>
        <Route path='/technology' element = {<NewsCard category = "technology"/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
