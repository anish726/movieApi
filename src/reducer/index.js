
 const initailState= {
     movieList:[],
     loading:false
 }

const reducer = ( state = initailState, action)=>{
    console.log(action,'reducer ')
    switch(action.type){

     case 'MOVIE_REQUEST':
         return{
             ...state,  
             loading:true
         }
         case 'MOVIE_SUCCESS':

            return{
                ...state,
                movieList: action.movie,
                loading:false
            }
            default:
                return state;
    }

} 
   
export default reducer;