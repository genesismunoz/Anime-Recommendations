import React from 'react';
import animecard from '../helpers/animecard';
function Content(sqrs){
    return (
        <main>
            <div className='main-head'>
                <form className='searchbox' onSubmit={sqrs.HandleSearch}>
                    <input 
                        type="search" 
                        placeholder='Search for an anime'
                        required
                        value={sqrs.search}
                        onChange ={e => sqrs.SetSearch(e.target.value)}/>
                </form>
            </div>

            <div className='anime-list'>
                {sqrs.animeList.map(anime => (
                    <animecard
                        anime={anime}
                        key={anime.mal_id}/>
                ))}
            </div>
        </main>
    )
}

export default Content