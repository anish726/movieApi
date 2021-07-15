import React, { useState, useEffect } from 'react'
 import Movie from './components/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { movieApi } from './helper/MovieTask';
 const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";



const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  
   const [searchItem, setSearchItem] =useState('');
  const movies = useSelector( state =>state.movieList.results);
  console.log(movies,'movie get via useselector')
   const dispatch = useDispatch();

   useEffect(()=>{
     dispatch(movieApi())
    //  fetch(APIURL)
    //  .then((res)=> res.json())
    //  .then((data)=>{
    //    console.log(data)
    //    setMovies(data.results)
    //  });

   },[dispatch
    ]);
     
   
  return (
<>
<header >
  <h1 style={{color:'white'}}>MovieList</h1>
      </header>
     
    <div className="movie-container">
     
   {movies?.length > 0 && movies.map((movie)=>
     <Movie key={movie.id} movie={movie}/>)}
    </div>
    </>
  )
}

export default App;
