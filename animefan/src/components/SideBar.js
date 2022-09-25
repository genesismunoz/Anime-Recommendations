import React from 'react'
import '../styles/main.css'


function SideBar({topAnime, myanimelist}){
    console.log(topAnime)
    return(
        <aside className='sidebar'>
            <nav className='nav'>
                <h3 className='tops'>Top Anime</h3>
                    {topAnime.map(anime => (
                        <a 
                            className='listops'
                            href={anime.url}
                            target="_blank"
                            key={anime.mal_id}
                            rel ="noreferrer">
                                {anime.title}
                            </a>
                    ))}
              

                <h3 className='grecs'>G Approved</h3>
                 
                     <a
                        href="https://myanimelist.net/anime/1254/Saint_Seiya"
                        key="1254"
                        target="_blank"
                        rel ="noreferrer">
                        Saint Seiya
                    </a>
                    <a
                        href="https://myanimelist.net/anime/232/Cardcaptor_Sakura"
                        key="232"
                        target="_blank"
                        rel ="noreferrer">
                        Cardcaptor Sakura
                    </a>
                    <a
                        href="https://myanimelist.net/anime/38680/Fruits_Basket_1st_Season"
                        key="38680"
                        target="_blank"
                        rel ="noreferrer">
                        Fruits Basket 1st Season
                    </a>
                    <a
                        href="https://myanimelist.net/anime/32729/Orange"
                        key="32729"
                        target="_blank"
                        rel ="noreferrer">
                        Orange
                    </a>

            </nav>
        </aside>
      
    )
}

export default SideBar;