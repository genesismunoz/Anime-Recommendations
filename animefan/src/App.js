import {useState, useEffect} from 'react';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import Content from './components/Content';

function App(){
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");
  const [gRecs, SetGRecs] = useState([]);

  const GetTopAnime = async()=>{
      const temp = await fetch(`https://api.jikan.moe/v4/top/anime/tv/bypopularity`)
        .then(res => res.json());

        SetTopAnime(temp.top.slice(0,5));
  }

  const GetGRecs = async() =>{
    const fb = await fetch(`https://api.jikan.moe/v4/anime/38680/Fruits_Basket_1st_Season`)
      .then(res => res.json());
      SetGRecs(fb);
  }

  const GetAnimeList = async(query)=>{
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=15`)
      .then(res => res.json());

      SetAnimeList(temp.results);
  }


  const CompleteSearch = e =>{
    e.preventDefault();
    GetAnimeList(search);
  }

  useEffect(() =>{
    GetTopAnime();
    GetGRecs();
  } ,[]);

  return (
      <div className='App'>
        <Header />
        <div className='content-wrap'>
          <Sidebar
            topAnime={topAnime}
            gRecs={gRecs}
            />
          <Content
            CompleteSearch = {CompleteSearch}
            search={search}
            SetSearch={SetSearch}
            animeList={animeList}/>
        </div>
      </div>
  )
  
}
export default App;