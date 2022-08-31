import React from 'react';
import Animecard from '../helpers/Animecard';
import Add from '../helpers/Add';



function Content(sqrs){
    return (
        <main className='main'>
            <div className='main-head'>
                <form className='searchbox' onSubmit={sqrs.HandleSearch}>
                    <input 
                        type="search" 
                        placeholder='Search for an anime...'
                        required
                        value={sqrs.search}
                        onChange ={e => sqrs.SetSearch(e.target.value)}/>
                </form>
            </div>
            <div className='animelist'>
                {sqrs.animeList.map(anime => (
                    <Animecard
                        anime={anime}
                        key={anime.mal_id}      
                        animecomponent={Add}
                    />
                 
                ))}
            </div>
        </main>
    )
}

export default Content