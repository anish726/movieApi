
 const initailState= {
    movieStorage:[],
    
}

const movieStorage = ( state = initailState, action)=>{
   console.log(action,'reducer ')
   switch(action.type){

       case 'ADD_MOVIE_SAGA':
           return{
               ...state,
               movieStorage:[...state.movieStorage,action.movie]
           }
           default:
               return state;
   }

} 
  
export default movieStorage;