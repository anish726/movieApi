import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addMovie} from '../helper/MovieTask'
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function Movie({movie}) {
    
const {title, poster_path, overview, vote_average} = movie;

  
    const dipsatch = useDispatch();

 
    return (<>
        <div className="movie">
            <img src ={IMGPATH + poster_path} alt={title}/>
          <div className="movie-info">
    <h3>{title}</h3>
    <span>{vote_average}</span>
  

          </div>
          {/* <div className="overview">
              <h2>Overview</h2>
    <h3>{overview}</h3>
          </div> */}
          {/* <button onClick={()=>dipsatch(addMovie(movie))}>Add</button> */}
          <input type="checkbox" style={{color:'white'}}  onClick={()=>dipsatch(addMovie(movie))} />
             <label style={{color:'white'}} >My watch List</label><br/>
            
        </div>
        
        </>
    )
}

export default Movie
