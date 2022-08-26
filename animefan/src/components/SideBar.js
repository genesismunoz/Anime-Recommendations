import React from 'react'

function SideBar({topAnime, grecs}){

    return(
        <aside>
            <nav>
                <h3>Top Anime</h3>
                    {topAnime.map(anime => (
                        <a
                            href={anime.url}
                            target="_blank"
                            key={anime.mal_id}
                            rel ="noreferrer">
                                {anime.title}
                            </a>
                    ))}
              

                <h3>G Approved</h3>
                    {grecs.map(grec => (
                            <a
                                href={grec.data.url}
                                target="_blank"
                                key={grec.data.mal_id}
                                rel ="noreferrer">
                                    {grec.data.title}
                                </a>
                        ))}

                

            </nav>
        </aside>
    )
}

export default SideBar;