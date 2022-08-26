import { useState, useEffect } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
  const [grecs, SetGRecs] = useState([]);
	const [search, SetSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
			.then(res => res.json());

    SetTopAnime(temp.data.slice(0,5));
		console.log(temp.data)
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

  const GetGRecs = async()=> {

   const temp = await Promise.all([
    fetch(`https://api.jikan.moe/v4/anime/1254`).then(res=>res.json()), 
    fetch(`https://api.jikan.moe/v4/anime/232`).then(res=>res.json()),
    fetch(`https://api.jikan.moe/v4/anime/38680`).then(res=>res.json()),
    fetch(`https://api.jikan.moe/v4/anime/32729`).then(res=>res.json())
  ]);
  
    SetGRecs(temp);
    console.log(temp)
  }

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}

	useEffect(() => {
		GetTopAnime();

	}, []);

  useEffect(() => {

    GetGRecs();
	}, []);
	
	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<SideBar 
					topAnime={topAnime}
          grecs={grecs} />
				<Content
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={animeList} />
			</div>
		</div>
	);
}

export default App;