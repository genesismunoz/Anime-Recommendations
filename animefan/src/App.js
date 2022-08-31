import { useState, useEffect } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import './styles/main.css';


function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
			.then(res => res.json());

    SetTopAnime(temp.data.slice(0,5));
	
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}


	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw&limit=10`)
			.then(res => res.json());

   
		SetAnimeList(temp.data);
	}

	useEffect(() => {
		GetTopAnime();

	}, []);

	
	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<SideBar 
					topAnime={topAnime}
          />
				<Content
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={animeList}
          />
			</div>
		</div>
	);
}

export default App;
