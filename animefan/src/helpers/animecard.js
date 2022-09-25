import { useState } from 'react';
import '../styles/main.css'
import SideBar from '../components/SideBar';


function Animecard({anime, animecomponent}){
    // button for add to list

    const here = () =>{
        return console.log('here!')
    }
    return (
        
        <article className='animecard'>
            
            <a className='ac'
                // href ={anime.url}
                target = "_blank"
                rel="noreferrer">
                    <figure>
                        <img className='image' src={anime.images.jpg.large_image_url} alt="Anime Image"/>  
                    </figure>
                
                    <h3 className='atitle'>{anime.title}</h3>
                    <h5>#Score: {anime.score} / 10</h5>
                    <h5>#Rank: {anime.rank}</h5>
                    <h5>#Popularity: {anime.popularity}</h5>
                    <h5>Status: {anime.status}</h5>
                    <h5>Duration: {anime.duration}</h5>
                    <div className='overlay'>
                            <h4>{anime.title_japanese}</h4>
                            <h3>SYNOPSIS</h3>
                            <div className='synopsis' >
                                <p> <br></br>{anime.synopsis}</p>
                            </div>
                           
                    </div>
            </a>
          
        </article>
      
        
    )
}

export default Animecard;