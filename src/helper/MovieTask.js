

export const addMovie = (movie)=>{
   return{
 type:'ADD_MOVIE',
 movie
   }
};

export const movieApi =(movie)=> {

  return{
         type:'MOVIE_REQUEST',
         movie
  }
}
